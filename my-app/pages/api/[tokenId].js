// Base URI + tokenId
// BaseURI = https://example.com
// tokenId = 1
// tokenURI(1) => https://example.com/1


export default function handler(req, res) {
  const tokenId = req.query.tokenId;

  const name = `MyNFT ${tokenId}`;
  const description = `A new NFT collection`;
  const image =`https://raw.githubusercontent.com/noviator/NftApp/main/my-app/public/myNFT/${Number(tokenId)-1}.svg`;

  res.status(200).json({
    name: name,
    description: description,
    image: image,
  });

}
