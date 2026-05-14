// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [tokenData, setTokenData] = useState(null);

  // Tumhara GitHub raw link yaha dalna
  const metadataURL =
    "https://raw.githubusercontent.com/usdxofficialdev/Tether-USD/main/metadata.json";

  // Fetch metadata
  useEffect(() => {
    async function fetchMetadata() {
      try {
        const res = await fetch(metadataURL);
        const data = await res.json();
        setTokenData(data);
      } catch (err) {
        console.error("Error fetching metadata:", err);
      }
    }
    fetchMetadata();
  }, []);

  // Simple demo display
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {tokenData ? (
        <>
          <img
            src={tokenData.image}
            alt={tokenData.name}
            width={120}
            height={120}
            style={{ borderRadius: "50%" }}
          />
          <h1>{tokenData.name} ({tokenData.symbol})</h1>
          <p>Website: <a href={tokenData.website} target="_blank">{tokenData.website}</a></p>
        </>
      ) : (
        <p>Loading token data...</p>
      )}
    </div>
  );
}
