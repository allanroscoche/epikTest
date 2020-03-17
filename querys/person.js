import axios from "../components/axios";

export default async (id) => {
    const query = `{
    person(id:"${id}") {
        id
        name
        species {
            name
            language
        }
        starshipConnection {
            starships {
                name
            }
        }
    }
    }`;

    let result = await axios(query);
    let data = result.data.data.person;
    return data;
}


