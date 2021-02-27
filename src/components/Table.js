import React, { useState } from "react";
import Viewmodal from "./Viewmodal";
import Editmodal from "./Editmodal";
import Data from "../Data.json";
const Table = () => {
  const [data, setData] = useState(Data);

  
  console.log(data);
  return (
    <div>
      <table className='table table-dark striped'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>Order Id</th>
            <th scope='col'>Date</th>
            <th scope='col'>Status</th>
            <th scope='col'>Delivery Address</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curr, index) => {
           
           //Destructing
            const {
              order_id,
              date,
              status,
              delivery_address,
              order_details,
            } = curr;

            return (
              <tr key={index}>
                <th scope='row'>{order_id}</th>
                <td>{date}</td>
                <td>{status}</td>
                <td>{delivery_address}</td>
                <td className='d-flex'>
                  <Editmodal
                    onChange={(value) => {
                      setData(value);
                    }}
                    order_id={order_id}
                  />
                  <Viewmodal order_details={order_details} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
