import React, {useState} from "react";
import Employee from "src/components/Employee/employee";

function Contact(props) {
    const [employees, setEmployees] = useState(props.employees);

    const employeesList = employees.map((employee) => <Employee employee={ employee } />)
    console.log(employeesList);

    return (        
        <div className="row border rounded p-4 m-2">
            <div className="row">
                <h1>Contact Us</h1>
            </div>
                { employeesList }
        </div>
    )
}

export default Contact;