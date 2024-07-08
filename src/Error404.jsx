// importing useRouterError 
import { useRouteError } from "react-router-dom";  

// function to show msg 
export default function Error404() {
    // `error` const to store error 
    const error = useRouteError();
    console.log(error)

  return (
    <>
      <h1>{error.status}</h1>
        {
            (error.status === 404)? <img src=""/> : <span></span>
        }
      {/* p showing error msg */}
      <p>{ error.statusText || error.message}</p>
      
    </>
  );
}
