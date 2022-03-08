pragma solidity ^0.8.0;
interface IERC20{
    function balanceOf(address owner) external view  returns (uint); 
    function transfer(address to, uint256 amount) external view returns (bool);
    function approve(address spender, uint amount) external view returns (uint); 
}