import React from "react";
import { Formik } from "formik";
import Modal from "antd/lib/modal";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/User";

const Login = ({ show, setShow }) => {
  const {user , status} = useSelector((state) => state.user);

  console.log(user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user);
  const handleOk = () => {
    setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };
  const handleSubmit = (values) => {
    console.log(values);

    axios
      .post("http://mmrda.prometteur.in:5000/admin/admin-login", values)
      .then((res) => {
        dispatch(login(res.data));
        localStorage.setItem("token" , res.data[0].token);
        navigate("/dashbord")
      })
      .catch((err) => console.log(err));

    handleCancel();
  };
  return (
    <Modal
      title="Login"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      destroyOnClose
    >
      {" "}
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <br />
            <label className="fw-bold ">password :</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="form-control my-2"
            />
            <button type="submit" className="btn btn-success my-4">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default Login;
