// src/hooks/useProjects.js
import { useState, useEffect } from "react";
import { getProjects } from "../services/projectService";

export function useProjects() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await getProjects();
        const projects = response.data || response; // Ajuste com base na estrutura da resposta
        if (Array.isArray(projects)) {
          setProjectCount(projects.length);
        } else {
          console.error("A resposta não é um array:", projects);
        }
      } catch (error) {
        console.error("Erro ao buscar os projetos:", error.message);
      }
    }

    fetchProjects();
  }, []);

  return projectCount;
}
