import "./language.css";

interface Props {
  fileName: string,
  name: string,
}

export const Language = ({ fileName, name }: Props) => {
  return (
    <>
      <div className="language-container">
        <img src={`/public/assets/icons/${fileName}`} alt={`${name} icon`} />
        <span>{name}</span>
      </div>
    </>
  )
}