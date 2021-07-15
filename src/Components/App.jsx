import React, { Component } from 'react';
import './App.css';
import DisplayName from './displayName';
import NamesList from './namesList';
import AlertUser from './alertUser';
import SuperheroTable from './superheroTable';
import CreateSuperhero from './createSuperhero';
import Jokes from './jokes';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: [
        {firstName: 'Reggie', lastName: 'White'}
    ],
      names: [
        {name: 'Mike'},
        {name: 'Nevin'},
        {name: 'Aaron'},
        {name: 'Tory'},
        {name: 'Kelly'}
      ],
      superheroes: [
        {name: 'Batman', primaryAbility: 'Wealthy', secondaryAbility: 'Rich'},
        {name: 'Superman', primaryAbility: 'Super Strength', secondaryAbility: 'Fly'},
        {name: 'Spiderman', primaryAbility: 'Spider Senses', secondaryAbility: 'Shoots Web'}
      ]
    }
  }

  addSuperhero = (newSuperhero) => {
    let newSuperheroObject = {
      name: newSuperhero.name,
      primaryAbility: newSuperhero.primaryAbility,
      secondaryAbility: newSuperhero.secondaryAbility
    }
    let tempSuperheroes = this.state.superheroes;
    tempSuperheroes.push(newSuperheroObject);
    this.setState({
      superheroes: tempSuperheroes
    });
  }

  render() {
    return(
      <React.Fragment>
        <div className="container-fluid">
          <DisplayName person={this.state.person} />
          <NamesList names={this.state.names} />
          <AlertUser />
          <SuperheroTable superheroes={this.state.superheroes} />
          <CreateSuperhero addSuperhero={this.addSuperhero} />
          <Jokes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;