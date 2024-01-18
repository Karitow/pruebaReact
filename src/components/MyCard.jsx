import Card from 'react-bootstrap/Card'
import Tags from '.components/Tags'

const MyCard = ({img,producto,descripcion,valor}) => {
  return (
    <>
    <Card style= {{ width: '20rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{producto}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <Tags valor={valor}/>
      </Card>
    </>
  )
}

export default MyCard