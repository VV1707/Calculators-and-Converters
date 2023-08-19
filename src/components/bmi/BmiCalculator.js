import React, { Component } from 'react'
import { Button, Typography,Grid} from '@material-ui/core';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.1),
  textAlign: 'center',
  borderRadius:1,
}));

class BmiCalculator extends Component {
    constructor(props) {
      super(props)
      this.state = {
         height:this.props.height,
         weight:this.props.weight,
         bmi:'',
         bmiStatus:'',
         flag:false
      }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.height !== prevState.height || nextProps.weight !== prevState.weight) {
        return {
          height: nextProps.height,
          weight: nextProps.weight,
        };
      }
      return null;
    }
  
    generateBMIstatus=(bmi)=>{
        if(bmi<18.5){
            return "Underweight"
        }
        if((bmi>=18.5) && (bmi<24.9)){
            return "Normal"
        }
        if((bmi>=25) && (bmi<29.9)){
            return "Overweight"
        }
        if(bmi>=30){
            return "Obese"
        }
    }

    getBMI=(e)=>{
      e.preventDefault();
      //bmi=w(kg)/h^2(m)-> cm=>m /100 so bmi= w*100*100/h^2
      // bmiVal=((weight/height)/height)*10000
      let bmiVal = (this.state.weight / (this.state.height / 100) ** 2).toFixed(2);
      this.setState({
          flag:true,
          bmi:bmiVal
      })
      let message=this.generateBMIstatus(bmiVal)
      this.setState({
        bmiStatus:message
      })
  }

  render() {
    return (
      <div>
        <br/>
        <Grid container xs display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained" color="primary" size="large" type="submit" 
                onClick={this.getBMI}>SUBMIT</Button>
        </Grid><br/>
        {this.state.flag?
                <div>
                  <Stack spacing={0.1}>
                    <Item>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                      Your BMI: {this.state.bmi} 
                      </Typography>
                    </Item>
                    <Item>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        Your BMI status: {this.state.bmiStatus}
                      </Typography>
                    </Item>
                  </Stack>
                </div>:<></>}
                </div>
    )
  }
}
export default BmiCalculator