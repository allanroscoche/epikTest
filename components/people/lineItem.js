import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Column = styled.td`
    margin: 5px;
    padding: 5px;
`;
const Line = styled.tr`
    background-color: ${({focus}) => focus && `#ddd`};
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: black;
    margin: 5px;
    border-width: 0px;
`;
export default ({ people, index }) => {
    const router = useRouter();
    const [focus, setFocus] = useState(false);

    return (
    <Line 
        key={people.id} 
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        onClick={() => router.push(`/people/${people.id}`)}
        focus={focus}>
        <Column>{people.name}</Column>
        <Column>{people.gender}</Column>
        <Column>{people.filmConnection.totalCount}</Column>
    </Line>
    )
};