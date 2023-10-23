
function Firstcompo()
{
    var Product={
        Name:"apple",
        Price:10000,
        stock:true
    }
    return(
        <div>
            
            <div>DATA DETAILS</div>
            <dl>
            <dt>NAME</dt>
            <dd>{Product.Name}</dd>
            <dd>PRICE</dd>
            <dt>{Product.Price}</dt>
            <dd>STOCK</dd>
            <dt>{(Product.stock===true)?"STOCK AVAILABLE":"STOCK NOT AVAILABLE"}</dt>
            </dl>
        </div>

    );
}
export default Firstcompo;