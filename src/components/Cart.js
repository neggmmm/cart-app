import { Button, Container, Image, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { clear, deleteFromCart } from "../rtk/slices/cart-slice"


function Cart () {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const totalPrice = cart.reduce((acc,product)=>{
         acc += product.price * product.quantity
         return acc;
    },0)
    return(
      <Container>
       <h1 className="py-5">Your Cart</h1>
       <Button variant="primary" onClick={()=>dispatch(clear())} >Clear</Button>
       <h5>total price: ${totalPrice.toFixed(2)}</h5>
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(product=>(
             <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td><Image src={product.image} alt={product.title} style={{width:"50px",height:"50px"}} /></td>
            <td><Button variant="danger" onClick={()=> dispatch(deleteFromCart(product))}>Delete</Button></td>
            </tr>
        ))}
       
         
      </tbody>
    </Table>
       </Container>
    )
}

export default Cart