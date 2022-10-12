import React from 'react';
import style from "./Contacts.module.css";
import Input from "./Input";

const Contacts = () => {
    return (
        <section className={style.contacts}>
            <div className={`container ${style.contacts_container}`}>
                <h3 className={style.contacts_title}>Contacts</h3>
                <form className={style.form} action="">
                    <Input/>
                    <Input/>
                    <textarea></textarea>
                    <button className={style.form_button}>submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;