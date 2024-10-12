import React from 'react';

function OverviewCard({ title, value, percentage, entries = [], onClick }) {
  return (
    <div onClick={onClick} style={{
      backgroundColor: "#FFE4E1", borderRadius: "10px", padding: "1rem", textAlign: "center", cursor: "pointer",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{ color: "#FF69B4", fontSize: "18px", fontWeight: "bold" }}>{title}</div>
      <p style={{ color: "#FF1493", fontSize: "24px", fontWeight: "bold" }}>{value}</p>
      
      <div style={{ textAlign: "left", marginTop: "1rem" }}>
        <h6>รายการล่าสุด:</h6>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {entries.slice(-3).map((entry, index) => (
            <li key={index}>ที่มา: {entry.source || "-"} | จำนวนเงิน: ${isNaN(entry.amount) ? "-" : entry.amount}</li>
          ))}
        </ul>
      </div>    
    </div>
  );
}

export default OverviewCard;
