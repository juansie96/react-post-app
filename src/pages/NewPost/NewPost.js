import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./NewPost.css";
import { Formik } from "formik";

const NewPost = ({ toggleModal }) => {
  const [inputFileName, setInputFileName] = useState(null);

  const handleInputChange = (e) => {
    const fileRoute = e.target.value;
    let fileName = fileRoute.split("\\")[2];
    setInputFileName(fileName);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div className="new-post-container">
        <h2>New Post</h2>
        <div className="new-post-form">
          <Formik
            initialValues={{ title: "", content: "", image: undefined }}
            validate={(values) => {
              const errors = {};
              if (!values.title) {
                errors.title = "The title is required";
              } else if (values.title.length < 5) {
                errors.title = "The title is too short";
              } else if (values.title.length > 80) {
                errors.title = "The title is too long";
              }

              if (!values.content) {
                errors.content = "The content is required";
              } else if (values.content.length < 5) {
                errors.content = "The content is too short";
              } else if (values.content.length > 3000) {
                errors.content = "The content is too long";
              }

              const SUPPORTED_EXTENSIONS = [
                "image/png", 
                "image/jpg",
                "image/jpeg",
              ];
              if (!values.image) {
                errors.image = "You have to provide an image";
              } else if (!SUPPORTED_EXTENSIONS.includes(values.image.type)) {
                errors.image =
                  "The file selected it's not supported (Only .jpg, .jpeg and .png)";
              } else if (values.image.size > 2000000) {
                  errors.image = "The image size is to big. Max 2MB."
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await values;
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && (
                    <span className="error">{errors.title}</span>
                  )}
                </div>
                <div className="input-container">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onBlur={handleBlur}
                    defaultValue={null}
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                      handleInputChange(event)
                    }}
                  />
                  <label htmlFor="image" className="file-label">
                    {inputFileName ? (
                      <span>{inputFileName}</span>
                    ) : (
                      <span>
                        <i className="fas fa-images"></i>Upload Image
                      </span>
                    )}
                  </label>
                  {errors.image && (
                    <span className="error">{errors.image}</span>
                  )}
                </div>
                <div className="input-container">
                  <label htmlFor="content">Content</label>
                  <textarea
                    name="content"
                    id=""
                    cols="30"
                    rows="5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.content}
                  ></textarea>
                  {errors.content && (
                    <span className="error">{errors.content}</span>
                  )}
                </div>
                <input type="submit" value="Publish" className="btn-primary" />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default NewPost;
