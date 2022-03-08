 Sūrya's Description Report

 Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| c:\Users\ADEGBITE ADEMOLA\hardhat\contracts\balance.sol | d0bfce26582ff60758cc8b37f0ff9deb9df09f1c |
| c:\Users\ADEGBITE ADEMOLA\hardhat\contracts\ecommerce.sol | 77a3ac41b625ff166660d58c25d0a97ee9895dc6 |


 Contracts Description Table


|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     └      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
||||||
| **IERC20** | Interface |  |||
| └ | balanceOf | External ❗️ |   |NO❗️ |
| └ | transfer | External ❗️ |   |NO❗️ |
||||||
| **Ecommerce** | Implementation |  |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | Join | External ❗️ | 🛑  | addUserOnce |
| └ | addProduct | External ❗️ | 🛑  | addProductOnlyByRegisteredUser onlyMerchantCanAddProduct |
| └ | buyProduct | External ❗️ |  💵 | addProductOnlyByRegisteredUser |
| └ | getBalance | External ❗️ |   |NO❗️ |
| └ | getUser | External ❗️ |   |NO❗️ |
| └ | getProducts | External ❗️ |   |NO❗️ |
| └ | withdraw | External ❗️ | 🛑  |NO❗️ |


 Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    🛑    | Function can modify state |
|    💵    | Function is payable |
