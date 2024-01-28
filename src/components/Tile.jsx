function Tile(props) {

    return (
            <section>
                {props.tileTitle ?
                    <div>
                        <h2>{props.tileTitle}</h2>
                        {props.children}
                        </div>
                    : <img src={props.tileImage} alt={props.alt}/>}
            </section>
    );
}

export default Tile;