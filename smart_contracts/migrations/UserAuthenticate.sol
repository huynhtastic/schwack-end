/*
pragma solidity ^0.5.0;
import "Ownable.sol";
import "./ERC721/ERC721.sol";
import "./ERC721/IERC721.sol";


contract UserAuthenticate {

// tables: checkings, saving, mutual fund, etf, stocks

  //Create Events
  event NewUser(
      string indexed username,
      string indexed userId,
      address indexed userAddress,
      bool checkingAuthorized,
      bool savingsAuthorized,
      bool mutualFundAuthorized,
      bool etfAuthorized,
      bool stocksAuthorized
  );

  event UserRemoved(address indexed userAddress, bool checkingAuthorized, bool savingsAuthorized, bool mutualFundAuthorized, bool etfAuthorized, bool stocksAuthorized);
  event ValidateUser(address indexed userAddress, bool checkingAuthorized, bool savingsAuthorized, bool mutualFundAuthorized, bool etfAuthorized, bool stocksAuthorized);
  //Create Modifiers

  modifier isUser(address _userAddress, address _sender, uint _amount) {
      require(_amount > 0);
      require(   //address owner , address spender
          ElacTokenTest(_token).allowance(_sender, address(this)) >= _amount,
          "token allowance must be >= amount"
      );
      _; //signal end of modifier
  }

  struct Employee {
    string username;
    string userId;
    address userAddress;
    string nameofdatabase
    bool checkingAuthorized,
    bool savingsAuthorized,
    bool mutualFundAuthorized,
    bool etfAuthorized,
    bool stocksAuthorized
  }


  function create_user (string _username, string _userId, address _userAddress) public onlyOwner{

  }

  function remove_user(address _userAddress) private onlyOwner{

  }

  function validate_user(address _userAddress) public onlyOwner {

  }

  function check_users(address _userAddress) public {

  }


}
*/
