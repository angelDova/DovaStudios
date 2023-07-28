const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function ListOfPosts() {
  const users = await getUserData();

  return (
    <div className="">
      {users.map((user: any) => {
        return (
          <p key={user.name} className="">
            {user.name}
          </p>
        );
      })}
    </div>
  );
}
