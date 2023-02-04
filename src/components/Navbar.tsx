import {Container, Nav, Navbar as NavbarBs, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart()

  return (
    <NavbarBs sticky='top' className='navbar-dark bg-dark shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
          <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          className='d-flex position-relative justify-content-center align-items-center'
          variant='outline-primary'>
            <IconContext.Provider value={{size: '1.25rem'}}>
              <BiShoppingBag />
            </IconContext.Provider>
            {
              (cartQuantity !== 0) &&
              <div
                className='position-absolute text-white rounded-circle bg-danger d-flex justify-content-center align-items-center'
                style={{width: '1.25rem', height: '1.25rem', bottom: '-5px', right: '-5px', fontSize: '16px'}}>
                  {cartQuantity}
              </div>
            }
        </Button>
      </Container>
    </NavbarBs>
  )
}