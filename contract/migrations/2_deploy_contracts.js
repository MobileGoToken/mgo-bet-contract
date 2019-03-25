var Bet = artifacts.require("./Bet.sol");

export default function(deployer) {
  deployer.deploy(Bet);
};