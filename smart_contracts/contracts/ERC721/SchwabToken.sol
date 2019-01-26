pragma solidity >=0.4.22 <0.6.0;

import "./ERC721.sol";
import "../access/MinterRole.sol";

/**
 * @title ERC721Mintable
 * @dev ERC721 minting logic
 */
contract ERC721Mintable is ERC721, MinterRole {
    /**
     * @dev Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param tokenId The token id to mint.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(address to, uint256 tokenId) public onlyMinter returns (bool) {
        _mint(to, tokenId);
        return true;
    }
}



contract SchwabToken is ERC721Mintable{
  string public constant name = "SchwabToken";
  string public constant symbol = "SCHW";
}
