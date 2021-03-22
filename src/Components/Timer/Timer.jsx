import React, { Component } from 'react'


class Timer extends Component {

    state = {
        timerOn: false,
        timeSeconds: 0,
        timeMinutes: 0,
        timeHours: 0
    }

    StartTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerOn: true,
            })
        } else {
            console.log('already on')
        }
    }

    StopTimer = () => {
        if (this.state.timerOn === true) {
            this.setState({
                timerOn: false,
            })
        } else {
            console.log('already off')
        }
    }
    render() {
        return (
            <div>
                <h1>00:00:00</h1>

                <button onClick={this.StartTimer}>
                    Start
                </button>
                <button onClick={this.StopTimer}>
                    Stop
                </button>
            </div>
        )
    }
}

export default Timer;