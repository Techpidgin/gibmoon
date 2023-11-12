import styles from "../styles/oat.module.css";
import { NextPage } from "next";
import Header from "../component/Header";
import { Web3Button, useContract, useNFTs } from "@thirdweb-dev/react";
import { darkTheme } from "@thirdweb-dev/react";
import Footer from "../component/Footer";

const customDarkTheme = darkTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    modalBg: "#000000",
    accentText: "red",
    // ... etc
  },
});

const oat: NextPage = () => {
  const { contract } = useContract(
    "0x612a2F557e7d623C981EbD1A1b583979F81Db039"
  );
  const { data: nfts, isLoading, error } = useNFTs(contract);

  console.log(contract);
  return (
    <div className={styles.container}>
      <Header />
      <h2>
        <img src="X.jpeg" alt="X" style={{ width: "25px", height: "25px" }} />{" "}
        SHOW OFF YOUR KEY ON X FOR BOOST🚀
        <a
        className={styles.tweetword1}
        href="https://twitter.com/intent/tweet?text=I%20JUST%20CLAIMED%20GIB%20CASINO🎲%20OAT%20ON%20ARBITRUM%20GET%20YOURS%20🚀HERE%20gib.casino%20OVER%203,150,000%20IN%20AIRDROP%20TOKENS%20FROM%20@GIBISBIG%20."
        data-size="large"
      >
        TWEET
      </a>
      </h2>
      
      <section style={{ textAlign: "center" }}>
        <section>
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x46b1FFb181e431458FE5E4368a272fbe719f4aDD&chain=%7B%22name%22%3A%22Arbitrum+One%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb1%22%2C%22chainId%22%3A42161%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22arbitrum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Farbitrum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=0b7dd974571fb96c788482bd4cef2009&tokenId=0&theme=dark&primaryColor=teal"
            width="600px"
            height="600px"
          ></iframe>
        </section>

        <Footer />
      </section>
    </div>
  );
};

export default oat;
