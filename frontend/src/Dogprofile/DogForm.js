import React, {Component} from 'react';
import Doginfodetails from './Doginfodetails';
import Allinfo from './Allinfo'

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
        const {step, dogName, dogAge, dogBreed, aboutMe} = this.state;
        if (step===1)
            return(
                <Doginfodetails 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    dogName = {dogName}
                    dogAge = {dogAge}
                    dogBreed = {dogBreed}
                    aboutMe = {aboutMe}
                />);
        if (step===2)
            return(
                <Allinfo
                dogName = {dogName}
                dogAge = {dogAge}
                dogBreed = {dogBreed}
                aboutMe = {aboutMe}/>
            );
                    
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