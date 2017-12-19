var Claim = artifacts.require('Claim.sol');
var Enhancer = artifacts.require('Enhancer.sol');
var Owned = artifacts.require('Owned.sol');
var BalanceClaim = artifacts.require('BalanceClaim.sol');
var Campaign = artifacts.require('Campaign.sol');
var StandardCampaign = artifacts.require('Claim.sol');

module.exports = function (deployer) {
	deployer.deploy(Claim);
	deployer.deploy(Enhancer);
	deployer.deploy(Owned);
	deployer.deploy(BalanceClaim);
	deployer.deploy(Campaign);
	deployer.deploy(StandardCampaign);
}