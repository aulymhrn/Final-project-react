import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulir = ({nama, author, deskripsi, harga, handleChange, handleSubmit, id}) => {
  return (
     <div className='mt-5'>
        <Row>
            <Col>
               <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
               <hr />
            </Col>
        </Row>
    
    <Form onSubmit={handleSubmit}>  
      <Form.Group className="mb-3" controlId="nama">
        <Form.Label>Nama Buku</Form.Label>
        <Form.Control 
        type="text" 
        name="nama"
        value={nama}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control 
        type="text" 
        name="author"
        value={author}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="deskripsi">
        <Form.Label>deskripsi</Form.Label>
        <Form.Control as="textarea"
        rows="3"
        name="deskripsi"
        value={deskripsi} 
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="harga">
      <Form.Label>harga</Form.Label>
        <Form.Control type="number" 
        name="harga"
        value={harga}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    

    </div>
  );
}

export default Formulir;