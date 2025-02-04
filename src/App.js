

// function App() {
//   return (
//     <div className="App">
//       j
//     </div>
//   );
// }

// export default App;















// import ARViewer from "./ARViewer";

// function App() {
//   return (
//     <div>
//       <h1 className="">View Dish in AR</h1> 
//       {/* <ARViewer modelUrl="https://xstranger-7.github.io/cookie/labu.glb" /> */}
//       <ARViewer modelUrl="https://xstranger-7.github.io/cookie/burger.glb" />
//     </div>
//   );
// }

// export default App;



import ARViewer from "./ARViewer";

function App() {
  return (
    <div>
      <h1>View Dish in AR</h1>
      <ARViewer 
        modelUrl="https://xstranger-7.github.io/cookie/burger.glb" 
        iosModelUrl="https://xstranger-7.github.io/cookie/burger.usdz"
      />
    </div>
  );
}

export default App;









