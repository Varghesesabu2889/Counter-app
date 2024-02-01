import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='warning'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
             <img
              src='./images/pic2.gif'
              width='100'
              height='60'
              alt=''
              loading='lazy'
            />
            <img
              src='./images/pic3.gif'
              width='100'
              height='60'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header