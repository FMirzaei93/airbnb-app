import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import cardsData from "./cardsData";

function App() {
  const cardElements = cardsData.map((item) => {
    return (
      <Card
        key={item.id}
        item={item} //A substitution for below codes
        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // location={card.location}
        // description={card.description}
        // price={card.price}
        // openSpots={card.openSpots}
        //  And in the Card component: props.img and so on.

        //Another way(Spread syntax):
        //{...item}
        // And in the Card component: props.img and so on.
      />
    );
  });

  console.log({ cardElements });

  return (
    <div className='App'>
      <Navbar />
      <div className='margin-container'>
        <Intro />
        {/* Using JS code inside JSX(html inside js) needs curly braces*/}
        <section className='cards-list'>{cardElements}</section>
        {/* <Card
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
        /> */}
      </div>
    </div>
  );
}

export default App;
