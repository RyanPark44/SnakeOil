import React from "react";
import navbar from "./UI/navbar";

const CoursePageTemplate = ({ title }) => {
  return (
    <div>
      <navbar />
      <h1>{title}</h1>
    </div>
  );
};

export default CoursePageTemplate;
