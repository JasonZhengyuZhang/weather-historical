import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
       <DayPicker
          firstDayOfWeek={1}
          showWeekNumbers
          onWeekClick={(week, days) => console.log(week, days)}
        />
        <a className="DarkSky" href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </div>
    );
  }
}

export default App;
