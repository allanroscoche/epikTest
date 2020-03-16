import React, { useState, useEffect } from 'react';
import allPeople from "../querys/allPeople";
import PeopleLine from "../components/people/lineItem";
import PeopleTable from "../components/people/table";

export default () => {
    const [peoples, setPeoples] = useState([]);
    const [pageIndex, setPageIndex ] = useState(1);
    const listPeople = peoples.map( 
        (people, index) => 
            <PeopleLine 
                key={index} 
                index={index} 
                people={people} />
    )
    useEffect( () => {
        async function getData() {
            let peoples = await allPeople(pageIndex);
            setPeoples(peoples)
        }
        getData();
    }, [pageIndex]);

    return (
        <div>
            <PeopleTable>
                {listPeople}
            </PeopleTable>
            <button onClick={ () => {
                setPageIndex(pageIndex+1);
            }}>Mais</button>
        </div>
    );
}