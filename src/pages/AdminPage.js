import React, { useEffect, useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import { getRequests } from '../services/api';

const AdminPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(getRequests());
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <AdminDashboard requests={requests} />
    </div>
  );
};

export default AdminPage;
