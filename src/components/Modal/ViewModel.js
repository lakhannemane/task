import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Index from "../HOC/Index";
import { IdContext } from "../context";

const ViewModel = ({ cid }) => {
  const [perticularWork, setPerticularWork] = useState(null);

  const { cwId, setCWID } = useContext(IdContext);

  console.log(cwId);

  const getWorkPerticular = () => {
    axios
      .get(
        `http://mmrda.prometteur.in:5000/admin/view-contractor-work?id=${cwId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setPerticularWork(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getWorkPerticular();
  }, []);

  console.log(perticularWork);

  return (
    <div className="ms-4 my-4">
      <h5> Work Records </h5>

      <div>
        {perticularWork
          ? perticularWork &&
            perticularWork.map((element, index) => {
              return (
                <div key={index} className="card w-75 my-5 mx-auto">
                  <div className="card-body">
                  <p><strong className="me-5">Ctr.Id :</strong>   &nbsp; {element.contractor_id}</p>
                  <p><strong>Work Description</strong> :{element.short_description}</p>
                  <p><strong>Work Description</strong> :{element.long_description}</p>
                  <p><strong>Work penalty </strong>:{element.penalty_rate}</p>
                  <p><strong>Work Start date</strong>{element.work_start_date}</p>
                  <p><strong>Work City:</strong>{element.city}</p>
                  </div>
                </div>
              );
            })
          : <div className="fw-bold card w-75 my-5 mx-auto ">
            <strong className="text-center py-4 h4">No Work Record!</strong>
          </div>
          }
      </div>

   
    </div>
  );
};

export default Index(ViewModel);
