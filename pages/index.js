import Link from "next/link"

function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre-nos">
            Acessar página Sobre Nós
        </Link>        
    </div>)
}

export default Home