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
        <a href={proyecto.link} target="_blank" rel="noopener noreferrer" title="Visitar sitio">
          <picture>
            <source
              media="(min-width: 480px)"
              srcSet={proyecto.imgSrcDesktop} />
            <img
              className="card-proyecto__preview"
              src={proyecto.imgSrcPhone}
              alt={proyecto.imgAlt} />
          </picture>
        </a>
        <a href={proyecto.link} target="_blank" rel="noopener noreferrer" title="Visitar sitio">
          <h3>{proyecto.titulo}</h3>
        </a>
        <p>{proyecto.descripcion}</p>
        <p><strong>Stack utilizado</strong></p>
        <div className="technologies-images-container">
          {proyecto && proyecto.stack.map(stack => (
            <Language key={stack.fileName} fileName={stack.fileName} name={stack.name} />
          ))}
        </div>
      </div >
    </>
  )
}