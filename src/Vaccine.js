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
        {/* <div className="row">
          <div className="col-sm chart-info">
            Bản đồ Vaccine Covid 19 Thế giới
          </div>
          <p className="small-info"> Từ đợt tiêm chủng đầu tiên</p>
        </div> */}
        <div className="row">
          <div className="col-sm chart-info">
            <iframe src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?tab=map&time=latest&country=~VNM"  width="1200" height="800" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm chart-info">
            Biểu đồ số liệu tiêm Vaccine Covid 19 tại Việt Nam
          </div>
          <p className="small-info"> Đợt tiêm chủng từ tháng 3/2021</p>
        </div>
        <div class="row">
          <div class="col-sm chart">
            
            <iframe width="1200" height="800" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/22.embed"></iframe>
          </div>
        </div>

        <div className="row">
          <div className="col-sm chart-info">
            Số liệu Vaccine Covid 19 tại Việt Nam
          </div>
          <p className="small-info"> Đợt bùng phát từ tháng 3 năm 2021</p>
          
        </div>
        <div class="row ">
          <div class="col-sm chart">
            <iframe
              width="1200"
              height="800"
              frameborder="0"
              scrolling="yes"
              src="//plotly.com/~tincao241/18.embed"
            ></iframe>
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
            <p className="small-info-2"> Số vaccine đã tiêm tại Việt Nam </p>
            <div className="small-chart">
              <div className="four-table-left">
                <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/101.embed"></iframe>
              </div>
            </div>
          </div>
          <div class="col-6 column ">
            <p className="small-info-2"> Số người đã tiêm ít nhất 1 mũi tại Việt Nam </p>
            <div className="small-chart">
              <div className="four-table-right">
                <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/103.embed"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="row chart ">
          <div class=" col-6 column">
            <p className="small-info-2"> Số người đã tiêm 2 mũi tại Việt Nam</p>
            <div className="four-table-left">
              <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/105.embed"></iframe>    
          </div>
            
          </div>
          <div class=" col-6 column">
            <p className="small-info-2"> Tỉ lệ phần trăm tử vong </p>
            <div className="four-table-right">
               <iframe width="550" height="400" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/46.embed"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Variant;
