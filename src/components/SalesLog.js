import React from 'react';

function SalesLog({ sales }) {
  const totalRevenue = sales.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Sales Log</h2>
      {sales.length === 0 ? <p>No sales yet.</p> : (
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2"><strong>Total Revenue</strong></td>
              <td><strong>${totalRevenue}</strong></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SalesLog;
