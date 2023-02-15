import css from "./Card.module.css";

export default function Card({ item }) {
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={item.photo} className={css.image} />
      </div>
      <div>
        {item.superHost && <span className={css.superHost}>super host</span>}
        <span></span>
        <span className={`material-symbols-rounded ${css.red}`}>star</span>
        <span></span>
      </div>
      <div>{item.city}</div>
    </div>
  );
}
