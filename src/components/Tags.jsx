import Badge from 'react-bootstrap/Badge'

const Tags = ({valor}) => {
  return (
    <h2><Badge>{valor}</Badge></h2>
  )
}

export default Tags