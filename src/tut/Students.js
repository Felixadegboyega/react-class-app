import React, { useEffect } from 'react'
import "./student.css";

export default ({userArr, deleteStudent, editStudent}) => {
	return(
		<>
			<div className="main">
				{
					userArr.length > 0 ?
					<table border="1">
						<thead>
							<tr>
								<th>Username</th>
								<th>Level</th>
								<th>Actios</th>
							</tr>
						</thead>
						<tbody>
							{
								userArr.map((each, i)=>(
									<tr key={i}>
										<td>{each.username}</td>
										<td>{each.level}</td>
										<td>
											<button onClick={()=>deleteStudent(i)}>Delete</button>
											<button onClick={()=>editStudent(i)}>Edit</button>
											{/* <button data-toggle="modal" data-target="#editModal">Edit</button> */}
										</td>
									</tr>
								))
							}
						</tbody>
					</table> : 'No data in this table'
				}
			</div>
		</>
	)	
}
