import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import "./SearchBody.css"

const SearchBody = () => {

    const [employeeList,setEmployeeList] = useState([]);
    const [name,setName] = useState("")

    const getSearchedEmployees = () => {
        axios
          .get(`http://localhost:3001/employee/search/${name}`)
          .then((response) => {
            setEmployeeList(response.data);
          })
          .catch((err) => {
            console.log(err);
            setEmployeeList([]);
          });
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        getSearchedEmployees();
    }
  return (
    <div>
      <div>
        <input type="text" className='input-1' onChange={handleChange} />
        <button className='btn' onClick={()=>{getSearchedEmployees();}}>Search</button>
      </div>
      <div>
        {employeeList.length !== 0 ?
        employeeList.map((employee,key) => {
            return (
              <div>
                <div className="employee-inner" key={key}>
                  <div className="card-body">
                    <h3>Name : {employee.name}</h3>
                    <p>Age : {employee.age}</p>
                    <p>Country : {employee.country}</p>
                    <p>Position : {employee.position}</p>
                    <p>Wage : {employee.wage}</p>
                  </div>
                </div>
              </div>
            );
        }) : <>No Data</>
        }
      </div>
    </div>
  );
}

export default SearchBody