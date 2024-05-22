import "./App.css";
import { FollowCard } from "./components/FollowCard";

export function App() {
  return (
    <section className="App">
      <FollowCard isFollowing userName="midudev">
        <strong>Miguel Ángel Durán</strong>
      </FollowCard>
      <FollowCard isFollowing={false} userName="hernan">
        <strong>Pablo Hernandez</strong>
      </FollowCard>
    </section>
  );
}
