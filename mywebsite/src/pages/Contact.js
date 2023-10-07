/** @format */
import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
  max-width: 900px;
`;

const Wrapper = styled.section`
  overflow-y: auto;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-xxl);
  // align-items: center;
  // height: 100vh;
  // width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ContactMessageSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 365px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
`;

const InputContainer = styled.div`
  position: relative;
  height: 45px;
  width: 90%;
  max-width: 500px;
  margin-bottom: 2em;
`;
const Input = styled.input`
 autoComplete="none"
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  // border: 1px solid #DADCE0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
  // margin-bottom: 0.5em;
  &::placeholder {
    color: transparent;
  }
  &:focus + label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color: purple;
  }
  &:focus {
    border: 2px solid purple;
  }
  &:not(:placeholder-shown) + label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
  }
`;
const TextArea = styled.textarea`
  padding: 0.5em;
  border: 1px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  // color: #DADCE0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
`;

const Button = styled.button`
display: block;
width: fit-content;
border: none;
background-color: purple;
color: white;
border-radius: 6px;
cursor: pointer;
font-size: 16px;
margin-top: 50px;
margin-bottom: 30px;
&:hover {
  background-color: #9867C5;
  transform: translateY(-2px);
}
`;

const ContactMessage = styled.h1`
  font-size: 56px;
  line-height: 1.07;
  color: purple;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [status, setStatus] = useState("Submit");
  const [formErrors, setFormErrors] = useState(true);
   const nameTest = /[A-Za-z]{1}[A-Za-z]/;
   const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const submitToAPI = async (e) => {
    e.preventDefault();

       let details = {
      name: name,
      email: email,
      desc: message,
    };
   
    if (!nameTest.test(name) || name.length < 1) {
      setFormErrors(true);
      setNameErrorMessage("Please enter a name");
       document.getElementById('name').style.borderColor = "red";
    } 
    if (!emailTest.test(email) || email.length < 1) {
      setFormErrors(true);
      setEmailErrorMessage("Please enter a valid email address");
       document.getElementById('email').style.borderColor = "red";
    } 
    if(message.length < 1){
      document.getElementById('message').innerText = "Enter your message";
    }
    else {
      setFormErrors(false);
      setNameErrorMessage("");
      setEmailErrorMessage("");
      document.getElementById('name').style.borderColor = "black";
      document.getElementById("email").style.borderColor = "black";
    }
    if (!formErrors) {
      setStatus("Sending...");
      let response = await fetch(
        "https://sjuhk1jny2.execute-api.us-east-1.amazonaws.com/prod/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        }
      );
      setStatus("Submit");
      if (response.status === 200) {
        document.getElementById("emailConfirm").innerText =
          "Thank you!. Your email was sent successfully!";
           setName("");
           setEmail("");
           setMessage("");
      }
    }
    else {
       document.getElementById("emailConfirm").innerText = "Please correct the errors"
    }
  };

  const handelBlurText = (e) => {
    const { value } = e.target;
    if (!nameTest.test(value) || value.length < 1) {
      setFormErrors(true);
      setNameErrorMessage("Please enter a name");
      e.target.style.borderColor = "red";
    } else {
      setFormErrors(false);
      setNameErrorMessage("");
      e.target.style.borderColor = "black";
    }
  };

  const handleBlurEmail = (e) => {
    const { value } = e.target;
    if (!nameTest.test(value) || value.length < 1) {
      setFormErrors(true);
      setEmailErrorMessage("Please enter a valid email address");
      e.target.style.borderColor = "red";
    } else {
      setFormErrors(false);
      setEmailErrorMessage("");
      e.target.style.borderColor = "black";
    }
  };

  return (
    <main>
      <Wrapper>
        <Title>Contact Form</Title>{" "}
        <ContactContainer>
          <ContactMessageSection>
            <ContactMessage>Let's talk</ContactMessage>
          </ContactMessageSection>
          <Form onSubmit={submitToAPI}>
            <InputContainer aria-live="assertive" autoFocus>
              <Input
                autoComplete="none"
                type="text"
                name="name"
                id="name"
                placeholder={
                  nameErrorMessage || "Enter name here"
                }
                value={name}
                onBlur={handelBlurText}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Label htmlFor="name">Name:</Label>
              <ErrorMessage>{nameErrorMessage}</ErrorMessage>
            </InputContainer>
            <InputContainer aria-live="assertive">
              <Input
                autoComplete="none"
                type="email"
                name="email"
                id="email"
                placeholder={
                  emailErrorMessage || "Enter email here"
                }
                value={email}
                onBlur={handleBlurEmail}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Label htmlFor="email">Email:</Label>
              <ErrorMessage>{emailErrorMessage}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <TextArea
                id="message"
                name="message"
                rows="3"
                placeholder="Enter your message"
                style={{ border: "2px solid black" }}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </InputContainer>
              <Button
                type="submit"
                role="button"
              >
                {status}
              </Button>
            <InputContainer>
              <Title id="emailConfirm">
                <p></p>
              </Title>
            </InputContainer>
          </Form>
        </ContactContainer>
      </Wrapper>
    </main>
  );
};

export default Contact;
