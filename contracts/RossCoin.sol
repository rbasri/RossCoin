// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RossCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("RossCoin", "ROSS") {
        _mint(msg.sender, initialSupply);
    }
}
