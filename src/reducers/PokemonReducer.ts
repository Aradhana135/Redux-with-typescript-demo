import { pokemonDispatchTypes, pokemonType ,POKEMON_LOADING,POKEMON_SUCCESS,POKEMON_FAIL} from "../actions/PokemonActionTypes";

interface DefaultState{
loading:boolean,
pokemon?:pokemonType
}
const defaultState:DefaultState={
loading:false
}

const pokemonReducer=(state:DefaultState=defaultState,action:pokemonDispatchTypes):DefaultState=>{
switch(action.type){
    case POKEMON_FAIL:
        return {
            loading:false
        }
        case POKEMON_LOADING:
            return {
                loading:true
            }
            case POKEMON_SUCCESS:
                return{
                    loading:false,
                    pokemon:action.payload
                }

}
}
export default pokemonReducer;