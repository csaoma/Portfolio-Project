import React from 'react';
import Cards from '../Components/Cards'
import Welcome from '../Components/Welcome'

function HomePage(props) {
    return (
        <div >
            <Welcome></Welcome>
            <Cards></Cards>
        </div>
    );


}

export default HomePage;