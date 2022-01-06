import {Dispatch} from "redux";
import {Entry} from "./types";
import {Actions} from "./actions";


interface IResData {
  results: {
    name: string,
    homeworld: string
  }[]
}

export const fetchEntries = async (dispatch: Dispatch, isData: boolean): Promise<void> => {
  if (isData) return undefined
  dispatch(Actions.changeLoading(true));


  // const res: IResData = await new Promise(async (res) => {
  //   const r = await fetch('https://swapi.dev/api/people')
  //   setTimeout(async () => {
  //     const data: IResData = await r.json()
  //     res(data)
  //   }, 2000)
  // })
  const res = await fetch('https://swapi.dev/api/people')
  const data: IResData = await res.json()

  const entries: Entry[] = data.results.map((i, idx) => ({id: idx, text: i.name, link: i.homeworld}))


  dispatch(Actions.updateEntries(entries));
  dispatch(Actions.changeLoading(false));
};
