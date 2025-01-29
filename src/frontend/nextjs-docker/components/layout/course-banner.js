import React from "react";

export default function CourseBanner({
  title,
  description,
  author,
  publishDate,
}) {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-2xl shadow-lg p-8 w-full mx-auto mt-4">
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>
      <div className="flex items-center justify-between text-sm">
        <span>
          By: <span className="font-medium">{author}</span>
        </span>
        <span>Published: {new Date(publishDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
