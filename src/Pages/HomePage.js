import React, { Component } from 'react';
import Cards from '../Components/Cards'
import Welcome from '../Components/Welcome'
import { render } from '@testing-library/react';

class HomePage extends Component {
        state = {
          projects: [
            { title: 'Website Blocker', header: 'Python', path: 'https://github.com/csaoma/productivity', description: 'This program will block websites during specific hours every day.'},
            { title: 'Dictionary', header: 'Python', path: 'https://github.com/csaoma/dictionary', description: 'Will list the defintions of a word that the user inputs.' },
            { title: 'Portfolio', header: 'Javascript', path: 'https://github.com/csaoma/Portfolio-Project', description: 'I used React and Bootstrap to create this web application.'}
          ],
          
    
          
        }

    render() {
        return (
            <div className="App">
                <Welcome></Welcome>
                <Cards title={this.state.projects[0].title} header={this.state.projects[0].header} path = {this.state.projects[0].path} description = {this.state.projects[0].description}/>
                <Cards title={this.state.projects[1].title} header={this.state.projects[1].header} path = {this.state.projects[1].path} description = {this.state.projects[1].description}/>
                <Cards title={this.state.projects[2].title} header={this.state.projects[2].header} path = {this.state.projects[2].path} description = {this.state.projects[2].description}/>
            </div>
        );
    }
    


}


export default HomePage;