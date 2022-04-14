import star from "../images/star.png";

export default function Card(props) {
  return (
    <section className='card'>
      <div className='item-image'>
        <img src={`../images/${props.img}`} alt='item-image' />
        <span className='sold-status'>{props.sold_status}</span>
      </div>
      <div className='info'>
        <img src={star} alt='star-icon' />
        <span className='ratings'>{props.rarings}</span>
        <div className='ratings-num'>
          <span>(</span>
          {props.ratings_num}
          <span>).</span>
        </div>
        <span className='location'>{props.location}</span>
      </div>
      <p className='title'>{props.title}</p>
      <span className='price'>{props.price}</span>
      <span className='owner-status'> {" / "}person</span>
    </section>
  );
}
