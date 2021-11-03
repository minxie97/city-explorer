import { Component } from "react";
import axios from 'axios';
import Search from './Search.js';
import Error from './Error.js';
import City from './City.js';
import Coordinates from './Coordinates.js';
import Map from './Map.js';
import Weather from './Weather.js';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityValue: "",
      cityName: "",
      location: "",
      mapData: "",
      weatherData: [],
      error: false,
      weatherError: ""
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.changeLocation();
      this.nameMutilater();
      this.getMap();
      this.getWeatherData();
    } catch (e) {
      console.error(e);
      this.setState({ error: true })
    }
  }

  handleChange = (event) => {
    this.setState({ cityValue: event.target.value });
  }

  changeLocation = async () => {
    const urlLoc = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;

    let response = await axios.get(urlLoc);
    this.setState({ location: response.data[0] });
  }

  getMap = () => {
    const urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`;

    this.setState({ mapData: urlMap });
  }

  getWeatherData = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&searchQuery=${this.state.cityName}`;
    let response = await axios.get(url);
    if (typeof response === 'object') {
      this.setState({ weatherData: response.data });
    } else {
      this.setState({ weatherData: [] });
      this.setState({ weatherError: response.data })
      console.log(this.state.weatherError);
    }
  }

  nameMutilater = () => {
    let arr = this.state.location.display_name.split(",");
    this.setState({ cityName: arr[0].toLowerCase() });
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} handleChange={this.handleChange} cityValue={this.state.cityValue} />
        <Error error={this.state.error} />
        <City location={this.state.location} />
        <Coordinates location={this.state.location} />
        <Map mapData={this.state.mapData} />
        <Weather weatherData={this.state.weatherData} />
      </div>
    )
  }
}