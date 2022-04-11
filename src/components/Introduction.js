import grid from "../images/photo-grid.png";
export default function Introduction() {
  return (
    <div className='Introduction'>
      <div className='grid-holder'>
        <img src={grid} alt='grid image' />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
