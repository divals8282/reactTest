import React, { Component } from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid } from "@material-ui/core";
import '../styles/courencies.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: null,
            data: null,
        }
    }
    componentDidUpdate() {
        if (this.props.status === 'success') {
            let exchangeDay = this.props.data.exchangeDay;
            let calcDay = this.props.data.calcDay;
            let count = parseFloat(this.props.data.count);

            var exchangeDayResult = (count * exchangeDay.rates.USD * exchangeDay.rates.RUB);
            var calcDayResult = (count * calcDay.rates.USD * calcDay.rates.RUB);


            if (exchangeDayResult > calcDayResult) {
                var counter = (exchangeDayResult - calcDayResult).toFixed(2) + ' Win Count';
                var status = 'Good Exchange';
                var statusColor = 'green';
                var winRate = (exchangeDay.rates.RUB).toFixed(2) + 'Win Rate' ;
                var loseRate = (calcDay.rates.RUB).toFixed(2) + 'Lose Rate' ;
            }
            else {
                counter = (calcDayResult - exchangeDayResult).toFixed(2) + ' Lose Count';
                status = 'Bad Exchange';
                statusColor = 'red';
                winRate = (calcDay.rates.RUB).toFixed(2) + ' Win Rate';
                loseRate = (exchangeDay.rates.RUB).toFixed(2) + ' Lose Rate';
            }

            setTimeout(e => {
                this.setState({
                    data: {
                        counter,
                        status,
                        statusColor,
                        winRate,
                        loseRate
                    }
                })
            },200);

        }
    }
    render() {
        return (
            <>
                {this.props.status === 'loading' &&
                    <>
                        <LinearProgress color="secondary" variant="query" />
                    </>
                }
                {this.state.data &&
                    <Grid container className="result-block">
                        <Grid item md={12}>
                            <h2 style={{ color: this.state.data.statusColor }}>{this.state.data.status}</h2>
                        </Grid>
                        <Grid item md={6}>
                            <p>Count</p>
                            <p>{this.state.data.counter}</p>
                        </Grid>
                        <Grid item md={6}>
                            <p>{this.state.data.winRate}</p>
                            <p>{this.state.data.loseRate}</p>
                        </Grid>
                    </Grid>
                }
            </>
        );
    }
}

export default Table;