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
              <h3 className="planet-name">{p.name}</h3>
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