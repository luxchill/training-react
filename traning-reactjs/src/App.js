import { FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile__fb">
          <h2>
            <a
              href="https://www.facebook.com/anhnhph33991/?locale=vi_VN"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook/>
            </a>
          </h2>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
