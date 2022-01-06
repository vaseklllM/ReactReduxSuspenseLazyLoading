import {Entry, RootState} from "../types";
import * as React from "react";
import {memo} from "react";
import {useSelector} from "react-redux";
import {Loader} from "./Loader";

interface IProps {
  getEntries: () => any;
}

function EntryList(props: IProps) {
  props.getEntries();
  const entries = useSelector<RootState, Entry[]>((state) => state.entries);

  // if (entries.length === 0) return <Loader/>

  console.log("update EntryList");

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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.3346 28L16.0013 21.3333L6.66797 28V6.66667C6.66797 5.95942 6.94892 5.28115 7.44902 4.78105C7.94911 4.28095 8.62739 4 9.33464 4H22.668C23.3752 4 24.0535 4.28095 24.5536 4.78105C25.0537 5.28115 25.3346 5.95942 25.3346 6.66667V28Z"
          stroke="#ADADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </>
  );
}

export default memo(EntryList)