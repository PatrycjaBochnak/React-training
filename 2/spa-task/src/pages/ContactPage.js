import React from "react";
import '../styles/ContactPage.css'

class ContactPage extends React.Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handlehange = (e) => {
    this.setState({
      value: e.target.value,
      isEmpty: e.target.value === "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handlehange}
            placeholder="Wpisz wiadomość"
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
