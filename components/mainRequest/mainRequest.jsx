import styles from "./mainRequest.module.css";
import React from "react";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BiBaseball } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { useState } from "react";
import DataContainer from "../dataContainer/dataContainer";

export default function MainRequest({
  showDataContainer,
  handleFunction,
  dataContainer,
}) {
  const obtenerTallaMasRepetida = () => {
    const tallas = dataContainer.players.map((player) => player.size);
    const ocurrencias = {};

    tallas.forEach((talla) => {
      ocurrencias[talla] = ocurrencias[talla] ? ocurrencias[talla] + 1 : 1;
    });

    let tallaMasRepetida = null;
    let mayorOcurrencias = 0;

    for (const talla in ocurrencias) {
      if (ocurrencias[talla] > mayorOcurrencias) {
        tallaMasRepetida = talla;
        mayorOcurrencias = ocurrencias[talla];
      }
    }

    return tallaMasRepetida;
  };

  // const dataOrder = {
  //   id: dataContainer?.id ?? "No hay datos",
  //   name: dataContainer?.name ?? "No hay datos",
  //   teamName: dataContainer?.teamName ?? "No hay datos",
  //   phone: dataContainer?.phone ?? "No hay datos",
  //   email: dataContainer?.email ?? "No hay datos",
  //   date: dataContainer?.date ?? "No hay datos",
  //   players: dataContainer?.players ?? [],
  // };

  const stateBanner = showDataContainer
    ? styles.requestContainer
    : styles.requestContainerOff;

  const tallaMasRepetida = obtenerTallaMasRepetida();
  const jugadoresOrdenados = [...dataContainer.players].sort((a, b) => {
    if (a.size === tallaMasRepetida && b.size !== tallaMasRepetida) {
      return -1;
    } else if (a.size !== tallaMasRepetida && b.size === tallaMasRepetida) {
      return 1;
    } else {
      return a.size.localeCompare(b.size);
    }
  });

  return (
    <div className={stateBanner}>
      <div onClick={handleFunction} className={styles.closeBtn}>
        X
      </div>
      <div className={styles.container}>
        <div className={styles.orderInfoClienContainer}>
          <div className={styles.orderInfoClient}>
            <div className={styles.textInfo}>
              <span>
                <AiOutlineUser />
              </span>
              {dataContainer.name}
            </div>
            <div className={styles.textInfo}>
              <span>
                <BiBaseball />
              </span>
              {dataContainer.teamName}
            </div>
            <div className={styles.textInfo}>
              <span>
                <AiOutlinePhone />
              </span>
              {dataContainer.phone}
            </div>
            <div className={styles.textInfo}>
              <span>
                <AiOutlineMail />
              </span>
              {dataContainer.email}
            </div>
            <div className={styles.textInfo}>
              <span>
                <BsCalendar2Date />
              </span>
              {dataContainer.date}
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.dataContainer}>
              <div className={styles.dataNameContainer}>
                <p>PORTERO</p>
                <div className={styles.dataFocusContainer}>
                  {/* {dataContainer.players &&
                  dataContainer.players.clothes &&
                  dataContainer.players.clothes.includes("Portero") ? (
                    <p>Si</p>
                  ) : (
                    <p>No</p>
                  )}{" "} */}
                  <p>Si</p>
                </div>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.dataNameContainer}>
                <p>TALLA</p>
                <div className={styles.dataFocusContainer}>
                  <p>{tallaMasRepetida}</p>
                </div>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.dataNameContainer}>
                <p>TIEMPO</p>
                <div className={styles.dataFocusContainer}>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderInfoContainer}>
          <table>
            <thead>
              <tr>
                <th>Talla</th>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Prenda</th>
              </tr>
            </thead>
            <tbody>
              {React.Children.toArray(
                jugadoresOrdenados.map((player, id) => (
                  // mostrar por talla mas repetida
                  <tr key={id}>
                    <td>{player.size}</td>
                    <td>{player.number}</td>
                    <td>{player.name}</td>
                    <td>{player.clothes}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
