import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="employee-inner" key={props.key}>
        <div className="card-body">
          <h3>Name : {props.employee.name}</h3>
          <p>Age : {props.employee.age}</p>
          <p>Country : {props.employee.country}</p>
          <p>Position : {props.employee.position}</p>
          <p>Wage : {props.employee.wage}</p>
          <div>
            <input
              className="input-1"
              type={"number"}
              placeholder={"enter wage.."}
              onChange={(event) => {
                props.setNewWage(event.target.value);
              }}
            />
            <button
              onClick={() => {
                props.updateEmployeeWage(props.employee);
              }}
            >
              Update Wage
            </button>
            <button
              onClick={() => {
                props.deleteEmployee(props.employee._id);
              }}
            >
              Delete Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card