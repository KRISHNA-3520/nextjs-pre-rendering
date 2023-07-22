import User from "../components/user";

function UserList({ userData }) {
  return (
    <>
      <h1>User List</h1>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
  };
}
