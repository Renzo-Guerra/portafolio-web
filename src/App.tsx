import './App.css'
import { Language, ThemeToggle } from './components'

function App() {
  const frontIcons: { fileName: string, name: string }[] = [
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

  const backIcons: { fileName: string, name: string }[] = [
    {
      fileName: "spring.svg",
      name: "spring boot",
    },
    {
      fileName: "spring-data.svg",
      name: "spring data",
    },
    {
      fileName: "postgresql.svg",
      name: "postgresql",
    },
  ];

  const herramientasIcons: { fileName: string, name: string }[] = [
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

  return (
    <>
      <ThemeToggle />
      <div className='hero'>
        <h1>Renzo Guerra</h1>
        <h3>Desarrollador back-end</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi tempore provident fuga, quae cum ratione accusamus suscipit laborum earum optio molestiae dolor illo sed vel quam. Eius, voluptatem maiores?</p>
      </div>
      <h3>Front-end</h3>
      <div className='technologies-container'>
        {frontIcons.map(icon => (
          <Language key={icon.fileName} fileName={icon.fileName} name={icon.name} />
        ))}
      </div>
      <h3>Back-end</h3>
      <div className='technologies-container'>
        {backIcons.map(icon => (
          <Language key={icon.fileName} fileName={icon.fileName} name={icon.name} />
        ))}
      </div>
      <h3>Tools</h3>
      <div className='technologies-container'>
        {herramientasIcons.map(icon => (
          <Language key={icon.fileName} fileName={icon.fileName} name={icon.name} />
        ))}
      </div>
    </>
  )
}

export default App
