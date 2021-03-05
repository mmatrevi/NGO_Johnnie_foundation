import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginRight: "-40px",
    flexGrow: 1,
  },
  hero: {
    height: "350px",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://source.unsplash.com/random/')`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    fontSize: "2rem",
    position: "relative",
    color: "#fff",
    backgroundSize: "cover",
  },
  container: {
    paddingTop: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  Media: {
    height: "25.69%",
  },
  cardContent: {
    padding: "20px 0",
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  footer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    justifyContent: "space-evenly",
  },
}));

export default useStyles;
