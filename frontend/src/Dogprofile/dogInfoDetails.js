import React, {Component} from 'react'

class Doginfodetails extends Component {
    render (){
        const{handleChange} = this.props;
        return (
            <>
                <h2>Puppy's Information:</h2>
                <div className="dogInfoContent">
                <label>
                    <input
                    type = "text"
                    name ="dogName"
                    placeholder= "Dog Name"
                    onChange={handleChange('dogName')}/>
                </label>
                <label>
                    <input
                    type = "numeric"
                    name ="dogAge"
                    placeholder= "Dog Age"
                    onChange={handleChange('dogAge')}>
                        
                    </input>
                </label>
                <label>
                    <input
                    type = "text"
                    name ="dogBreed"
                    placeholder= "Breed"
                    onChange={handleChange('dogBreed')}>
                        
                    </input>
                </label>
                <label>
                    <textarea
                    type = "text"
                    name ="aboutMe"
                    placeholder="Tell Us More About Your Pet"
                    onChange={handleChange('aboutMe')}
                    rows ="3">
                        
                    </textarea>
                </label>
                </div>
            </>
        );
    }
}

export default Doginfodetails