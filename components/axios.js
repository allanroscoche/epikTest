import axios from "axios"

export default async function(query) {
    return await axios({
        method: "POST",
        url: "https://swapi-graphql.netlify.com/.netlify/functions/index",
        headers: { 
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        data: {
            query: query
        } 
    });
}