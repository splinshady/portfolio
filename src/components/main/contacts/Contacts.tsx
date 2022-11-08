import React from 'react';
import style from "./Contacts.module.scss";
import {Button} from "../../../common/components/Button";
import {useFormik} from "formik";

type FormikErrorType = {
    name?: string,
    email?: string
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
                errors.name = 'Required'
            } else if (values.name.length<3) {
                errors.name = 'Invalid name'
            }
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            //formik.resetForm()
        },
    })
    return (
        <section className={style.contacts}>
            <div className={`container ${style.contacts_container}`}>
                <h3 className={style.contacts_title}>Contacts</h3>

                <form className={style.form} action="">
                    <input
                        type="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={style.input}
                    />
                    {formik.errors.name ? <span>{formik.errors.name}</span> : null}
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={style.input}
                    />
                    {formik.errors.email ? <span>{formik.errors.email}</span> : null}
                    <textarea name="message"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.message}
                              className={style.textarea}></textarea>
                    <Button type={'submit'} title={'Send'} primary />
                </form>
            </div>
        </section>
    );
};

export default Contacts;