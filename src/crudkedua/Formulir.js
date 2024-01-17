import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulirdua = ({namaPeminjams, namaBuku, tanggalKeluar, tanggalMasuk, handleChange, handleSubmit, id}) => {
  return (
     <div className='mt-5'>
        <Row>
            <Col>
               <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
               <hr />
            </Col>
        </Row>
    
    <Form onSubmit={handleSubmit}>  
      <Form.Group className="mb-3" controlId="namaPeminjam">
        <Form.Label>Nama Peminjam</Form.Label>
        <Form.Control 
        type="text" 
        name="namaPeminjam"
        value={namaPeminjams}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="namaBuku">
        <Form.Label>Nama Buku</Form.Label>
        <Form.Control 
        type="text" 
        name="namaBuku"
        placeholder='nama Buku'
        value={namaBuku}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="tanggalkeluar">
        <Form.Label>tanggal keluar</Form.Label>
        <Form.Control type="date"
        rows="3"
        name="tanggalKeluar"
        value={tanggalKeluar} 
        onChange={(event) => handleChange (event)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="tanggalmasuk">
      <Form.Label>tanggal masuk</Form.Label>
        <Form.Control type="date" 
        rows="3"
        name="tanggalMasuk"
        value={tanggalMasuk}
        onChange={(event) => handleChange (event)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    

    </div>
  );
}

export default Formulirdua;