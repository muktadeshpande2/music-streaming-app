import React, { useEffect, useState } from "react";
import "../style.css";

function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(function(){
        console.log(email);
    })
    
    const handleEmailChange = (event) => {
       setEmail(event.target.value);
       console.log(email);
    }
         
       const handlePasswordChange = (event) => 
       setPassword(event.target.value);

    
        return(
            <main>
                <form>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />


                    <input 
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />

                </form>
            </main>
        )
    
    
}

export default SignIn;
