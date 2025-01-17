export async function getServerSideProps(context) {
    const id = context.query.id;

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