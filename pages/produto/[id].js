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
    await delay(5000); // demora artificial
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
            <h2>ID do Produto: {props.id}</h2>
        </div>
    );
}

export default Produtos;


// Gerando um delay propositalmente, para teste.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}