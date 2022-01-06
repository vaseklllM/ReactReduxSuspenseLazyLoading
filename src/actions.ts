import {Action, Entry} from "./types";

export const Actions = {
    changeLoading: (loading: boolean): Action => ({type: "CHANGE_LOADING", payload: loading}),
    updateEntries: (entries: Entry[]): Action => ({type: "updateEntries", payload: entries}),
};
