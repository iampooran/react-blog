import React, { useState } from "react";

const EditBlog = ({ updateBlogById, id, setShowEdit }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const handleEdit = () => {
    setShowEdit(false);
    updateBlogById(id, newContent, newTitle);
  };
  return (
    <>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <input
        type="text"
        value={newContent}
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
      />
      <button onClick={handleEdit}>Save</button>
    </>
  );
};

export default EditBlog;
