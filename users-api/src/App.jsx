import "./App.css";
import "./components/Title/Title.css";

import { ListOfUsers } from "./components/ListOFUsers/ListOfUsers";
import { Title } from "./components/Title/Title";
import { useDataAPI } from "./components/hooks/useDataAPI";

export function App() {
  const { data } = useDataAPI("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <div className="title-card">
        <Title title={"API user data"} />
      </div>
      <section>
        <div className="users-card">
          <ListOfUsers data={data} />
        </div>
      </section>
    </main>
  );
}
