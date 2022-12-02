import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/Greetings/Greeting";

const Greeting = () => {
  const dispatch = useDispatch();
  const natasha = useSelector(
    (state) =>(state.greetings)
    );

  useEffect(()=>{
    dispatch(fetchApi())
  }, [dispatch]);

    return (
        
        <h1>
            {natasha.greetings.message}
        </h1>
    );
};

export default Greeting;


