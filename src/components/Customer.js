import React from 'react';

class Customer extends React.Component {
    render(){
        return(
            <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.bithday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

export default Customer;