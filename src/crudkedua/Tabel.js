import React from 'react';
import Table from 'react-bootstrap/Table';

const Tabeldua = ({peminjams, namaPeminjam, namaBuku, tanggalKeluar, tanggalMasuk, editData, hapusData })  => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr >
          <th>#</th>
          <th>Nama peminjam</th>
          <th>Nama Buku</th>
          <th>tanggalKeluar</th>
          <th>tanggalMasuk</th>
        </tr>
      </thead>
      <tbody>
        {peminjams.map((peminjam, index) => {
            return(
        <tr key= {index}>
          <td>{index + 1}</td>
          <td>{peminjam.namaPeminjam}</td>
          <td>{peminjam.namaBuku}</td>
          <td>{peminjam.tanggalKeluar}</td>
          <td>{peminjam.tanggalMasuk}</td>
          <td>
            <button
              className="btn btn-warning mr-1"
              onClick={() => editData(peminjam.id)}
              >
                Edit 
            </button>
            <button
              className="btn btn-danger mr-1"
              onClick={() => hapusData(peminjam.id)}
              >
                Hapus 
            </button>
          </td>
        </tr>
            );
        })}
        
      </tbody>
    </Table>
  );
};

export default Tabeldua;