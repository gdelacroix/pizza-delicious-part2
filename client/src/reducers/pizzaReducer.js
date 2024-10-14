const initialState = {
    pizzas: [],  // Assure-toi que c'est un tableau
    loading: false,
    error: null
};
export const getAllPizzaReducer = (state=initialState ,action)=>{
    switch (action.type){
        case "GET_PIZZAS_REQUEST":
            return{
                ... state,
                loading: true,
            }
        case "GET_PIZZAS_SUCCESS" :
            return {
                ...state,  // Garder les propriétés existantes
                pizzas : action.payload,
                loading: false,
            }
        case "GET_PIZZAS_FAIL" :
            return {
                ...state,  // Garder les propriétés existantes
                error : action.payload,
                loading: false,
            }
        default : return state
    }
}


