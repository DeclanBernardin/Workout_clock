import React, { Component } from 'react'


class Timer extends Component {

    componentDidMount() {
        

    }
    state = {
        timerOn: false,
        timeSeconds: 0,
        timeMinutes: 0,
        timeHours: 0,
        intervalId: 0
    }

    increment() {
        let self = this
        let num = self.state.timeSeconds + 1

        if (self.state.timeSeconds < num) {
            self.setState({
                ...self.state, timeSeconds: num
            })
        } 
        if (self.state.timeSeconds === 60) {
            self.setState({
                ...self.state, 
                timeSeconds: 0
            })
        }
        console.log(self.state.timeSeconds)
    }


    StartTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerOn: true,
            })
            this.state.intervalId = setInterval(this.increment.bind(this), 1000);
            console.log('Timer started')
        } else {
            console.log('already on')
        }
    };

    PauseTimer = () => {
        if (this.state.timerOn === true) {
            clearInterval(this.state.intervalId)
            console.log('Timer paused');
        } else if (this.state.timerOn === false){
            console.log('Timer has not started')
        } else {
            console.log('Timer already paused')
        }
    }

    StopTimer = () => {
        if (this.state.timerOn === true) {
            clearInterval(this.state.intervalId)
            this.setState({
                ...this.state, 
                timerOn: false,
                timeSeconds: 0,
            })
            console.log('Timer off');
        } else {
            console.log('already off')
        }
    };
    render() {
        return (
            <div>
                <h1>{this.state.timeSeconds}</h1>

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