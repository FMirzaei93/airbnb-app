export default function Card(props) {
  let badgeText;
  props.item.openSpots > 0 ? (badgeText = "exist") : (badgeText = "sold out");

  return (
    <div className='card'>
      <div className='item-image'>
        <img src={`/images/${props.item.coverImg}`} alt='item-image' />
        {badgeText && <span className='availability'>{badgeText}</span>}
        {/* The span will only be displayed if badgeText is true(if it exists)  */}
      </div>
      <div className='info'>
        <img src={"/images/star.png"} alt='star-icon' />
        <span>{props.item.stats.rating}</span>
        <div>
          <span>(</span>
          {props.item.stats.reviewCount}
          <span>) • </span>
        </div>
        <span>{props.item.location}</span>
      </div>
      <p className='description'>{props.item.description}</p>
      <div>
        <span className='price'>{props.item.price}</span>{" "}
        <span style={{ fontSize: "10px" }}>{" / "}person</span>
      </div>
    </div>
  );
}
