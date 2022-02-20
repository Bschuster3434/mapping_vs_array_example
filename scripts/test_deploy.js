const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    const [deployer, ...addrs] = await ethers.getSigners();
    const provider = ethers.getDefaultProvider();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const ArrayFunction = await ethers.getContractFactory("Array");
    const array = await ArrayFunction.deploy();

    const Mapping = await ethers.getContractFactory("Mapping");
    const mapping = await Mapping.deploy();

    console.log("Mapping Address: ", mapping.address);
    console.log("Array Address: ", array.address);

    //Generate a random voter and add to both contracts
    let nextAddress;
    for(let i = 0; i < 1000; i++) {
        nextAddress = addrs[i];
        console.log("Random account id: ", nextAddress.address);
        await mapping.connect(nextAddress).addVoter();
        await array.connect(nextAddress).addVoter();
        console.log("Number of voters for Array: ", await array.getTotalVoters());
        console.log("Number of voters for Mapping: ", await mapping.getTotalVoters());
    }

    console.log("Mapping Address: ", mapping.address);
    console.log("Array Address: ", array.address);

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });