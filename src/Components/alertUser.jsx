import React, {Component} from 'react';


class AlertUser extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        alert('devCodeCamp')
    }

    render() {
        return (
            <button onClick={this.handleSubmit} type='submit'>Click Me</button>
        );
    }
}
export default AlertUser;