import { useState } from "react";
import "../styles/CreatePost.css";

export function CreatePost(props) {
  const { handleCreateEntry } = props;

  //must use a useState hook to capture the values that will be passed off as arguments
  //title_input, date_input, feeling_input, content_input to be passed off as arguments
  const [title_input, setTitleInput] = useState("");
  const [date_input, setDateInput] = useState("");
  const [feeling_input, setFeelingInput] = useState("");
  const [content_input, setContentInput] = useState("");

  function clearInputs() {
    setTitleInput("");
    setContentInput("");
    setDateInput("");
    setFeelingInput("");
  }

  return (
    <>
      <div className="create-post">
        <div className="post-inputs">
          <div className="left-box">
            <div className="input-box">
              <label htmlFor="post-title">Post Title: </label>
              <input
                value={title_input}
                onChange={(e) => setTitleInput(e.target.value)}
                type="text"
                id="post-title"
                name="post-title"
              />
            </div>
            <div className="input-box">
              <label htmlFor="post-date">Post Date: </label>
              <input
                value={date_input}
                onChange={(e) => setDateInput(e.target.value)}
                type="date"
                id="post-date"
                name="post-date"
              />
            </div>
            <div className="input-box">
              <label htmlFor="post-feeling">Feeling: </label>
              <input
                value={feeling_input}
                onChange={(e) => setFeelingInput(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="right-box">
            <div className="input-box">
              <label htmlFor="post-content">Post Content: </label>
              <textarea
                value={content_input}
                onChange={(e) => setContentInput(e.target.value)}
                name="post-content"
                id="post-content"
                rows={8}
                placeholder="How are you doing today? 🌻"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="create-buttons">
          <button
            onClick={() => {
              //check for empty values
              if (
                !title_input ||
                !date_input ||
                !feeling_input ||
                !content_input
              ) {
                alert(`Please fill out the form`);
                return;
              }
              handleCreateEntry(
                title_input,
                content_input,
                date_input,
                feeling_input,
                true
              );
              clearInputs();
            }}
          >
            Post
          </button>
          <button
            onClick={() => {
              //check for empty values
              if (
                !title_input ||
                !date_input ||
                !feeling_input ||
                !content_input
              ) {
                alert(`Please fill out the form`);
                return;
              }
              handleCreateEntry(
                title_input,
                content_input,
                date_input,
                feeling_input,
                false
              );
              clearInputs();
            }}
          >
            Archive
          </button>
          <button onClick={() => clearInputs()}>Clear</button>
        </div>
      </div>
    </>
  );
}
