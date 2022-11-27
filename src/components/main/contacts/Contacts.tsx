import React from 'react';
import style from "./Contacts.module.scss";
import {Button} from "../../../common/components/Button";
import {useFormik} from "formik";

type FormikErrorType = {
  name?: string,
  email?: string,
  message?: string,
}

const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.name) {
        errors.name = 'required'
      }
      if (!values.email) {
        errors.email = 'required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'example: name@gmail.com'
      }
      if (!values.message) {
        errors.message = 'required'
      }
      return errors
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  })
  return (
    <section className={style.contacts}>
      <div className={`container ${style.contacts_container}`}>
        <h3 className={style.contacts_title}>Contacts</h3>
        <h4 className={style.contacts_sub_title}>Will send a reply within 24 hours to the indicated mail</h4>

        <form className={style.form} action="">
          <div className={style.input_container}>
            <input
              type="name"
              name="name"
              placeholder={'Name'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`${formik.errors.name && formik.touched.name && style.input_error} ${style.input}`}
            />
            {formik.errors.name && formik.touched.name ?
              <span className={style.error}>{formik.errors.name}</span> : null}
          </div>
          <div className={style.input_container}>
            <input
              type="email"
              name="email"
              placeholder={'Email'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${formik.errors.email && formik.touched.email && style.input_error} ${style.input}`}
            />
            {formik.errors.email && formik.touched.email ?
              <span className={style.error}>{formik.errors.email}</span> : null}
          </div>
          <div className={style.input_container}>
            <textarea name="message"
                      placeholder={'Write your offer'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      wrap={'hard'}
                      className={`${formik.errors.message && formik.touched.message && style.textarea_error} ${style.textarea}`}
            >
          </textarea>
            {formik.errors.message && formik.touched.message ?
              <span className={style.error}>{formik.errors.message}</span> : null}
          </div>
          <Button type={'submit'} title={'Send'} primary/>
        </form>
      </div>
    </section>
  );
};

export default Contacts;