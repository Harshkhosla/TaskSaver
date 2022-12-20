
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