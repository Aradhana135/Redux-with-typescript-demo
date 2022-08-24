import { Dispatch } from "redux";
import { pokemonDispatchTypes ,POKEMON_LOADING,POKEMON_SUCCESS,POKEMON_FAIL} from "./PokemonActionTypes";
import axios from "axios";
 export const GetPokemon =(pokemon:string)=>async (dispatch:Dispatch<pokemonDispatchTypes>) => {
    try{
        dispatch ({
            type:POKEMON_LOADING
        })
        const res=await axios.get(`https://pokeapi.co/api/v2/4${pokemon}`)
        dispatch({
            type:POKEMON_SUCCESS,
            payload:res.data
        })
    }

    catch(e){
dispatch({
    type:POKEMON_FAIL
})
    }
};