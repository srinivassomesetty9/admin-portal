// import React from 'react';
// import "./Productdetails.css";

// export default function Productdetails() {
//   return (
//     <div className='productdetails'>
//     <div className='product'>
//     <h2>List of Orders</h2>
//     </div>
//     </div>
//   )
// }
//.............................................................//

import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./Productdetails.css";

const Productdetails = () => {
  return (
    <div className='productdetails'>
      <div className='product'>
        Products<br/>
    <MDBTable hover small>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
    </div>
  );
}

export default Productdetails;