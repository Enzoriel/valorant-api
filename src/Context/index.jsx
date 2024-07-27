import { createContext, useState } from "react";
import { useEffect } from "react";

const url = "https://valorant-api.com/v1/agents?language=es-ES";

const conexionAPI = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Ha surgido un error: ", err.message);
  }
};

const Contexto = createContext();

const ContextoProvider = ({ children }) => {
  const [agentName, setAgentName] = useState("Gekko");

  useEffect(() => {
    conexionAPI().then((datos) => {
      const agenteDato = datos.filter((agente) => agente.displayName.toLowerCase() === agentName);
      console.log(agenteDato);
    });
  }, [agentName]);

  const contextValue = {
    agentName,
    setAgentName,
  };

  return <Contexto.Provider value={contextValue}>{children}</Contexto.Provider>;
};

export { Contexto, ContextoProvider };
