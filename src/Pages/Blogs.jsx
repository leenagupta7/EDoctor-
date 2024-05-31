import React, { useState, useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "../Component/Card";

function Blogs() {

  const [form, setForm] = useState(false);
  const [blog, setBlog] = useState([]);
  const [formField, setFormField] = useState({
    title: "",
    description: "",
    file: null,
  });
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file" && files && files.length > 0) {
      setFormField({
        ...formField,
        [name]: files[0],
      });
    } else {
      setFormField({
        ...formField,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("userId", user.sub);
    formData.append("username", user.nickname);
    formData.append("userImage", user.picture);
    formData.append("title", formField.title);
    formData.append("description", formField.description);
    formData.append("file", formField.file);
    console.log(formData);

    try {
      const response = await axios.post(
        `http://localhost:4000/createblog`,
        formData
      );
      setFormField({
        title: "",
        description: "",
        file: null,
      });
      fetchData();
      document.getElementById("fileInput").value = "";
      Swal.fire("Success!", "Your blog post has been posted.", "success");
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire(
        "Error!",
        "An error occurred while posting the blog.",
        "error"
      );
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/getblog`);
      setBlog(response.data);
    } catch (err) {
      console.log("error in getblog frontend side:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this blog post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4caf50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:4000/blogdelete/${_id}`);
          Swal.fire("Deleted!", "Your blog post has been deleted.", "success");
          fetchData(); // Fetch updated blog data
        } catch (err) {
          console.error("Error deleting blog post:", err);
          Swal.fire(
            "Error!",
            "An error occurred while deleting the blog post.",
            "error"
          );
        }
      }
    });
  };

  const handlelike = async (userId, _id) => {
    console.log("hegy");
    try {
      const response = await axios.put(`http://localhost:4000/likeblog`, {
        userId: userId,
        _id: _id,
      });
      fetchData();
      console.log({ liked: response.data });
    } catch (err) {
      console.log("err in handlelike frontend side", err);
    }
  };

  const handleunlike = async (userId, _id) => {
    try {
      const response = await axios.put(`http://localhost:4000/unlikeblog`, {
        userId: userId,
        _id: _id,
      });
      //console.log({"unliked":response.data});
      fetchData();
    } catch (err) {
      console.log("err in handleunlike frontend side", err);
    }
  };

  const handledislike = async (userId, _id) => {
    console.log("heyyy");
    try {
      const response = await axios.put(`http://localhost:4000/dislikeblog`, {
        userId: userId,
        _id: _id,
      });
      fetchData();
      console.log({ liked: response.data });
    } catch (err) {
      console.log("err in handledislike frontend side", err);
    }
  };

  const handleundislike = async (userId, _id) => {
    try {
      const response = await axios.put(`http://localhost:4000/undislikeblog`, {
        userId: userId,
        _id: _id,
      });
      //console.log({"unliked":response.data});
      fetchData();
    } catch (err) {
      console.log("err in handleundislike frontend side", err);
    }
  };

  return (
    <div className=" flex h-screen overflow-hidden ">
      
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
       
        <div className="flex flex-start m-4 text-xl md:text-3xl font-kalam space-x-4 items-center">
          <span>Add New Blog</span>{" "}
          <AddBoxIcon
            style={{ color: "black", cursor: "pointer" }}
            onClick={isAuthenticated ? () => setForm(!form) : loginWithRedirect}
          />
        </div>
        {form === true ? (
          <div className="blog flex gap-5 items-center justify-center shadow-md p-8">
            <form
              onSubmit={handleSubmit}
              className="blogform flex flex-col gap-5"
            >
              <textarea
                className="forminput p-2 rounded border border-gray-500 text-white"
                type="text"
                name="title"
                placeholder="Enter title"
                value={formField.title}
                onChange={handleChange}
                style={{ color: "black" }} // Set text color to white using inline style
              />
              <textarea
                className="forminput p-2 rounded  border border-gray-500 "
                type="text"
                name="description"
                placeholder="Enter description"
                value={formField.description}
                onChange={handleChange}
                style={{ color: "black" }} // Set text color to white using inline style
              />
              <input
                id="fileInput"
                className=""
                type="file"
                name="file"
                accept="image/*"
                onChange={handleChange}
                style={{ color: "white" }} // Set text color to white using inline style
              />
              {formField.file && (
                <img
                  className="formfieldImage"
                  src={URL.createObjectURL(formField.file)}
                  alt="Selected Image"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
              <button
                className="bg-blue-500 rounded p-2 text-white"
                type="submit"
              >
                <span className="xs:block  text-lg">Submit</span>
              </button>
            </form>
          </div>
        ) : (
          <></>
        )}
        <div className="blogbox gap-30 flex flex-col mt-100 w-800 mx-auto">
          {blog.map((data, index) => (
            <div className="blogcard" key={index}>
              <Card
                data={data}
                handlelike={handlelike}
                handleunlike={handleunlike}
                handleDelete={handleDelete}
                handledislike={handledislike}
                handleundislike={handleundislike}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
