import "./Product.css"

// import Me from "../../img/me.jpg"

const Product = ({img, link}) => {
    return (
        <div className="p">
            <div className="p-browser">
            <div className="p-circ"></div>
            <div className="p-circ"></div>
            <div className="p-circ"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}
export default Product ;