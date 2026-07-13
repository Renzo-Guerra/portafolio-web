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
    fileName: "tailwindcss.svg",
    name: "tailwindcss",
  },
  {
    fileName: "javascript.svg",
    name: "javascript",
  },
  {
    fileName: "typescript.svg",
    name: "typescript",
  },
  {
    fileName: "react.svg",
    name: "react",
  },
  {
    fileName: "react-hook-form.webp",
    name: "react-hook-form",
  },
  {
    fileName: "zod.webp",
    name: "zod",
  },
  {
    fileName: "leaflet.svg",
    name: "leaflet",
  },
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
  {
    fileName: "postman.svg",
    name: "postman",
  },
];

export const proyectosEnProgreso: IProyecto[] = [
  {
    titulo: 'Arquitecta Benitez',
    descripcion: "Landing page promocionando los servicios que ofrece la arquitecta Sofía Benitez.",
    imgSrcPhone: `/assets/images/landing-arquitecta-phone.png`,
    imgSrcDesktop: `/assets/images/landing-arquitecta-desktop.png`,
    imgAlt: 'Landing page de la arquitecta Sofía Benitez',
    link: "https://arquitecta-benitez.vercel.app/",
    stack: [
      {
        fileName: "react.svg",
        name: "",
      },
      {
        fileName: "typescript.svg",
        name: "",
      },
      {
        fileName: "tailwindcss.svg",
        name: "",
      },
      {
        fileName: "zod.webp",
        name: "",
      },
      {
        fileName: "react-hook-form.webp",
        name: "",
      },
      {
        fileName: "git.svg",
        name: "",
      },
    ]
  },
  {
    titulo: 'NecoLlega',
    descripcion: "Diseñado para resolver la falta de información sobre el transporte público en la ciudad de Necochea, Buenos Aires.Esta aplicación web interactiva permite a los ciudadanos y turistas visualizar recorridos, ubicar paradas y consultar tiempos estimados de los colectivos locales.",
    imgSrcPhone: `/assets/images/necollega-phone.png`,
    imgSrcDesktop: `/assets/images/necollega-desktop.png`,
    imgAlt: 'Mapa de Necochea con recorridos de colectivo',
    link: "https://neco-llega.vercel.app/inicio",
    stack: [
      {
        fileName: "react.svg",
        name: "",
      },
      {
        fileName: "typescript.svg",
        name: "",
      },
      {
        fileName: "leaflet.svg",
        name: "",
      },
      {
        fileName: "git.svg",
        name: "",
      },
    ]
  },
];

export const proyectosTerminados: IProyecto[] = [
  {
    titulo: 'Panaderia "Postres y Poemas"',
    descripcion: "Rediseño de sitio web de una panadería la cual siento que puede ser más UX friendly.",
    imgSrcPhone: `/assets/images/panaderia-postres-y-poemas-phone.png`,
    imgSrcDesktop: `/assets/images/panaderia-postres-y-poemas-desktop.png`,
    imgAlt: 'Inicio de "Postres y Poemas"',
    link: "https://panaderia-postres-y-poemas.vercel.app/",
    stack: [
      {
        fileName: "react.svg",
        name: "",
      },
      {
        fileName: "typescript.svg",
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
    ]
  },
  {
    titulo: "Gestor canchas",
    descripcion: "Sistema fullstack el cual permita al dueño de un centro deportivo gestionar tanto sus canchas como los turnos que irá programando para sus clientes.",
    imgSrcPhone: `/assets/images/centro-deportivo-phone.png`,
    imgSrcDesktop: `/assets/images/centro-deportivo-desktop.png`,
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
        fileName: "typescript.svg",
        name: "",
      },
      {
        fileName: "react-hook-form.webp",
        name: "",
      },
      {
        fileName: "zod.webp",
        name: "",
      },
      {
        fileName: "docker.svg",
        name: "",
      },
      {
        fileName: "postman.svg",
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
  {
    titulo: "El impostor",
    descripcion: "Una aplicación web desarrollada con React y TypeScript diseñada para animar reuniones sociales. El objetivo es simple: descubrir quién miente antes de que el impostor descubra el secreto.",
    imgSrcPhone: `/assets/images/el-impostor-phone.png`,
    imgSrcDesktop: `/assets/images/el-impostor-desktop.png`,
    imgAlt: "Formulario para comenzar el juego",
    link: "https://el-impostor-beige.vercel.app/",
    stack: [
      {
        fileName: "react.svg",
        name: "",
      },
      {
        fileName: "typescript.svg",
        name: "",
      },
      {
        fileName: "react-hook-form.webp",
        name: "",
      },
      {
        fileName: "zod.webp",
        name: "",
      },
      {
        fileName: "git.svg",
        name: "",
      },
    ]
  },
  {
    titulo: "Book Tracker",
    descripcion: "Una aplicación web desarrollada con React y TypeScript que permite a un usuario llevar un control de los libros ya leidos, los que está leyendo y los que planea leer en un futuro. Los datos son guardados en el local storage.",
    imgSrcPhone: `/assets/images/book-tracker-phone.png`,
    imgSrcDesktop: `/assets/images/book-tracker-desktop.png`,
    imgAlt: "Applicacion web que trackea libros",
    link: "https://my-books-list-73czjhm2y-renzo-guerra-lattours-projects.vercel.app/",
    stack: [
      {
        fileName: "react.svg",
        name: "",
      },
      {
        fileName: "typescript.svg",
        name: "",
      },
      {
        fileName: "react-hook-form.webp",
        name: "",
      },
      {
        fileName: "zod.webp",
        name: "",
      },
      {
        fileName: "git.svg",
        name: "",
      },
    ]
  },
];