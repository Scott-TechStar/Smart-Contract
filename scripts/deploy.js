const { ethers } = require("hardhat");
async function main() {

   const tstar = await ethers.getContractFactory('tstar');

   const hw = await tstar.deploy("Hello World! Bingo");

   console.log('Contract Deployed to:', hw.address);
}

main().then(() => process.exit(0))
.catch(error => {
 console.error(error);
 process.exit(1);
});