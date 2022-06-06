import axios from "axios";

export default async function getEpisodes( characters ) {
    const episodeList = []; 
    for ( let character of characters ) {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${character.episode[0].split('episode/')[1]},${character.episode[character.episode.length - 1].split('episode/')[1]}`);
        episodeList.push({
            characterId: character.id,
            episodes: data
        })
    }

    return episodeList;
}