import "./App.css";

import { ListOfUsers } from "./components/ListOFUsers/ListOfUsers";
import { Title } from "./components/Title/Title";
import { useDataAPI } from "./components/hooks/useDataAPI";

export function App() {
  const { data } = useDataAPI("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <div>
        <Title title={"API user data"} />
      </div>
      <section>
        <div>
          <ListOfUsers data={data} />
        </div>
      </section>
    </main>
  );
}
