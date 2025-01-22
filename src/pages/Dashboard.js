
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCurrentPriceQuery } from '../redux/cryptoApi';

const Dashboard = () => {
  const selectedCrypto = useSelector((state) => state.crypto.selectedCrypto);
  const { data, error, isLoading } = useGetCurrentPriceQuery(selectedCrypto);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const price = data?.[selectedCrypto]?.usd;
  const change = data?.[selectedCrypto]?.usd_24h_change;

  return (
    <div>
      <h2>{selectedCrypto.toUpperCase()} Price</h2>
      <p>Current Price: ${price}</p>
      <p>24-hour Change: {change?.toFixed(2)}%</p>
    </div>
  );
};

export default Dashboard;
