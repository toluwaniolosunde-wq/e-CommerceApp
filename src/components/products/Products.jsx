import {useGetAllProductsQuery} from "../../apis/productApi"
import styles from "./products.module.css"
const Products =()=>{
    const data= useGetAllProductsQuery();
    console.log(data)

    
    // if(isLoading){
    //     return(
    //         <>Loading .........</>
    //     )

    // }
    // if(isError){
    //     alert("Error just occured")

    // }

    return(
        <>
            <ul className={styles.products}>
        {
                data.map((product)=>(
                    <div key= {product.id}>

                        <img className ={styles.img} src={product.image} alt=""/>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.descriptions}</p>
                    </div>
                ))    
    }

        </ul>
        </>
    )
}

export default Products;