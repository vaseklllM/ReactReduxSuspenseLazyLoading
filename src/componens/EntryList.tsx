import {Entry, RootState} from "../types";
import * as React from "react";
import {useSelector} from "react-redux";

interface IProps {
  getEntries: () => any;
}

export default function EntryList(props: IProps) {
  props.getEntries();
  const entries = useSelector<RootState, Entry[]>((state) => state.entries);

  console.log("update EntryList");

  return (
    <ul>
      {entries.map((e) => {
        return (
          <li key={e.id}>
            <a href={e.link}>{e.text}</a>
          </li>
        );
      })}
    </ul>
  );
}

