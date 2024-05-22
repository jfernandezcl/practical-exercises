export function followCard({ userName, name, isFollowing }) {
  const imageSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="followCard">
      <header className="followCard-header">
        <img
          className="followCard-avatar"
          alt="El avatar midudev"
          src={imageSrc}
        ></img>
        <div className="followCard-info">
          <strong>{name}</strong>
          <span className="followCard-infoUser">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
