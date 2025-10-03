import React, { useState } from "react";

export default function Impact() {
  const [diameter, setDiameter] = useState(500);
  const [velocity, setVelocity] = useState(30);

  const styles = {
    container: {
      height: "100vh",          
      width: "100vw",           
      background: "linear-gradient(to bottom, #000, #111, #000)",
      color: "white",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box", 
    },
    backLink: {
      color: "#4ea4ff",
      cursor: "pointer",
      marginBottom: "20px",
      fontSize: "14px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#ff4d4d",
      marginBottom: "5px",
    },
    subtitle: {
      color: "#ccc",
      marginBottom: "30px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      height: "50%",        // force panels to take vertical space
    },
    panel: {
      background: "rgba(0,0,0,0.5)",
      border: "1px solid #222",
      borderRadius: "10px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    panelTitle: {
      fontSize: "20px",
      marginBottom: "5px",
    },
    panelSubtitle: {
      color: "#aaa",
      fontSize: "14px",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      margin: "10px 0 5px",
    },
    sliderContainer: {
      marginBottom: "20px",
    },
    slider: {
      width: "100%",
      height: "6px",
      borderRadius: "3px",
      background: "#333",
      outline: "none",
      margin: "10px 0",
      WebkitAppearance: "none",
    },
    sliderValue: {
      textAlign: "center",
      color: "#4ea4ff",
      fontWeight: "bold",
      fontSize: "16px",
      marginTop: "5px",
    },
    sliderLabels: {
      display: "flex",
      justifyContent: "space-between",
      color: "#888",
      fontSize: "12px",
      marginTop: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      background: "black",
      border: "1px solid #555",
      borderRadius: "6px",
      color: "white",
    },
    button: {
      marginTop: "20px",
      width: "100%",
      padding: "12px",
      background: "#ff3333",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer",
    },
    result: {
      margin: "10px 0",
    },
    catastrophic: {
      color: "red",
      fontWeight: "bold",
    },
    methodsPanel: {
      background: "rgba(40,0,0,0.5)",
      border: "1px solid #440000",
      borderRadius: "10px",
      padding: "20px",
      marginTop: "30px",
    },
    methodsTitle: {
      fontSize: "20px",
      color: "#ff4d4d",
      marginBottom: "10px",
    },
    methodsSubtitle: {
      color: "#ccc",
      marginBottom: "15px",
    },
  };

  // Custom slider styles for different browsers
  const sliderStyle = `
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ff4d4d;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 0 5px rgba(255, 77, 77, 0.5);
    }
    
    input[type=range]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ff4d4d;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 0 5px rgba(255, 77, 77, 0.5);
    }
    
    input[type=range]::-webkit-slider-track {
      background: #333;
      height: 6px;
      border-radius: 3px;
    }
    
    input[type=range]::-moz-range-track {
      background: #333;
      height: 6px;
      border-radius: 3px;
      border: none;
    }
  `;

  return (
    <div style={styles.container}>
      {/* Add custom slider styles */}
      <style>{sliderStyle}</style>
      
      {/* Back Link */}
      <div style={styles.backLink}>&larr; Back to Earth View</div>

      {/* Title */}
      <h1 style={styles.title}>Impact Simulator</h1>
      <p style={styles.subtitle}>
        Simulate asteroid impacts and understand their effects
      </p>

      {/* Panels */}
      <div style={styles.grid}>
        {/* Left Panel */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Impact Parameters</h2>
          <p style={styles.panelSubtitle}>Adjust asteroid characteristics</p>

          <div style={styles.sliderContainer}>
            <label style={styles.label}>Asteroid Diameter: {diameter} meters</label>
            <input
              type="range"
              min="10"
              max="5000"
              step="10"
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              style={styles.slider}
            />
            <div style={styles.sliderLabels}>
              <span>10m</span>
              <span>2500m</span>
              <span>5000m</span>
            </div>
          </div>

          <div style={styles.sliderContainer}>
            <label style={styles.label}>Velocity: {velocity} km/s</label>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value))}
              style={styles.slider}
            />
            <div style={styles.sliderLabels}>
              <span>1 km/s</span>
              <span>50 km/s</span>
              <span>100 km/s</span>
            </div>
          </div>

          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = "#cc0000")}
            onMouseOut={(e) => (e.target.style.background = "#ff3333")}
          >
            Run Simulation
          </button>
        </div>

        {/* Right Panel */}
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Impact Results</h2>
          <p style={styles.panelSubtitle}>Estimated effects of impact</p>

          <div style={styles.result}>
            <strong>Impact Energy:</strong> 56250.00 Megatons TNT
          </div>
          <div style={styles.result}>
            <strong>Crater Diameter:</strong> 10000 meters
          </div>
          <div style={styles.result}>
            <strong>Blast Radius:</strong> 25000 km
          </div>
          <div style={styles.result}>
            <strong>Severity Level:</strong>{" "}
            <span style={styles.catastrophic}>Catastrophic</span>
          </div>
        </div>
      </div>

      {/* Deflection Methods */}
      <div style={styles.methodsPanel}>
        <h2 style={styles.methodsTitle}>Deflection Methods</h2>
        <p style={styles.methodsSubtitle}>
          Scientists have proposed several methods to deflect potentially
          hazardous asteroids:
        </p>
        <ul>
          <li>
            <strong>Kinetic Impactor:</strong> Spacecraft collision to alter
            trajectory (NASA DART mission)
          </li>
          <li>
            <strong>Gravity Tractor:</strong> Using spacecraft's gravity to
            slowly pull asteroid
          </li>
          <li>
            <strong>Nuclear Device:</strong> Last resort for large asteroids
            with short warning
          </li>
        </ul>
      </div>
    </div>
  );
}