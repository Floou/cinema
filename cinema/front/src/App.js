import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      'dev': [],
      'films': [],
      'schedule': []
    })
  }

  render() {
    console.log('state', this.state);
    return(
        <div>
          Cinema
        </div>
    )
  }

}

export default App;
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Project
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
