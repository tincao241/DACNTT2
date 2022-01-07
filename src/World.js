import React, { useState, useEffect } from "react";
import cx from 'classnames';
import styles from "./components/Cards/Card.module.css";
import axios from "axios";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";


const World = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <b>SỐ CA NHIỄM THẾ GIỚI</b>
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

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <b>SỐ CA HỒI PHỤC THẾ GIỚI </b>
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
              Number of recovered cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <b>SỐ CA TỬ VONG THẾ GIỚI </b>
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
    
    <div class="container">
        <div className="row">
          <div className="col-sm chart-info">
            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?tab=map&zoomToSelection=true&facet=none&hideControls=true&Metric=Confirmed+cases&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=false&country=~OWID_WRL"  width="1200" height="800" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm chart-info">Các số liệu Covid 19 Thế giới</div>
          <p className="small-info"> Đợt bùng phát từ đầu năm 2020</p>
          
        </div>
        <div class="row ">
          <div class="col-sm chart">
            <iframe width="1200" height="800" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/24.embed"></iframe>       
          </div>
        </div>
        <div className="row">
          <div className="col-sm chart-info">Bảng số liệu Covid 19 Thế giới</div>
          <p className="small-info"> Đợt bùng phát từ đầu năm 2020</p>
          <div className="covid-info">
            <span>
              Hôm nay, Thế giới ghi nhận <b>{data.todayCases}</b> ca , nâng tổng
              số ca nhiễm lên <b className="cases-number">{data.cases}</b> tại 196 quốc gia.{" "}
              <br /> <br />
              Cùng ngày, WHO công bố{" "}
              <b className="recovered-number">{data.todayRecovered}</b> người
              khỏi bệnh, <b className="active-number">{data.active}</b> bệnh
              nhân đang điều trị và{" "}
              <b className="deaths-number"> {data.todayDeaths}</b> ca tử vong.{" "}
              <br />
              {/* Kể từ khi dịch bùng phát từ đầu 2020 đến nay, Việt Nam đã ghi nhận <b>{data.cases}</b> ca nhiễm, <b className="recovered-number">{data.recovered}</b> người khỏi bệnh, <b className="active-number">{data.active}</b> bệnh nhân đang điều trị và <b className="deaths-number">{data.deaths}</b> ca tử vong.  */}
            </span>
          </div>
        </div>
        
        <div class="row">
          <div class="col-sm chart">
          <iframe width="1200" height="800" frameborder="0" scrolling="yes" src="//plotly.com/~tincao241/16.embed"></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-sm chart-info">
            Biểu đồ số liệu ca nhiễm Covid 19 Thế giới
          </div>
          <p className="small-info"> Đợt bùng phát từ ngày 27/4/2021</p>
        </div>
        <div class="row">
          <div class="col-sm chart">
          <iframe width="1200" height="800" frameborder="0" scrolling="yes" src="//plotly.com/~tincao241/15.embed"></iframe>
          </div>
        </div>

        <div class="row chart">
          <div class="col-6 column ">
            <p className="small-info-2"> Ca nhiễm theo ngày</p>
            <div className="small-chart">
              <div className="four-table-left">
                <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/48.embed"></iframe>
              </div>
            </div>
          </div>
          <div class="col-6 column ">
            <p className="small-info-2"> Số ca bình phục và đang điều trị </p>
            <div className="small-chart">
              <div className="four-table-right">
                <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/50.embed"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="row chart ">
          <div class=" col-6 column">
            <p className="small-info-2"> Các ca tử vong theo ngày</p>
            <div className="four-table-left">
              <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/52.embed"></iframe>    
          </div>
            
          </div>
          <div class=" col-6 column">
            <p className="small-info-2"> Tỉ lệ phần trăm hồi phục </p>
            <div className="four-table-right">
               <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/54.embed"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default World;
