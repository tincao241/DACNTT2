import axios from "axios";
import React, { useState, useEffect } from "react";


const Variant = () => {

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
    <>
      <div class="container">
        <div className="row">
          <div className="col-sm chart-info">Số liệu Biến thể Covid 19 tại Việt Nam</div>
          <p className="small-info"> Đợt bùng phát từ đầu năm 2020</p>
          <div className="covid-info">
              <span>
              Hôm nay, Việt Nam ghi nhận <b >{data.todayCases}</b> ca , nâng tổng số ca nhiễm trong nước lên <b >{data.cases}</b> tại 63 tỉnh thành. <br/> <br/>
          
          Cùng ngày, Bộ Y tế công bố <b className="recovered-number">{data.todayRecovered}</b> người khỏi bệnh, <b className="active-number">{data.active}</b> bệnh nhân đang điều trị và <b className="deaths-number"> {data.todayDeaths}</b> ca tử vong. <br /> 
          {/* Kể từ khi dịch bùng phát từ đầu 2020 đến nay, Việt Nam đã ghi nhận <b>{data.cases}</b> ca nhiễm, <b className="recovered-number">{data.recovered}</b> người khỏi bệnh, <b className="active-number">{data.active}</b> bệnh nhân đang điều trị và <b className="deaths-number">{data.deaths}</b> ca tử vong.  */}

              </span>

          </div>
        </div>
        <div class="row ">
          <div class="col-sm chart">
          <iframe width="1200" height="800" frameborder="0" scrolling="yes" src="//plotly.com/~tincao241/17.embed"></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-sm chart-info">
            Biểu đồ số liệu ca nhiễm Covid 19 tại Việt Nam
          </div>
          <p className="small-info"> Đợt bùng phát từ ngày 27/4/2021</p>
        </div>
        <div class="row">
          <div class="col-sm chart">
            <iframe
              width="1200"
              height="600"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~tincao241/8.embed"
            ></iframe>
          </div>
        </div>

        <div class="row chart">
          <div class="col-6 column ">
            <p className="small-info-2"> Ca nhiễm theo ngày</p>
            <div className="small-chart">
              <div className="four-table-left">
                <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/13.embed"></iframe>
              </div>
            </div>
          </div>
          <div class="col-6 column ">
            <p className="small-info-2"> Khỏi</p>
            <div className="small-chart">
              <div className="four-table-right">
                <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/13.embed"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="row chart ">
          <div class=" col-6 column">
            <p className="small-info-2"> Các ca tử vong theo ngày</p>
            <div className="four-table-left">
              <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/13.embed"></iframe>
            </div>
            
          </div>
          <div class=" col-6 column">
            <p className="small-info-2"> Tử vong</p>
            <div className="four-table-right">
              <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/13.embed"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Variant;
