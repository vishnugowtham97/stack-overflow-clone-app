import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "python",
      tagDesc: "Python is a versatile and high-level programming language",
    },
    {
      id: 2,
      tagName: "javascript",
      tagDesc:
        "JavaScript is a popular scripting language used for web development",
    },
    {
      id: 3,
      tagName: "html",
      tagDesc: "HTML is the standard markup language for creating web pages",
    },
    {
      id: 4,
      tagName: "css",
      tagDesc: "CSS is used for styling and layout of web pages",
    },
    {
      id: 5,
      tagName: "reactjs",
      tagDesc: "React is a JavaScript library for building user interfaces",
    },
    {
      id: 6,
      tagName: "nodejs",
      tagDesc: "Node.js is a runtime environment for server-side JavaScript",
    },
    {
      id: 7,
      tagName: "redux",
      tagDesc:
        "Redux is a predictable state management library for JavaScript apps",
    },
    {
      id: 8,
      tagName: "typescript",
      tagDesc:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
    },
    {
      id: 9,
      tagName: "c",
      tagDesc: "C is a widely used and general-purpose programming language",
    },
    {
      id: 10,
      tagName: "c++",
      tagDesc: "C++ is a powerful and versatile programming language",
    },
    {
      id: 11,
      tagName: "android",
      tagDesc: "Android is an open-source mobile operating system",
    },
    {
      id: 12,
      tagName: "mongodb",
      tagDesc:
        "MongoDB is a popular NoSQL database used for scalable applications",
    },
    {
      id: 13,
      tagName: "sql",
      tagDesc: "SQL is a standard language for managing relational databases",
    },
    {
      id: 14,
      tagName: "mysql",
      tagDesc: "MySQL is an open-source relational database management system",
    },
  ];

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categories your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
