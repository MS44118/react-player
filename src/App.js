import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      value: "", //    https://youtu.be/EWu9lWEpNRA
      play: false,
      volume: 0.5,
      duration: 0,
      progress: 0
    }
  }

  togglePlayer = () => {
    this.setState({ play: !this.state.play });
  }

  downVolume = () => {
    if(this.state.volume > 0){
      this.setState({ volume: parseFloat((this.state.volume - 0.1).toFixed(1)) });
    }
  }

  upVolume = () => {
    if(this.state.volume < 1){
      this.setState({ volume: parseFloat((this.state.volume + 0.1).toFixed(1)) });
    }
  }

  readOnDuration = (durationVideo) => {
    this.setState({ duration: durationVideo });
  }

  readOnProgress = (progressVideo) => {
    this.setState({ progress: parseFloat(progressVideo.playedSeconds.toFixed(0)) });
  }

  handleUrl = (event) => {
    this.setState({ value: event.target.value})
  }

  render () {
    return (
      <div className="App-header">
        <div>
          <ReactPlayer 
            url={this.state.value}
            playing={this.state.play} 
            volume={this.state.volume}
            onDuration={this.readOnDuration}
            onProgress={this.readOnProgress}
          />
        </div>
        <div>
          URL: <input value={this.state.value} onChange={this.handleUrl} />
        </div>
        <div>
          <button onClick={this.togglePlayer}>
            { this.state.play? "Stop" : "Start"}
          </button>
          <button onClick={this.downVolume}>-</button>
          <button onClick={this.upVolume}>+</button>
          <p> {this.state.progress} / {this.state.duration} seconds</p>
        </div>
      </div>
    )
  }

}

export default App;
