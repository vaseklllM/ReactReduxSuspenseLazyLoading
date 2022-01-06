import {Entry, RootState} from "../../types";
import * as React from "react";
import {memo} from "react";
import {useSelector} from "react-redux";

interface IProps {
  getEntries: () => any;
}

function EntryList(props: IProps) {
  const entries = useSelector<RootState, Entry[]>((state) => state.entries);

  props.getEntries();

  console.log("update EntryList", entries);

  return (
    <>
      <ul>
        {entries.map((e) => {
          return (
            <li key={e.id}>
              <a href={e.link}>{e.text}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default memo(EntryList)