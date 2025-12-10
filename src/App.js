
import { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
