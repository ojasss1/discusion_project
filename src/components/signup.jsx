import React, {useState} from "react";
import Nv from "./topnav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Sgnup = () => {
    const [fdata, setfdata] = useState({username : "", passwd : ""});
    const navv = useNavigate();
    const handlefdata = (e) => {
        const {name, value} = e.target;
        setfdata({...fdata, [name] : value});
    };
    const [restxt, setrstext] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/register", {
            method : "POST",
            body : JSON.stringify(fdata),
            headers : {
                "Content-Type" : "application/json",
            },
        })
        .then(r => r.text())
        .then(d => {
            setrstext(d);
            if (d === "registered"){
                navv("/", { state: { userid: fdata.username } });
                localStorage.setItem("userid", fdata.username);
            }
        })
        .catch(e => console.log(e));
    };

    return (
        <div>
            <Nv />
            <form className="sgnup"onSubmit={handlesubmit} style={{display: "flex", flexDirection: "column",margin: "5% auto",padding: "20px",boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",}}>
                <label for="username" style={{marginBottom: "8px" }}> Email </label>
                <input name = "username" style={{padding: "10px", marginBottom: "16px", borderRadius: "5px"}}placeholder="Enter your email id" required="true" onChange={handlefdata} value={fdata.username}/>
                <label for="passwd" style={{marginBottom: "8px" }}> Password </label>
                <input name="passwd" placeholder="Enter your password" required="true" onChange={handlefdata} value={fdata.passwd}
                style={{ padding: "10px", marginBottom: "16px", borderRadius: "5px" }}/>
                <button type="submit" style = {{width: "fit-content", margin: "auto", padding: "10px 20px", backgroundColor: "orange",color: "white", border: "none",borderRadius: "5px",
            cursor: "pointer",}}> Signup </button>
                <p>Dont have an account ? <a href = "/">Signup</a></p>
                <button style={{width : "fit-content", backgroundColor : "orange" ,
                borderRadius : "5px", padding: "10px 20px", color : "white", border : "none", margin: "auto"}}> 
                <Link to = "/login" style={{color : "white"}}> Back to login </Link></button>
                {restxt && <p> {restxt} </p>}
            </form>
        </div>
    );
};

export default Sgnup;