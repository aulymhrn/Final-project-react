import React from "react";
// import NavbarComponent from "../crud/NavbarComponent";
import Tabledua from './Tabel'
import Formulirdua from "./Formulir";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Crudkedua extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            peminjams: [],
            namaPeminjam: "",
            namaBuku: "",
            tanggalKeluar: "",
            tanggalMasuk: "",
            id:"",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

       if(this.state.id === ""){
          this.setState({
            peminjams: [
                ...this.state.peminjams,
                {
                    id: this.state.peminjams.Length + 1,
                    namaPeminjam: this.state.namaPeminjam,
                    namaBuku: this.state.namaBuku,
                    tanggalKeluar: this.state.tanggalKeluar,
                    tanggalMasuk: this.state.tanggalMasuk,
                },
            ],
        });
    } else {
        const PeminjamYangSelainDiPilih = this.state.peminjams
        .filter((peminjam) => peminjam.id !== this.state.id)
        .map((filterBuku) => {
            return filterBuku 
        });

        this.setState({
            peminjams : [
                ...PeminjamYangSelainDiPilih,
            {
                id: this.state.peminjams.length+1,
                    namaPeminjam: this.state.namaPeminjam,
                    namaBuku: this.state.namaBuku,
                    tanggalKeluar: this.state.tanggalKeluar,
                    tanggalMasuk: this.state.tanggalMasuk,
            },
            ],
        });
    }

        this.setState({
            namaPeminjam : "",
            namaBuku : "",
            tanggalKeluar : "",
            tanggalMasuk: "",
            id:"",
        });
    };

    editData = (id) => {
        console.log("id buku", id);
        const selectedPeminjam = this.state.peminjams
        .filter((peminjam) => peminjam.id === id)
        .map((filterBuku) => {
            return filterBuku;
        });

        this.setState({
          namaPeminjam: selectedPeminjam[0].namaPeminjam,
          namaBuku: selectedPeminjam[0].namaBuku,
          tanggalKeluar: selectedPeminjam[0].tanggalKeluar,
          tanggalMasuk: selectedPeminjam[0].tanggalMasuk,
          id: selectedPeminjam[0].id,
        });
    };

    hapusData = (id) => {
        const bukuBaru = this.state.peminjams
        .filter((peminjam) => peminjam.id !== id)
        .map((filterBuku) => {
            return filterBuku;
        });

        this.setState({
            peminjams : bukuBaru,
        });
    };

    render() {
        // console.log( this.state.peminjams)
        return(
            <div>
                {/* <NavbarComponent /> */}
                <div className="container mt-4">  
                <Tabledua peminjams ={this.state.peminjams} editData={this.editData} hapusData={this.hapusData} /> 
                <Formulirdua {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
    
        );
    } 
}