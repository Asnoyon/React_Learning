import React, { Component } from 'react'

export default class Input extends Component {

    state={
      ChannelName : "",
      category : "",
      CreationDate: "",
      AboutTextarea:"",
      gender:"",
      Checkbox:false


    }
    FormChange = (event)=>{
        this.setState({
          [event.target.name]:event.target.value
        })
    }
    CheckboxHandler = (event)=>{
      this.setState({
        Checkbox : event.target.checked
      })
    }
    
  render() {
    const{ChannelName,category,CreationDate,AboutTextarea,Checkbox}=this.state
    return (
      <div className='container'>
       
         <input type="text" name='ChannelName' placeholder='Channel Name'  className='form-control' onChange={this.FormChange} value={ChannelName} />
         <select name="category" onChange={this.FormChange} value={category} className='form-control'>
            <option value="Select">Select</option>
            <option value="Programming">Programming</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Hobby</option>
         </select>
         <input type="date" name="CreationDate" onChange={this.FormChange} value={CreationDate} className='form-control' />
         <textarea name="AboutTextarea" onChange={this.FormChange} value={AboutTextarea} className='form-control'></textarea>
         <div>
          <input type="radio" value="male" name="gender" onChange={this.FormChange} />
          <label htmlFor="gender">Male</label>
          <input type="radio" value="female" name="gender" onChange={this.FormChange} />
          <label htmlFor="gender">Female</label>
          </div>
          <input type="checkbox" name="Checkbox" checked={Checkbox} onChange={this.CheckboxHandler} /> I agree and continue <br />
          <button className='btn btn-primary' onClick={()=>{console.log(this.state)}} >
            Submit
          </button>
      </div>
    )
  }
}
