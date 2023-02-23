import React, { useState } from "react";
import EditBlog from "./EditBlog";

const ShowBlog = ({ blog, id, deleteBlogById, updateBlogById }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteBlogById(id);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      <hr />
      <p>ID: {blog.id}</p>
      <p>TITLE: {blog.title}</p>
      <p>CONTENT: {blog.content}</p>
      <p>
        <button onClick={handleDelete}>Delete Blog</button>
      </p>
      <p>
        <button onClick={toggleEdit}>Edit Blog</button>
      </p>
      <p>
        {!showEdit ? (
          ""
        ) : (
          <EditBlog
            id={id}
            updateBlogById={updateBlogById}
            setShowEdit={setShowEdit}
          />
        )}
      </p>
    </>
  );
};

export default ShowBlog;