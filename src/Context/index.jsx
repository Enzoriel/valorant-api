import { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import db from "../database/db.json";

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
  const [agentName, setAgentName] = useState(null);
  const [agente, setAgente] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const nombresAgentes = db.map((nombre) => nombre.agentName.toLowerCase());

    if (nombresAgentes.includes(agentName)) {
      conexionAPI().then((datos) => {
        const agenteDatos = datos.filter((agente) => agente.displayName.toLowerCase() === agentName);
        setAgente(agenteDatos[0]);
        navigate(`/agentes`);
      });
    }
  }, [agentName]);

  const contextValue = {
    agentName,
    setAgentName,
  };

  return <Contexto.Provider value={contextValue}>{children}</Contexto.Provider>;
};

export { Contexto, ContextoProvider };
