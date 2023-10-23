import styles from "../styles/Claim.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import React, { useState, useEffect } from "react";

interface EthData {
  From: string;
  Reward: number;
  // Add other properties as needed
}

interface ArbData {
  // Define the structure of ArbData here
}

const Claim: React.FC = () => {
  const [stakingTab, setStakingTab] = useState<boolean>(true);
  const [unStakingTab, setUnstakingTab] = useState<boolean>(false);
  const [ethData, setEthData] = useState<EthData[]>([]); // Provide type annotation for ethData
  const [arbData, setArbData] = useState<ArbData[]>([]); // Provide type annotation for arbData
  const [userAddress, setUserAddress] = useState<string>("");
  const [userReward, setUserReward] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("PLEASE PASTE ACCOUNT ADDRESS AND CLICK CHECK");

  useEffect(() => {
    // Fetch ETH data
    fetch("http://127.0.0.1:8080/api/eth")
      .then((response) => response.json())
      .then((jsonData) => {
        setEthData(jsonData.data);
        setMessage("DATA LOADED");
      })
      .catch((error) => {
        console.error("ERROR FETCHING DATA !", error);
        setMessage("ERROR LOADING DATA !");
      });

    // Fetch ARB data
    fetch("http://127.0.0.1:8080/api/arb")
      .then((response) => response.json())
      .then((jsonData) => {
        setArbData(jsonData.data);
      })
      .catch((error) => {
        console.error("ERROR FETCHING DATA !", error);
        setMessage("ERROR LOADING DATA !");
      });
  }, []);

  const handleCheck = () => {
    if (!userAddress) {
      setMessage("PASTE ACCOUNT ADDRESS AND CLICK CHECK");
      setUserReward(null);
      return;
    }

    if (stakingTab) {
      const ethClaim = ethData.find((item) => item.From === userAddress);

      if (ethClaim) {
        setUserReward(ethClaim.Reward);
        setMessage(`🤑ASSET LAYER $GIB- ${ethClaim.Reward}`);
      } else {
        setMessage("NO DATA FOUND , YOU GET WHAT YOU $GIB");
        setUserReward(null);
      }
    } else {
      // Handle arbData similarly
    }
  };

  const switchToStake = () => {
    if (!stakingTab) {
      setStakingTab(true);
      setUnstakingTab(false);
    }
  };

  const switchToUnstake = () => {
    if (!unStakingTab) {
      setUnstakingTab(true);
      setStakingTab(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      {/* ... rest of your JSX ... */}
      <Footer />
    </div>
  );
};

export default Claim;
