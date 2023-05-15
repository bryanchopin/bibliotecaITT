import React, { useState, useEffect, useRef } from "react";
import styles from "./form.module.css";
import { sendEmail } from "../../controllers/controller";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import MainModal from "../../components/mainModal/mainModal";
import { dateByFormat, IDuserForm, sendData } from "./controller";

export default function Form() {
  const router = useRouter();
  const dateOrder = useRef(null);
  const IDForm = useRef(null);

  const [dataSendend, setDataSendend] = useState(false);

  const [clientsInfo, setClientsInfo] = useState({
    id: "",
    name: "",
    teamName: "",
    email: "",
    category: "",
    phone: "",
    players: [],
    date: "",
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (dataSendend) {
      // console.log(clientsInfo);
      if (sendData(clientsInfo)) {
        sendEmail(clientMessageInfo);
      }
      handleShowModal();
      // sendWhatsapp(clientMessageWhatsapp);
    }
  }, [dataSendend]);

  const clientMessageInfo = {
    message: `Hola  ${clientsInfo.name}, tu pedido ha sido recibido, tu folio de seguimiento es: ${clientsInfo.id}, puedes consultar el estatus de tu pedido en https://www.fistorsport.com/order/search`,
    email: clientsInfo.email,
  };


  // HANDLE FUNCTIONS

  const handleUpdateClientInfo = () => {
    setClientsInfo({
      ...clientsInfo,
      date: dateOrder.current,
      id: IDForm.current,
    });
    setDataSendend(true);
  };


  const handleShowModal = () => {
    setShowModal(!showModal);
  };


  const handleSetDataClient = (e) => {
    setClientsInfo({ ...clientsInfo, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (clientsInfo.players.length === 0) {
      alert("Debes agregar al menos un jugador");
      return;
    }
    IDForm.current = IDuserForm();
    dateOrder.current = dateByFormat();
    handleUpdateClientInfo();
  };


  return (
    <>
      <div className={styles.formMainContainer}>
        {/* FIRTS FORM */}
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Agregar Libro</h1>

          <form id="formData" onSubmit={handleSubmit}>
            <input
              value={clientsInfo.name}
              onChange={handleSetDataClient}
              required
              placeholder="Nombre Completo"
              name="name"
              type="text"
            />

            <input
              required
              value={clientsInfo.teamName}
              onChange={handleSetDataClient}
              placeholder="Nombre del equipo"
              name="teamName"
              type="text"
            />

            <input
              value={clientsInfo.email}
              onChange={handleSetDataClient}
              placeholder="Correo Electrónico"
              name="email"
              type="email"
            />

            <input
              required
              value={clientsInfo.category}
              onChange={handleSetDataClient}
              placeholder="Categoría"
              name="category"
              type="text"
            />

            <input
              value={clientsInfo.phone}
              onChange={handleSetDataClient}
              placeholder="Télefono"
              name="phone"
              type="text"
            />
          </form>
        </div>

        {/* SECOND FORM */}

      </div>
    </>
  );
}
