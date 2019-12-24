import React from 'react';
import Header from './Header.js';
import UserList from './UserList.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        userData: data.results
      });
    })
    .catch(console.log);
  };

  render () {
    return (
      <div className="App">
        <Header />
        <UserList userData={this.state.userData} />
      </div>
    );
  };
}