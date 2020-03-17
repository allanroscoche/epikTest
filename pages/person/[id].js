import { useRouter } from 'next/router';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import getPerson from "../../querys/person";

export default () => {
    const router = useRouter();
    const { id } = router.query;
    const [person, setPerson] = useState({species:{}});

    useEffect( () => {
        async function getData() {
            let person = await getPerson(id);
            if(person != null)
                setPerson(person);
        }
        getData();
    }, [id]);


    return (
        <div>
            <Link href="/">Voltar</Link>
            <p>Nome: {person.name} </p>
            <p>Espécie: {person.species.name} </p>
            <p>Linguagem: {person.species.language} </p>
        </div>
    );
}