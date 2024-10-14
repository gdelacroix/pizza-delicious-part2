export const getAllPizzas = () => async (dispatch) => {
  dispatch({
    type: "GET_PIZZAS_REQUEST",
  });

  try {
    const response = await fetch(
      "http://localhost:8080/api/pizzas/getAllPizzas"
    );
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des pizzas: ${response.statusText}`
      );
    }
    const result = await response.json();
    dispatch({
      type: "GET_PIZZAS_SUCCESS",
      payload: result, // Les pizzas sont dans result
    });
  } catch (error) {
    dispatch({
      type: "GET_PIZZAS_FAIL",
      payload: error,
    });
  }
};

