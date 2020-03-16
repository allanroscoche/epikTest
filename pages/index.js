import React, { useState, useEffect } from 'react';
import allPeople from "../querys/allPeople";

export default () => {
    const [peoples, setPeoples] = useState([]);
    const [pageIndex, setPageIndex ] = useState(1);
    const listPeople = peoples.map( 
        (people, index) => (
            <tr key={index}>
                <td>{people.name}</td>
                <td>{people.gender}</td>
                <td>{people.filmConnection.totalCount}</td>
            </tr>
        )
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
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Gênero</td>
                        <td>Filmes</td>
                    </tr>
                </thead>
                <tbody>
                    {listPeople}
                </tbody>
            </table>
            <button onClick={ () => {
                setPageIndex(pageIndex+1);
            }}>Mais</button>
        </div>
    );
}