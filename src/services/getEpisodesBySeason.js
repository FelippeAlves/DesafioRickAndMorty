import axios from "axios";
import getUniqueCharacter from "./getUniqueCharacter";

export default async function getEpisodesBySeason(temp) {
    let episodes = [];
    let url = ''

    switch (temp) {
        case 'Temporada 1':
            url = 'https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11';
            break;
        case 'Temporada 2':
            url = 'https://rickandmortyapi.com/api/episode/12,13,14,15,16,17,18,19,20,21';
            break;
        case 'Temporada 3':
            url ='https://rickandmortyapi.com/api/episode/22,23,24,25,26,27,28,29,30,31';
            break;
        case 'Temporada 4':
            url = 'https://rickandmortyapi.com/api/episode/32,33,34,35,36,37,38,39,40,41';
            break;
        case 'Temporada 5':
            url = 'https://rickandmortyapi.com/api/episode/42,43,44,45,46,47,48,49,50,51';
            break;

        default:
            break;
    }

    const { data } = await axios.get(url);

    for (const res of data) {
        if (res.characters.length !== 0) {
            const newDate = new Date(res.air_date)
            episodes.push({ character: await getUniqueCharacter(res.characters[res.characters.length - 1].split('character/')[1]), id: res.id, episode: res.name, date: newDate.toLocaleString().split(' ')[0]})
        }
    }

    return episodes;
}