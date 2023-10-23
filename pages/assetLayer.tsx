import styles from "../styles/AssetLayer.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Header from "../component/Header";


const AssetLayer: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Header />
      <p>Asset Layer</p>
      <section>
      <iframe
  scrolling="no"
  allowTransparency
  frameBorder="0"
  src="https://www.tradingview-widget.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22COINBASE%3AETHUSD%7CALL%22%5D%5D%2C%22chartOnly%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22showVolume%22%3Afalse%2C%22showMA%22%3Afalse%2C%22hideDateRanges%22%3Afalse%2C%22hideMarketStatus%22%3Afalse%2C%22hideSymbolLogo%22%3Afalse%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22fontFamily%22%3A%22Andale%20Mono%2C%20monospace%22%2C%22fontSize%22%3A%2210%22%2C%22noTimeScale%22%3Afalse%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22chartType%22%3A%22line%22%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22backgroundColor%22%3A%22rgba(209%2C%20212%2C%20220%2C%201)%22%2C%22lineWidth%22%3A3%2C%22lineType%22%3A2%2C%22dateRanges%22%3A%5B%22all%7C1M%22%5D%2C%22upColor%22%3A%22%2322ab94%22%2C%22downColor%22%3A%22%23f7525f%22%2C%22borderUpColor%22%3A%22%2322ab94%22%2C%22borderDownColor%22%3A%22%23f7525f%22%2C%22wickUpColor%22%3A%22%2322ab94%22%2C%22wickDownColor%22%3A%22%23f7525f%22%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%2C%22page-uri%22%3A%22localhost%3A3000%2F%22%7D"
  title="symbol overview TradingView widget"
>
</iframe>
    </section>
    </div>
    
  );
};

export default AssetLayer;
