import { Component } from "react";
import axios from 'axios';
import Search from './Search.js';
import Error from './Error.js';
import CityCard from './CityCard.js';
import Weather from './Weather.js';
import Movies from './Movies.js';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityValue: "",
      location: "",
      mapData: "",
      weatherData: [],
      movieData: [],
      error: false,
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.changeLocation();
      this.getMap();
      this.getWeatherData();
      this.getMovieData();
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
    this.setState({ mapData: "" });
    const urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`;
    this.setState({ mapData: urlMap });
  }

  getWeatherData = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
    let response = await axios.get(url);
    if (typeof response === 'object') {
      this.setState({ weatherData: response.data });
    } else {
      this.setState({ weatherData: [] });
    }
  }

  getMovieData = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/movie?searchQuery=${this.state.cityValue}`
    let response = await axios.get(url);
    let sortedResponse = response.data.sort((a, b) => b.popularity - a.popularity);
    let shavedResponse = sortedResponse.slice(0, 3);
    if (typeof response === 'object' && sortedResponse.length < 3) {
      this.setState({ movieData: sortedResponse });
    } else if (typeof response === 'object' && sortedResponse.length > 3) {
      this.setState({ movieData: shavedResponse });
    } else {
      this.setState({ movieData: [] });
    }
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} handleChange={this.handleChange} cityValue={this.state.cityValue} />
        <Error error={this.state.error} />
        {this.state.mapData && <CityCard location={this.state.location} mapData={this.state.mapData} />}
        <Weather weatherData={this.state.weatherData} />
        <Movies movieData={this.state.movieData} />
      </div>
    )
  }
}