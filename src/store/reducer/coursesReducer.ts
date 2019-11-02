import jsonMock from "../../mock/courseList.json";
import { CourseActionType, CourseItem } from "../../types";

const initialState = jsonMock;

const courseReducer = (state = initialState, action: CourseActionType) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        courseList: state.courseList.map((item: CourseItem) => {
          return item.courseId === action.payload
            ? { ...item, wishListFlag: !item.wishListFlag }
            : item;
        })
      };
    default:
      return state;
  }
};

export default courseReducer;
