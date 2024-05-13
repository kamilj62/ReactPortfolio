import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/Contact.css'
import { checkPassword, validateEmail } from '../Utils/Helper'


function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and text
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(email)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${Name}`
      );
      return;
    }
    alert(`Hello ${Name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
  };

  return (
    
    <div className="container text-center contact">
      <h1>Hello, {Name}</h1>
      <Form className="form" onSubmit={handleFormSubmit}>
      <InputGroup className="mb-3">
          <Form.Control
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          />
        </InputGroup>
        <br></br>
        <InputGroup className="mb-3">
          <Form.Control
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          />
        </InputGroup>
        <br></br>

      <FloatingLabel controlId="floatingTextarea" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
       
      
        <br></br>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
