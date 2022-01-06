import React, {lazy, Suspense} from 'react';
import {Loader} from "../Loader";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";
import {fetchEntries} from "../../operations";

const EntryList = lazy(() => import("./EntryList"))

function SuspenseLoadingData() {
  const {getEntries} = useLoadingData(fetchEntries)

  return (
    <Suspense fallback={<Loader/>}>
      <EntryList getEntries={getEntries}/>
    </Suspense>
  );
}

export default SuspenseLoadingData;

function useLoadingData(getDataAction: (dispatch: Dispatch, isData: boolean) => any) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const isData = useSelector((state: RootState) => state.entries.length !== 0)

  const promise = React.useMemo(() => {
    return getDataAction(dispatch, isData);
  }, [dispatch]);

  const getEntries = React.useCallback(() => {
    if (isLoading) throw promise;
  }, [isLoading, promise]);

  return {loading: isLoading, getEntries}
}
