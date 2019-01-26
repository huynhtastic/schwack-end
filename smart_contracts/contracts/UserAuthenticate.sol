pragma solidity >=0.4.22 <0.6.0;
import "./Ownable.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract TableFactory is Ownable {

    event NewTable(uint creationId, string name, string database);

    struct Table {
      uint uniqueId;
      uint tableId;
      string name;
      string database;
    }

    Table[] public tables;

    mapping (uint => address) public tableToOwner;
    mapping (address => uint) ownerTableCount;

    function createTable(uint _tableId, string memory _name, string memory _database) onlyOwner public {
        uint creationId = tables.push(Table(uint32(now+1), _tableId, _name, _database)) - 1;
        tableToOwner[creationId] = msg.sender;
        ownerTableCount[msg.sender]++;
        emit NewTable(creationId, _name, _database);
    }

}


contract Freezing is Ownable { //validate restricting users to access ERC721 authentication
  event Freeze();
  event Unfreeze();
  event Freeze(address to);
  event UnfreezeOf(address to);
  event TransferAccessOn();
  event TransferAccessOff();

  bool public freezed = false;

  mapping (address => bool) public freezeOf;
  mapping (address => bool) public transferAccess;

  modifier whenNotFreeze() {
    require(!freezed);
    _;
  }

  modifier whenFreeze() {
    require(freezed);
    _;
  }

  modifier whenNotFreezeOf(address _account) {
    require(!freezeOf[_account]);
    _;
  }

  modifier whenFreezeOf(address _account) {
    require(freezeOf[_account]);
    _;
  }

  modifier onTransferAccess(address _account) {
      require(transferAccess[_account]);
      _;
  }

  modifier offTransferAccess(address _account) {
      require(!transferAccess[_account]);
      _;
  }

  function freeze() onlyOwner whenNotFreeze public {
    freezed = true;
    emit Freeze();
  }

  function unfreeze() onlyOwner whenFreeze public {
    freezed = false;
    emit Unfreeze();
  }
  /*
  function freezeOf(address _account) onlyOwner whenNotFreeze public {
    freezeOf[_account] = true;
    emit Freeze(_account);
  }*/

  function unfreezeOf(address _account) onlyOwner whenFreeze public  {
    freezeOf[_account] = false;
    emit UnfreezeOf(_account);
  }

  function transferAccessOn(address _account) onlyOwner offTransferAccess(_account) public {
      transferAccess[_account] = true;
      emit TransferAccessOn();
  }

  function transferAccessOff(address _account) onlyOwner onTransferAccess(_account) public {
      transferAccess[_account] = false;
      emit TransferAccessOff();
  }

}



contract UserAuthenticate is TableFactory, ERC721, Freezing {

  using SafeMath for uint256;

  mapping (uint => address) tableApprovals;

  modifier onlyOwnerOf(uint _creationId) { //maps to that particular token creation
    require(msg.sender == tableToOwner[_creationId]);
    _;
  }

  function createTableToken(uint _tableId, string memory _name, string memory _database) onlyOwner public {
    TableFactory.createTable(_tableId, _name, _database);
  }


  function balanceOf(address _owner) public view returns (uint256) {
    return ownerTableCount[_owner]; //check how many tables user has access to
  }

  function ownerOf(uint256 _tokenId) public view returns (address) {
    return tableToOwner[_tokenId]; //check owner of certain token
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private { // basically transfer 721 token
    ownerTableCount[_to] = ownerTableCount[_to].add(1);
    ownerTableCount[msg.sender] = ownerTableCount[msg.sender].sub(1);
    tableToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) public { //sends the token to the address (basically giving access)
    require (tableToOwner[_tokenId] == msg.sender || tableApprovals[_tokenId] == msg.sender);
    _transfer(_from, _to, _tokenId);
  }


/* Don't need for a private network
  function approve(address _approved, uint256 _tokenId) public onlyOwnerOf(_tokenId) { // approve token access
    tableApprovals[_tokenId] = _approved;
    emit Approval(msg.sender, _approved, _tokenId);
  }
*/

}
