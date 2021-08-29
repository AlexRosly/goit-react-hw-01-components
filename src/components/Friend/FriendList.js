import PropTypes from "prop-types";
import css from "./Friend.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <span className={css.status}>
            {friend.isOnline ? (
              <span className={css.online}></span>
            ) : (
              <span className={css.ofline}></span>
            )}
          </span>
          <img className={css.avatar} src={friend.avatar} alt="" width="48" />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
