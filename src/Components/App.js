import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: null,
      weather: '',
    };
    this.handleWeekClick = this.handleWeekClick.bind(this);
  }

  componentDidMount() {
    fetch("/weather")
      .then(response => response)
      .then(data => this.setState({ weather: data }));
    // this.callApi()
    //   .then(res => this.setState({ weather: res.express }))
    //   .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response;

    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  };

  handleWeekClick(week, { selected }) {
    this.setState({
      selectedWeek: selected ? undefined : week,
    });
  }

  render() {
    console.log(this.state.weather);
    return (
      <div className="App">
       <DayPicker
          firstDayOfWeek={1}
          showWeekNumbers
          onWeekClick={this.handleWeekClick}
        />
        <p>
          {this.state.selectedWeek
            ? this.state.selectedWeek
            : 'Please select a day 👻'}
        </p>
        <a className="DarkSky" href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </div>
    );
  }
}

export default App;
