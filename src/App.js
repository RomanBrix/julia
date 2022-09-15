import About from "./components/About";
import Consult from "./components/Consult";
import Deals from "./components/Deals";
import Etaps from "./components/Etaps";
import Intro from "./components/Intro";
import Services from "./components/Services";


function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Services/>
      <Consult/>
      <Etaps/>
      <Deals/>
    </div>
  );
}

export default App;
