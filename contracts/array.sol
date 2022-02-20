pragma solidity ^0.8.0;

contract Array {
    address[] private voters;

    function addVoter() external {
        voters.push(msg.sender);
    }

    function getTotalVoters() external view returns (uint) {
        return voters.length;
    }

    function didIRegister() public view returns (bool) {
        for(uint i = 0; i < voters.length; i++) {
            if (msg.sender == voters[i]) {
                return true;
            }
        }
        return false;
    }

    function removeRegistration() public {
        for(uint i = 0; i < voters.length; i++) {
            if (msg.sender == voters[i]) {
                delete voters[i];
                break;
            }
        }
    }
}