import Navigation from "./component/navigation/Navigation";
import Logo from "./component/logo/logo";
import ImageLinkBox from "./component/ImageLinkBox/ImageLinkBox";
import { Component } from "react";
import Particles from "react-tsparticles";
import Clarifai from 'clarifai'
import Facerecoginition from "./component/facerecoginition/Facerecoginition";
import "./App.css";


const app = new Clarifai.App({
 apiKey: '636987aa47534c6ea46222e4f290e33a'
});

class App extends Component {
  particlesInit = () => {};
  particlesLoaded = () => {};
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: '',
      box: {}
    };
  }

  calculateFaceLocation = (data) =>{
const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
  console.log(" detected facedata", clarifaiFace);
const image = document.getElementById("inputimage");
const width = Number(image.width);
const height = Number(image.height);
return {
  leftcol: clarifaiFace.left_col * width,
  toprow: clarifaiFace.top_row * height,
  rightcol: width - (clarifaiFace.right_col * width),
  bottomrow: height - (clarifaiFace.bottom_row) * height
}
  }

displayFacebox = (box) => {
  console.log(box);
  this.setState({box: box});
}

  onInputChange = (event) => {
    this.setState({ input: event.target.value});
  };

  onButtonSubmit = () => { 
    this.setState({imageUrl : this.state.input})
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFacebox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 800
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }
        }
        />
        <Navigation className="Navbar" />
        <Logo />
        <ImageLinkBox
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Facerecoginition box={this.state.box} imageUrl ={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
