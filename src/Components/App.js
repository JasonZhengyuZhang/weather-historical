import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: null,
    };
    this.handleWeekClick = this.handleWeekClick.bind(this);
  }

  handleWeekClick(week, { selected }) {
    this.setState({
      selectedWeek: selected ? undefined : week,
    });
  }

  render() {
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
