import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const TableInput = ({ editData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bioskops');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const hapusData = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/bioskops/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Pembeli</th>
          <th>Film</th>
          <th>Hari/Tanggal</th>
          <th>Jam Tayang</th>
          <th>Harga Film</th>
          <th>Jumlah Pesan</th>
          <th>Total Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((daftar, index) => (
          <tr key={daftar.id}>
            <td>{index + 1}</td>
            <td>{daftar.nama}</td>
            <td>{daftar.pilihanFilm}</td>
            <td>{daftar.tanggal.split('T')[0]}</td>
            <td>{daftar.jamTayang}</td>
            <td>{daftar.harga}</td>
            <td>{daftar.jumlahBeli}</td>
            <td>{daftar.total}</td>
            <td>
              <button className="btn btn-warning mr-1" onClick={() => editData(daftar.id)}>Edit</button>
              <button className="btn btn-danger mr-1" onClick={() => hapusData(daftar.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableInput;
