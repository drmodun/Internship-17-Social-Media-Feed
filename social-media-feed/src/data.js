
import json from "./hardCoded.json";

export let loggedIn = false;
export const local = window.localStorage;
if (local.getItem("user") === null) {
    loggedIn = false;
}
else {
    if (JSON.parse(local.getItem("timestamp") > Date.now()) - 1000 * 60 * 60 * 12)
        loggedIn = local.getItem("user");
    else {
        local.removeItem("user");
        local.removeItem("timestamp");
        loggedIn = false;
    }
}


export let posts = JSON.parse(json)[0];
export let users = JSON.parse(json)[1];
export function SetUser(username, password) {
    if (users.find((user) => user.username === username && user.password === password)) {
        local.setItem("user", username);
        local.setItem("timestamp", JSON.stringify(new Date()));
        loggedIn = username;
        return true;
    }
    else {
        return false;
    }
}
console.log("These are the usernames and passwords of the users in the database :)");
users.forEach(element => {
    console.log(element);
});
