import { VirtualTour } from "./Components/VirtualTour";

function App() {
  const tours  = [
    {
      location: 'Lazer 1',
      src: "https://www.google.com/maps/embed?pb=!4v1668446127727!6m8!1m7!1sCAoSLEFGMVFpcFA3ZnRJWW0xandtU200Q0tTZ1g1aUVVbUNMSTBXYmNsN0xTVUtF!2m2!1d-23.5129283!2d-46.7322633!3f103.60045870909195!4f-27.86993380867804!5f0.7820865974627469"
    },
    {
      location: "Entrada",
      src: "https://www.google.com/maps/embed?pb=!4v1668448977099!6m8!1m7!1sjnvZVXlfJ_gNkCBzkAVw8w!2m2!1d-23.51266748349812!2d-46.73211240623755!3f156.7951756149101!4f4.138534505044845!5f0.7820865974627469"
    },
    {
      location: "dasdasdas",
      src: "https://www.google.com/maps/embed?pb=!4v1668706242241!6m8!1m7!1sCAoSLEFGMVFpcE9mV29kcjZROGpxbUphRnlKN3Vud01KQWEweUxaSDJJSHlnSG14!2m2!1d-23.5132733!2d-46.7321128!3f160!4f0!5f0.7820865974627469"
    },
    {
      location: "Refeitório",
      src: "https://www.google.com/maps/embed?pb=!4v1668706482857!6m8!1m7!1sCAoSLEFGMVFpcE9kdUgxeHczMERwV0VTdldoWFI2YWFSVVMtY2paRW5ZeW1sejZR!2m2!1d-23.5130911!2d-46.73194729999999!3f34.6264604934018!4f-9.186535290716662!5f0.7820865974627469"
    },
    {
      location: "Sala de aula",
      src: "https://www.google.com/maps/embed?pb=!4v1668706558804!6m8!1m7!1sCAoSLEFGMVFpcE0yMnVBd2M0a002Z3ZpaF8tczR2OUJGNFB6R3p6eHVaeVNEMm8w!2m2!1d-23.512874!2d-46.7306515!3f4.7053108962571635!4f-16.014399947573793!5f0.7820865974627469"
    },
    {
      location: "Cruzamento edifícios",
      src: "https://www.google.com/maps/embed?pb=!4v1668706665579!6m8!1m7!1sCAoSLEFGMVFpcE0wN3hqaUs0Tzh1NnFmamh3OEpuaTF3NDg0TkpZbDU5cFdXU25v!2m2!1d-23.5133505!2d-46.7318526!3f182.01164347440397!4f-16.522887013886447!5f0.7820865974627469"
    },
    {
      location: "Área de tênis de mesa",
      src: "https://www.google.com/maps/embed?pb=!4v1668706739610!6m8!1m7!1sCAoSLEFGMVFpcFBmMThGeE9vZkE0Y19LZ3FlNG81ODduVUJCNkoyOXN1Rmp2dk5z!2m2!1d-23.5081217!2d-46.7830167!3f336.2128816846995!4f7.845946023412409!5f0.7820865974627469"
    },
    {
      location: "Laboratório",
      src: "https://www.google.com/maps/embed?pb=!4v1668706787216!6m8!1m7!1sCAoSLEFGMVFpcE5oYlE5cU5xNHRiUHRNLVE3cThoYzdEaTN0NDVUMHllRXZSeFEy!2m2!1d-23.5129104!2d-46.7319592!3f20!4f0!5f0.7820865974627469"
    },
    {
      location: "Sala de aula 2",
      src: "https://www.google.com/maps/embed?pb=!4v1668706827955!6m8!1m7!1sCAoSLEFGMVFpcE9ITUtxMGMwSVU5M2pxS0VCTlA1MXFuSDZvbUZ5alhUZGtLVm5C!2m2!1d-23.5130779!2d-46.7319232!3f314.4880457142359!4f-19.74824447501311!5f0.7820865974627469"
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
