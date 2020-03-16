import React, { useState, useEffect } from "react";
import axios from "axios";

const pageSize = 10;

export default async (page) => {

    const query = `query allPeople {
        allPeople(first: ${pageSize*page}) {
            totalCount
            pageInfo {
                startCursor
                endCursor
            }
            people {
                id
                name
                gender
                birthYear
                filmConnection {
                    totalCount
                }
            }
        }
    }`;

    let result = await axios({
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
    let data = result.data.data.allPeople.people;
    return data;
}


