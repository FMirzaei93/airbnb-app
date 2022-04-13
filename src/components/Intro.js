import grid from "../images/photo-grid.png";
export default function Intro() {
  return (
    <section className='Intro'>
      <img src={grid} alt='grid image' />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
