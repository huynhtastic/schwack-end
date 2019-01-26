const SchwabToken = artifacts.require("../ERC721/SchwabToken");

contract("Schwab token", accounts => {
  it("Should make first account an owner", async () => {
    let instance = await SchwabToken.deployed();
    let owner = await instance.owner();
    assert.equal(owner, accounts[0]);
  });
});
