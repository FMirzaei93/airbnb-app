import star from "../images/star.png";
import photo from "../images/katie-zaferes.png";

export default function Card() {
  return (
    <section className='card'>
      <div className='item-photo'>
        <img src={photo} alt='item-photo' />
        <span className='sold-status'>sold out</span>
      </div>
      <div className='info'>
        <img src={star} alt='star-icon' />
        <span className='ratings'>5</span>
        <div className='ratings-num'>
          <span>(</span>6<span>).</span>
        </div>
        <span className='location'>USA</span>
      </div>
      <p className='title'>Life lesson with Katie</p>
      <span className='price'>From $136</span>
      <span className='owner-status'> {" / "}person</span>
    </section>
  );
}
