import axios from "axios";

// // Path: components/form.jsxs
// export const sendData =  (data) => {
//   try {
//      axios
//       .post("/api/order", data)
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       })
//     } catch (error) {
//     console.log(error);
//   }
// };

// Path: components/form.js
export const sendEmail = async (data) => {
  try {
    await axios.post("/api/email", data);
  } catch (error) {
    console.log(error);
  }
};

// Path: components/mainModalDelete.js
export const deleteOrder = async () => {
  try {
    await axios.delete(`/api/order/${id}`);
    // await axios.delete(`http://localhost:3000/api/order/${id}`);
  } catch (error) {
    console.error(error);
  }
};

//send whatsapp message
export const sendWhatsapp = async (data) => {
  try {
    await axios.post("/api/whatsapp", data);
  } catch (error) {
    console.log(error);
  }
}