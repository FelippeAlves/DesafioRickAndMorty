import axios from "axios";
import getUniqueCharacter from "./getUniqueCharacter";

export default async function getAllLocations() {
    let residents = [];
    const { data }  = await axios.get(`https://rickandmortyapi.com/api/location`);

    for (const res of data.results) {
        if(res.residents.length !== 0) {
            residents.push({character: await getUniqueCharacter(res.residents[0].split('character/')[1]), name: res.name, dimension: res.dimension})
        }
    }

    return residents;
}