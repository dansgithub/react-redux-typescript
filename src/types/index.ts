export type CourseItems = Array<CourseItem>;

export type CourseItem = {
  courseId: number;
  courseName: string;
  wishListFlag: boolean;
};

export type Store = {
  course: {
    courseList: CourseItems
  }
}
export type CourseActionType = {
  type?: "TOGGLE_LIKE";
  payload: CourseItem["courseId"];
};
