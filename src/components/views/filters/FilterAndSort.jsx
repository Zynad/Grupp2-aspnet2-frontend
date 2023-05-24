import "./filterAndSort.css"
import Header from "../../partials/header/Header"
import { useContext, useEffect, useState } from "react"
import { FilterContext } from "../../../contexts/FilterProvider"
import { ApiContext } from "../../../contexts/ApiProvider"
import { NavLink } from "react-router-dom"
import ProductCard from "./ProductCard"
import Navigation from "../../../components/partials/navigation/Navigation"

const FilterAndSort = () => {

    const {title} = useContext(FilterContext);
    const {getProductsByCategory} = useContext(ApiContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const splitTitle = title.split(' ');
        if(splitTitle[0] == 'Best'){ 
            setProducts(await getProductsByCategory('Top'))
            return;
        }
        setProducts(await getProductsByCategory(splitTitle[0]))
    }

    return (
        <>
        <div className="container mt-5 mb-5">
        <Header route="/home" title={title}/>

        <div className="row filter-content mt-5">
        <div className="col"><NavLink to="/filterproducts" className="nav-standard"><i class="fa-light fa-arrow-up-arrow-down"></i></NavLink> Filters </div>
        <div className="col sorting">Sorting by  <i class="fa-solid fa-sort-down"></i></div>
        </div>

        <div className="container mt-5">
        <ProductCard products={products}/>
        </div>

        <Navigation/>

        </div>   
        </>
    )
}

export default FilterAndSort;