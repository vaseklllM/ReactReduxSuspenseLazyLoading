import { Dispatch } from "redux";
import { Entry } from "./types";
import { Actions } from "./actions";

const mockEntries: Entry[] = [
  {
    id: 0,
    text: "About releasing Pairs Engage android and what we want to do",
    link:
      "https://medium.com/eureka-engineering/pairs-engage-android-23b522018376?source=collection_home---4------0-----------------------"
  },
  {
    id: 1,
    text:
      "How connecting AutoLayout and other layout engine (how know max width)",
    link:
      "https://medium.com/eureka-engineering/bridging-autolayout-and-custom-layout-998889fab930?source=collection_home---4------1-----------------------"
  },
  {
    id: 2,
    text: "Create line bot wit Cloud Functions -Giolang-",
    link:
      "https://medium.com/eureka-engineering/cloud-functions-golang-line-bot-455ab556d0cf?source=collection_home---4------2-----------------------"
  }
];

export const fetchEntries = async (dispatch: Dispatch): Promise<void> => {
  dispatch(Actions.changeLoading(true));

  const entries: Entry[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEntries);
    }, 1000);
  });

  dispatch(Actions.updateEntries(entries));
  dispatch(Actions.changeLoading(false));
};
