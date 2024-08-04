import { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import db from "../database/db.json";

const url = "https://valorant-api.com/v1/agents?language=es-MX";

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
  const [agentes, setAgentes] = useState(null);
  const [agente, setAgente] = useState(null);
  const [dbAgente, setDbAgente] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    conexionAPI().then((data) => {
      const filtroSova = data.filter((sova) => sova.isPlayableCharacter != false);
      const allAgents = filtroSova.map((datos) => ({
        nombre: datos.displayName,
        icono: datos.displayIconSmall,
        rol: datos.role.displayName,
      }));
      setAgentes(allAgents);
    });
  }, []);

  useEffect(() => {
    const nombresAgentes = db.map((nombre) => nombre.agentName.toLowerCase());

    if (nombresAgentes.includes(agentName)) {
      conexionAPI().then((datos) => {
        const agenteDatos = datos.filter(
          (agente) => agente.isPlayableCharacter && agente.displayName.toLowerCase() === agentName
        );
        const dbAgenteDatos = db.filter((agente) => agente.agentName.toLowerCase() === agentName);
        setAgente(agenteDatos[0]);
        setDbAgente(dbAgenteDatos[0]);
        navigate(`/agentes`);
      });
    } else navigate("/");
  }, [agentName]);

  const contextValue = {
    agentName,
    setAgentName,
    agente,
    dbAgente,
    agentes,
  };

  return <Contexto.Provider value={contextValue}>{children}</Contexto.Provider>;
};

export { Contexto, ContextoProvider };
