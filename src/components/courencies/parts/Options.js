import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import '../styles/courencies.css';
import FormGroup from '@material-ui/core/FormGroup';

import CourenciesSDK from '../../../courenciesSDK';

class Options extends Component {
    constructor(){
        super();
        this.state = {
            form: {
                whenExchanged:null,
                count:null,
                calculateDay:null
            },
            error:null
        }
    }
    componentDidMount() {
    }
    validateForm() {
        if(!this.state.form.whenExchanged) {
            this.setState({error:'Fill When You Exchanged'});
            return false;
        }

        if(!this.state.form.count) {
            this.setState({error:'Fill Cost'});
            return false;
        }
        if(!this.state.form.from) {
            this.setState({error:'Fill Range'});
            return false;
        }
        if(!this.state.form.to) {
            this.setState({error:'Fill Range'});
            return false;
        }
        this.setState({error:null});
        return true;
    }
    getFormData = event => {
        var formState = this.state.form;
        formState[event.target.name] = event.target.value
        this.setState({
            form:formState
        });
    }

    async fetchCourencies() {
        await this.props.passData(true);
        var exchangeDay = await CourenciesSDK.getHistoricalDate(this.state.form.whenExchanged);
        var calcDay = await CourenciesSDK.getHistoricalDate(this.state.form.calculateDay)
        await this.props.passData(false,{
            exchangeDay,
            calcDay,
            count:this.state.form.count
        })
    }
    render() {
        return (
            <div className="Options">
                <Grid container>
                    <Grid item md={6}>
                        <p>When Exchanged:</p>
                        <p>Count:</p>
                        
                        <h4>Calculate Day</h4>
                        <p>Day:</p>
                    </Grid>
                    <Grid item md={5}>
                        <Input type="date" name="whenExchanged" onChange={this.getFormData}></Input>
                        <Input type="text" name="count" onChange={this.getFormData}></Input>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Input type="date" name="calculateDay" onChange={this.getFormData}></Input>
                    </Grid>
                    <Grid item md={11}>
                        <FormGroup>
                            <Button variant="contained" color="secondary" onClick={this.fetchCourencies.bind(this)}>Go</Button>
                            <p>{this.state.error}</p>
                        </FormGroup>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Options;