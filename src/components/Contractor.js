import React, { useContext, useEffect, useState } from "react";
import Index from "./HOC/Index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import ContractorModel from "./Modal/ContractorModel";
import { IdContext } from "./context";

const Contractor = () => {

  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [element, setElement] = useState();
  const [contractor, setContractor] = useState([]);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const {cwID , setCWID} = useContext(IdContext)

  const getAllContract = () => {
    // console.log("hello");
    axios
      .get("http://mmrda.prometteur.in:5000/admin/all-contractor", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setContractor(res.data);
        //  console.log(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllContract();
  }, [show]);

  const addContractHandler = () => {
    setId("");
    setShow(true);
  };

  const updateHandler = (id, data) => {
    setShow(true);
    setId(id);
    setElement(data);
    // alert(id)
    // console.log(data)
  };

  const onGetWorkhandler = (id) => {
    setCWID(id)
    navigate(`/user/${id}`);
    setElement("");
    // setShow("true")
  };

  return (
    <div className="ms-4 my-4">
      <div className="d-flex">
        <h6 className="me-auto ">Contractor</h6>
        <button
          className="me-4 btn btn-success my-1 "
          onClick={() => addContractHandler()}
        >
          ADD
        </button>
      </div>
      <div>
        <div className="ap-com table-panel ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">company_name</th>
                <th scope="col">company_type </th>
                <th scope="col">contractor_name </th>
                <th scope="col">contact_number</th>
                <th scope="col">email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {contractor &&
              contractor.map((user, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{user.company_name}</td>
                      <td>{user.company_type}</td>
                      <td>{user.contractor_name}</td>
                      <td>{user.contact_number} </td>
                      <td>{user.email}</td>
                      <td style={{ cursor: "pointer" }}>
                        <ul className="list-unstyled d-flex ">
                          <li
                            onClick={() =>
                              updateHandler(user.contractor_id, user)
                            }
                          >
                            {" "}
                            <button className="btn btn-warning mx-2">
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn btn-success"
                              onClick={() =>
                                onGetWorkhandler(user.contractor_id)
                              }
                            >
                              View Work
                            </button>
                          </li>
                        </ul>{" "}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>

      <ContractorModel
        show={show}
        setShow={setShow}
        id={id}
        element={element}
      />
    </div>
  );
};

export default Index(Contractor);
