import axios from "../components/axios";

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

    let result = await axios(query);
    let data = result.data.data.allPeople.people;
    return data;
}


