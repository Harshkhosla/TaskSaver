
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const loginuser = (input)=>{
    // debugger;
    console.log(input);
    // debugger;
    return (dispatch)=>{
        const{name, email, password}=input;
        // debugger;
       fetch("http://localhost:5000/api/auth/createuser", { 
           
         method: "POST",
         headers: {
           "content-type": "application/json"
         },
   
         body: JSON.stringify(
           {
             name, email,password
           })
       })
   
         .then(response => response.json())
         .then(response => {
   
           if (!response?.success) {
             throw Error(response.error)
   
           }
          //  console.log(response);
          //  console.log(response);
           toast.success(response?.message)
           // setMessage(response);
          //  navigate("/sign-in")
   
         })
         .catch((error) => {
          //  console.log(error);
           toast.error(error?.message);
   
         });

    }
}
const logindata=(amount)=>{
  return {
      type:"logindata",
      payload:amount
  }
}
export const signItUp=(navigate,field)=>{
  console.log(field);
  debugger;
  return  (dispatch)=>{
      const { email, password} = field;
      

       fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
  
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        
        
        .then((response) => {
          toast.success(response?.toast)
          // console.log(response,"casdvas")
          
  
          if (!response?.success) {
            throw Error(response.error)
          }
          // debugger;
          localStorage.setItem("Authorization", JSON.stringify(response.authtoken));           
          dispatch(authtoken(JSON.stringify(response.authtoken).replaceAll('"','')))
          navigate("/home")
        
          
        })
        .catch((err) => {
          console.log(err,"cvdsavs");
          // setError(err.message);
          // toast.error(err?.message);
          
  
        });

  }

}
const authtoken=(amount)=>{
  // debugger;
  return{
      type:'authtoken',
      payload:amount
  }
}