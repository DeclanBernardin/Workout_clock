import React, { Component } from 'react'


class Timer extends Component {

    state = {
        timerOn: false,
        timerPause: false, 
        tenSeconds: false,
        tenMinutes:false,
        tenHours: false,
        timeSeconds: 0,
        timeMinutes: 0,
        timeHours: 0,
        intervalId: 0
    }

    increment() {
        let self = this
        let sec = self.state.timeSeconds + 1

        if (sec > self.state.timeSeconds){
            self.setState({
                ...self.state, timeSeconds: sec
            });
        };

        if (self.state.timeSeconds >= 10) {
            self.setState({
                tenSeconds: true
            })
            console.log(this.state.tenSeconds, 'ten seconds')
        } else if (self.state.timeSeconds < 10) {
            self.setState({
                tenSeconds: false
            })
            console.log(this.state.tenSeconds, 'ten seconds')
        }
        
        if (self.state.timeSeconds === 60) {
            let min = self.state.timeMinutes + 1
            self.setState({
                ...self.state, 
                timeSeconds: 0,
                timeMinutes: min
            });
            console.log(self.state.timeMinutes, 'Min')
        }; 

        if (self.state.timeMinutes >= 10) {
            self.setState({
                tenMinutes: true
            })
            console.log(this.state.tenMinutes, 'ten min')
        } else if (self.state.timeMinutes < 10) {
            self.setState({
                tenMinutes: false
            })
            console.log(this.state.tenMinutes, 'ten min')
        }

        if (self.state.timeMinutes === 60) {
            let hour = self.state.timeHours + 1
            self.setState({
                ...self.state,
                timeSeconds: 0,
                timeMinutes: 0,
                timeHours: hour
            });
            console.log(self.state.timeHours, 'Hour')
        };

        if (self.state.timeHours >= 10) {
            self.setState({
                tenHours: true
            })
            console.log(this.state.tenHours, 'ten Hours')
        } else if (self.state.timeHours < 10) {
            self.setState({
                tenHours: false
            })
            console.log(this.state.tenHours, 'ten hours')
        }

        console.log(self.state.timeSeconds)
    };

    StartTimer = () => {
        if (this.state.timerOn === false || this.state.timerPause === true) {
            this.setState({
                timerOn: true,
                timerPause: false
            });
            this.state.intervalId = setInterval(this.increment.bind(this), 1000);
            console.log('Timer started')
        } else {
            console.log('already on')
        };
    };

    PauseTimer = () => {
        if (this.state.timerOn === true) {
            clearInterval(this.state.intervalId)
            this.setState({
                timerOn: false,
                timerPause: true
            });
            console.log('Timer paused');
        } else if (this.state.timerOn === false){
            alert('There is nothing to pause')
            console.log('Timer has not started')
        } else {
            console.log('Timer already paused')
        };
    };

    StopTimer = () => {
        if (this.state.timerOn === true || this.state.timerPause === true) {
            clearInterval(this.state.intervalId)
            this.setState({
                ...this.state, 
                timerOn: false,
                timerPause: false, 
                timeSeconds: 0,
                timeMinutes: 0, 
                timeHours: 0
            })
            console.log('Timer off');
        } else {
            console.log('already off')
        }
    };

    render() {
        return (
            <div>
                {this.state.tenMinutes ? <h1> {this.state.timeHours} </h1> : <h1> 0{this.state.timeHours} </h1>}

                {this.state.tenMinutes ? <h1> {this.state.timeMinutes}</h1> : <h1> 0{this.state.timeMinutes} </h1>}

                {this.state.tenSeconds ? <h1> {this.state.timeSeconds}</h1> : <h1> 0{this.state.timeSeconds}</h1> }
                
                <button onClick={this.StartTimer}>
                    Start
                </button>
                <button onClick={this.PauseTimer}>
                    Pause
                </button>
                <button onClick={this.StopTimer}>
                    Stop
                </button>
            </div>
        )
    }
}

export default Timer;