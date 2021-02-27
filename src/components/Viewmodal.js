import React, { useState } from "react";

const Viewmodal = ({ name, order_details }) => {
  const [show, showModal] = useState(false);


  
  //Destructing order_details
  const {
    modal_name,
    fabrication_process,
    material,
    thickness,
    quantity,
    amount,
  } = order_details;


  return (
    <div className='clearfix m-0'>
      <button className='openModalBtn' onClick={() => showModal(true)}>
        View
      </button>
      <div style={{ display: show ? "block" : "none" }} className='modal'>
        <div className='modal-content bounceIn clearfix'>
          <span onClick={() => showModal(false)} className='close'>
            &times;
          </span>
          <div>
            <table className='table '>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>Modal Name</th>
                  <th scope='col'>Fabrication Process</th>
                  <th scope='col'>Material</th>
                  <th scope='col'>Thickness</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{modal_name}</td>
                  <td>{fabrication_process}</td>
                  <td>{material}</td>
                  <td>{thickness}</td>
                  <td>{quantity}</td>
                  <td>{amount}</td>
                  <td>
                    <button type='button' className='btn btn-primary'>
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewmodal;
