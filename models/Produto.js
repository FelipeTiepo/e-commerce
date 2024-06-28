import { model, Schema  } from "mongoose";

const ProductSchema = new Schema({
    titulo: {type: String, required: true},
    descricao: String,
    preco: {type: Number, required: true},
})

export const Produto = model('Product', ProductSchema)