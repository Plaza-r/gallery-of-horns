import React from 'react';
import HornedBeast from './HornedBeast.js';



class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, index) => {
      
       return <HornedBeast
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        openModal ={this.props.openModal}
        beast = {beast}
        key={index}
        />
      
  })
    
    return (
      
      <main className="d-flex flex-wrap">

        {beasts}
        
      </main>
      
    );
  }
}

export default Main;