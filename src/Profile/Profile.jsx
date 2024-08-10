import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { views, likes, followers },
}) {
  return (
    <div className={css.porfileContainer}>
      <div className={css.imgDscrWrap}>
        <img className={css.profileImg} src={image} alt={name} />
        <p className={css.profileTextName}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileItemText}>Followers</span>
          <span className={css.profileItemAmount}>{followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileItemText}>Views</span>
          <span className={css.profileItemAmount}>{views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileItemText}>Likes</span>
          <span className={css.profileItemAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
