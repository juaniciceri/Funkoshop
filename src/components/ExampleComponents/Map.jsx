import Card from "./Card";

const MapExample = () => {
  const users = [
    {
      id: 1,
      name: "Roberto",
      age: 40,
    },
    {
      id: 2,
      name: "Jorge",
      age: 28,
    },
  ];

  const usersForEached = users.forEach((user) => {
    return { ...user, name: user.name.toUpperCase() };
  });
  console.log(usersForEached);

  const usersMapped = users.map((user) => {
    return { ...user, name: user.name.toUpperCase() };
  });
  console.log(usersMapped);
  return (
    <>
      {users.map((user) => {
        const uppercaseName = user.name.toLocaleUpperCase();
        return <Card key={user.id} name={uppercaseName} age={user.age} />;
      })}
    </>
  );
};

export default MapExample;
