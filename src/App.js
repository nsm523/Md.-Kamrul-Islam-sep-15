import logo from "./logo.png";

function App() {
  return (
    <div className="w-full min-h-screen flex bg-gray-300">
      <div className="App-header w-full sm:mx-w-md m-auto text-center">
        <h1 className="text-3xl font-bold mb-3">Hello world!</h1>
        <img src={logo} className="App-logo m-auto animate-pulse" alt="logo" />
        <p className="text-4xl md:text-2xl sm:text-xl mt-4">
          React practice start here...
        </p>
        <a
          className="App-link hover:text-red-500 text-teal-500 text-xl"
          href="https://reactjs.org/tutorial/tutorial.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Tutorial
        </a>
      </div>
    </div>
  );
}

export default App;
