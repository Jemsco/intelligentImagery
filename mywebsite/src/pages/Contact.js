/** @format */
import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const FormGroup = styled.form`
  display: block;
  width: 300px;
  margin-right: 40px;
  margin-left -40px;
`;
const Input = styled.input`
  padding: 0.5em;
  border: 1;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;
const TextArea = styled.textarea`
  padding: 0.5em;
  border: 1px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;
const Button = styled.button``;
const Label = styled.label`
  margin-top: 20px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Submit");
  const submitToAPI = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      desc: message.value,
    };
    const nameTest = /[A-Za-z]{1}[A-Za-z]/;
    if(!nameTest.test(name.value)) {
      alert("Please enter a name");
      return;
    }
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
    // let result = await response.json();
    // alert(response.status);
    if (response.status === 200) {
      document.getElementById("emailConfirm").innerText =
          "Thank you!. Your email was sent successfully!";
      }
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    
  };
  return (
    <main>
      <Wrapper>
        <Title>
          <h1>Contact Form</h1>
        </Title>{" "}
        <FormGroup onSubmit={submitToAPI}>
          <Label for="name">
            <h2>Name: </h2>
          </Label>
          <br />
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name here"
            class="form-control"
            // value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <Label for="email">
            <h3>Email: </h3>
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email here"
            class="form-control"
            // value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <Label for="message">
            <h4>How can we help you?</h4>
          </Label>
          <br />
          <TextArea
            id="message"
            name="message"
            rows="3"
            placeholder="Enter your message"
            class="form-control"
            style={{ border: "2px solid black" }}
            // value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <br />
          <div id="emailConfirm">
            <p></p>
          </div>
          <Button type="submit">{status}</Button>
        </FormGroup>
      </Wrapper>
    </main>
  );
};

export default Contact;
