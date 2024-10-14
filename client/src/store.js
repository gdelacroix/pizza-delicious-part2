import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from "./reducers/pizzaReducer"

// Combiner les reducers
const rootReducer = {
    getAllPizzaReducer,
};


// Créer le store
const store = configureStore({
    reducer: rootReducer,  // Utiliser l'objet des reducers directement
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
    devTools:  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__  // Activer DevTools si disponible
});
export default store;