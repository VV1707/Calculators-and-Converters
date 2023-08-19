import React, { Component } from 'react'
import { CssBaseline,Button,Grid, FormControl,InputAdornment,Typography,TextField} from '@mui/material';

class CmToFtForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:'',
       output:'',
       flag1:false,
       flag2:false
    }
  }

  changeHandler=(event)=>{
      event.preventDefault();
      this.setState({
        input:event.target.value,
      })
  }

  getOutput=(event)=>{
      event.preventDefault();
      this.setState({
        output:(this.state.input/30.48).toFixed(2),
        flag1:true
      })
      if (this.state.input>0) {
        this.setState({
          flag2:true
        })
      }
  }

  render(){
    return (
    <div>
    <CssBaseline />
      <Grid container xs display="flex" minHeight={450} 
      justifyContent="center" alignItems="center" style={{position:"absolute"}}>
      <FormControl>
        <Typography variant="h5" textAlign="center" color="primary" gutterBottom>CM TO FT CONVERTER</Typography><br/>
        <TextField label="Enter the value" required inputProps={{min:0}} type={"number"} 
          step={"any" } variant='outlined' size="medium" color="primary" 
          InputProps={{endAdornment:<InputAdornment position="end">Cm</InputAdornment>}}
          value={this.state.input} onChange={this.changeHandler}/><br/>
        <div>
        <FormControl sx={{ml:11}}>
        <Button variant="contained" color="primary" size="large" type="submit" 
            onClick={this.getOutput}>SUBMIT</Button>
        </FormControl>
        </div><br/>
      <FormControl sx={{textAlign:"center"}} >
      {this.state.flag1 && this.state.flag2 ?
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {this.state.input} Cms is {this.state.output} Ft 
              </Typography>:<></>}
      </FormControl>
      </FormControl>
      </Grid>
      </div>
    
    )
  }
}

export default CmToFtForm