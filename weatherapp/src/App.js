
import "./weather-icons/css/weather-icons.min.css"
import React, {Component} from 'react';
import './App.css';
import Weather from './component/weatherComponent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
const API_key = 'fe933f641e0c1a4f579c0970f5038d4c'


class App extends Component {
  constructor(){
    super();
    this.state={
      city : undefined,
      country : undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
    this.getWeather();

    this.weatherIcon ={
      Thunderstorm : "wi-thunderstorm"
    }

  }
  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell
  }

  getWeather = async() =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}
    `);
    const response = await api_call.json()
    console.log(response)
    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      icon:this.weatherIcon.Thunderstorm
      
    })
  }

  render () {
    return (
      <div className="App">
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
    )
  }
}



export default App;
