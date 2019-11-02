import React, { Dispatch } from "react";
import CourseList from "../components/CourseList/CourseList";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { Typography } from "@material-ui/core";
import {CourseActionType, CourseItem, Store} from "../types";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar, OptionsObject } from "notistack";

const App: React.FC = () => {
  const course = useSelector((state: Store) => state.course);
  const dispatch = useDispatch<Dispatch<CourseActionType>>();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (courseId: CourseItem["courseId"]) => {
    triggerSnackbars(courseId);

    dispatch({
      type: "TOGGLE_LIKE",
      payload: courseId
    });
  };

  const triggerSnackbars = (courseId: CourseItem["courseId"]) => {
    const { wishListFlag } = course.courseList.find(
      (element: CourseItem) => element.courseId === courseId
    ) as CourseItem;

    if (wishListFlag) {
      enqueueSnackbar("Removed from Favorites", {
        autoHideDuration: 5000,
        variant: "success",
        style: { opacity: 0.88 }
      } as OptionsObject);
    } else {
      enqueueSnackbar("Added to my Favorite Courses", {
        autoHideDuration: 3000,
        variant: "success"
      } as OptionsObject);
    }
  };

  return (
    <PageWrapper>
      <Typography gutterBottom={true}>
        {course.courseList.length} Kurse
      </Typography>

      <CourseList courseList={course.courseList} onClick={handleClick} />
    </PageWrapper>
  );
};

export default App;
