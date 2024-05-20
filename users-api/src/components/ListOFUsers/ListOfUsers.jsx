import { RightArrow } from "../../icons/RightArrow";
import "./ListOfUsers.css";

export function ListOfUsers({ data, loading }) {
  return (
    <ul>
      {loading && <li>Loading...</li>}
      {data?.map((user) => (
        <li key={user.id}>
          <div>
            <div className="container-arrow">
              <RightArrow />
              <h3 className="username">{user.name}</h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
