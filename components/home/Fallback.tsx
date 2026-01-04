import React from 'react';
import DataTable from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview" className="coin-overview-fallback">
      <div className="header">
        <div className="skeleton-image"></div>
        <div className="info">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      </div>
    </div>
  );
};

export const TrendingCoinFallback = () => {
  return (
    <div id="trending-coins" className="trending-coins-fallback">
      <DataTable
        columns={[{ header: 'Loading...', cell: () => <div className="skeleton-cell"></div> }]}
        data={Array(5).fill({})} // Render 5 skeleton rows
        rowKey={(row, index) => index.toString()}
      />
    </div>
  );
};
