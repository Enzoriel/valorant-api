import "./App.css";
import Rutas from "./Rutas";

const url = "https://valorant-api.com/v1/agents";

const conexionAPI = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Ha surgido un error: ", err.message);
  }
};

function App() {
  return (
    <>
      <Rutas />
    </>
  );
}

export default App;
