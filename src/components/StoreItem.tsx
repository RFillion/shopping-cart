import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

import {BsCartPlusFill, BsCartDashFill, BsArrowRightShort} from 'react-icons/bs'
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
  id: number,
  title: string,
  price: number,
  image: string
}

export function StoreItem({id, title, price, image}: StoreItemProps) {
  const {getQuantity, increaseQuantity, decreaseQuantity, remove} = useShoppingCart()
  const quantity = getQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} height='400px' style={{objectFit: 'contain'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? 
            (<Button onClick={() => increaseQuantity(id)} className="w-100 d-flex align-items-center justify-content-center">Add To Cart <BsArrowRightShort style={{width: '1.5rem', height: '1.5rem'}} /></Button>) : 
            (
              <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                <div className="d-flex align-items-center justify-content-center" style={{gap: '.5rem'}}>
                  <Button onClick={() => decreaseQuantity(id)}><BsCartDashFill /></Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseQuantity(id)}><BsCartPlusFill /></Button>
                </div>
                <Button onClick={() => remove(id)} variant="danger" size="sm">Remove</Button>
              </div>
            )
          }
        </div>
      </Card.Body>
    </Card>
  )
}