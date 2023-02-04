import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function Store() {
  const [items, setItems] = useState<any[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    handleStoreApi().then(json => {
      setItems(json)
      setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <h1>Store</h1>
      {
        isLoaded
        ?
        <Row xs={1} md={2} lg={3} className='g-3'>
          {
            items.map(item => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))
          }
        </Row>
        :
        <h3>Loading</h3>
      }
    </>
  )
}

export async function handleStoreApi() {
  const response = await fetch('https://fakestoreapi.com/products')
  const datas = response.json()
  return datas
}