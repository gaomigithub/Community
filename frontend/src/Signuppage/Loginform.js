import React from 'react';

import { Button, Form, Formgroup, Label, Input}
    from 'react-bootstrap'
import { render } from 'react-dom';

export class Login extends React.Component{

constructor(props){
    super(props);
}

render()
{
    return(
    <div className="App">
     LOGIN PAGE
  <form>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend"><span class ="input-group-text">@</span>
      </div>
    <input type="text" class="form-control" placeholder="Username"></input>
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">Person</span>
    </div>
    <input type="text" class="form-control" placeholder="First Name"></input>
    <input type="text" class="form-control" placeholder="Last Name"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
        )
    }
};
