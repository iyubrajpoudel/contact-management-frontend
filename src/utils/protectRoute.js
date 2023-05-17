import { redirect } from "react-router-dom";

export function isMember(){
    let authObj = JSON.parse(localStorage.getItem("auth"));

    if (authObj){
        if(!authObj.token){
            return redirect("/");
        }
    }
    else{
        // console.log('pp');
        return redirect("/login");
        // return null;
    }
}

/* 
export const protectUserRoute = () =>{

    //check auth
    const authObj = JSON.parse(localStorage.getItem("auth"));

    if (authObj){
        if(authObj.token && authObj.userType === "member"){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

export const protectAdminRoute = () =>{
    //check auth
    const authObj = JSON.parse(localStorage.getItem("auth"));

    if(authObj.token && authObj.userType === "admin"){
        return null;
        // return true;
    }
    else{
        return redirect("/login");
    }
}

 */