import React from "react";
import { CourseItems, CourseItem } from "../../types";
import { Card, CardContent, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./CourseListStyles";

interface Props {
  courseList: CourseItems;
  onClick: (courseItem: CourseItem["courseId"]) => void;
}

const CourseList: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <>
      {props.courseList.map(courseItem => {
        return (
          <Card className={classes.card} key={courseItem.courseId}>
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {courseItem.courseName}
              </Typography>

              <FavoriteIcon
                className={classes.icon}
                onClick={() => props.onClick(courseItem.courseId)}
                color={courseItem.wishListFlag ? "primary" : "disabled"}
              />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default CourseList;
