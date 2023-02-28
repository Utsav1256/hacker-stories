import logo from "./logo.svg";
import "./App.css";

const title = "React";
const welcome = {
  greeting: "Hey",
  title: "Love You 3000",
};
function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello World :)</h1>
      <h1>Hello {title} ;)</h1>
      <h1>
        {/* Remember, everything in curly braces in JSX can be used for JavaScript expressions */}
        {welcome.greeting}!! {welcome.title}
      </h1>
      <h1>Hello {getTitle("Buddy 🙂")}</h1>
    </div>
  );
}

export default App;
