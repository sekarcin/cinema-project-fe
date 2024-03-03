import React from "react";
import TableInput from "./Table";
import Formulir from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Crud extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [], 
            nama: "", 
            pilihanFilm: "", 
            tanggal: "", 
            jamTayang: "", 
            harga: "", 
            jumlahBeli: "", 
            total: "", 
            id: "", 
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState(prevState => ({
                data : [
                    ...prevState.data,
                    {
                        id: prevState.data.length + 1,
                        nama: prevState.nama, 
                        pilihanFilm: prevState.pilihanFilm, 
                        tanggal: prevState.tanggal, 
                        jamTayang: prevState.jamTayang, 
                        harga: prevState.harga, 
                        jumlahBeli: prevState.jumlahBeli, 
                        total: prevState.total, 
                    },
                ],
                nama: "", 
                pilihanFilm: "", 
                tanggal: "",
                jamTayang: "", 
                harga: "", 
                jumlahBeli: "",
                total: "",
            }));
        } else {
            const updatedData = this.state.data.map(item => {
                if (item.id === this.state.id) {
                    return {
                        ...item,
                        nama: this.state.nama, 
                        pilihanFilm: this.state.pilihanFilm, 
                        tanggal: this.state.tanggal, 
                        jamTayang: this.state.jamTayang, 
                        harga: this.state.harga, 
                        jumlahBeli: this.state.jumlahBeli, 
                        total: this.state.total, 
                    };
                }
                return item;
            });

            this.setState({
                data: updatedData,
                nama: "", 
                pilihanFilm: "", 
                tanggal: "", 
                jamTayang: "", 
                harga: "", 
                jumlahBeli: "", 
                total: "", 
                id: "",
            });
        }
    }

    editData = (id) => {
        const selectedItem = this.state.data.find(item => item.id === id);

        if (selectedItem) {
            this.setState({
                nama: selectedItem.nama, 
                pilihanFilm: selectedItem.pilihanFilm, 
                tanggal: selectedItem.tanggal, 
                jamTayang: selectedItem.jamTayang, 
                harga: selectedItem.harga, 
                jumlahBeli: selectedItem.jumlahBeli, 
                total: selectedItem.total, 
                id: selectedItem.id,
            });
        }
    };

    hapusData = (id) => {
        const filteredData = this.state.data.filter(item => item.id !== id);
        this.setState({
            data: filteredData
        });
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <TableInput data={this.state.data} editData={this.editData} hapusData={this.hapusData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
