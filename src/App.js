import React, {
  Component
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
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
        history.pushState(null, null, '?id=' + id);
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
        <div className="quote-block">
          <h1 className="quote">{this.state.quote}</h1>
        </div>
        <div className="details-block">
          <p className="details">
            - {this.state.who} <span className="sub-details">{this.state.where}, {this.state.when}</span>
          </p>
          <div className="random-block">
            <a className="random" href="."><FontAwesomeIcon icon={faRandom}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
