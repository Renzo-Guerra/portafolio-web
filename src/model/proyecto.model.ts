import type { ILanguage } from "./language.model";

export interface IProyecto {
  titulo: string,
  descripcion: string,
  imgSrc: string,
  imgAlt: string,
  link: string,
  stack: ILanguage[]
}