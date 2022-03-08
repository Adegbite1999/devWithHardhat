
import {ethers} from "hardhat";
import {Ecommerce} from "../typechain/Ecommerce";

async function main(){
// get contract
const Ecommerce  = await ethers.getContractFactory("Ecommerce");
const ecommerce = await Ecommerce.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3") as Ecommerce;

    const efunc = await ecommerce.deployed();
    const receipt = await efunc.Join({
        name: "Adegbite Ademola",
        age:15,
        location:"Ikorodu",
        isMerchant:true,
        products: [0,1,2,3]
    })
    const show = await receipt.wait();
    // @ts
    console.log(show);
// console.log((await receipt).wait())
}
main()
    .then(() => process.exit(0))
    .catch((error) =>{
        console.error(error);
        process.exit(1);
    });