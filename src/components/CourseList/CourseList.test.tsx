import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import CourseList from "./CourseList";
import mock from "../../mock/courseList.json";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<CourseList courseList={mock.courseList} onClick={() => {}} />, div);
  unmountComponentAtNode(div);
});
