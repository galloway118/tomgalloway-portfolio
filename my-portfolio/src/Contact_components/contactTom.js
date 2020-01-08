import React from 'react';
import '../components/navbar/Tom G profile/Tom.css';

class Enquiry extends React.Component {
    state = { 
        nameInput: '',
        emailInput: '',
        messageInput: ''
 }
    render() { 
        const {nameInput, emailInput, messageInput} = this.state
        return ( 
            <div className="enquiry"> 
            <p>If you would like to get in contact please fill out an enquiry form below</p> 
            <form className="inputForm">
                <label>
                     Name:
                     <input type='text'  
                     value={nameInput}
                     placeholder="add name"/>
                </label> 
                <label>
                    Email:
                    <input type='text'
                    value={emailInput}
                    placeholder="add valid email address"/>
                </label>
                <label>
                    Message:
                    <input value={messageInput}
                    placeholder="message"/>
                </label>
                <button>Submit</button>
            </form>
            </div>
         );
    }

    handleChange = (event) => {
        const {value} = event.target
        this.setState({})
    }
}
 
export default Enquiry ;

