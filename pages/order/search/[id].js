import Error from "next/error";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./search.module.css";
import Navbar from "../../../components/common/navbar/navbar";
import Preloader from "../../../components/common/preloader/preloader";
import Head from "next/head";
import React from "react";
import axios from "axios";
import {FaGenderless} from "react-icons/fa";
import { BsCalendar2Date, BsFillTrashFill } from "react-icons/bs";
import {ImPriceTag} from "react-icons/im";
import {
  AiOutlineBook,
  AiOutlineKey,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { BiBaseball } from "react-icons/bi";

export default function Search({ order, error }) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/order/search");
  };

  if (error) {
    return (
      <>
        <Head>
          <title>Biblioteca - Búsqueda </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0F0F0F" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Preloader />
        <div className={styles.searchResultContainerOff}>
          <div className={styles.titleContainer}>
            <h1>No se encontro ningún pedido</h1>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/Logo.png" alt="search" width={200} height={100} />
          </div>
          <button className={styles.btnSearcher} onClick={handleRedirect}>
            Regresar
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <>
        <Head>
          <title>Biblioteca - Búsqueda</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0F0F0F" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Preloader />
        <div className={styles.resultSearchContainer}>
          <div className={styles.titleContainer}></div>
          <div className={styles.resultContainer}>
            <div className={styles.infoOrderContainer}>
              <div className={styles.textInfo}>
                <span>
                  <AiOutlineKey />
                </span>
                {order.id}
              </div>
              <div className={styles.textInfo}>
                <span>
                  <AiOutlineBook />
                </span>
                {order.bookName}
              </div>
              <div className={styles.textInfo}>
                <span>
                  <FaGenderless />
                </span>
                {order.genre}
              </div>
              <div className={styles.textInfo}>
                <span>
                  <BsCalendar2Date />
                </span>
                {order.agePublication}
              </div>
              <div className={styles.textInfo}>
                <span>
                  <AiOutlineUser />
                </span>
                {order.author}
              </div>
              <div className={styles.textInfo}>
                <span>
                  <ImPriceTag />
                </span>
                {order.priceBook}
              </div>
            </div>
          </div>
          <button className={styles.btnSearcher} onClick={handleRedirect}>
            Regresar
          </button>
        </div>
      </>
    </>
  );
}

export async function getServerSideProps({ query: { id } }) {
  // const res = await axios.get(`https://www.fistorsport.com/api/order/${id}`);
  const res = await axios.get(`/api/order/${id}`);
  const order = data.data;
  console.log(order);

  if (order) {
    return {
      props: {
        order,
      },
    };
  }
  return {
    props: {
      error: {
        statusCode: 404,
        statusText: "Invalid Id",
      },
    },
  };
}
