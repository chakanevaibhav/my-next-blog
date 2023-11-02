import React from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="here you can contact me to get info"
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
