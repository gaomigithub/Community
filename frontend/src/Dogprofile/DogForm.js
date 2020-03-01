import React, {Component} from 'react';
import Doginfodetails from './Doginfodetails';

class DogForm extends Component {
    state = {
        step:1,
        dogName:'',
        dogAge:'',
        dogBreed:'',
        aboutMe:'',
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step +1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step:step -1
        });
    }

    handleChange = input  => e => {
        this.setState({[input]: e.target.value})
    }
    showStep = () =>{
        const {step} = this.state;
        if (step===1)
            return(
                <Doginfodetails 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                />);
                    
    }

    render(){
        const {step}= this.state;
        return(
             <>
        <h2>Tell us about your puppies</h2>
        {this.showStep()}
             </>
        );
    }
}

export default DogForm;