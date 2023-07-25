import { useState } from "react";

const Home = () => {
  // let name = "Wisest";
  const [name, setName] = useState("Wisest");
  const [age, setAge] = useState(30);

  const updatePerson = () => {
    setName("Chiji");
    setAge(36);
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };
  return (
    <div className="home">
      <h2>Blog home page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={updatePerson}>Update person</button>
      <button
        onClick={() => {
          handleClickAgain("Chiji");
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
