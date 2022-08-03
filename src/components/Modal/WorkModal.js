import React, { useState } from "react";
import { Formik } from "formik";
import { Modal } from "antd";
import { DatePicker } from "antd";
import moment from "moment";
import axios from "axios"

// import moment from "moment";
import "moment/locale/zh-cn";

const WorkModal = ({ show, setShow, id, element }) => {
  const [start_date, setStart_date] = useState();
  const [End_date, setEnd_date] = useState();
  const [expiry_date, setExpiry_date] = useState();

  // console.log("bod is ", start_date);
  // console.log("bod is ", End_date);
  // console.log("bod is ", expiry_date);

  // console.log(element);
  const handleCancel = () => {
    setShow(false);
  };

  const handleSubmit = (values) => {

    const data = {
      ...values,
      work_start_date: start_date,
      work_completion_date: End_date,
      work_expiryDate: expiry_date,
    };

    if(id){
      axios
      .patch(
        `http://mmrda.prometteur.in:5000/admin/update-contractor-work?id=${id}`,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // setMessageList([...messageslist, res.data]);
        console.log("this is my res" ,res.data);
        handleCancel();
      })
      .catch((err) => {
        console.log("err", err);
      });

    }else{
      axios
        .post("http://mmrda.prometteur.in:5000/admin/create-contractor-work", data, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("add ressponse",res.data);
          // console.log(token);
          handleCancel();
        })
        .catch((err) => {
          console.log(err);
          // console.log(token);
        });
    }
    // console.log(data);
  };
  return (
    <Modal
      width={800}
      title="Basic Modal"
      visible={show}
      onCancel={handleCancel}
      footer={false}
      destroyOnClose
    >
      {id ? (
        <Formik
          initialValues={{
            short_description: element.short_description,
            long_description: element.long_description,
            penalty_rate: element.penalty_rate,
            contractor_id: element.contractor_id,
            location: element.location,
            address_1: element.address_1,
            address_2: element.address_2,
            work_start_date: element.work_start_date,
            work_completion_date: element.work_completion_date,
            city: element.city,
            state: element.state,
            country: element.country,
            road_type: element.road_type,
            work_expiryDate: element.work_expiryDate,
          }}
          validate={(values) => {
            const errors = {};

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            FormikControl,
            setFieldValue,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">short_description:</label>
                    <input
                      type="short_description"
                      name="short_description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.short_description}
                      className="form-control my-2"
                    />
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">long_description:</label>
                    <input
                      type="long_description"
                      name="long_description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.long_description}
                      className="form-control my-2"
                    />
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">Start Date</label>
                    <br />
                    <input
                      type="date"
                      name="work_start_date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.work_start_date}
                      className="form-control my-2"
                    />{" "}
                    <DatePicker
                      selected={
                        element
                          ? moment(values.work_start_date, "YYYY-MM-DD")
                          : ""
                      }
                      onChange={(date, dateString) => setStart_date(dateString)}
                    />
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">End Date</label>
                    <br />
                    <input
                      type="date"
                      name="work_completion_date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.work_completion_date}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">penalty_rate:</label>
                    <input
                      type="penalty_rate"
                      name="penalty_rate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.penalty_rate}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">contractor_id:</label>
                    <input
                      type="contractor_id"
                      name="contractor_id"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.contractor_id}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">location:</label>
                    <input
                      type="location"
                      name="location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.location}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">address_1:</label>
                    <input
                      type="address_1"
                      name="address_1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.address_1}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">address_2:</label>
                    <input
                      type="address_2"
                      name="address_2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.address_2}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">city:</label>
                    <input
                      type="city"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.city}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">state:</label>
                    <input
                      type="state"
                      name="state"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.state}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">country:</label>
                    <input
                      type="country"
                      name="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.country}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="email" style={{ display: "block" }}>
                      Company
                    </label>
                    <select
                      name="road_type"
                      defaultValue={values.road_type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "block" }}
                      className="form-control"
                    >
                      <option value="" label="Select a road Type">
                        Select a road
                      </option>
                      <option value="Cement road" label="Cement road">
                        Cement road
                      </option>
                      <option value="Tar Road" label="Tar Road">
                        Tar Road
                      </option>

                      <option value="Block Road" label="Block Road">
                        Block Road
                      </option>
                    </select>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">work_expiryDate:</label>
                    <br />
                    <input
                      type="date"
                      name="work_expiryDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.work_expiryDate}
                      className="form-control my-2"
                    />
                  </div>
                </div>
              </div>
              {/* company name */}

              <button type="submit" className="btn btn-success my-4">
                Update
              </button>
            </form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{
            short_description: "",
            long_description: "",
            penalty_rate: "",
            contractor_id: "",
            location: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            country: "",
            road_type: "",
          }}
          validate={(values) => {
            const errors = {};

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            FormikControl,

            setFieldValue,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">short_description:</label>
                    <input
                      type="short_description"
                      name="short_description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.short_description}
                      className="form-control my-2"
                    />
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">long_description:</label>
                    <input
                      type="long_description"
                      name="long_description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.long_description}
                      className="form-control my-2"
                    />
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">Start Date</label>
                    <br />
                    <DatePicker
                      selected={start_date}
                      onChange={(date, dateString) => setStart_date(dateString)}
                    />
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">End Date</label>
                    <br />
                    <DatePicker
                      selected={End_date}
                      onChange={(date, dateString) => setEnd_date(dateString)}
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">penalty_rate:</label>
                    <input
                      type="penalty_rate"
                      name="penalty_rate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.penalty_rate}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">contractor_id:</label>
                    <input
                      type="contractor_id"
                      name="contractor_id"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contractor_id}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">location:</label>
                    <input
                      type="location"
                      name="location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">address_1:</label>
                    <input
                      type="address_1"
                      name="address_1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address_1}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">address_2:</label>
                    <input
                      type="address_2"
                      name="address_2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address_2}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">city:</label>
                    <input
                      type="city"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">state:</label>
                    <input
                      type="state"
                      name="state"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">country:</label>
                    <input
                      type="country"
                      name="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.country}
                      className="form-control my-2"
                    />
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="email" style={{ display: "block" }}>
                      Company
                    </label>
                    <select
                      name="road_type"
                      value={values.road_type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "block" }}
                      className="form-control"
                    >
                      <option value="" label="Select a road Type">
                        Select a road
                      </option>
                      <option value="Cement road" label="Cement road">
                        Cement road
                      </option>
                      <option value="Tar Road" label="Tar Road">
                        Tar Road
                      </option>

                      <option value="Block Road" label="Block Road">
                        Block Road
                      </option>
                    </select>
                  </div>

                  <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <label className="fw-bold">work_expiryDate:</label>
                    <br />

                    <DatePicker
                      selected={expiry_date}
                      onChange={(date, dateString) =>
                        setExpiry_date(dateString)
                      }
                    />
                  </div>
                </div>
              </div>
              {/* company name */}

              <button type="submit" className="btn btn-success my-4">
                Add
              </button>
            </form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default WorkModal;
