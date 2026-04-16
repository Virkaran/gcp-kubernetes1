import React, { useEffect, useState } from 'react';

// 1. Change the function name here
function GCPDashboard() { 
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div style={{ backgroundColor: '#111827', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#60A5FA' }}>GCP Kubernetes Project</h1>
      <div style={{ background: '#1F2937', padding: '20px', borderRadius: '10px', border: '1px solid #374151' }}>
        <h3>Backend Status:</h3>
        <p style={{ color: data ? '#10B981' : '#F87171' }}>
          {data ? data.message : "Connecting to Backend..."}
        </p>
      </div>
    </div>
  );
}

// 2. Change the export name here
export default GCPDashboard;