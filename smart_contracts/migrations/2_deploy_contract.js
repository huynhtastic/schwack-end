var UserAuthenticate = artifacts.require("UserAuthenticate");
var HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
    deployer.deploy(UserAuthenticate);
    deployer.deploy(HelloWorld);
};
