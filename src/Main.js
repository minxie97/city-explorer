import { Component } from "react";
import axios from 'axios';
import Search from './Search.js';
import Error from './Error.js';
import City from './City.js';
import Coordinates from './Coordinates.js';
import Map from './Map.js';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          location: "",
          mapData: "",
          cityValue: "",
          error: false
        }
      }
    
      handleClick= async (event) => {
      
        try {
          event.preventDefault();
          await this.changeLocation();
          this.getMap();
    
        } catch (e) {
          console.error(e);
          this.setState({ error: true })
        }
      }
    
      handleChange = (event) => {
        event.preventDefault();
        this.setState({ cityValue: event.target.value })
        console.log(this.state.cityValue);
      }
    
      changeLocation = async () => {
        const urlLoc = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
    
        let response = await axios.get(urlLoc);
        this.setState({ location: response.data[0] });
      }
    
      getMap = async () => {
        const urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`;
    
        let response = await axios.get(urlMap);
        this.setState({ mapData: response });
      }
      
      render() {
        return (
          <div>
            <Search handleClick={this.handleClick} handleChange={this.handleChange} cityValue={this.state.cityValue}/>
            <Error error={this.state.error}/>
            <City location={this.state.location} />
            <Coordinates location={this.state.location} />
            <Map mapData={this.state.mapData} />
          </div>
        )
      }
}