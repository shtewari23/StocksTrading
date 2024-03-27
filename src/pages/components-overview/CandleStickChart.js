import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CandlestickChart = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = data.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Stock"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredData.map((stock, index) => (
        <div key={index}>
          <h3>{stock.name}</h3>
          <Chart
            options={{
              chart: {
                type: 'candlestick',
                height: 350
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            }}
            series={[{
              data: stock.data
            }]}
            type="candlestick"
            width="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default CandlestickChart;
