var SchwabToken = artifacts.require("../ERC721/SchwabToken");

module.exports = function(deployer) {
    deployer.deploy(SchwabToken);
};
