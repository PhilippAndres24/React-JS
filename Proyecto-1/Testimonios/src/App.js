import './App.css'; //se importa el estilo que se ocupara
import { Testimonio } from './componentes/Testimonio'


function App() {
  return (       //return nos permite retornar la estructura de la app
    <div className="App">
      {/* Para mostrar un componente "Testimonio" se debe importar , ademas tambien se debe exportar el componente directamente dentro del componente "export default Testimonio"*/}
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio 
          nombre='Andrea'
          pais='Chile'
          imagen='Andrea'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio 
          nombre='Andres'
          pais='España'
          imagen='Andres'
          cargo='Ingeniera de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
        <Testimonio 
          nombre='Cristobal'
          pais='Brasil'
          imagen='Cristobal'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
      </div>
    </div>
  );
}

export default App; //Esto nos permite que mostrar nuestra app
