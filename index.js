// Setup: npm install alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

const adress = "" // Adress goes here 

async function test() {
const getBalance = await alchemy.core.getBalance(adress)
const EthBal = getBalance * Math.pow(10,(-18));
const ukbal1 = EthBal * (1255);
const ukbal = Math.floor(ukbal1)
console.log(`Getting data from the blockchain... For Wallet ${adress}`);
console.log(`Ξ ${EthBal}`);
console.log(`Your wallet's value is £${ukbal}.00`);
}


test();
