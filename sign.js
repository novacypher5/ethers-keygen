const { ethers } = require("ethers");

const wallet = new ethers.Wallet("");
const message = "Login to dApp at 2025-05-19 15:00 UTC";

(async () => {
    const signature = await wallet.signMessage(message);
    console.log("Wallet:", wallet.address);
    console.log("Message:", message);
    console.log("Signature:", signature);
})();
