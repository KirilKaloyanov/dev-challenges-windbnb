import css from "./Card.module.css";

export default function Card({ item }) {
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={item.photo} className={css.image} />
      </div>
      <div className={css.description}>
        <div className={css.info}>
          {item.superHost && <div className={css.superHost}>super host</div>}
          <span className={css.greyText}>
            {item.type} &nbsp; &nbsp;
            {item.beds && <span>{item.beds} beds</span>}
          </span>
        </div>
        <span className={css.rating}>
          <span className={`material-symbols-rounded ${css.red}`}>star</span>
          <span>{item.rating}</span>
        </span>
      </div>
      <div className={css.title}>{item.title}</div>
    </div>
  );
}
