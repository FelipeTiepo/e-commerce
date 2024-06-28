import Layout from "@/components/Layout";
import Link from "next/link";

export default function Produtos() {
    return (
        <Layout>
            <Link className="bg-blue-900 text-white py-1 px-2" href={'/produtos/novo'}>
                Adicionar novo produto
            </Link>
        </Layout>
    )
}