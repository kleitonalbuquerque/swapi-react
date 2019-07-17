import React, { Component } from 'react';
import PlanetInfo from './PlanetInfo';

class List extends Component {
  render() {
    const planet = this.props.planet;

    return (
      <div className="">
       {
         planet.map((p) => {
           console.log(p)
           return (
             <div key={p.url}>
              <h1 className="planet-name">{p.name}</h1>
              <PlanetInfo planetInfo={p} />
             </div>
           )
         })
       }
      </div>
    );
  }
}

export default List;