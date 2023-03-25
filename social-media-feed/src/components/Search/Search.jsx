import classes from "./Search.module.css";
import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export const Search = () => {
    const [params, setParams] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        console.log(params);
        
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(params);
        
        //setParams(event.target.value);
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        if (params === "") {
            setSearchParams({}, { replace: true });
            return;
        }
        let search = {
            string: params
        }
        console.log(search);
        setSearchParams(search, { replace: true });
        navigate({
            pathname: "/",
            search: "string=" + params
        });
        console.log(searchParams);
    };

return (
    <form className={classes.Form} onSubmit={(e) => handleSubmit(e)}>
        <input
            className={classes.Input}
            type="text"
            value={params}
            onChange={(e) => setParams(e.target.value)}
        />
        <button className={classes.Button} type="submit">Search</button>
    </form>
);
}