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




const UsersMock = [
    {
    "id": 1,
    "username": "user1",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 2,
    "username": "user2",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 3,
    "username": "user3",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 4,
    "username": "user4",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  },
  {
    "id": 5,
    "username": "user5",
    "email": "",
    "first_name": "",
    "last_name": "",
    "gender": "",
    "date_birth": null
  }
];

const ScheduleMock = [{
    "id": 1,
    "date_time": "2021-09-30T12:00:00Z",
    "film": 1
  },
  {
    "id": 2,
    "date_time": "2021-10-03T11:00:00Z",
    "film": 2
  },
  {
    "id": 3,
    "date_time": "2021-12-11T18:30:00Z",
    "film": 4
  }
];

const FilmsMock = [
    {
    "id": 1,
    "title": "Плохие парни навсегда",
    "description": "Детективы Майк Лоури и Маркус Бёрнетт снова в деле!",
    "audience": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": 2,
    "title": "Гнев человеческий",
    "description": "Эйч — загадочный и холодный на вид джентльмен, но внутри него пылает жажда мести. Преследуя свои мотивы, он внедряется в инкассаторскую компанию, чтобы выйти на соучастников серии многомиллионных ограблений, потрясших Лос-Анджелес. В этой запутанной игре у каждого своя роль, но под подозрением оказываются все. Виновных же обязательно постигнет гнев человеческий.",
    "audience": [
      1,
      3,
      4,
      7,
      8,
      11
    ]
  },
  {
    "id": 3,
    "title": "Человек-паук: Вдали от дома",
    "description": "Питер Паркер вместе с одноклассниками отправляется на летние каникулы в Европу. Однако отдохнуть приятелям вряд ли удастся - по прибытии в Венецию группа попадет в эпицентр сражения. Некое существо, состоящее из воды, появляется из ниоткуда и начинает крушить всё на своём пути, и теперь Питеру придётся спасать европейские архитектурные памятники вместе с загадочным супергероем Мистерио.",
    "audience": [
      1,
      2,
      3,
      5,
      7,
      8,
      11
    ]
  }
];


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
        this.setState({
            users: UsersMock,
            films: FilmsMock,
            schedules: ScheduleMock
        })
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
