import classes from "./Search.module.css";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Search = () => {
    const [params, setParams] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        if (params === "") {
            setSearchParams({}, { replace: true });
            return;
        }
        let search = {
            string: params
        }
        setSearchParams(search, { replace: true });
        navigate({
            pathname: "/",
            search: "string=" + params
        });
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