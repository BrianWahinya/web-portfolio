import { Cursor } from "react-custom-cursors";
import { Footer, Navbar } from "./components";
import { AppProvider } from "./context/AppContext";
import { Main } from "./features";
import "react-custom-cursors/dist/index.css";

function App() {
  return (
    <>
      <Cursor
        animation="beat"
        color="#de6e4cdb"
        dotColor="#632f1fdb"
        hasCursor
        hasDot
        isHollow
        mixBlendMode={false}
        size="sm"
      />
      <Navbar />
      <AppProvider>
        <div className="app">
          {/* <div className="sidebar"></div>
        <div className="sidebar2"></div>
        <div className="content"></div> */}
          <Main />
        </div>
      </AppProvider>
      <Footer />
    </>
  );
}

export default App;
