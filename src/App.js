
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './component/profile/ProfilePhoto'
import FullName from './component/profile/FullName'
import Adress from './component/profile/Address'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    
    <div className="App">
     <div className="nav">
      <Navbar sticky="top" bg="transparent" variant="dark">
    <Navbar.Brand href="#home">My Profile</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#work">Work</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
  </Navbar>
  </div>
  <div className="form">
    <p className="title">Contact Me!</p>
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="type your message here"/>
  </Form.Group>
  <Button variant="secondary" type = "submit" >Submit</Button>
</Form>
</div>
  <div className="info">
      <ProfilePhoto></ProfilePhoto>
      <br/>
      <FullName></FullName>
      <br/>
      <Adress></Adress>
      <div>My email :
        <p>Ghadabouzaiene50@gmail.com</p>
      </div>
      </div>
    </div>
  );
}

export default App;
