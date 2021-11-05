import Title from "./components/Title";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Title />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
