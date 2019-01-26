var UserAuthenticate = artifacts.require("UserAuthenticate");
var TokenTest = artifacts.require("TokenTest");

module.exports = function(deployer) {
    deployer.deploy(UserAuthenticate);
    deployer.deploy(TokenTest);
};
