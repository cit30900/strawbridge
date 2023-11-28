import React, {useState} from "react";

function Employee(props) {
    const [employee, setEmployee] = useState(props.employee)

    return (
        <div className="col-sm-4 mb-2">
            <div className="card employee">
                <div className="card-body">
                    <h5 class="card-title">{ employee.first_name } { employee.last_name }</h5>
                    <p className="card-text">{ employee.email }<br />{ employee.phone_number }<span className='secret' hidden>{ employee.ssn }</span></p>
                </div>
            </div>
        </div>
    )
}

export default Employee;