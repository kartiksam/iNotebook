import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  let history = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  const handleClick = (e) => {
    console.log("updated note", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    //when click on update btn update and close modal
    refClose.current.click();
    props.showAlert("updated succesfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  //when load 1st our hardcode notesho then immediatekly thius func runs and form our db these notes will show and as sson as add note edit then again new notes display withj remove deleted one and others and with edit again all notes with previous notes and edit note
  //if token available means u are logged in  then show getNote otherwise redirect to login page so that u can logged in

  useEffect(() => {
    // localStorage.removeItem("token");
    if (localStorage.getItem("token")) {
      getNote();
    } else {
      history("/login");
    }
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });

    console.log("updated");
  };
  //useRef for reg=ference
  const ref = useRef(null);
  const refClose = useRef(null);

  //before hard coded show but use effect as sson as restart the pagfe only show with this function in db
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {" "}
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    value={note.edescription}
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    value={note.etag}
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                ref={refClose}
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                type="button"
                onClick={handleClick}
                class="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2> Your notes</h2>
        {/* if i will write direct {"some string "}n it will direwctly display on page = conditiopj to chk if there is no notes display it else map cart*/}
        {Array.isArray(notes) && notes.length === 0 && "No notes to display"}
        {/* same need to chk in newsapp  same in newsapp*/}
        {Array.isArray(notes) &&
          notes.map((note) => {
            return (
              <Noteitem
                key={note._id}
                updateNote={updateNote}
                showAlert={props.showAlert}
                note={note}
              />
            );
          })}
      </div>
    </>
  );
};

export default Notes;
