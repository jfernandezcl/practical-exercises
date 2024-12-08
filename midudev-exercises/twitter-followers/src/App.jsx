import "./App.css";
import { FollowCard } from "./components/FollowCard";

export function App() {
  const midudev = { isFollowing: true, userName: "midudev" };
  const hernan = { isFollowing: false, userName: "hernan" };
  return (
    <section className="App">
      <FollowCard {...midudev}>
        <strong>Miguel Ángel Durán</strong>
      </FollowCard>
      <FollowCard {...hernan}>
        <strong>Pablo Hernandez</strong>
      </FollowCard>
    </section>
  );
}
