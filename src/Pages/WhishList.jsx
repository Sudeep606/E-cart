import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../slice/whishSlice'
// import { addToCart } from '../slice/whishSlice'


function WhishList() {
  const whishlistArray = useSelector((state)=>state.whishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWhishlist(product.id))
  }
  return (
    <Row style={{marginTop:'100px'}}>WhishList
    {
    whishlistArray.length>0?whishlistArray.map((product,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded m-3' style={{ width: '18rem' ,height:'30rem'}}>
      <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title} </Card.Title>
        <Card.Text>
         <p>{product?.description.slice(0,50)}...</p>
         <h5 className='text-info'>${product?.price}</h5>
        </Card.Text>
       <div className='d-flex justify-content-between'>
       <Button onClick={()=>dispatch(removeFromWhishlist(product.id))} className='btn btn-light'><i class="fa-solid fa-trash text-danger"></i></Button>
       <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'><i class="fa-solid fa-cart-plus text-success"></i></Button>
       </div>
      </Card.Body>
    </Card>
            </Col>
    )) : <div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
<img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />
<h3 className='text-danger text-center'>Whishlist is Empty</h3>
<Link style={{textDecoration:"none"}} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>
    </div>
        }
    </Row>
  )
}

export default WhishList