import {ethers} from 'hardhat'
import {BytesLike, Signer, BigNumberish, BigNumber} from 'ethers'
const hre = require('hardhat');


async function main(){
    // To get balance of a user from an address
    const address = "0xdc9232e2df177d7a12fdff6ecbab114e2231198d";
    const randAddress = "0x9e5de432ac02b054835920232b4fa6a04c2bf6fd"
    const ERC = await ethers.getContractAt('IERC20', "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619");
    console.log( await ERC.balanceOf(address))

    // impersonate and transfer to anotherA person acccount

await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [address],
  });

//   const signer = await ethers.getSigner(address)
const signer:Signer = await ethers.getSigner(address)
await ERC.connect(signer).transfer( randAddress,"4000000000000000000")
const bal =  await ERC.balanceOf(address);
const balran = await ERC.balanceOf(randAddress);
console.log(bal);
console.log(balran);

// console.log( await ERC.balanceOf(address))

// await ERC
    // let receipt = await ethers/'


// setStorage
// concat and encode the mapping key and slot
const data:BytesLike = new ethers.utils.AbiCoder().encode((["address", "uint256"]), [address,0]);
const position = ethers.utils.solidityKeccak256(["bytes"], [data])



const dec:BigNumberish = BigNumber.from(position)
// to get position 
const balance = await ethers.provider.getStorageAt(ERC.address, dec)
console.log(`balance:${balance}`)
console.log(await ERC.balanceOf(randAddress))

await ethers.provider.send('hardhat_setStorageAt', [ERC.address, position, "0x0000000000000000000000000000000000000000000000000000000000000002"])
// console.log(position)

console.log(await ERC.balanceOf(randAddress))
console.log(balance)

// const balance = await provider.getStorage(ERC.address, dec)

}

main().catch((error) =>{
    console.error(error)
    process.exitCode = 1;
});

