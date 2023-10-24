import Testimonio from "./componentes/Testimonio.jsx";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que opinan los Alumnos de React</h1>
        <Testimonio
          nombre="Alex"
          pais="Madagascar"
          imagen="Roberto"
          cargo="Musico"
          empresa="Huntza"
          testimonio="El grupo Huntza se creó en las calles de Bilbao en 2014. Se fueron conociendo y formando el grupo en los jueves de trikipoteo universitario de Bilbao. Todos los componentes del grupo proceden, sin embargo, de diferentes pueblos de Guipúzcoa.
La primera aparición del grupo fue el 8 de marzo de 2016, presentando la canción “Harro gaude”. En este trabajo homenajearon a las primeras mujeres que dieron el paso de subir al escenario, abriendo la puerta así a los conciertos que no pararían de llegar. En noviembre de 2016 publicaron la canción Aldapan gora.1. La primera aparición del grupo fue el 8 de marzo de 2016, presentando la canción “Harro gaude”. En este trabajo homenajearon a las primeras mujeres que dieron el paso de subir al escenario, abriendo la puerta así a los conciertos que no pararían de llegar. En noviembre de 2016 publicaron la canción Aldapan gora.1​"
        />
        <Testimonio
          nombre="Pamela"
          pais="Auestralia"
          imagen="Pamela"
          cargo="Piloto de aviones"
          emppresa="Iberia"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate tempora tenetur cumque vitae expedita quibusdam, laboriosam dignissimos similique quia ab pariatur, sed harum quae aut maiores illo deleniti, perspiciatis fuga!"
        />
        <Testimonio
          nombre="Juana"
          pais="Moderdonia"
          imagen="Juana"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim, rerum eos accusamus aut labore. Illo officiis voluptate autem quam blanditiis? Nesciunt molestias obcaecati illum aspernatur ipsum, quae voluptas itaque."
        />
      </div>
    </div>
  );
}

export default App;
