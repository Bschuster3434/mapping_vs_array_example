pragma solidity ^0.8.0;

contract Mapping {
    uint numVoters = 0;
    mapping(address => bool) voters;

    function addVoter() external {
        voters[msg.sender] = true;
        numVoters++;
    }

    function getTotalVoters() external view returns (uint) {
        return numVoters;
    }

    function didIRegister() external view returns (bool) {
        return voters[msg.sender];
    }

    function removeRegistration() external {
        if(voters[msg.sender] == true) {
            voters[msg.sender] = false;
            numVoters--;
        }
    }

}