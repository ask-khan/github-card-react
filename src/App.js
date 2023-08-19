import './App.css';
import React from 'react';
import CardList from './CardList/CardList';
import Form from './Form/Form';

class App extends React.Component {
     
  state = {
    profile:[]
  };

  addNewProfile = ( profileData ) => {
    this.setState( preState =>  ({
      profile:[
        ...preState.profile,
        profileData
      ]
    }))
  };

  render() {
    
    return (
      <>
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profile={this.state.profile} />
      </>
    );
  }
}

export default App;
