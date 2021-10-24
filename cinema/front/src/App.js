import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilmList from "./components/FilmList";
import FilmDetail from "./components/FilmDetail";
import UserList from "./components/UserList";
import ScheduleList from "./components/ScheduleList";
import Main from "./components/Main";
import axios from "axios";


const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            films: [],
            schedules: []
        };
     }

      componentDidMount() {

      axios
            .get(getResourceURL("users"))
            .then((result) => {
                // console.log('users result:', result)
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("films"))
            .then((result) => {
                this.setState({
                    films: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("schedule"))
            .then((result) => {
                this.setState({
                    schedules: result.data
                })
            })
            .catch((error) => console.log(error));

    }

  render() {
    // console.log('state', this.state);
    return(
        <div className="main">
                <Router>
                    <Header/>
               <Route exact path="/">
                        <Main />
               </Route>
              <Route exact path="/users">
                  <UserList users={this.state.users}/>
              </Route>
              <Route exact path="/films">
                  <FilmList films={this.state.films}/>
              </Route>
              <Route exact path="/films/detail/:id">
                  <FilmDetail films={this.state.films}
                              users={this.state.users}/>
              </Route>
              <Route exact path="/schedules">
                  <ScheduleList schedules={this.state.schedules}/>
              </Route>
          </Router>
          <Footer />
        </div>

    )
  }

}

export default App;
