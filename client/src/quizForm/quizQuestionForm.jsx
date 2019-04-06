import React, { Component } from "react";

class QuizQuestionForm extends Component {
  state = { questionType: "" };

  handleClick = questionType => {
    this.setState({ questionType });
  };

  renderAnswerSection = () => {
    const { questionType } = this.state;

    if (!questionType) {
      return <p>Please select a question type</p>;
    }

    switch (questionType) {
      case "openEnded":
        return <textarea placeholder="Tell us more" rows="3" />;
        case "trueFalse":
        return (
          <div className="ui radio checkbox">
            <div>
            <input type="radio" className="hidden" readOnly="" tabIndex="0" />
            <label>TRUE</label>
            </div>
            <div>
            <input type="radio" className="hidden" readOnly="" tabIndex="0" />
            <label>FALSE</label>
            </div>
          </div>
        )  
      case "mcq":
        return (
          <div className="ui radio checkbox">
            <input type="radio" className="hidden" readOnly="" tabIndex="0" />
            <label>
              <div className="ui input">
                <input type="text" placeholder="Enter an answer" />
              </div>
            </label>
          </div>
        );
      default:
        return;
    }
  };

  render() {
    return (
      <div className="ui grid padded">
        <div className="row">
          <div className="column">
            <div className="ui raised segment">
              <p className="ui teal ribbon label">Question</p>
              <div className="ui grid centered padded">Q1</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui raised segment">
              <p className="ui teal ribbon label">Question Type</p>
              <div className="ui grid centered padded">
                <button
                  onClick={() => this.handleClick("mcq")}
                  className="ui red button"
                >
                  MCQ
                </button>
                <button
                  onClick={() => this.handleClick("openEnded")}
                  className="ui green button"
                >
                  OPEN-ENDED
                </button>
                <button 
                  onClick={() => this.handleClick("trueFalse")}
                  className="ui yellow button">TRUE/FALSE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="ui raised segment">
              <p className="ui teal ribbon label">Answer</p>
              <div className="ui grid centered padded">
                {this.renderAnswerSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizQuestionForm;