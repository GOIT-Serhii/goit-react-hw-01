import FriendsListItem from "../FriendListItem/FriendListItem";

import css from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((item) => {
        return (
          <li className={css.friendsItem} key={item.id}>
            <FriendsListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
