import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
import {projects} from "../../data"

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>Create & Inspire</h1>
                    <p className="pl-desc">
                    sion using up to 8 threads
                    Compressing objects: 100% (37/37), done.
                    Writing objects: 100% (39/39), 193.08 KiB | 9.65 MiB/s, done.
                    Total 39 (delta 2), reused 0 (delta 0), 

                    </p>
                
            </div>
            <div className="pl-list">
               { projects.map((item) => (
                   <ProductCard key={item.id} img={item.img} link={item.link}/>
               ))
                }
            </div>
        </div>
    )
}

export default ProductList