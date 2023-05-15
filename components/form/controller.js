import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const dateByFormat = () => {
  const dateObj = new Date();
  const dateOder = dateObj.toLocaleString();
  return dateOder;
};

export const IDuserForm = () => {
  let idSource = uuidv4();
  let idShort = idSource.substring(0, 8);
  const IDForm = "FS-" + idShort;
  return IDForm;
};

// export const sendData = async (data) => {
//   try {
//     await axios.post("/api/order", data);
    
//   } catch (error) {
//     console.log(error);
//   }
// }

export const sendData = async (data) => {
  try {
    const res = await axios.post("/api/order", data);
    // console.log(res);
    // console.log(res.data);
  } catch (error) {
    // console.log(error);
  }
}

export const sendEmail = async (data) => {
  try {
    await axios.post("/api/email", data);
  } catch (error) {
    // console.log(error);
  }
}



