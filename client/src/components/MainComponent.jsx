import React from "react";
import Axios from "axios";
import "./MainComponent.css";
import { useState } from "react";
import Card from "./Card";
import SearchBody from "./SearchBody";

const positions = [
  { label: "Front-End Developer", value: "Front-End Developer" },
  { label: "Full-Stack Developer", value: "Full-Stack Developer" },
  { label: "Back-End Developer", value: "Back-End Developer" },
  { label: "Technical Support", value: "Technical Support" },
  { label: "IT Security", value: "IT Security" },
  { label: "Network Engineer", value: "Network Engineer" },
  { label: "Product manager", value: "Product manager" },
  { label: "Associate", value: "Associate" },
];

const MainComponent = () => {
  const [msg, setMsg] = useState("Not Saved");

  const [Employee, setEmployee] = useState({
    name: "",
    age: 0,
    country: "",
    position: positions[0].value,
    wage: 0,
  });

  const [employeeList, setEmployeeList] = useState([]);
  const [newWage, setNewWage] = useState(0);

  //add new employee
  const addEmployee = () => {
    Axios.post("http://localhost:3001/employee/create", {
      name: Employee.name,
      age: Employee.age,
      country: Employee.country,
      position: Employee.position,
      wage: Employee.wage
    }).then((response) => {
      setEmployeeList([...employeeList, response.data]);
    });
    setMsg("Saved !");
  };

  //get all employees
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employee/employees")
      .then((response) => {
        setEmployeeList(response.data);
      })
      .catch((err) => console.log(err));
  };

  // update employee wage
  const updateEmployeeWage = (emp) => {
    Axios.put("http://localhost:3001/employee/update", {
      _id: emp._id,
      name: emp.name,
      age: emp.age,
      country: emp.country,
      position: emp.position,
      wage: newWage,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val._id === emp._id
            ? {
                _id: val._id,
                name: val.name,
                age: val.age,
                country: val.country,
                position: val.position,
                wage: newWage,
              }
            : val;
        })
      );
    });
  };

  //delete employee from database
  const deleteEmployee = (_id) => {
    Axios.delete(`http://localhost:3001/employee/delete/${_id}`).then(
      (response) => {
        setEmployeeList(
          employeeList.filter((val) => {
            return val._id !== _id;
          })
        );
      }
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="outer-main">
      <div className="Main">
        <div className="Inputs">
          <label className="label-1">Name :</label>
          <input
            className="input-1"
            placeholder="Enter name.."
            name="name"
            type="text"
            onChange={handleChange}
          />

          <label className="label-1">Age :</label>
          <input
            className="input-1"
            placeholder="Enter age.."
            name="age"
            type="number"
            onChange={handleChange}
          />

          <label className="label-1">Country :</label>
          <input
            className="input-1"
            placeholder="Enter country.."
            name="country"
            type="text"
            onChange={handleChange}
          />

          <label className="label-1">Position :</label>
          <select className="input-1" name="position" onChange={handleChange}>
            {positions.map((v, k) => (
              <option className="options" value={v.value} key={k}>
                {v.label}
              </option>
            ))}
          </select>

          <label className="label-1">Wage :</label>
          <input
            className="input-1"
            placeholder="Enter wage.."
            name="wage"
            type="number"
            onChange={handleChange}
          />
          <p>{msg}</p>
          <button onClick={addEmployee} type="submit">
            Submit
          </button>
        </div>
        <div>
          <div className="employee-outer">
            <button onClick={getEmployees}>Show All Employees</button>
            <button
              onClick={() => {
                setEmployeeList([]);
              }}
            >
              Collapse List
            </button>
          </div>
          <div className="employee-inner">
            {employeeList.length !== 0 ? (
              employeeList.map((employee, key) => {
                return (
                  <Card
                    key={key}
                    employee={employee}
                    updateEmployeeWage={updateEmployeeWage}
                    deleteEmployee={deleteEmployee}
                    setNewWage={setNewWage}
                  />
                );
              })
            ) : (
              <p>No Data</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <SearchBody/>
      </div>
    </div>
  );
};

export default MainComponent;
