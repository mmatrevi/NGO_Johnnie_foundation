import React from "react";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";

const Content = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar>
          <Typography className={classes.title}>
            <b>The Johnnie Foundation</b>
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.links}
          >
            <i>Touching lives..</i>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box className={classes.hero}>
          <Box>Caring for someone is not as difficult as it seems...</Box>
        </Box>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h6" align="center" color="textPrimary">
            OUR VISION
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            THE JOHNNIE FOUNDATION envisions a network of strong and thriving
            teamwork to serve people in Greatest needs, to relieve their
            suffering, to promote peace and to promote the transformation of
            their conditions of life.
          </Typography>
        </Container>
        <Container maxWidth="lg" className={classes.cardGrid}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActions className={classes.cardActions}>
                  <CardMedia
                    className={classes.Media}
                    image="https://source.unsplash.com/random"
                    title="Card content"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                      component="h2"
                    >
                      OUR MISSION
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      It’s a mission about love. We love God, and we demonstrate
                      our love and live out our faith by extending care to
                      others. We offer our programs to the poorest of the poor
                      to the children in greatest needs without ulterior motive.
                      We devote ourselves to helping the children and the youth
                      of all faith, cultures backgrounds and race- without
                      imposing any religious obligations or conversion
                      requirements upon them.
                    </Typography>
                  </CardContent>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActions className={classes.cardActions}>
                  <CardMedia
                    className={classes.Media}
                    image="https://source.unsplash.com/random"
                    title="Card content"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                      component="h2"
                    >
                      OUR OBJECTIVES
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      We grow together with your sponsorship and dedications. We
                      grow together with your participation and dedication. We
                      grow together with your partnership and dedication.
                    </Typography>
                  </CardContent>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActions className={classes.cardActions}>
                  <CardMedia
                    className={classes.Media}
                    image="https://source.unsplash.com/random"
                    title="Card content"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                      component="h2"
                    >
                      Programs and projects
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Donations/Platforms/Forums/Dialogue/Organize conferences
                      to inspire young people and give them the platforms to
                      freely share ideas and success stories
                    </Typography>
                  </CardContent>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Card className={classes.card}>
                <CardActions className={classes.cardActions}>
                  <CardMedia
                    className={classes.Media}
                    image="https://source.unsplash.com/random"
                    title="Card content"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      gutterBottom
                      component="h2"
                    >
                      Target
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      paragraph
                    >
                      Guarantee every child with a minimum level of well-being
                      compatible with human dignity and to empower citizens by
                      providing information, public participation and access to
                      free and fair justice Sustainability plans:<br></br>
                      Develop vision, mission, case for support: •An internal
                      staff team would be created to guide planning process of
                      our foundation.<br></br>
                      •Discuss with staff and community members why our program
                      is needed, who will benefit, why our organization is the
                      best organization to undertake it.<br></br>
                      •Identify and talk with other community leaders who might
                      share common or similar vision/mission.<br></br>
                      Developing Goals and Objectives:<br></br>
                      •Develop a logic model to clarify sustainability goals, we
                      will create specific program objectives, and identify
                      measures to track progress and outcome.<br></br>
                      Research and identify potential stakeholders:<br></br>•
                      Identify priorities such as community engagement,
                      strategic communication, leadership development,
                      governance and management.<br></br>• We will solicit ideas
                      from other agencies, schools, and faith communities who
                      might share interests with your program.<br></br>• Talk to
                      local businesses about how your program can benefit their
                      interests.<br></br>
                    </Typography>
                  </CardContent>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer>
        <Container maxWidth="lg">
          <Grid container spacing={3} className={classes.footer}>
            <Grid item>
              <Typography>Johnnie_foundations@facebook.com</Typography>
              <Typography>#Johnnie_foundation</Typography>
              <Typography>The_johnny_foundation</Typography>
              <Typography>Johnnie_foundation@gmail.com</Typography>
              <Typography>xxx-xxxx-xxxx</Typography>
              <Typography>xxx-xxxx-xxxx xxx-xxxx-xxxx xxx-xxxx-xxxx</Typography>
            </Grid>
            <Grid item>
              <Typography>Johnnie_foundations@facebook.com</Typography>
              <Typography>#Johnnie_foundation</Typography>
              <Typography>The_johnny_foundation</Typography>
              <Typography>Johnnie_foundation@gmail.com</Typography>
              <Typography>xxx-xxxx-xxxx</Typography>
              <Typography>xxx-xxxx-xxxx xxx-xxxx-xxxx xxx-xxxx-xxxx</Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Content;
