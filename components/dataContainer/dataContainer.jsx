import styles from "./dataContainer.module.css";
import { BiBaseball } from "react-icons/bi";
import { BsCalendar2Date, BsFillTrashFill } from "react-icons/bs";
import { AiFillPrinter, AiFillEye, AiOutlinePhone, AiOutlineUser, AiOutlineMail} from "react-icons/ai";

export default function DataContainer({ data, handlePrintEvent, handleShowData, handleModal }) {

  return (
    <>
      <div className={styles.orderContainer}>
        <div className={styles.infoOrderContainer}>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineUser />
            </span>
            {data.name}
          </div>
          <div className={styles.textInfo}>
            <span>
              <BiBaseball />
            </span>
            {data.teamName}
          </div>
          <div className={styles.textInfo}>
            <span>
              <AiOutlinePhone />
            </span>
            {data.phone}
          </div>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineMail />
            </span>
            {data.email}
          </div>
          <div className={styles.textInfo}>
            <span>
              <BsCalendar2Date />
            </span>
            {data.date}
          </div>
        </div>
        <div className={styles.controlsContainer}>
          <button
            id={data.id}
            onClick={handleShowData}
            className={styles.btnControl}
          >
            <AiFillEye className={styles.iconBtn} />
            <span>Revisar</span>
          </button>
          <button 
            id={data.id}
            onClick={handleModal} 
            className={styles.btnControl}>
            <BsFillTrashFill className={styles.iconBtn} />
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </>
  );
}
