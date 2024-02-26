import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImage from "../assets/images/pexels-james-wheeler-414612.jpg"
import { NavLink } from 'react-router-dom';

function ProductCard({product}) {
    // const {id, title,price, desc, image} = data;
  return (
    <Card style={{ width: '18rem', textAlign:"left",height:"500px"}}>
      <Card.Img variant="top" src={product?.image} style = {{width:"100%", height: "250px"}}/>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.desc}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Button variant="primary">Buy Now</Button>
        <Button className = "ms-2"variant="warning">
          <NavLink to ={`/product/${product?.id}`} style = {{textDecoration: "none", color:"white"}}>
            View Details
          </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;