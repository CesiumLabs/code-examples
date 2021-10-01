//SPDX-License-Identifier: NoLicense
// compiler version must be greater than or equal to 0.8.3 and less than 0.9.0
pragma solidity ^0.8.0;

contract HelloWorld {
    string hello = "Hello World!";
    
    function getHello() public returns (string memory){
        return hello;
    }
}