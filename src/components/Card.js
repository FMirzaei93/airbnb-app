import star from "../images/star.png";

export default function Card({ sold_status, location, price }) {
  return (
    <section className='card'>
      <div className='item-image'>
        {/* <span className='sold-status'>{props.sold_status}</span> */}
        <span className='sold-status'>{sold_status}</span>
      </div>
      <div className='info'>
        <img src={star} alt='star-icon' />

        {/* <span className='location'>{props.location}</span> */}
        <span className='location'>{location}</span>
      </div>
      {/* <span className='price'>{props.price}</span> */}
      <span className='price'>{price}</span>

      <span className='owner-status'> {" / "}person</span>
    </section>
  );
}

// Note

const card = {
  ratings: "5",
  location: "USA",
  title: "I am the title",
  price: "From $136",
};

const { ratings, title } = card;
console.log(title);
