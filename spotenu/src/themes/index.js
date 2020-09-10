import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    width: "90%",
  },
}));

export const MainButton = withStyles({
  root: {
    backgroundColor: "#121212",
    color: "#fff952",
    borderRadius: 10,
    border: "1px solid #fff952",
    fontSize: 18,
    textTransform: "none",
  },
})(Button);
