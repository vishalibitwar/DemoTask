import React, { useEffect, useState } from "react";
import data from "../Data.json";

const Editmodal = ({ order_id, onChange }) => {

  

  const [show, showModal] = useState(false);
  
  const handleChange = (e) => {

    

    // Array starts from 0 so we have to do order_id -1 because our id starts with 1
    data[order_id - 1].status = e.target.value;
    console.log(data[order_id - 1].status);
    // console.log(data)
    onChange(data);
  };

  return (
    <div className='clearfix m-0'>
      <button className='openModalBtn' onClick={() => showModal(true)}>
        Edit
      </button>
      <div style={{ display: show ? "block" : "none" }} className='modal'>
        <div className='modal-content bounceIn clearfix'>
          <span onClick={() => showModal(false)} className='close'>
            &times;
          </span>
          <div>
            <h3 className='status_heading'>select status</h3>
            <select className='form-select' onChange={handleChange}>
              <option value='Building'>Building</option>
              <option value='Pending'>Pending</option>
              <option value='Completed'>Completed</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editmodal;
