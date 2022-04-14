import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='margin-container'>
        <Intro />
        <Card
          // The properties of this component. Like style property of an html tag:
          // <div style=...  class=... ></div>
          img='katie-zaferes.png'
          sold_status='sold out'
          ratings='5'
          ratings_num={6}
          location='USA'
          title='Life lesson with Katie'
          price='From $136'
        />
        <Card
          img={Image}
          sold_status='exists'
          ratings='4.5'
          ratings_num='30'
          location='USA'
          title='Jeans'
          price='From $50'
        />
      </div>
    </div>
  );
}

export default App;
