import { VirtualTour } from "./Components/VirtualTour";

function App() {
  const tours = [
    {
      location: 'Lazer 1',
      src: "https://www.google.com/maps/embed?pb=!4v1668446127727!6m8!1m7!1sCAoSLEFGMVFpcFA3ZnRJWW0xandtU200Q0tTZ1g1aUVVbUNMSTBXYmNsN0xTVUtF!2m2!1d-23.5129283!2d-46.7322633!3f103.60045870909195!4f-27.86993380867804!5f0.7820865974627469"
    },
    {
      location: "Entrada",
      src: "https://www.google.com/maps/embed?pb=!4v1668448977099!6m8!1m7!1sjnvZVXlfJ_gNkCBzkAVw8w!2m2!1d-23.51266748349812!2d-46.73211240623755!3f156.7951756149101!4f4.138534505044845!5f0.7820865974627469"
    }
  ]
  

  return (
    <div className="App">
      <VirtualTour 
      tours={tours}
      />
    </div>
  );
}

export default App;
