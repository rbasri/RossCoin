async function main() {
  const initialSupply = ethers.utils.parseEther("1000000");
  const Rosscoin = await hre.ethers.getContractFactory("RossCoin");
  const token = await Rosscoin.deploy(initialSupply);

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
