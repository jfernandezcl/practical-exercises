export function ListOfUsers({ data }) {
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <div>
            <h3>{user.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
