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
  const [stakingTab, setStakingTab] = useState<boolean>(true);
  const [unStakingTab, setUnstakingTab] = useState<boolean>(false);
  const [ethData, setEthData] = useState<EthData[]>([]); // Provide an initial empty array of EthData
  const [arbData, setArbData] = useState<ArbData[]>([]); // Provide an initial empty array of ArbData
  const [userAddress, setUserAddress] = useState<string>("");
  const [userReward, setUserReward] = useState<string | null>(null); // Initialize as null
  const [message, setMessage] = useState<string>(
    "PLEASE PASTE ACCOUNT ADDRESS AND CLICK CHECK"
  );

  useEffect(() => {
    // Fetch ETH data
    fetch(
      "https://teal-managing-emu-484.mypinata.cloud/ipfs/Qmc3mbgmKJp8hvh6TLxrVSceMp9VBtVrZpHxeBPApm93mU?_gl=1*cel39v*_ga*NDIyOTU5MzMzLjE2OTgwOTE3MDQ.*_ga_5RMPXG14TE*MTY5OTA0NTA5Mi4xMC4xLjE2OTkwNDU2ODMuNjAuMC4w."
    )
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
    fetch(
      "https://teal-managing-emu-484.mypinata.cloud/ipfs/QmNXtfYFiyUspSkZdEVnrxP8ziEsyXZRNqUVYKTKpi9vv9?_gl=1*1x3e1s5*_ga*NDIyOTU5MzMzLjE2OTgwOTE3MDQ.*_ga_5RMPXG14TE*MTY5OTA0NTA5Mi4xMC4xLjE2OTkwNDU4OTEuNjAuMC4w."
    )
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

    const lowercaseAddress = userAddress.toLowerCase();

    if (stakingTab) {
      const ethClaim = ethData.find((item) => item.From === lowercaseAddress);

      if (ethClaim) {
        setUserReward(ethClaim.Reward);
        setMessage(`🤑ASSET LAYER $GIB- ${ethClaim.Reward}`);
      } else {
        setMessage("NO DATA FOUND, YOU GET WHAT YOU $GIB");
        setUserReward(null);
      }
    } else {
      const arbClaim = arbData.find((item) => item.From === lowercaseAddress);

      if (arbClaim) {
        setUserReward(arbClaim.ArbReward);
        setMessage(`🤑DEGEN LAYER $GIB- ${arbClaim.ArbReward}`);
      } else {
        setMessage("NO DATA FOUND, YOU GET WHAT YOU $GIB");
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
      <section className={styles.stakingInfo}>
  <h2>
    <img src="X.jpeg" alt="X" style={{ width: "25px", height: "25px" }} />{" "}
    POST PROOF OF $GIB FOLLOW ON X FOR BOOST🚀
  </h2>
  <a
    className={styles.tweetword1}
    href="https://twitter.com/intent/tweet?text=THIS%20IS%20MY%20PROOF%20OF%20$GIB🎲%20BOOST🚀🚀🚀%20CLAIM%20OVER%2010,000,000%02MILLION%20$GIB%20TOKENS%20AT%20gib.casino%20AND%20FOLLOW%20@GIBISBIG%20."
    data-size="large"
  >
    TWEET🚀
  </a>
  <a className={styles.tweetword} href="https://twitter.com/GIBISBIG">
    FOLLOW 🚀
  </a>
</section>

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
                    type="hidden"
                    name="_next"
                    value="https://gib.casino/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
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
                    type="hidden"
                    name="_next"
                    value="https://gib.casino/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
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
                    type="hidden"
                    name="_next"
                    value="https://gib.casino/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    className={styles.inputField}
                    type="text"
                    name="video"
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
                    type="hidden"
                    name="_next"
                    value="https://gib.casino/"
                  />
                  <input type="hidden" name="_captcha" value="false" />
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
