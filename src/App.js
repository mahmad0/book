import React, {
  Component
} from 'react';
import QuoteAPI from './QuoteAPI';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      'quote': '',
      'where': '',
      'when': '',
      'where': ''
    };
  }

  componentDidMount() {
    QuoteAPI.getAllQuotes().then(result => {
      let id = this.getParameterByName('id')
      if (!id) {
        id = Math.floor(Math.random() * result.length);
        history.pushState(null, null, '?id='+ id);
      }
      this.setState(result[id]);
    });
  }

  getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if (!results) {
      return undefined;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  render() {
    return (
      <div>
				<h1>"{this.state.quote}"</h1>
				<p>
          {this.state.who}<br />
          {this.state.where} - {this.state.when}
				</p>
        </div>
    );
  }
}

export default App;
