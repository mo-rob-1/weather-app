import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import Cities from "./components/Cities";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        {/* <Header /> */}
        <DisplayWeather />
        {/* <Cities /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
