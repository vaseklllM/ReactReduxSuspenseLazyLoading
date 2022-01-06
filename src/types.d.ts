export type Entry = {
    id: number;
    text: string;
    link: string;
};

export type RootState = any;

export type Action =
    | {
    type: "CHANGE_LOADING";
    payload: boolean;
}
    | {
    type: "updateEntries";
    payload: Entry[];
};
