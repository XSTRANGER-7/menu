// import "@google/model-viewer";

// const ARViewer = ({ modelUrl }) => {
//   return (
//     <model-viewer
//       src={modelUrl}
//       alt="3D Model"
//       ar
//       ar-modes="webxr scene-viewer quick-look"
//       camera-controls
//       auto-rotate
//       style={{ width: "100%", height: "600px" }}
//     />
//   );
// };

// export default ARViewer;








import "@google/model-viewer";

const ARViewer = ({ modelUrl, iosModelUrl }) => {
  return (
    <model-viewer
      src={modelUrl}
      ios-src={iosModelUrl}  // iOS-specific .usdz model
      alt="3D Model"
      ar
      ar-modes="scene-viewer webxr quick-look"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      environment-image="neutral"
      style={{ width: "100%", height: "500px" }}
    >
      {/* <!-- AR Button --> */}
      <button slot="ar-button" style={arButtonStyle} className="border-2 bg-green-700">
        🕶 View in AR
      </button>
    </model-viewer>
  );
};

// Styling for the AR button
const arButtonStyle = {
  backgroundColor: "#000",
  color: "black",
  padding: "10px 20px",
  borderRadius: "10px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
};

export default ARViewer;








