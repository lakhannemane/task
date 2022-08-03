import React, { useEffect, useState } from "react";
import Index from "./HOC/Index";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

const Dashbord = () => {
  const [value, setValue] = useState([]);
  const count = {};
  // const [chartValue , setChartValues] = useState(Object.values(count))
  // const [chartKey , setChartkeys] =useState(Object.keys(count))

  
  value.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  
  console.log(Object.keys(count))
  // console.log(count)

  

  

  



  const getAllContract = () => {
    console.log("hello");
    axios
      .get("http://mmrda.prometteur.in:5000/admin/all-contractor", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setValue(res.data.map((ele)=>ele.company_type));
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllContract();
  }, []);
  const option = {
    title: {
      text: "Company contractor ",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "70%",
        data: [
          // count.map((ele)=>{ele.Object.values})
          { value:4, name: "Private LTD" },
          { value: 3, name: "Public LTD" },
          { value: 1, name: "PPL" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 22,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      },
    ],
  };
  return (
    <div className="ms-4 my-4">
      Dashboard
      <div style={{ width: "50%", margin: " 5% auto" }}>
        <ReactEcharts option={option} />

        {/* {count.map((ele) => ele)} */}
      </div>
    </div>
  );
};

export default Index(Dashbord);
