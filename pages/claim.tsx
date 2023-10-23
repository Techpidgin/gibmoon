import styles from "../styles/Claim.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import React, { useState, useEffect } from "react";
interface EthData {
  From: string;
  Reward: string;
}

interface ArbData {
   From: string;
  ArbReward: string;

}
const Claim: React.FC = () => {
  const [stakingTab, setStakingTab] = useState(true);
  const [unStakingTab, setUnstakingTab] = useState(false);
  const [ethData, setEthData] = useState([]);
  const [arbData, setArbData] = useState([]);
  const [userAddress, setUserAddress] = useState("");
  const [userReward, setUserReward] = useState(null);
  const [message, setMessage] = useState(
    "PLEASE PASTE ACCOUNT ADDRESS AND CLICK CHECK"
  );

  useEffect(() => {
    // Fetch ETH data
    fetch("https://teal-managing-emu-484.mypinata.cloud/ipfs/QmcsuWR971NxRQX6xNEkxoJcQeicpLG8w7B4f6NzKU8Ctj?_gl=1*1nprq6p*_ga*NDIyOTU5MzMzLjE2OTgwOTE3MDQ.*_ga_5RMPXG14TE*MTY5ODA5MTcwNy4xLjEuMTY5ODA5MjY4Mi41Mi4wLjA.")
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
    fetch("https://teal-managing-emu-484.mypinata.cloud/ipfs/QmS5Jxs8nFq1uqLC13edscXakNV8iMoYiQpioAVvj8VoMC?_gl=1*1uc713l*_ga*NDIyOTU5MzMzLjE2OTgwOTE3MDQ.*_ga_5RMPXG14TE*MTY5ODA5MTcwNy4xLjEuMTY5ODA5MjY3NC42MC4wLjA.")
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
      const arbClaim = arbData.find((item) => item.From === userAddress);

      if (arbClaim) {
        setUserReward(arbClaim.ArbReward);
        setMessage(`🤑DEGEN LAYER $GIB- ${arbClaim.ArbReward}`);
      } else {
        setMessage("NO DATA FOUND , YOU GET WHAT YOU $GIB");
        setUserReward(null);
      }
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

      <section className={styles.stakingContainer}>
        <section>
          <section className={styles.stakeUnstakeTab}>
            <section
              className={`${stakingTab ? styles.stakingType : ""}`}
              id="stake"
              onClick={switchToStake}
            >
              <button className={styles.stakebutton}>ASSET LAYER</button>
            </section>
            <section
              className={`${unStakingTab ? styles.stakingType : ""}`}
              id="unstake"
              onClick={switchToUnstake}
            >
              <button className={styles.unstakebutton}>DEGEN LAYER</button>
            </section>
          </section>
          <section className={styles.stakingSection}>
            <span className={styles.apy}></span>
            {stakingTab ? (
              <section className={styles.stakingBox}>
                <h2>
                  <img
                    src="asset.png"
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />{" "}
                  ASSET LAYER
                </h2>
                <input
                  className={styles.inputField}
                  type="text"
                  id="inputField"
                  placeholder="ENTER WALLET ADDRESS"
                  required
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
                <section className={styles.stakingInfo}>
                  <h2>
                    <img
                      src="airdrop.png"
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />{" "}
                    ELIGIBILITY
                  </h2>
                </section>
                <button className={styles.stakeBtn} onClick={handleCheck}>
                  CHECK
                </button>
                <div className={styles.errorMessage}>{message}</div>
              </section>
            ) : (
              <section className={styles.stakingBox}>
                <h2>
                  <img
                    src="token.png"
                    alt=""
                    style={{ width: "25px", height: "25px" }}
                  />{" "}
                  DEGEN LAYER
                </h2>
                <input
                  className={styles.inputField}
                  type="text"
                  id="inputField"
                  placeholder="ENTER WALLET ADDRESS"
                  required
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
                <section className={styles.stakingInfo}>
                  <h2>
                    <img
                      src="airdrop.png"
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />{" "}
                    ELIGIBILITY
                  </h2>
                </section>
                <button className={styles.stakeBtn} onClick={handleCheck}>
                  CHECK
                </button>
                <div className={styles.errorMessage}>{message}</div>
              </section>
            )}
          </section>
          <section className={styles.stakingInfo1}>
            <h5>
              <img
                src="logo.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />{" "}
              GET READY TO CLAIM $GIB TOKENS<br></br>
              🎉THIS IS HOW YOU CAN SUPERCHARGE YOUR REWARDS! 🎉<br></br>
              🤝JOIN $GIB COMMUNITY <br></br>
              💰MAKE VIDEOS FOR SOME EXTRA $GIB FUN.<br></br>
              💰BE PART OF THE $GIB MOON GANG AND 🤝CONNECT WITH CHADS.<br></br>
              🎁CLAIM YOUR INITIAL $GIB TOKENS.<br></br>
              🚀MEME POWER BOOST <br></br>
              🌟TAG US @GIBISBIG<br></br>
              💬ENGAGE GIB CONTENTS <br></br>
              🌟X SPACES DISCUSSIONS 🌟<br></br>
              🎬CREATE STELLAR VIDEOS ABOUT $GIB<br></br>
              🌟POST ON TIKTOK, INSTAGRAM X2🌟<br></br>
              📡STAY INFORMED CRYPTO MOVES FAST.
            </h5>
          </section>
        </section>

        <section>
          <section className={styles.stakingInfoSection}>
            <section className={styles.stakingInfo}>
              <h2>
                <img
                  src="airdrop.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />{" "}
                AIRDROP BOOST
              </h2>
              <section className={styles.lockedStaking}>
                <h5>
                  <img
                    src="thread.png"
                    alt=""
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  >
                    THREAD SEWN
                  </span>
                  <span className={styles.LockStakingAPY1}>🚀+50%</span>
                </h5>
                <form
                  action="https://formsubmit.co/mfckr.eth@gmail.com"
                  method="POST"
                >
                  <input
                    className={styles.inputField}
                    type="text"
                    name="thread"
                    placeholder="PASTE LINK TO THREAD"
                    required
                  />
                  <button
                    type="submit"
                    className={`${styles.stakeBtn} ${styles.space}`}
                  >
                    GIBME
                  </button>
                </form>
              </section>
              <section className={styles.lockedStaking}>
                <h5>
                  <img
                    src="micro.png"
                    alt=""
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  >
                    X SPACES
                  </span>
                  <span className={styles.LockStakingAPY1}>🚀+100%</span>
                </h5>
                <form
                  action="https://formsubmit.co/mfckr.eth@gmail.com"
                  method="POST"
                >
                  <input
                    className={styles.inputField}
                    type="text"
                    name="spaces"
                    placeholder="PASTE LINK TO X SPACES"
                    required
                  />
                  <button
                    type="submit"
                    className={`${styles.stakeBtn} ${styles.space}`}
                  >
                    GIBME
                  </button>
                </form>
              </section>
              <section className={styles.lockedStaking}>
                <h5>
                  <img
                    src="video.png"
                    alt=""
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  >
                    VIDEO CONTENTS
                  </span>
                  <span className={styles.LockStakingAPY1}>🚀+300%</span>
                </h5>
                <form
                  action="https://formsubmit.co/mfckr.eth@gmail.com"
                  method="POST"
                >
                  <input
                    className={styles.inputField}
                    type="text"
                    name="http://localhost:3000/recktos"
                    placeholder="PASTE LINK TO VIDEO"
                    required
                  />
                  <button
                    type="submit"
                    className={`${styles.stakeBtn} ${styles.space}`}
                  >
                    GIBME
                  </button>
                </form>
              </section>
              <section className={styles.lockedStaking}>
                <h5>
                  <img
                    src="meme.png"
                    alt=""
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  >
                    MEMES
                  </span>
                  <span className={styles.LockStakingAPY1}>🚀+5%</span>
                </h5>
                <form
                  action="https://formsubmit.co/mfckr.eth@gmail.com"
                  method="POST"
                >
                  <input
                    className={styles.inputField}
                    type="text"
                    name="meme"
                    placeholder="PASTE LINK TO MEME"
                    required
                  />
                  <button
                    type="submit"
                    className={`${styles.stakeBtn} ${styles.space}`}
                  >
                    GIBME
                  </button>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Claim;
