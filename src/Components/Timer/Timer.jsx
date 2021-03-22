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
             setInterval(() => { 
                 let num = this.state.timeSeconds++
                 console.log(num)
                if (num > this.state.timeSeconds) {
                    this.setState({
                        ...this.state, timeSeconds: num
                    })
                }
                   
             }, 1000);
        } else {
            console.log('already on')
        }
    }
        
       
    

    StopTimer = () => {
        if (this.state.timerOn === true) {
            this.setState({
                ...this.state, 
                timerOn: false,
                timeSeconds: 0,
            })
            
        } else {
            console.log('already off')
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.timeSeconds}</h1>

                <button onClick={this.StartTimer}>
                    Start
                </button>
                <button>
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