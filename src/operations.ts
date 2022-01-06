import {Dispatch} from "redux";
import {Entry} from "./types";
import {Actions} from "./actions";


interface IResData {
  results: {
    name: string,
    homeworld: string
  }[]
}

export const fetchEntries = async (dispatch: Dispatch): Promise<void> => {
  dispatch(Actions.changeLoading(true));


  const res = await fetch('https://swapi.dev/api/people')
  const data: IResData = await res.json()

  const entries: Entry[] = data.results.map((i, idx) => ({id: idx, text: i.name, link: i.homeworld}))


  dispatch(Actions.updateEntries(entries));
  dispatch(Actions.changeLoading(false));
};
