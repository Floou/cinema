import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilmsList from "./components/Film";


const filmsMock = [
    {'title': "Плохие парни навсегда", 'description' : "Детективы Майк Лоури и" +
            "Маркус Бёрнетт снова в деле!"}
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 'films': [],
      films: filmsMock,
      schedule: []
    };
  }

      componentDidMount() {
        // call rest API
        this.setState({
            projects: filmsMock
        })
    }

  render() {
    console.log('state', this.state);
    return(
        <div>
          <Header />
          Films
          <FilmsList films={this.state.films}/>
          <Footer />
        </div>
    )
  }

}

export default App;
