import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//<Link to="/user">User Page</Link> | <Link to="/admin">Admin Page</Link>

const HomePage = () => {

    const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Booking Service</h1>
      
      <button onClick={() => navigate('/user')}>User Page</button>
      <button onClick={() => navigate('/admin')}>Admin Page</button>
    </div>
  );
};

export default HomePage;
