import Head from "../../partials/header/Header"
import {useState } from 'react'

const FilterProducts = () => {

    const [currentPriceRange, setCurrentPriceRange] = useState("");


    const onlyOne = (checkbox) => {
        if(checkbox == "check-1"){
            document.querySelector('#check-2').checked = false;
            document.querySelector('#check-3').checked = false;
            return;
        }
        if (checkbox == "check-2"){
            document.querySelector('#check-1').checked = false;
            document.querySelector('#check-3').checked = false;
            return;
        }
        if (checkbox == "check-3"){
            document.querySelector('#check-1').checked = false;
            document.querySelector('#check-2').checked = false;
            return;
        }
    }

    const handlePrice = () => {
       const slider = document.querySelector("#slider");
       setCurrentPriceRange(slider.value)
    }


    return (
        <>
        <div className="container">
        <Head title="Filter" route="/filter" link="no"/>

        <div className="mt-5 mb-3 under-title">Size</div>

        <div className="row">
        <div className="col-2 col-lg-1"><icon className="circle-size">XS</icon></div>
        <div className="col-2 col-lg-1"><icon className="circle-size">S</icon></div>
        <div className="col-2 col-lg-1"><icon className="circle-size">M</icon></div>
        <div className="col-2 col-lg-1"><icon className="circle-size">L</icon></div>
        <div className="col-2 col-lg-1"><icon className="circle-size">XL</icon></div>
        <div className="col-2 col-lg-1"><icon className="circle-size">XXL</icon></div>
        </div>

        <div className="row mt-5">
        <div className="col-2 col-lg-1 under-title">Color</div>
        <div className="col-2 col-lg-1"><icon style={{background: '#E97777'}} className="circle-size color"></icon></div>
        <div className="col-2 col-lg-1"><icon style={{background: '#8294C4'}} className="circle-size color"></icon></div>
        <div className="col-2 col-lg-1"><icon style={{background: '#CBB279'}} className="circle-size color"></icon></div>
        <div className="col-2 col-lg-1"><icon style={{background: '#BA90C6'}} className="circle-size color"></icon></div>
        <div className="col-2 col-lg-1"><icon style={{background: 'black'}} className="circle-size color"></icon></div>
        </div>

        <div className="mt-5 mb-3 under-title">Price</div>
        <div className="col-12">
        <div className="col text-price current-value">{currentPriceRange}</div>
        <input onChange={() => {handlePrice()}} id="slider" type="range" min="50" max="2000" step="10"></input>
        </div>
        
        <div className="row">
        <div className="col text-price">$50</div>
        <div className="col text-price max-price">$2000</div>
        </div>

        <div className="row mt-5">
        <div className="col-4 col-lg-2"><div className="row"><div className="col-6 checkbox-content"><input onClick={() => {onlyOne("check-1")}} id="check-1" className="checkbox-filter" type="checkbox"></input></div><div className="col-6 tag-filter background-green"><p className="text-filter">Featured</p></div></div> </div>
        <div className="col-4 col-lg-2"><div className="row"><div className="col-6 checkbox-content"><input onClick={() => {onlyOne("check-2")}} id="check-2" className="checkbox-filter" type="checkbox"></input></div><div className="col-6 tag-filter background-yellow"><p className="text-filter">New</p></div></div></div>
        <div className="col-4 col-lg-2"><div className="row"><div className="col-6 checkbox-content"><input onClick={() => {onlyOne("check-3")}} id="check-3" className="checkbox-filter" type="checkbox"></input></div><div className="col-6 tag-filter background-purple"><p className="text-filter">Top</p></div></div></div>
        </div>

        <div className="mt-5 mb-3 under-title">Tags</div>
        <div className="row">
        <div className="col-3 col-lg-2 tags-filter">Kids</div>
        <div className="col-3 col-lg-2 tags-filter">Sport</div>
        <div className="col-3 col-lg-2 tags-filter">Dress</div>
        <div className="col-3 col-lg-2 tags-filter">Pants</div>
        </div>

        <div className="mt-5"><button className="dark-btn-standard">APPLY FILTERS</button></div>
        </div> 

        </>
    )

}

export default FilterProducts;



