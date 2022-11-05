import About from "./components/About";
import Consult from "./components/Consult";
import Contacts from "./components/Contacts";
import Deals from "./components/Deals";
import Documents from "./components/Documents";
import Etaps from "./components/Etaps";
import Intro from "./components/Intro";
import Map from "./components/Map";
import Services from "./components/Services";
import Videos from "./components/Videos";


function App() {
  return (
    <div className="App">

      <Intro/>
      <About/>
      <Documents/>
      <Videos/>
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
