import {Action, RootState} from "./types";

export const Reducer = (
    state: RootState = {
        isLoading: true,
        entries: []
    },
    action: Action
) => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {
                ...state,
                isLoading: action.payload
            };

        case "updateEntries":
            return {
                ...state,
                entries: action.payload
            };
        default:
            return state;
    }
};
