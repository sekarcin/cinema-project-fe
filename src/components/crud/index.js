import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useRef } from "react";
import TableInput from "./Table";
import Formulir from "./Form";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      namaPembeli: "",
      hariTanggal: "",
      film: "",
      jamTayang: "",
      hargaFilm: "",
      jumlahPesan: "",
      totalHarga: "",
      id: "",
    };
  }

  // notifySuccess = (namaPembeli) => {
  //   toast.success(`Submit berhasil. Nama Pembeli: ${namaPembeli}`, {
  //     position: toast.POSITION.TOP_RIGHT,
  //     autoClose: 3000, // Durasi notifikasi
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        data: [
          ...this.state.data,
          {
            id: this.state.data.length + 1,
            namaPembeli: this.state.namaPembeli,
            film: this.state.film,
            hariTanggal: this.state.hariTanggal,
            jamTayang: this.state.jamTayang,
            hargaFilm: this.state.hargaFilm,
            jumlahPesan: this.state.jumlahPesan,
            totalHarga: this.state.totalHarga,
          },
        ],
      });
    } else {
      const filmSelainDipilih = this.state.data
        .filter((daftar) => daftar.id !== this.state.id)
        .map((filterDaftar) => {
          return filterDaftar;
        });
      this.setState({
        data: [
          ...filmSelainDipilih,
          {
            id: this.state.data.length + 1,
            namaPembeli: this.state.namaPembeli,
            hariTanggal: this.state.hariTanggal,
            film: this.state.film,
            jamTayang: this.state.jamTayang,
            hargaFilm: this.state.hargaFilm,
            jumlahPesan: this.state.jumlahPesan,
            totalHarga: this.state.totalHarga,
          },
        ],
      });
    }

    this.setState({
      namaPembeli: "",
      hariTanggal: "",
      film: "",
      jamTayang: "",
      hargaFilm: "",
      jumlahPesan: "",
      totalHarga: "",
      id: "",
    });
  };

  editData = (id) => {
    // console.log("10: ", id);
    const filmYangDipilih = this.state.data
      .filter((daftar) => daftar.id === id)
      .map((filterDaftar) => {
        return filterDaftar;
      });
    this.setState({
      namaPembeli: filmYangDipilih[0].namaPembeli,
      film: filmYangDipilih[0].film,
      hariTanggal: filmYangDipilih[0].hariTanggal,
      jamTayang: filmYangDipilih[0].jamTayang,
      hargaFilm: filmYangDipilih[0].hargaFilm,
      jumlahPesan: filmYangDipilih[0].jumlahPesan,
      totalHarga: filmYangDipilih[0].totalHarga,
      id: filmYangDipilih[0].id,
    });
  };

  
  // hapusData = (id) => {
  //   // console.log("10: ", id);
  //   const filmBaru = this.state.data
  //     .filter((daftar) => daftar.id !== id)
  //     .map((filterDaftar) => {
  //       return filterDaftar;
  //     });
  //   this.setState({
  //     data: filmBaru,
  //   });
  // };

  // buktiData = (id) => {
  //   const dataPilihan = this.state.data
  //     .filter((daftar) => daftar.id === id)
  //     .map((filterData) => {
  //       return filterData;
  //     });
  //   this.setState({
  //     namaPembeli: dataPilihan.namaPembeli,
  //     film: dataPilihan.film,
  //     hariTanggal: dataPilihan.hariTanggal,
  //     jamTayang: dataPilihan.jamTayang,
  //     hargaFilm: dataPilihan.hargaFilm,
  //     jumlahPesan: dataPilihan.jumlahPesan,
  //     totalHarga: dataPilihan.totalHarga,
  //     id: dataPilihan.id,
  //     showProof: true,
  //   });
  // };

  render() {
    return (
      <div>
        {/* <h2>haii</h2> */}
        <div className="container mt-4">
          <h4>Data Pemesanan</h4>
          <div className="container mt-4">
            <TableInput
              data={this.state.data}
              editData={this.editData}
              hapusData={this.hapusData}
              buktiData={this.buktiData}
            />
          </div>
          <hr />
        </div>

        <div className="container mt-4">
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {/* <div className="container mt-4">
        {this.state.showProof && (
        <TiketBioskop/>
        )}
        </div> */}
      </div>
    );
  }
}
