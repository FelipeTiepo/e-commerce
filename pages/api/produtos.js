import { Produto } from "@/models/Produto";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if (method === 'POST') {
        const {titulo, descricao, preco} = req.body;
        const produtoDoc = await Produto.create({
            titulo,descricao,preco,
        })
        res.json(produtoDoc);
    }
}