import React from "react";
import Navbar from "./navbar";
import CourseBanner from "./course-banner";
import PageContainer from "./page-container";
import CourseRating from "../features/course-rating";
import Gauge from "../features/guage";

const CoursePageTemplate = ({
  id,
  title,
  description,
  author,
  publishDate,
}) => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <CourseBanner
          key={id}
          title={title}
          description={description}
          author={author}
          publishDate={publishDate}
        />
        <Gauge value={43} />
        <CourseRating score={3.5} />
      </PageContainer>
    </>
  );
};

export default CoursePageTemplate;
