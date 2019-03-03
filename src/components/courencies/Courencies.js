import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './styles/courencies.css';

// parts
import Options from './parts/Options';
import Table from './parts/Table';

class Courencies extends Component {
    constructor() {
        super();
        this.state = {
            table: {
                status: 'passive',
                data: null
            }
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    passData(loading, data) {
        if (loading) {
            var table = this.state.table;
            table.status = 'loading';
        }
        else {
            table = this.state.table;
            table.status = 'success';
            table.data = data
        }
        this.setState({ table });
    }
    render() {
        return (
            <Grid item md={6}>
                <div className="courencies">
                    <Grid container>
                        <Grid item md={4}>
                            <Options passData={this.passData.bind(this)} />
                        </Grid>
                        <Grid item md={8}>
                            <Table status={this.state.table.status} data={this.state.table.data} />
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }
}

export default Courencies;