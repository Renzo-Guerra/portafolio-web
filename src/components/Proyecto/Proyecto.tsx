import type { IProyecto } from "../../model";
import { Language } from "../Language/Language";
import "./proyecto.css";

interface Props {
  proyecto: IProyecto,
}

export const Proyecto = ({ proyecto }: Props) => {
  return (
    <>
      <div className="card-proyecto">
        <figure>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer" title="Visitar sitio">
            <img className="card-proyecto__preview" src={proyecto.imgSrc} alt={proyecto.imgAlt} />
          </a>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer" title="Visitar sitio">
            <h3>{proyecto.titulo}</h3>
          </a>
          <figcaption>{proyecto.descripcion}</figcaption>
        </figure>
        <p><strong>Stack utilizado</strong></p>
        <div className="technologies-images-container">
          {proyecto && proyecto.stack.map(stack => (
            <Language fileName={stack.fileName} name={stack.name} />
          ))}
        </div>
      </div>
    </>
  )
}