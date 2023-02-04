import { useState } from "react"
import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

import { handleStoreApi } from '../pages/Store'

type CartItemProps = {
  id: number,
  quantity: number,
}

export function CartItem({id, quantity}:CartItemProps) {
  const [item, setItem] = useState<any[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const {remove} = useShoppingCart()

  handleStoreApi().then(json => {
    setItem(json)
    setIsLoaded(true)
  })
  
  const element = item.find(i => i.id === id)
  if (element == null) return null
  

  return (
    <>
      {
        isLoaded
        ?
        <Stack direction="horizontal" gap={2}>
          <img src={element.image} style={{width: '125px', height: '75px', objectFit: 'contain', objectPosition: 'center'}} />
        </Stack>
        :
        <h3>Loading</h3>
      }
    </>
  )
}