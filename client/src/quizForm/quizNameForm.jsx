import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input } from 'semantic-ui-react'

class QuizNameForm extends Component {
  state = { name: '' }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div className="quiz-name-form">
        <div>
        <Input placeholder="Enter your quiz name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <Link className="ui button" to={`/quiz/question/new?name=${this.state.name}`}>Next</Link>
      </div>
    );
  }
}

export default QuizNameForm;
