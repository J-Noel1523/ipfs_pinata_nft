require("dotenv").config();
// import pinataSDK from "@pinata/sdk"; how come not use this in docs
const fs = require("fs");
const pinataSDK = require("@pinata/sdk");

// read image from folder
const readableStreamForFile = fs.createReadStream("./images/2.png");
const pinata = new pinataSDK({ pinataJWTKey: process.env.Pinata_JWT });

const options = {
  pinataMetadata: {
    name: "DuckFirstNFT",
    keyvalues: {
      customKey: "customValue",
      customKey2: "customValue2",
    },
  },
  pinataOptions: {
    cidVersion: 0,
  },
};

// actual image
const createPinFileToIPFS = () => {
  return pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

// corresponding json
const createPinJSONToIPFS = (body) => {
  return pinata
    .pinJSONToIPFS(body, options)
    .then((result) => {
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMetadata = async () => {
  const imageUrl = await createPinFileToIPFS();
  const body = {
    name: "DuckFirstNFT",
    description: "Duck image. First NFT",
    image: imageUrl,
  };
  const metadata = await createPinJSONToIPFS(body);
  console.log(metadata);
};

getMetadata();

// Duck NFT First NFT: https://gateway.pinata.cloud/ipfs/QmWm9Z2Tnc7Waz4V97JQARCReCaNJRLgtCCqzEPiu8qxdp
