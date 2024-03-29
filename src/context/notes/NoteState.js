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
  const host = "http://localhost:5000";
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
      _id: "65fe959ece246c2ce8fd4c0fb",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0fj",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0fa",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0fg",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
    {
      tag: "personal",
      _id: "65fe959ece246c2ce8fd4c0ff",
      title: "My title",
      description: "please wake up early",
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  //get all note
  const getNote = async () => {
    //TODO:Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGQyNjhhNjdjMWMzOWI4OWYwMDZkIn0sImlhdCI6MTcxMTE3NDMzN30.oypPDgShZdIshtkD_1qR1oD8q0HxWZxVMOi_AO_cK6o",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO:Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGQyNjhhNjdjMWMzOWI4OWYwMDZkIn0sImlhdCI6MTcxMTE3NDMzN30.oypPDgShZdIshtkD_1qR1oD8q0HxWZxVMOi_AO_cK6o",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      tag: tag,
      _id: "65fe959ece246c2ce8fd4c0ffd",
      title: title,
      description: description,
      user: "65fdd268a67c1c39b89f006d",
      date: "2024-03-23T08:41:02.324Z",
      __v: 0,
    };
    //cocat returns an array while push updates an araay
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = async (id) => {
    //  TODO:Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGQyNjhhNjdjMWMzOWI4OWYwMDZkIn0sImlhdCI6MTcxMTE3NDMzN30.oypPDgShZdIshtkD_1qR1oD8q0HxWZxVMOi_AO_cK6o",
      },
      body: JSON.stringify(),
    });
    console.log("deleting the note with id" + id);
    //only keep that otes in notes array thar are not same with id that note id we want to dlt in dlt note fn each note le has their id and identify from them id and want to dlt that not rest
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGQyNjhhNjdjMWMzOWI4OWYwMDZkIn0sImlhdCI6MTcxMTE3NDMzN30.oypPDgShZdIshtkD_1qR1oD8q0HxWZxVMOi_AO_cK6o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    //TO UPDATE ON FRON ENF NEED to create a deep copy for this
    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
