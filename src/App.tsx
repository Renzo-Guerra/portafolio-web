import './App.css'
import { Language, Proyecto, ThemeToggle } from './components'
import { useTheme } from './context';
import { backIcons, frontIcons, herramientasIcons, proyectos } from './model'

function App() {
  const { theme } = useTheme();

  return (
    <>
      <nav className='navbar'>
        <ThemeToggle />
        <ul>
          <a href="https://www.linkedin.com/in/renzo-guerra-lattour-008473246/" target="_blank" rel="noopener noreferrer" title='LinkedIn/renzo-guerra-lattour'>
            <img src={`${import.meta.env.BASE_URL}src/assets/icons/linkedin.svg`} alt="LinkedIn/" />
          </a>
          <a href="https://github.com/Renzo-Guerra" target="_blank" rel="noopener noreferrer" title='Github/Renzo-Guerra'>
            <img src={`${import.meta.env.BASE_URL}src/assets/icons/github_${theme == "dark" ? "dark" : "light"}.svg`} alt="GitHub/" />
          </a>
        </ul>
      </nav>
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
      <div className='proyectos-container'>
        {proyectos && proyectos.map(proyecto => (
          <Proyecto proyecto={proyecto} />
        ))}
      </div>
    </>
  )
}

export default App
