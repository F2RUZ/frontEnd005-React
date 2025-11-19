// import React, { useState } from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";

// const App = () => {
//   // Controlled inputs uchun state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [option, setOption] = useState("");

//   // Uncontrolled inputs uchun state
//   const [uncontrolledData, setUncontrolledData] = useState({});

//   // Controlled form submit
//   const handleControlledSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !message || !option) {
//       toast.error("Please fill all required fields!");
//       return;
//     }
//     toast.success("Controlled Form submitted successfully!");
//     console.log({ name, email, message, option });
//     // Form reset
//     setName("");
//     setEmail("");
//     setMessage("");
//     setOption("");
//   };

//   // Uncontrolled form submit
//   const handleUncontrolledSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const data = {
//       name: form.name.value,
//       email: form.email.value,
//       message: form.message.value,
//       option: form.option.value,
//     };
//     if (!data.name || !data.email || !data.message || !data.option) {
//       toast.error("Please fill all required fields!");
//       return;
//     }
//     setUncontrolledData(data);
//     toast.success("Uncontrolled Form submitted successfully!");
//     form.reset();
//   };

//   return (
//     <Container className="my-5">
//       <ToastContainer />

//       <Row className="mb-5">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Controlled Form</Card.Title>
//               <Form onSubmit={handleControlledSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter name"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter email"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Enter message"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Option</Form.Label>
//                   <Form.Select
//                     value={option}
//                     onChange={(e) => setOption(e.target.value)}
//                     required
//                   >
//                     <option value="">Select an option</option>
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row>
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Uncontrolled Form</Card.Title>
//               <Form onSubmit={handleUncontrolledSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     placeholder="Enter name"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     placeholder="Enter email"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     name="message"
//                     placeholder="Enter message"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Option</Form.Label>
//                   <Form.Select name="option" required>
//                     <option value="">Select an option</option>
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//               {uncontrolledData.name && (
//                 <div className="mt-3">
//                   <h6>Submitted Data:</h6>
//                   <pre>{JSON.stringify(uncontrolledData, null, 2)}</pre>
//                 </div>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;

// // import React from "react";
// // import UncontrolledForm from "./components/UncontrolledForm";

// // const App = () => {
// //   return (
// //     <div>
// //       <UncontrolledForm />
// //     </div>
// //   );
// // };

// // export default App;

import React from "react";
import Game from "./components/Game";

const App = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

export default App;
