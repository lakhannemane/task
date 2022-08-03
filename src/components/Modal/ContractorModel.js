import React from "react";
import { Modal } from "antd";
import { Formik } from "formik";
import axios from "axios";

const ContractorModel = ({ show, setShow, id, element }) => {
  const handleCancel = () => {
    setShow(false);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleSubmit = (values) => {
    console.log(values);

    if (id) {
      // update
      axios
        .patch(
          `http://mmrda.prometteur.in:5000/admin/update-contractor?id=${id}`,
          values,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          // setMessageList([...messageslist, res.data]);
          // console.log(res.data);
          handleCancel();
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      axios
        .post("http://mmrda.prometteur.in:5000/admin/add-contractor", values, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          // console.log(token);
          handleCancel();
        })
        .catch((err) => {
          console.log(err);
          // console.log(token);
        });
        // handleCancel();
    }
  };
  return (
    <Modal
      title="Basic Modal"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      destroyOnClose
    >
      {id ? (
        <Formik
          initialValues={{
            company_name: element.company_name,
            company_type: element.company_type,
            contractor_name: element.contractor_name,
            contact_number: element.contact_number,
            email: element.email,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              {/* company name */}
              <label className="fw-bold">company_name:</label>
              <input
                type="company_name"
                name="company_name"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.company_name}
                className="form-control my-2"
              />
              {/* company type */}
              <label htmlFor="email" style={{ display: "block" }}>
                Company
              </label>
              <select
                name="company_type"
                defaultValue={values.company_type}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
                className="form-control"
              >
                <option value="" label="Select a company">
                  Select a company
                </option>
                <option value="Private LTD" label="Private LTD">
                  Private LTD.
                </option>
                <option value=" Public LTD" label=" Public LTD">
                  Public LTD.
                </option>

                <option value="PPL" label="PPL">
                  PPL
                </option>
              </select>
              {/* persone name */}
              <label className="fw-bold">contractor_name:</label>
              <input
                type="contractor_name"
                name="contractor_name"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.contractor_name}
                className="form-control my-2"
              />
              {/* contact_number */}
              <label className="fw-bold">contact_number:</label>
              <input
                type="contact_number"
                name="contact_number"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.contact_number}
                className="form-control my-2"
              />
              <label className="fw-bold">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.email}
                className="form-control my-2"
              />
              {errors.email && touched.email && errors.email ? (
                <p className="text-danger mt-2">invalid email</p>
              ) : (
                ""
              )}
              <button type="submit" className="btn btn-success my-4">
                update
              </button>
            </form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{
            company_name: "",
            company_type: "",
            contractor_name: "",
            contact_number: "",
            email: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
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
          }) => (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">company_name:</label>
              <input
                type="company_name"
                name="company_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.company_name}
                className="form-control my-2"
              />
              <label htmlFor="email" style={{ display: "block" }}>
                Company
              </label>
              <select
                name="company_type"
                value={values.company_type}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
                className="form-control"
              >
                <option value="" label="Select a company">
                  Select a company
                </option>
                <option value="Private LTD" label="Private LTD">
                  Private LTD.
                </option>
                <option value=" Public LTD" label=" Public LTD">
                  Public LTD.
                </option>

                <option value="PPL" label="PPL">
                  PPL
                </option>
              </select>
              <label className="fw-bold">contractor_name:</label>
              <input
                type="contractor_name"
                name="contractor_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contractor_name}
                className="form-control my-2"
              />
              <label className="fw-bold">contact_number:</label>
              <input
                type="contact_number"
                name="contact_number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contact_number}
                className="form-control my-2"
              />
              <label className="fw-bold">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="form-control my-2"
              />
              {errors.email && touched.email && errors.email ? (
                <p className="text-danger mt-2">invalid email</p>
              ) : (
                ""
              )}
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

export default ContractorModel;
