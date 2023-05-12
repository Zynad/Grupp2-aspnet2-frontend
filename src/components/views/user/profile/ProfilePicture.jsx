import { NavLink } from "react-router-dom";

const ProfilePicture = () => {
    return (
        <>
        <div className="mt-3 profile-picture-content container">
        <NavLink to="/editprofile"><i className="profile-circle fa-thin fa-pen"></i></NavLink>
        </div>
        </>
    )
}

export default ProfilePicture;