import type { ILanguage } from "./language.model";

export interface IProyecto {
  titulo: string,
  descripcion: string,
  link: string,
  lenguajes: ILanguage[]
}