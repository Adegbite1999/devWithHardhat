// import {ethers} from 'hardhat'
// import {Signer} from "ethers";
// // import {BytesLike, Signer} from 'ethers'
// // const hre = require('hardhat');



// // irouter contract address
// const UNIROUTER ="0xf164fC0Ec4E93095b804a4795bBe1e041497b92a" ;
// // usdt contract address
// const USDT ="0xdAC17F958D2ee523a2206206994597C13D831ec7";
// // owner address
// const USDTHolder ="0x67321e843e26570f6dcc287cd4b3f340c40bb1b0";
// // uniswap contract address
// const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

// async function swap(){
// // setup a signer
// const signer = await ethers.getSigner(USDTHolder)
// // const router variable that we will use to call our contract

// const router = await ethers.getContractAt("IRouter",UNIROUTER,signer)
// const usdtContract = await ethers.getContractAt("IERC20",USDT,signer)
// const uniContract = await ethers.getContractAt("IERC20",UNI)

//     // @ts-ignore
//     await network.provider.send("hardhat_setBalance", [
//         USDTHolder,
//         "0x1000000000000000000000000000000000000",
//       ])
//     // @ts-ignore
//     await hre.network.provider.request({
//         method: "hardhat_impersonateAccount",
//         params: [USDTHolder],
//       });

//     // approve
//     console.log(We are approving Unirouter to spend ${AmountIn});

//     await usdtContract.approve(UNIROUTERADDR, AmountIn);
//     // console.log(`swapping ${AmountIn} usdt`);

//     await router.swapExactTokensForTokens(AmountIn, 0,[usdtContract, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", UNI],USDTHolder,164660936203)
//        console.log(`balance now is ${await uniContract.balanceOf(USDTHolder)});

// }



 

// }

// swap().catch((error) =>{
//     console.error(error)
//     process.exitCode = 1;
// });

/* eslint-disable prettier/prettier */
import { Signer } from "ethers";
import { ethers } from "hardhat";

// const UNIROUTERADDR = "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a";
const UNIROUTERADDR = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const USDTCONTRACTADDR = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const USDTHOLDER = "0xe3011271416f3a827e25d5251d34a56d83446159";
const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const AmountIn = 10000e6;
async function swap() {
    // swap usdt to uni;
    const usdtSigner: Signer = await ethers.getSigner(USDTHOLDER);
    const router = await ethers.getContractAt('IRouter', UNIROUTERADDR, usdtSigner);
    const usdtContract = await ethers.getContractAt("IERC20", USDTCONTRACTADDR, usdtSigner);
    const uniContract = await ethers.getContractAt('IERC20', UNI);
    console.log(balance before is ${await uniContract.balanceOf(USDTHOLDER)});
    // @ts-ignore
    await network.provider.send("hardhat_setBalance", [
        USDTHOLDER,
        "0x1000000000000000000000000000000000000",
      ])
    // @ts-ignore
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [USDTHOLDER],
      });

    // approve
    console.log(`We are approving Unirouter to spend ${AmountIn});

    await usdtContract.approve(UNIROUTERADDR, AmountIn);
 

    await router.swapExactTokensForTokens(AmountIn, 0,[USDTCONTRACTADDR, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", UNI],USDTHOLDER,164660936203)
       console.log(`balance now is ${await uniContract.balanceOf(USDTHOLDER)}`);

}


swap().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
