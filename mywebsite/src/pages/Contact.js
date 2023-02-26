/** @format */
import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const FormGroup = styled.div`
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
const Button = styled.button`
`;
const Label = styled.label`
  margin-top: 20px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function submitToAPI() {
    const endpoint = `https://sjuhk1jny2.execute-api.us-east-1.amazonaws.com/prod/`;
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      name: name,
      email: email,
      desc: message,
    });
    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        document.getElementById("emailConfirm").innerText =
          "Email sent successfully!";
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        document.getElementById("emailConfirm").innerText =
          "An unkown error occured.";
      });
  }
  return (
    <main>
      <Wrapper>
        <Title>
          <h1>Contact Form</h1>
        </Title>{" "}
        <FormGroup id="contact-form" method="post">
          <Label for="name">
            <h4>Name: </h4> 
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
            <h4>Email: </h4>
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
          <TextArea
            class="g-recaptcha"
            data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys"
          />
          <Button type="button" onClick={submitToAPI} class="btn btn-lg">
            Submit
          </Button>
          <div class="modal" id="emailConfirm">
            <p>Thank You. Your email has been sent.</p>
          </div>
        </FormGroup>
      </Wrapper>
    </main>
  );
};

export default Contact;
