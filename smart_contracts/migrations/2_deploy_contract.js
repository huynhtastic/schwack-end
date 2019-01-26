var UserAuthenticate = artifacts.require("UserAuthenticate");

module.exports = function(deployer) {
    deployer.deploy(UserAuthenticate);
};
