// Importing components and stylesheet
import "./App.css";
import RestaurantsContainer from "./components/RestaurantsContainer.jsx";

// The app.jsx is the root of the entire application where everything loads
function App() {
  return (
    <div className="App">
      {/* Calling the components through app*/}
      <RestaurantsContainer />
    </div>
  );
}

export default App;
