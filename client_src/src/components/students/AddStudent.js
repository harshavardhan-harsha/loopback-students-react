import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class AddStudent extends Component {
  addStudent(newStudent) {
    console.log(newStudent);
    axios
      .request({
        method: 'post',
        url: 'http://localhost:3000/students',
        data: newStudent,
      })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    // axios
    //   .post('http://localhost:3000/students', {newStudent})
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  onSubmit(e) {
    const age = parseInt(this.refs.age.value);
    const newStudent = {
      usn: this.refs.usn.value,
      name: this.refs.name.value,
      age: age,
    };
    this.addStudent(newStudent);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <br />
        <NavLink to="/" className="btn btn-light">
          Back
        </NavLink>
        <h1 className="text-primary text-center">Add Student Info</h1>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="usn">Usn</label>
            <input
              type="text"
              name="usn"
              ref="usn"
              placeholder="Enter Usn"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              ref="age"
              placeholder="Enter Age"
              required
            />
          </div>
          <input
            type="submit"
            value="Add Student"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default AddStudent;
