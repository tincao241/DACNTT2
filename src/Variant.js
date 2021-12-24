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
          <div className="col-sm chart-info">Các biến thể Covid 19 phổ biến </div>
          <p className="small-info"> Đợt bùng phát từ đầu năm 2020</p>
          
        </div>
        <div class="row ">
          <div class="col-lg chart">
          <img src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/VariantVN1.png" width ="100%" />
        </div>
          
        </div>
          <div class="row ">
            <div class="col-sm chart">
            <img src="https://raw.githubusercontent.com/ToVinhKhang/Covid19-Tracker/main/img/VariantVN2.png" width ="100%"/>
          </div>
          
        </div>
        {/* <div className="row">
          <div className="col-sm chart-info">Số liệu Biến thể Covid 19 </div>
          <p className="small-info"> Đợt bùng phát từ đầu năm 2020</p>
          <div className="covid-info">
        </div>
          <div class="row ">
          <div class="col-sm chart">
          <iframe width="600" height="400" frameborder="0" scrolling="yes" src="//plotly.com/~tincao241/29.embed"></iframe>
          </div>
        </div>
        </div> */}
        {/* 
        
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
        </div> */}
      </div>
    </>
  );
};
export default Variant;
