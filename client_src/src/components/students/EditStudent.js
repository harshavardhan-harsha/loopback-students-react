import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usn: '',
      name: '',
      age: '',
    };
  }

  componentWillMount() {
    this.getStudentDetails();
  }
  getStudentDetails() {
    let editusn = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/students/${editusn}`)
      .then(res => {
        this.setState(
          {
            usn: res.data.usn,
            name: res.data.name,
            age: res.data.age,
          },
          () => {
            console.log(this.state);
          },
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
  editStudent(newStudent) {
    axios
      .request({
        method: 'put',
        url: `http://localhost:3000/students/${this.state.usn}`,
        data: newStudent,
      })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  }
  onSubmit(e) {
    const age = parseInt(this.refs.age.value);
    const newStudent = {
      usn: this.refs.usn.value,
      name: this.refs.name.value,
      age: age,
    };
    this.editStudent(newStudent);
    //console.log(this.refs.name.value);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }
  render() {
    return (
      <div>
        <br />
        <NavLink to="/" className="btn btn-light">
          Back
        </NavLink>
        <h1 className="text-secondary text-center">Edit Student details</h1>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="usn">Usn</label>
            <input
              type="text"
              name="usn"
              ref="usn"
              value={this.state.usn}
              readOnly
            />
          </div>
          <div className="form-group">
            {' '}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              ref="age"
              value={this.state.age}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <input
            type="submit"
            value="Save Details"
            className="btn btn-secondary btn-block"
          />
        </form>
      </div>
    );
  }
}

export default EditStudent;
