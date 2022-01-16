import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import DisplayWeather from "./components/DisplayWeather";
import Cities from "./components/Cities";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <SearchInput />
      <DisplayWeather />
      <Cities />
      <Footer />
    </div>
  );
}

export default App;
