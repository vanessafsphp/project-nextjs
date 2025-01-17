import Link from "next/link"

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre-nos">
                Acessar página Sobre Nós
            </Link><br /><br />

            <Link href="/produto/1">
                Acessar página Produto 1
            </Link>        
        </div>
    )
}

export default Home