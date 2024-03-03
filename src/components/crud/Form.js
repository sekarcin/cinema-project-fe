import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Formulir = ({
  nama,
  pilihanFilm,
  tanggal,
  jamTayang,
  harga,
  jumlahBeli,
  total,
  handleChange,
  id,
}) => {
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { nama, pilihanFilm, tanggal, jamTayang, harga, jumlahBeli, total };

    try {
      const response = await fetch(`http://localhost:8080/api/bioskops`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Submit berhasil');
        setSubmitSuccess(true);
      } else {
        console.error('Submit gagal');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log("nama", nama);
  return (
    <div className="mt-5">
      <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
      <hr />
      {submitSuccess && (
          <div className="alert alert-success mt-3" role="alert">
            Submit berhasil! Tiket Bioskop Atas Nama {nama} Telah Berhasil Diinput, Silahkan Cetak Tiket.
          </div>
        )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama Pembeli</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Nama"
            name="nama"
            value={nama}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pilihanFilm">
          <Form.Label>Nama Film</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Nama Film"
            name="pilihanFilm"
            value={pilihanFilm}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tanggal">
          <Form.Label>Tanggal</Form.Label>
          <Form.Control
            type="date"
            name="tanggal"
            value={tanggal}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="jamTayang">
          <Form.Label>Jam Tayang</Form.Label>
          <Form.Control
            type="time"
            name="jamTayang"
            value={jamTayang}
            onChange={handleChange}
          />
        </Form.Group>

        <InputGroup className="mb-3" controlId="harga">
          <InputGroup.Text>Rp</InputGroup.Text>
          <Form.Control
            type="number"
            name="harga"
            value={harga}
            onChange={handleChange}
          />
          <InputGroup.Text>,00</InputGroup.Text>
        </InputGroup>

        <Form.Group className="mb-3" controlId="jumlahBeli">
          <Form.Label>Jumlah Pesan</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukan Jumlah"
            name="jumlahBeli"
            value={jumlahBeli}
            onChange={handleChange}
          />
        </Form.Group>

        <InputGroup className="mb-3" controlId="total">
          <InputGroup.Text>Rp</InputGroup.Text>
          <Form.Control
            type="number"
            name="total"
            value={total}
            onChange={handleChange}
          />
          <InputGroup.Text>,00</InputGroup.Text>
        </InputGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
   
      </Form>
    </div>
  );
};

export default Formulir;
