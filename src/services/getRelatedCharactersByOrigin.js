import axios from "axios";
import getUniqueCharacter from "./getUniqueCharacter";

export default async function getRelatedCharactersByOrigin(origin, id) {
    const relatedList = []
    const { data } = await axios.get(origin);

    if(data.residents.length) {
        for (const res of data.residents) {
            if(relatedList.length <= 4){
                if( parseInt(res.split('character/')[1]) !== id){
                    relatedList.push( await getUniqueCharacter(res.split('character/')[1])) 
                }
            }
        }
    }
    return relatedList;
}