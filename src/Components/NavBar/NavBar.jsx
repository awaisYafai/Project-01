import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FourtyTwo from './Fourtytwo.png';
import Form from 'react-bootstrap/Form';
import { BsSearch } from "react-icons/bs";
import './navbar.css'





function NavBar({handleGetPhotos}) {
    const [searchText, setSearchText] = useState("")
    useEffect(()=>{
        searchText.length === 0 && handleGetPhotos("flowers") 
    }, [searchText])
    
  return (
    <div>
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src={FourtyTwo} alt="Logo" height='70px' width='200px'/></Navbar.Brand>
          <Form className="d-flex justify-content-center align-items-center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=> setSearchText(e.target.value)}
                  />
                 
            <BsSearch onClick={()=> handleGetPhotos(searchText) } className='search-btn'/>
                </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
