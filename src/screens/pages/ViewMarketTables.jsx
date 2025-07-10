import { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import SmallLineChart from "../../components/graph/SmallLineChart";
import { fetchAllMarketData } from "../../utils/tokenOptions";

const ViewMarketTables = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetchAllMarketData();

      const sortedByVolume = response.sort(
        (a, b) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume)
      );

      const topCoins = sortedByVolume.slice(0, 100);

      const validatedCoins = await Promise.all(
        topCoins.map(async (coin) => {
          const symbol = coin.symbol.slice(0, -4).toLowerCase();
          let imgUrl = `https://cryptoicon-api.pages.dev/api/icon/${symbol}`;
          // const isValidImage = await checkImageUrl(imgUrl);

          // if (!isValidImage) {
          //   imgUrl = `https://img.icons8.com/pulsar-gradient/48/us-dollar.png`;
          // }

          return {
            marketCap: coin.symbol,
            price: parseFloat(coin.lastPrice)?.toFixed(2),
            percentage: parseFloat(coin.priceChangePercent).toFixed(2),
            imgSrc: imgUrl,
            priceChange24h: parseFloat(coin.priceChange),
            priceChangePercentage24h: parseFloat(coin.priceChangePercent),
            percentageVal: [
              {
                hour: "0",
                percentage: (coin.priceChangePercent / 2).toFixed(2),
              },
              {
                hour: "1",
                percentage: (coin.priceChangePercent / 1.5).toFixed(2),
              },
              {
                hour: "2",
                percentage: (coin.priceChangePercent / 1.2).toFixed(2),
              },
              {
                hour: "3",
                percentage: (coin.priceChangePercent / 1.1).toFixed(2),
              },
              {
                hour: "4",
                percentage: (coin.priceChangePercent / 1.05).toFixed(2),
              },
              {
                hour: "5",
                percentage: (coin.priceChangePercent / 1.03).toFixed(2),
              },
            ],
          };
        })
      );

      // Filter out null values
      const filteredData = validatedCoins.filter((coin) => coin !== null);
      setData(filteredData);
    } catch (error) {
      console.error("Error loading market data", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const serialNumberTemplate = (rowData, { rowIndex }) => rowIndex + 1;

  const percentageTemplate = (rowData) => {
    return (
      <div style={{ width: "100%" }}>
        <SmallLineChart
          data={rowData.percentageVal}
          percentage={rowData.percentage}
        />
      </div>
    );
  };

  const marketCapTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center gap-2">
        <div style={{ width: "20px", height: "20px" }}>
          <img src={rowData.imgSrc} />
        </div>
        <div className="">
          <span>{rowData.marketCap}</span>
          <br />
          <span>${rowData?.price}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="ViewMarketTables">
        <div className="ss-dataTable">
          <DataTable
            value={data}
            rows={10}
            paginator
            rowStyle={{ cursor: "pointer" }}
          >
            <Column
              style={{ width: "5%", paddingLeft: "8px" }}
              body={serialNumberTemplate}
              header="#"
              className="firstCol"
            />
            <Column
              style={{ width: "20%" }}
              field="marketCap"
              body={marketCapTemplate}
              header="Market Cap"
            />
            <Column
              field="price"
              header="Price ($)"
              style={{ width: "20%" }}
              body={(rowData) => {
                return (
                  <>
                    {rowData?.priceChange24h > 0 ? (
                      <span style={{ color: "#4CAF50" }}>
                        {rowData?.priceChange24h?.toFixed(2)} (
                        {rowData?.priceChangePercentage24h?.toFixed(2)}%)
                      </span>
                    ) : (
                      <span style={{ color: "#FF5722" }}>
                        {rowData?.priceChange24h?.toFixed(2)} (
                        {rowData?.priceChangePercentage24h?.toFixed(2)}%)
                      </span>
                    )}
                  </>
                );
              }}
            />
            <Column body={percentageTemplate} header="24h %" />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default ViewMarketTables;
