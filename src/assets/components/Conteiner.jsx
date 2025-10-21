function Conteiner(props) {
    console.log("props conteiner", props);
    return (
        <>
        <div>
                <h1>{props.saludo}</h1>
        </div>
        </>
    );
}

export default Conteiner;
