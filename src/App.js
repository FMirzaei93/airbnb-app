import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='margin-container'>
        <Intro />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
