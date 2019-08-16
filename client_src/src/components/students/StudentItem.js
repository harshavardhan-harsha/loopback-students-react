import React, {Fragment} from 'react';

const StudentItem = ({student}) => {
  return (
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
    </Fragment>
  );
};

export default StudentItem;
