import ColorBox from "./components/ColorBox";
import Colorcontext from "./contexts/color";

function App() {
  return (
    <Colorcontext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </Colorcontext.Provider>
  );
}

export default App;
