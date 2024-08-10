import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendsListItem({ avatar, name, isOnline }) {
  const onlineCssClass = clsx(
    css.text,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.textName}>{name}</p>
      <p className={onlineCssClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
