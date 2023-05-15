import { dbConnect } from "../../../utils/dbConnection";
import Order from "../../../models/order";
import NextCors from "nextjs-cors";

//Connect to database
dbConnect();

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "DELETE", "POST", "OPTIONS", "PUT"],
    origin: ["https://www.fistorsport.com"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { method, query: { id } } = req;

  switch (method) {
    case "GET":
      if (!id) {
        res.status(400).json({ success: false, error: "Need to introduce an id" });
      }
      try {
        const order = await Order.findOne({ id: id });
        if (!order) {
          res.status(400).json({ success: false, error: "Order not found" });
        }
        res.status(200).json({ success: true, data: order });
        return;
      } catch (error) {
        res.status(400).json({ success: false, error: "Order not found" });
      }
      break;

    case "DELETE":
      if (!id) {
        res.status(400).json({ success: false, error: "Need to introduce an id" });
      }
      try {
        const deleteOrder = await Order.findOneAndDelete({ id: id });
        if (!deleteOrder) {
          res.status(400).json({ success: false, error: "Order not found" });
        }
        res.status(200).json({ success: true, data: deleteOrder });
        return;
      } catch (error) {
        res.status(400).json({ success: false, error: "Order not found" });
      }
      break;

    default:
      res.status(400).json({ success: false, error: "Invalid method" });
      break;
  }

  // console.log('id: ', id)
}
