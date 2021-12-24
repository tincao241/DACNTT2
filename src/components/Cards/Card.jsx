import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import axios from "axios";
import CountUp from "react-countup";
import cx from 'classnames';

const Cards = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries/vn")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                <b>SỐ CA NHIỄM CẢ NƯỚC </b>
            </Typography>
            <Typography variant="h5">
                
              <CountUp
                start={0}
                end={data.cases}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography colr="textSecondary">
                <b>Số ca hôm nay: </b>
              <CountUp
                start={0}
                end={data.todayCases}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <b>SỐ CA HỒI PHỤC CẢ NƯỚC </b>
            </Typography>
            <Typography variant="h5">
                
              <CountUp
                start={0}
                end={data.recovered}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography colr="textSecondary">
                <b>Số ca hôm nay: </b>
              <CountUp
                start={0}
                end={data.todayRecovered}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of COVID
            </Typography>
          </CardContent>
          
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
                <b>SỐ CA TỬ VONG CẢ NƯỚC </b>
            </Typography>
            <Typography variant="h5">
                
              <CountUp
                start={0}
                end={data.deaths}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography colr="textSecondary">
                <b>Số ca hôm nay: </b>
              <CountUp
                start={0}
                end={data.todayDeaths}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">
              Number of deaths cases of COVID 19
            </Typography>
          </CardContent>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
