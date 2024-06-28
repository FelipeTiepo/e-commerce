import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NovoProduto() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    async function criarProduto(ev) {
        ev.preventDefault()
        const data = { titulo, descricao, preco }
        await axios.post('/api/produtos', data)
    }

    return (
        <Layout>
            <form onSubmit={criarProduto}>
                <h1>Novo Produto</h1>
                <input type="text" value={titulo} onChange={ev => setTitulo(ev.target.value)} placeholder="Nome do produto" />
                <textarea value={descricao} onChange={ev => setDescricao(ev.target.value)} placeholder="Descrição do produto" />
                <input type="text" value={preco} onChange={ev => setPreco(ev.target.value)} placeholder="Preço" />
                <button type="submit" className="btn-primary">Salvar</button>
            </form>
        </Layout>
    );
}
