import "./language.css";

interface Props {
  fileName: string,
  name: string,
}

export const Language = ({ fileName, name }: Props) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <div className="language-container">
        <img src={`${baseUrl}src/assets/${fileName}`} alt={`${name} icon`} />
        <span>{name}</span>
      </div>
    </>
  )
}