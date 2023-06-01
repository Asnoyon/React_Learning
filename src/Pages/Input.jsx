import React, { Component } from 'react'

export default class Input extends Component {

    state={
      ChannelName : "",

    }
    FormChange = (event)=>{
        console.log(event.target.value)
    }
    CheckboxHandler = (event)=>{
      this.setState({
        checkbox : event.target.checked
      })
    }
    
  render() {
    return (
      <div className='container'>
         <input type="text" name='ChannelName' placeholder='Channel Name'  className='form-control' onChange={this.FormChange} />
         <select name="category" onChange={this.FormChange} className='form-control'>
            <option value="Select">Select</option>
            <option value="Programming">Programming</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
         </select>
         <input type="date" name="CreationDate" onChange={this.FormChange} className='form-control' />
         <textarea name="About Textarea" onChange={this.FormChange} className='form-control'></textarea>
         <div>
          <input type="radio" value="male" name="gender" onChange={this.FormChange} />
          <label htmlFor="gender">Male</label>
          <input type="radio" value="female" name="gender" onChange={this.FormChange} />
          <label htmlFor="gender">Female</label>
          </div>
          <input type="checkbox" name="Checkbox" onChange={this.CheckboxHandler} /> I agree and continue <br />
          <button className='btn btn-primary'>
            Submit
          </button>
      </div>
    )
  }
}
