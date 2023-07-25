import Navbar from "./navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times.</p>
        <p>{5 + 5}</p>
        <p>{"Hello wisest"}</p>
        <p>{Math.trunc(Math.random() * 10)}</p>
        <a href={link}>Goole site</a>
      </div>
    </div>
  );
}

export default App;
