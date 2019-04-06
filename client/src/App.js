import React, { Component } from "react";
import NavBar from './common/navBar';
import { Switch, Route } from 'react-router-dom';
import QuizNameForm from './components/quizForm/QuizNameForm';
import QuizQuestionForm from './components/quizForm/QuizQuestionForm';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="ui container">
          <Switch>
            <Route path="/quiz/new" component={QuizNameForm} />
            <Route path="/quiz/question/new" component={QuizQuestionForm} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
