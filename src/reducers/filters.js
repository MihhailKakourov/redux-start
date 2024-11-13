const initialState = {
    filters: [],
    filtersLoadingStatus: "idle", // idle, loading, loaded, error
    activeFilter: "all"
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case "FILTERS_FETCHING":
            return {
                ...state,
                filtersLoadingStatus: "loading" // Set status to loading when fetching
            }
        case "FILTERS_FETCHED":
            return {
                ...state,
                filters: action.payload, // Save the fetched filters in state
                filtersLoadingStatus: "loaded" // Set status to loaded when the fetch is successful
            }
        case "FILTERS_FETCHING_ERROR":
            return {
                ...state,
                filtersLoadingStatus: "error" // Set status to error when fetching fails
            }
        case "ACTIVE_FILTER_CHANGED":
            return {
                ...state,
                activeFilter: action.payload // Set the active filter when the user changes it
            }
        default:
            return state;
    }
}

export default filters;
