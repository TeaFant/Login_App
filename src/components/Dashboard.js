import React from 'react';

function Dashboard({logout, name}) {
  
    return (
      <div className="dashboard">  
        <h2>Welcome {name}</h2>
        <h3>You have successfully logged in</h3>
        <p>This is my first login app!!</p>
        <button className="btn"
                type="submit"
                onClick={logout}>Logout</button>
      </div>
    );
  }
  
  export default Dashboard;