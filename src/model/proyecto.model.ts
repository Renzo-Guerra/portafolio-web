import type { ILanguage } from "./language.model";

export interface IProyecto {
  titulo: string,
  descripcion: string,
  imgSrcPhone: string,
  imgSrcDesktop: string,
  imgAlt: string,
  link: string,
  isFinished: boolean,
  stack: ILanguage[]
}