
function Product({productLabel,image, alt, productTitle, productPrice}) {

    return (
        <>
        <article>
            <span>{productLabel}</span>
            <img src={image} alt={alt}/>
            <p>{productTitle}</p>
            <h4>€{productPrice},-</h4>
        </article>
        </>
    );
}

export default Product;