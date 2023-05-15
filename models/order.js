import { Schema, models, model } from "mongoose";

const orderSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    teamName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    email: {
        type: String,
        // required: true,
        trim: true,
        unique: false,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    phone: {
        type: String,
        // required: true,
        trim: true,
        unique: false,
    },
    players: {
        type: Object,
        required: true,
        unique: false,
    },
    date: {
        type: String,
        required: true,
        trim: false,
        unique: false,
    },
},{
    timestamps: true,
    versionKey: false,
});



export default models.Order || model("Order", orderSchema);        


