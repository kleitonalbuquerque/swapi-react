import React, { Component } from 'react';

class PlanetInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded })
  }

  close() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const info = this.props.planetInfo;
    if(!this.state.expanded) {
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    } 

    return(
      <div className="planet-details">
        <p className="btn btn-danger" onClick={this.close}>Hide info</p>
        <ul>
          <li><p>Name: {info.name}</p></li>
          <li><p>Population: {info.population}</p></li> 
          <li><p>Climate: {info.climate}</p></li>
          <li><p>Terrain: {info.terrain}</p></li>
          <li><p>Films: {info.films}</p></li>     
        </ul>
      </div>
    )
  }
}

export default PlanetInfo;