import "./App.css";

import { ListOfUsers } from "./components/ListOFUsers/ListOfUsers";
import { useDataAPI } from "./components/hooks/useDataAPI";

export function App() {
  const { data } = useDataAPI("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <div>
        <h1>API user data</h1>
      </div>
      <section>
        <div>
          <ListOfUsers data={data} />
        </div>
      </section>
    </main>
  );
}
