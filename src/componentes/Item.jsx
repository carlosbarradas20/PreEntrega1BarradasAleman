import { Link } from "react-router-dom"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


    export const Item = ({product}) => (
        <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img 
        style={{height: "180px"}} 
        variant="top" 
        src={product.avatar} 
      />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>Stock {product.stock}</Card.Text>
          <Card.Text>Precio {`$${product.precio}`}</Card.Text>
          <Link to={`/item/${product.id}`}>
          <Button variant="primary">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
          )

          //<Card.Text>{product.id}</Card.Text>

    
    

  