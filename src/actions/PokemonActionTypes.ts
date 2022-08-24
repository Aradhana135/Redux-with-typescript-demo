export const POKEMON_LOADING="POKEMON_LOADING";
export const POKEMON_SUCCESS="POKEMON_SUCCESS";
export const POKEMON_FAIL="POKEMON_FAIL";

export interface pokemonType{
    abilities:pokemonAbility[],
sprites:pokemonsprites,
stats:pokemonStats[]
}
export interface pokemonAbility{
    ability:{
        name:string,
        url:string
    }
}
export interface pokemonsprites{
front_default:string
}
export interface pokemonStats{
    base_stats:string
}

export interface pokemonLoading {
    type:typeof POKEMON_LOADING
}

export interface pokemonFail{
    type:typeof POKEMON_FAIL
}
export interface pokemonSuccess{
    type:typeof POKEMON_SUCCESS
    payload:pokemonType
}
export type pokemonDispatchTypes=pokemonLoading|pokemonSuccess|pokemonFail