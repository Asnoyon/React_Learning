import React, { Component } from 'react'

export default class Input extends Component {
    FormChange = (event)=>{
        console.log(event.target.value)
    }
    
  render() {
    return (
      <div className='container'>
         <input type="text" name='ChannelName' placeholder='Channel Name'  className='form-control' onChange={this.FormChange} />
         <input type="text" name='ChannelName' placeholder='Channel Name'  className='form-control' onChange={this.FormChange} />
         <select name="category" onChange={this.FormChange} className='form-control'>
            <option value="Select">Select</option>
            <option value="Programming">Programming</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
         </select>
         <input type="date" name="CreationDate" onChange={this.FormChange} className='form-control' />
         <textarea name="About Textarea" onChange={this.FormChange} className='form-control'></textarea>
      </div>
    )
  }
}
