import Link from "next/link"

export async function getStaticPaths(params) {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }            
            },
            {
                params : {
                    id: '2'
                }
            }
        ],
        fallback: 'blocking' 
        // false = desabilita o fallback, qualquer path não listado retornará 404, 
        // true = o nextjs aceitará qualquer path que acessar a rota dinâmica e vai gerar a página de forma assíncrona
        // blocking = assim como o "getServerSideProps" vai bloquear a requisição da página até que consiga com sucesso gerar a página final (response) e assim retornar.
        // Uma vez a página gerada, seja por fallback assíncrono ou por blocking, esta página ficará em cache, retornando assim as próximas requisições instantaneamente!
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    return (
        <div>
            <h1>Produtos</h1>
            <h2>ID do Produto: {props.id}</h2><br />

            <Link href="/produto/2">
                Acessar página Produto 2
            </Link><br /><br />

            <Link href="/produto/3">
                Tente acessar página Produto 3 <br />ou digite qualquer outro número na URL
            </Link>
        </div>
    );
}

export default Produtos;
