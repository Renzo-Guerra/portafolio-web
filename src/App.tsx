import './App.css'
import { Language, ThemeToggle } from './components'
import { backIcons, frontIcons, herramientasIcons } from './model'

function App() {
  return (
    <>
      <ThemeToggle />
      <div className='hero'>
        <h1>Renzo Guerra</h1>
        <h3>Desarrollador back-end</h3>
        <p>Hola, soy desarrollador back-end de Argentina enfocado en el desarrollo de APIs en spring-boot, familiarizado con los modulos spring-data y spring-security. También manejo las habilidades necesarias para generar la interfaz de usuario que se comunicará con la API. En mis flujos de trabajo integro herramientas clave como Docker para la contenedorización, Git para el control de versiones y Notion para la gestión de proyectos.</p>
        <p>Me recibí de la tecnicatura TUDAI (Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas) de Tandil y actualmente sigo expandiendo y adquiriendo nuevos conocimientos.</p>
        <p>Capaz de autogestionar mi tiempo de manera efectiva durante mis proyectos independientes, así como colaborar formando parte de un equipo de trabajo.</p>
      </div >
      <div className='titular' id='stack'>
        <h2>Stack tecnológico</h2>
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
      <div className='titular' id='proyectos'>
        <h2>Proyectos</h2>
      </div>
    </>
  )
}

export default App
