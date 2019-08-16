import React, {Fragment, Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {students: []};
  }

  componentWillMount() {
    this.getStudents();
  }

  async getStudents() {
    try {
      const res = await axios.get('http://localhost:3000/students');
      this.setState({students: res.data});
    } catch (error) {
      console.error(error.message);
    }
    // axios
    //   .get('http://localhost:3000/students')
    //   .then(res => {
    //     this.setState({students: res.data});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  onDelete = usn => {
    const delStudentUsn = usn;
    axios
      .delete(`http://localhost:3000/students/${delStudentUsn}`)
      .then(res => {
        //this.props.history.push('/');
        //console.log(res);
        this.getStudents();
      })
      .catch(err => console.log(err));
  };

  render() {
    let students = this.state.students;
    return (
      <div>
        <h1 className="text-primary text-center">Students Details</h1>
        {students.length > 0 ? (
          <Fragment>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

                {students.map(student => (
                  <tr key={student.usn}>
                    <td>{student.usn}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>
                      <NavLink to={`/students/edit/${student.usn}`}>
                        <i class="fas fa-user-edit" />
                      </NavLink>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.onDelete(student.usn)}
                      >
                        <i class="fas fa-user-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i class="fas fa-user-plus" /> Add Student
            </NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <p className="lead">No students records..!! Add one</p>
            <br />
            <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i class="fas fa-user-plus" /> Add Student
            </NavLink>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Students;
