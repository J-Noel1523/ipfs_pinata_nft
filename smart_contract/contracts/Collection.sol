// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';


contract Collection is ERC721URIStorage, Ownable {
    uint tokenId = 0;

    constructor() ERC721("My Collection", "JER"){}

    function mint(string memory uri) public onlyOwner {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        tokenId++;
    }
}
