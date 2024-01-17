import React from "react";
import NavbarComponent from "./NavbarComponent";
import Table from "./Tabel";
import Formulir from "./Formulir";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Crud extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            bukus: [],
            nama: "",
            author: "",
            deskripsi: "",
            harga: "",
            

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

       if(this.state.id === ""){
          this.setState({
            bukus: [
                ...this.state.bukus,
                {
                    id: this.state.bukus.Length + 1,
                    nama: this.state.nama,
                    author: this.state.author,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                },
            ],
        });
    } else {
        const bukuYangSelainDiPilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
            return filterBuku 
        });

        this.setState({
            bukus : [
                ...bukuYangSelainDiPilih,
            {
                id: this.state.bukus.length+1,
                nama: this.state.nama,
                author: this.state.author,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga
            },
            ],
        });
    }

        this.setState({
            nama : "",
            author:"",
            deskripsi : "",
            harga: "0",
        });
    };

    editData = (id) => {
        console.log("id buku", id);
        const selectedBuku = this.state.bukus
        .filter((buku) => buku.id === id)
        .map((filterBuku) => {
            return filterBuku;
        });

        this.setState({
            nama: selectedBuku[0].nama,
            deskripsi: selectedBuku[0].deskripsi,
            author: selectedBuku[0].author,
            harga: selectedBuku[0].harga,
            id: selectedBuku[0].id,
        });
    };

    hapusData = (id) => {
        const bukuBaru = this.state.bukus
        .filter((buku) => buku.id !== id)
        .map((filterBuku) => {
            return filterBuku
        })

        this.setState({
            bukus : bukuBaru
        })
    }

    render(){
        return(
            <div>
                {/* <NavbarComponent /> */}
                <div className="container mt-4">
                <Table bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} /> 
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}