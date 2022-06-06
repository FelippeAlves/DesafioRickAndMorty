import axios from "axios";

export default async function getUniqueCharacter(id) {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    return data;
}