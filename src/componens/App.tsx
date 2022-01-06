import React, {lazy, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "./Loader";
import {fetchEntries} from "../operations";
import {RootState} from "../types";
import {Dispatch} from "redux";
// import {EntryList} from "./EntryList";
const EntryList = lazy(() => import("./EntryList"))

export const App: React.FC = () => {
  const {getEntries} = useLoadingData(fetchEntries)

  console.log("update App")

  return (
    <div className="App">
      <h1>Title</h1>
      <Suspense fallback={<Loader/>}>
        <EntryList getEntries={getEntries}/>
      </Suspense>
    </div>
  );
};


function useLoadingData(getDataAction: (dispatch: Dispatch) => any) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.isLoading);

  const promise = React.useMemo(() => {
    return getDataAction(dispatch);
  }, [dispatch]);

  const getEntries = React.useCallback(() => {
    if (isLoading) throw promise;
  }, [isLoading, promise]);

  return {loading: isLoading, getEntries}
}
