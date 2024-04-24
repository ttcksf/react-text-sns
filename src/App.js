import Top from "./screens/Top/Top";

function App() {
  return (
    <div className="App">
      <div className="bgBlur bgBlurLeftTop"></div>
      <div className="bgBlur bgBlurRightTop"></div>
      <Top />
      <div className="bgBlur bgBlurLeftBottom"></div>
      <div className="bgBlur bgBlurRightBottom"></div>
    </div>
  );
}

export default App;
