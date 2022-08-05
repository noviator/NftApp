const { ethers } = require("hardhat")
require("dotenv").config();
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;

    const MyNFTContract = await ethers.getContractFactory("MyNFT")

    const deployedMyNFTContract = await MyNFTContract.deploy(metadataURL, whitelistContract);
    await deployedMyNFTContract.deployed();

    console.log(`contract address of deployed contract = ${deployedMyNFTContract.address}`);

}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })