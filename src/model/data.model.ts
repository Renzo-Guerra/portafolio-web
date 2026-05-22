import type { ILanguage } from "./language.model";
import type { IProyecto } from "./proyecto.model";

export const frontIcons: ILanguage[] = [
  {
    fileName: "html5.svg",
    name: "html5",
  },
  {
    fileName: "css.svg",
    name: "css",
  },

  {
    fileName: "javascript.svg",
    name: "javascript",
  },
  {
    fileName: "react.svg",
    name: "react",
  }
];

export const backIcons: ILanguage[] = [
  {
    fileName: "spring.svg",
    name: "spring boot",
  },
  {
    fileName: "spring-data.svg",
    name: "spring data",
  },
  {
    fileName: "spring-security.svg",
    name: "spring security",
  },
  {
    fileName: "postgresql.svg",
    name: "postgresql",
  },
];

export const herramientasIcons: ILanguage[] = [
  {
    fileName: "docker.svg",
    name: "docker",
  },
  {
    fileName: "git.svg",
    name: "git",
  },
  {
    fileName: "notion.svg",
    name: "notion",
  },
];

export const proyectos: IProyecto[] = [
  {
    titulo: "Gestor canchas",
    descripcion: "Sistema el cual permita al dueño de un centro deportivo gestionar tanto sus canchas como los turnos que irá programando para sus clientes.",
    imgSrc: `${import.meta.env.BASE_URL}src/assets/images/centro-deportivo.png`,
    imgAlt: "Dashboard del centro deportivo",
    link: "https://centro-deportivo-frontend.vercel.app",
    stack: [
      {
        fileName: "spring.svg",
        name: "",
      },
      {
        fileName: "spring-data.svg",
        name: "",
      },
      {
        fileName: "spring-security.svg",
        name: "",
      },
      {
        fileName: "postgresql.svg",
        name: "",
      },
      {
        fileName: "react.svg",
        name: "",
      },
      {
        fileName: "docker.svg",
        name: "",
      },
      {
        fileName: "git.svg",
        name: "",
      },
      {
        fileName: "notion.svg",
        name: "",
      },

    ]
  },
]