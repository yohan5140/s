import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '홍길동',
  'birthday': '9102323',
  'gender': '남자',
  'job': '대학생'
}

class App extends Component {
  render() {
    return (
      <div>
        <Customer 
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />

        <TodoListTemplate />
      </div> 
    );
  }
}

export default App;
