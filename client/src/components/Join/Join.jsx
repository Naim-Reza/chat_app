import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./Join.module.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  let url = `/chat?name=${name}&room=${room}`;

  return (
    <Grid
      container
      spaceing={3}
      alignItems="center"
      justify="center"
      className={styles.container}
    >
      <Grid item sm={6} spaceing={3}>
        <Card className={styles.cardContainer} raised>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Join
            </Typography>
            <Divider />
            <form>
              <TextField
                label="Username"
                placeholder="Username"
                id="username"
                fullWidth
                margin="normal"
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                label="Room"
                placeholder="Room Name"
                id="roomname"
                fullWidth
                margin="normal"
                onChange={(event) => setRoom(event.target.value)}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={styles.btnRight}
            >
              <Link
                className={styles.link}
                to={url}
                onClick={(event) =>
                  !name || !room ? event.preventDefault() : null
                }
              >
                Join
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Join;
