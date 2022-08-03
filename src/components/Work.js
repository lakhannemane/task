import React, { useEffect, useState } from "react";
import Index from "./HOC/Index";
import axios from "axios";
import WorkModal from "./Modal/WorkModal";

const Work = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [element, setElement] = useState()
  const [work, setWork] = useState([]);
  const [state , setState] = useState(false)

  const getWork = () => {
    console.log("hello");
    axios
      .get("http://mmrda.prometteur.in:5000/admin/all-contractorwork", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setWork(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel=()=>{
    setShow(false)
  }

  useEffect(() => {
    getWork();
  }, [show ,state ]);

  const onAddHandler = () => {
    setId("");
    setShow(true);
  };

  const onUpdateHandler = (id, data) => {
    setId(id);
    setElement(data);
    setShow(true);
  };

  const onRemoveHandler =(id)=>{
    console.log(id)
    axios
    .delete(
      `http://mmrda.prometteur.in:5000/admin/delete-contractor-work?id=${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      // setMessageList([...messageslist, res.data]);
      console.log("this is my delete  res" ,res.data);
      setState(true)
    })
    .catch((err) => {
      console.log("err", err);
    });
  }

  return (
    <div className="ms-4 my-4">
      <div className="d-flex">
        <h6 className="me-auto mt-2">Contractor</h6>
        <button
          className="me-4 btn btn-outline-success"
          onClick={() => onAddHandler()}
        >
          Add Contractor Work
        </button>
      </div>

      <div className="ap-com table-panel ">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">short_description</th>
              <th scope="col">work_start_date </th>
              <th scope="col">work_completion_date </th>
              <th scope="col">location</th>
              <th scope="col">city</th>
              <th scope="col">country</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {Work &&
            work.map((user, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{user.short_description}</td>
                    <td>{user.work_start_date}</td>
                    <td>{user.work_completion_date}</td>
                    <td>{user.location} </td>
                    <td>{user.city}</td>
                    <td>{user.country}</td>
                    <td style={{ cursor: "pointer" }}>
                      <div className="action-div dropdown">
                        <button
                          className="border-none"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ border: "none" }}
                        >
                          <i className="fas fa-ellipsis-v"></i>:
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li
                            className="my-2 mx-2"
                            onClick={() =>
                              onUpdateHandler(user.contractor_work_id, user)
                            }
                          >
                            <i className="fas fa-pencil-alt mx-2"></i> Update
                          </li>
                          <li className="my-2 mx-2" onClick={()=>onRemoveHandler(user.contractor_work_id)}>
                            <i className="fas fa-trash-alt mx-2"></i> Delete
                          </li>
                          {/* <li className="my-2 mx-2 " onClick={()=>onViewHanlder(user)}>
                          <i className="fas fa-trash-alt mx-2"></i> View
                        </li> */}
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>

      <WorkModal show={show} setShow={setShow} id={id} element={element} />
      {/* <ViewModel  element={element}/> */}
    </div>
  );
};

export default Index(Work);
