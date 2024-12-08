import "./App.css";

import { ListOfUsers } from "./components/ListOFUsers/ListOfUsers";
import { Title } from "./components/Title/Title";
import { useDataAPI } from "./components/hooks/useDataAPI";

export function App() {
  const { data, loading, error, handleCancelRequest } = useDataAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <main>
      <div className="card-title">
        <Title title={"API user data"} />
      </div>
      <div className="botton-cancel">
        <button onClick={handleCancelRequest}>Cancel request</button>
      </div>
      <section>
        <div className="users-card">
          <ListOfUsers data={data} loading={loading} error={error} />
        </div>
      </section>
    </main>
  );
}
