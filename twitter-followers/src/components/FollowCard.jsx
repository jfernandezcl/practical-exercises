import { useState } from "react";

export function FollowCard({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "followCard-button is-following"
    : "followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="followCard">
      <header className="followCard-header">
        <img
          className="followCard-avatar"
          alt="El avatar midudev"
          src={`https://unavatar.io/${userName}`}
        ></img>
        <div className="followCard-info">
          <strong>{children}</strong>
          <span className="followCard-infoUser">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
