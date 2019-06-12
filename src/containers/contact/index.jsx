import React, {Component} from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.title = '';
    this.state.body = '';
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { title, body } = this.state;
    console.log('E-mail: ', title, 'Mensagem: ',body);

    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h2>Contato</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            name="title"
            onChange={event => this.handleInputChange(event)}
            value={this.state.title}
          />

          <textarea
            cols="19"
            rows="8"
            placeholder="Mensagem"
            name="body"
            onChange={event => this.handleInputChange(event)}
            value={this.state.body}>
            </textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contact;
