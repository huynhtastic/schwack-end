var UserAuthenticate = artifacts.require("../UserAuthenticate.sol");

module.exports = function(deployer) {
    deployer.deploy(UserAuthenticate);
};
