import React, { Component } from 'react'
import { CssBaseline,Grid, FormControl,InputAdornment,Typography,TextField} from '@mui/material';
import BmiCalculator from '../bmi/BmiCalculator'
class BmiForm extends Component {
    constructor(props){
        super(props)
        this.state={
        height:'',
        weight:'',
        flag:false
        }
    }
    changeHeightHandler=(event)=>{
        this.setState({
            height:event.target.value
        })
    }

    changeWeightHandler=(event)=>{
        this.setState({
            weight:event.target.value
        })
        this.setState({
            flag:true
        })
    }

    render() {
    return (
        <div>
            <CssBaseline />
            <Grid container xs display="flex" minHeight={450}
                            justifyContent="center" alignItems="center" 
                            style={{position:"absolute"}}>
            <FormControl>
            <Typography variant="h4" color="primary" gutterBottom>BMI CALCULATOR</Typography><br/>
                <TextField label="Height" required
                        inputProps={{min:0}} type={"number"} step={"any" }
                        variant='outlined' size="medium" color="primary" 
                        InputProps={{endAdornment:<InputAdornment position="end">Cm</InputAdornment>}}
                        value={this.state.height} onChange={this.changeHeightHandler}/>
                <br/>
                <TextField label="Weight" required
                        inputProps={{min:0}} type={"number"} step={"any"} 
                        variant='outlined' size="medium" color="primary"
                        InputProps={{endAdornment:<InputAdornment position="end">Kg</InputAdornment>}} 
                        value={this.state.weight} onChange={this.changeWeightHandler}/>
                {this.state.flag?
                    <BmiCalculator
                        height={this.state.height} 
                        weight={this.state.weight}/>:
                    <Typography/>
                }
            </FormControl>
            </Grid>
        </div>
    )
  }
}
export default BmiForm