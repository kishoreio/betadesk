import React, { useState, useEffect } from "react";
import { RiMessage3Line } from "react-icons/ri";
import Button from "../CommonComponents/Button";
import updateData from "../../services/updateData";

const DiscussionTab = ({ discussion, id, updateDiscussionData, userColor }) => {
  const [input, setInput] = useState("");
  const [newDiscussion, setNewDiscussion] = useState([]);
  const addTextToState = (e) => {
    setInput(e.target.value);
  };
  const addDiscussion = () => {
    setInput("");
    if (input !== "") {
      setNewDiscussion([...discussion, { name: "kishore", comments: input }]); //change name
    }
  };
  useEffect(() => {
    async function execute() {
      try {
        const res = await updateData(id, newDiscussion, "discussion");
        const newData = await res.json();
        updateDiscussionData(newData);
      } catch (err) {
        console.log(err);
      }
    }
    execute();
  }, [id, newDiscussion, updateDiscussionData]);
  return (
    <section className="discussion-container">
      <div className="discussion-title">
        <RiMessage3Line size="2.5rem" />
        <h1>Discussions</h1>
      </div>
      <hr />
      <div className="discussion-message">
        {discussion.length === 0 ? (
          <p>No more discussion. Start now</p>
        ) : (
          discussion.map((item, index) => {
            return (
              <div key={index} className="discussion-person">
                <div className="discussion-user" style={{ background: userColor }}>
                  <span>{item.name[0].toUpperCase()}</span>
                </div>
                <div className="discussion-details">
                  <p>{item.name}</p>
                  <p>{item.comments}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <hr />
      <div className="discussion-addnote">
        <textarea rows="3" value={input} onChange={addTextToState}></textarea>
        <Button value="Add Note" className="discussion-btn" func={addDiscussion} />
      </div>
    </section>
  );
};

export default DiscussionTab;
