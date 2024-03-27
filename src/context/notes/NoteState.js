import { useState } from "react";
import NoteContext from "./NoteContext";
//react component name start with upper case
const NoteState = (props) => {
  // const s1 = {
  //   name: "harry",
  //   class: "5b",
  // };
  // const [state, setstate] = useState(s1);

  // const update = () => {
  //   setTimeout(() => {
  //     setstate({ name: "larry", class: "10b" });
  //   }, 1000);
  // };
  //same as {{state:state,update:update}} use es6 syntax
  const notesInitial = [
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0f",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0f",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0f",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0f",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0f",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0f",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
