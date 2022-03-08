// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import {Test} from '../typechain';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Test = await ethers.getContractFactory("Test");
  // const test = await Test.deployed("Ademola", 9, "ikorodu", "male");
 const test = (await Test.deploy()) as Test;
  // const receipt = 
  // pass in data using interface
const receipt = await test.addPerson({
  fullname:"ademola",
  age:9,
  location: "ikorodu",
  gender:"male"
});
const showReceipt = await receipt.wait();
console.log(showReceipt);
const findReceipt = showReceipt.events?.find((event) => event.event === 'AddPerson')
const args = findReceipt?.args;
console.log(args?.fullname)
console.log(await test.getPerson(0));

  await test.deployed();

  console.log("Test deployed to:", test.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// npx hardhat compile ====> compile
// npx hardhat run scripts/deploy ====> deploy


