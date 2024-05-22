export function FollowCard({ children, userName, isFollowing }) {
  console.log(isFollowing);
  return (
    <article className="followCard">
      <header className="followCard-header">
        <img
          className="followCard-avatar"
          alt="El avatar midudev"
          src={`https://unavatar.io/${userName}`}
        ></img>
        <div className="followCard-info">
          {children}
          <span className="followCard-infoUser">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
