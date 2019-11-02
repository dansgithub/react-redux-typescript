import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: "var(--page-gutter)"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 14
  },
  icon: {
    cursor: "pointer"
  }
});

export default useStyles;
