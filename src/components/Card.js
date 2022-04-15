export default function Card(props) {
  return (
    <div className='card'>
      <div className='item-image'>
        <img src={`/images/${props.img}`} alt='item-image' />

        <span className='availability'>{props.availability}</span>
      </div>
      <div className='info'>
        <img src={"/images/star.png"} alt='star-icon' />
        <span>{props.rating}</span>
        <div>
          <span>(</span>
          {props.reviewCount}
          <span>).</span>
        </div>
        <span>{props.location}</span>
      </div>
      <p className='description'>{props.description}</p>
      <div>
        <span className='price'>{props.price}</span>{" "}
        <span style={{ fontSize: "10px" }}>{" / "}person</span>
      </div>
    </div>
  );
}
