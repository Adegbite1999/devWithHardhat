// SPDX-License-Identifier: CC-BY-SA-4.0
pragma solidity ^0.8.0;

contract Ecommerce{

// Event for products
// Events for users
    address owner;
    
    constructor(address _owner){
    owner = _owner;
}
   

    struct User{
        string name;
        uint age;
        string location;
        bool isMerchant;
        uint[] products;
    }

    struct Product{
        uint id;
        address owner;
        string name;
        string description;
        uint price;
    }
    mapping(address => User) users;
    mapping(uint => Product) products;
    mapping(address => bool) userAdded;
    mapping(uint => bool) productAdded;
     uint userCount =0;
    uint productCount= 0;

event UserAdded(User u);
event ProductAdded(Product p);
event ProductBought(Product item);

//@dev modifierss
 modifier onlyOwner(){
        require(owner == msg.sender, "Only owner can call this function");
        _;
    }



    modifier addUserOnce(){
        require(userAdded[msg.sender] == false, "User can't be added twice");
        _;
    }

    modifier addProductOnlyByRegisteredUser(){
        require(userAdded[msg.sender] == true, "you are not a registered user");
        _;
    }

    modifier onlyMerchantCanAddProduct(){
        require(users[msg.sender].isMerchant == true, "Only merchants can add products");
        _;
    }




// @dev: function to add create user profile. it takes in an array od structs as parameter
function Join(User memory u) external addUserOnce{
User storage user = users[msg.sender];
user.name = u.name;
user.age = u.age;
user.location = u.location;
user.isMerchant = u.isMerchant;
user.products = u.products;
userCount++;
userAdded[msg.sender] = true;
emit UserAdded(user);
}

function addProduct(Product memory p) external addProductOnlyByRegisteredUser onlyMerchantCanAddProduct{
productCount++;
Product storage product = products[productCount];
product.id = p.id;
product.owner =msg.sender;
product.name = p.name;
product.description = p.description;
product.price = p.price;
productAdded[productCount] = true;
users[msg.sender].products.push(productCount);
emit ProductAdded(product);
}

function buyProduct(uint _id) external payable addProductOnlyByRegisteredUser{
Product storage item = products[_id];
  require(productAdded[_id] == true, "This product does not exist");
  require(msg.value >= item.price, "You didn't send enough ether to buy this product");
    address payable addressOwner = payable(item.owner);
        addressOwner.transfer(item.price);
        item.owner = msg.sender;
        emit ProductBought(item);
}




// @dev fetch balance
function getBalance() view external returns (uint) {
    return address(this).balance;
}
 
// @dev function returns user by address
function getUser(address _address) external view returns  (User memory){
return users[_address];
}
function getProducts(uint _index) view external returns (Product memory) {
return products[_index];
}

function withdraw() external {
    payable(owner).transfer(address(this).balance);
    // payable(owner).transfer(address(this));
}


}



// import { BigNumber, BigNumberish, Bytes, BytesLike, Signer } from 'ethers'
// import { ethers } from 'hardhat'
// //import {}

// async function checkDai() {
//   const address = '0xf53b2965d13404e5d13Ce40c7448F8E13F04034B'
//   const randAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
//   const DAI = await ethers.getContractAt(
//     'IERC20',
//     '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
//   )

//   const balBefore = await DAI.balanceOf(address)
//   console.log(`Balance before is ${balBefore}`)

//   //impersonating account
//   //@ts-ignore
//   await hre.network.provider.request({
//     method: 'hardhat_impersonateAccount',
//     params: [address],
//   })
//   const signer: Signer = await ethers.getSigner(address)

//   const together: BytesLike = new ethers.utils.AbiCoder().encode(
//     ['address', 'uint256'],
//     [address, 2],
//   )
//   const position: BytesLike = ethers.utils.solidityKeccak256(
//     ['bytes'],
//     [together],
//   )

//   const dec: BigNumberish = BigNumber.from(position)
//   console.log(dec)
//   const balance = await ethers.provider.getStorageAt(DAI.address, dec)
//   //console.log(`balance is ${balance.toString()}`)
//   await ethers.provider.send('hardhat_setStorageAt', [
//     DAI.address,
//     position,
//     '0x00000000000000000000000000000000000000000000000000000000000f4240',
//   ])

//   const balAfter = await DAI.balanceOf(address)
//   console.log(`balance after rigging is ${balAfter}`)
//   //await DAI.connect(signer).transfer(randAddress, '6229250710691401220343')
//   //await  provider.getStorageAt()
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// checkDai().catch((error) => {
//   console.error(error)
//   process.exitCode = 1
// })