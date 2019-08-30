import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: ''
    }
  }

 onNameChange = (event) => {
    this.setState({locationName: event.target.value})
 }

 onSubmitSave = () => {
    this.props.handleSave(this.state.locationName);
    document.getElementById('name').value='';
    this.props.handleClose();
 }


  render(){
   const { handleClose, show , date} = this.props;
   const showHideClassName = show ? "modal display-block" : "modal display-none";

      return (
        <div className={showHideClassName}>
          <section className="modal-main">
          <label htmlFor="name" className='db fw6 lh-copy f6'>Location Name:</label>
          <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
          <label htmlFor="date" className="f6 b db mb2">Date:</label>
          <input id="date" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" defaultValue={date}
                 onChange={this.onNameChange}/>

            <button onClick={this.onSubmitSave}>Save</button>
            <button onClick={handleClose}>Cancel</button>
          </section>
        </div>
      )
    }
}

export default Modal;
