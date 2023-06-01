import "./profile.css"
import { NavLink } from "react-router-dom";
import noPromoImg from "../../../../assets/images/noPromo.png"
import { useContext, useRef } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";
import { useNavigate } from "react-router-dom";

const AddPromocode =()=>{

    const { addPromocodeVoucher } = useContext(ApiContext);
    const promoVoucher = useRef();
    const navigate = useNavigate();

    const addPromocode = async (e)=>{
        e.preventDefault();
        if(promoVoucher.current.value == "" )
        {
            document.querySelector("#errorMessage").innerHTML = "Not a valid input";
            return;
        }
        
        let result = await addPromocodeVoucher({"voucherCode": promoVoucher.current.value});

        if(result != null)
            navigate("/mypromocodes");
        else
            document.querySelector("#errorMessage").innerHTML = "Not a valid voucher code";
    }

    return (
        <> 
        <div className="container my-5">
            <div className="row">
                <div className="col-4"><NavLink className="nav-standard" to="/mypromocodes"><i className="fa-solid fa-angle-left"></i></NavLink></div>
                <div className="col-4 adress-title">My Promocodes</div>
                <div className="col-4"></div>
            </div>
            <div className="no-promocodes-container-grid mt-4">
                <div className="no-promocodes-img"><img src={noPromoImg}></img></div>
                <div className="no-promocodes-icon mt-4"><i className="fa-regular fa-horizontal-rule fa-rotate-90"></i></div>
                <div className="no-promocodes-text mt-3">Add new promocode!</div>
                <div className="no-promocodes-input mt-3">
                    <form onSubmit={addPromocode}>
                        <div className="input-wrapper">
                            <label>ENTER THE VOUCHER</label>
                            <input ref={promoVoucher} type="text" />
                        </div>
                        <div className="no-promocodes-btn mt-2">
                            <button type="submit" className="dark-btn-standard mt-3">SUBMIT</button>
                        </div>
                    </form>
                </div>
                <div id="errorMessage" className="text-danger mt-2 no-promo-error-message"></div>
            </div>
        </div>
        </>
    );
}
export default AddPromocode;