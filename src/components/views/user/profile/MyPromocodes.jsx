import { useContext, useEffect, useState } from "react";
import "./profile.css"
import { ApiContext } from "../../../../contexts/ApiProvider";
import { NavLink } from "react-router-dom";
import NoPromocodes from "./NoPromocodes";

const MyPromocodes = ()=>{

    const { getAllCurrentPromocodes, getAllUsedPromocodes, getAllPromocodes } = useContext(ApiContext);
    const [promocodes, setPromocodes] = useState([]);
    const [ noPromocodes, setNoPromocodes ] = useState();
    const [ noCurrentPromocodes, setNoCurrentPromocodes ] = useState(false);
    const [ noUsedPromocodes, setNoUsedPromocodes ] = useState(true);

    useEffect (() => { getAllUserPromocodes() }, []);

    const getAllUserPromocodes = async ()=>{
        var list = await getAllPromocodes();
        if(list.length > 0)
        {
            let currentPromoBtn = document.querySelector("#currentPromoBtn");
            let usedPromoBtn = document.querySelector("#usedPromoBtn");
            currentPromoBtn.classList.add("promocode-btn-focus");
            usedPromoBtn.classList.add("promocode-btn-nonfocus");
            
            setNoPromocodes(false);
            let currentList = list.filter(item => item.used == false);
            setPromocodes(currentList);
        }
        else
            setNoPromocodes(true);
    }
    const getAllCurrentUserPromocodes = async()=>{
        let currentPromoBtn = document.querySelector("#currentPromoBtn");
        let usedPromoBtn = document.querySelector("#usedPromoBtn");

        usedPromoBtn.classList.remove("promocode-btn-focus");
        currentPromoBtn.classList.remove("promocode-btn-nonfocus");
        currentPromoBtn.classList.add("promocode-btn-focus");
        usedPromoBtn.classList.add("promocode-btn-nonfocus");

        var list = await getAllCurrentPromocodes();
        if(list.length > 0)
        {
            setNoCurrentPromocodes(false);
            setPromocodes(list);
        }
        else{
            setNoCurrentPromocodes(true);
        }
    }
    const getAllUsedUserPromocodes = async()=>{
        let currentPromoBtn = document.querySelector("#currentPromoBtn");
        let usedPromoBtn = document.querySelector("#usedPromoBtn");

        usedPromoBtn.classList.remove("promocode-btn-nonfocus");
        currentPromoBtn.classList.remove("promocode-btn-focus");
        currentPromoBtn.classList.add("promocode-btn-nonfocus");
        usedPromoBtn.classList.add("promocode-btn-focus");

        var list = await getAllUsedPromocodes();
        if(list.length > 0)
        {
            setNoUsedPromocodes(false);
            setPromocodes(list);
        }
        else{
            setPromocodes([]);
            setNoUsedPromocodes(true);
        }
    }

    const handleDate = (expireDate)=>{

        let newExpireDate = new Date(expireDate);
        let month = newExpireDate.getMonth();
        let year = newExpireDate.getFullYear();
        let date = newExpireDate.getDate();

        let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        month = months[month];
        let fulldate = month + " " + date + ", " + year;
        return fulldate;
    }

    return (
        <> 
        {noPromocodes &&(
            < NoPromocodes />
        )}
        {!noPromocodes &&(
            <div className="container my-5">

            <div className="row">
            <div className="col-4"><NavLink className="nav-standard" to="/profile"><i className="fa-solid fa-angle-left"></i></NavLink></div>
            <div className="col-4 adress-title">My Promocodes</div>
            <div className="col-4"></div>
            </div>
            <div className="promocodes-container mt-4">
                <div className="promocode-container-grid mb-3">
                    <button id="currentPromoBtn" type="button" className={"promocode-btn promocode-btn-current"} onClick={()=>{getAllCurrentUserPromocodes()}}>Current</button>
                    <button id="usedPromoBtn" type="button" className={"promocode-btn promocode-btn-used"} onClick={()=>{getAllUsedUserPromocodes()}}>Used</button>
                    <div className="promocode-border mt-3"></div>
                    {!noPromocodes &&(promocodes.map((item) => (
                    <>
                    <div className="promocode-item mt-3">
                        <div className="promocode-box-img"></div>
                        <div className="promocode-item-text">
                            <span className="promocode-title">{item.coupon.title}</span><br></br>
                            <span className="promocode-discount">{item.coupon.discountAmount}% off</span><br></br>
                            <span className="promocode-expire">Valid until {handleDate(item.coupon.expiryDate)}</span>
                        </div>
                    </div>
                    <div className="promocode-border mt-3"></div>
                    </>
                    )))}
                    <div className="add-promocode-icon mt-3"><NavLink to="/addpromocode"><i className="fa-duotone fa-plus"></i></NavLink></div>
                </div>
                {noCurrentPromocodes &&(
                <>
                    <div className="no-promocodes-text mt-4">No Current Promocodes</div>
                    <div className="no-promocodes-add-promocode mt-3"><NavLink to="/addpromocode">Add new promocodes <i className="fa-duotone fa-plus"></i></NavLink></div>
                </> 
                )}
                {noUsedPromocodes &&(
                <>
                </> 
                )}
            </div>
        </div>
        )}
        </>
    )

}
export default MyPromocodes;
