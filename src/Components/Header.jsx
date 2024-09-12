import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light'>
            <img
              src='https://cdn0.iconfinder.com/data/icons/education-accents/160/quote-text-quotation-citation-512.png'
              height='30'
              alt=''
              loading='lazy'
            />
           Random Quotes Generator
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header