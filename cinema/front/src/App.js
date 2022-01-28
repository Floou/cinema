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
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            films: [],
            schedules: [],
            accessToken: this.getAccessToken(),
        };
     }

       componentDidMount() {
        this.loadState()
    }

    loadState() {
        let headers = this.getHeaders();

      axios
            .get(getResourceURL("users"), {headers: headers})
            .then((result) => {
                // console.log('users result:', result)
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("films"), {headers: headers})
            .then((result) => {
                this.setState({
                    films: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("schedule"), {headers: headers})
            .then((result) => {
                this.setState({
                    schedules: result.data
                })
            })
            .catch((error) => console.log(error));

    }
    login(username, password) {
        // console.log('do login', username, password);
        axios
            .post(getResourceURL("token"),
                {"username": username, "password": password})
            .then((result) => {
                let refreshToken = result.data.refresh;
                let accessToken = result.data.access;
                // console.log('login result:', refreshToken, accessToken)

                this.saveTokens(refreshToken, accessToken)
                this.setState({accessToken: accessToken}, this.loadState)
            })
            .catch((error) => console.log(error));
    }

    logout() {
        // console.log('do logout');
        localStorage.setItem('refreshToken', null);
        localStorage.setItem('accessToken', null);
        this.clearState();
    }

    clearState() {
        this.setState({
            accessToken: null,
            users: [],
            films: [],
            schedules: [],
        })
    }

    saveTokens(refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        // console.log('accessToken:', localStorage.getItem('accessToken'))
    }

    getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    isAuthenticated() {
        return this.state.accessToken !== 'null' && this.state.accessToken !== null;
    }

    getHeaders() {
        let headers = {
            'Content-Type': "application/json"
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${this.state.accessToken}`
        }

        return headers;
    }


  render() {
    // console.log('state', this.state);
    return(
        <div className="main">
                <Router>
                    <Header isAuthenticated={this.isAuthenticated()}
                            logout={() => this.logout()}/>
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
              <Route exact path="/login">
                  <LoginForm
                      login={(username, password) => this.login(username, password)}/>
              </Route>
          </Router>
          <Footer />
        </div>

    )
  }

}

export default App;
