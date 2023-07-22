function User({ user }) {
  return (
    <>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </>
  );
}
export default User