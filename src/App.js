import About from "./components/About";
import Consult from "./components/Consult";
import Contacts from "./components/Contacts";
import Deals from "./components/Deals";
import Etaps from "./components/Etaps";
import Intro from "./components/Intro";
import Map from "./components/Map";
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
      <Contacts/>
      <Map/>
    </div>
  );
}

export default App;
