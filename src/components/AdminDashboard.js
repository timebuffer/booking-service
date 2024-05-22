import React from 'react';

const AdminDashboard = ({ requests }) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>
            <p>Address: {request.address}</p>
            <p>Products: {request.products.map(p => p.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
