var e=document.getElementById("waterTrack");if(e!==null){e.innerHTML="";var r={series:[{data:[98,110,80,145,105,112,87,148,102]}],chart:{height:115,type:"area",fontFamily:"Roboto, Arial, sans-serif",foreColor:"#5d6162",zoom:{enabled:!1},sparkline:{enabled:!0}},tooltip:{enabled:!0,x:{show:!1},y:{title:{formatter:function(o){return""}}},marker:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:void 0},grid:{borderColor:"transparent"},xaxis:{crosshairs:{show:!1}},colors:["rgb(132, 90, 223)"],stroke:{width:[1]},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60]}}},t=new ApexCharts(document.querySelector("#waterTrack"),r);t.render()}var e=document.getElementById("sleepTrack");if(e!==null){e.innerHTML="";var r={series:[{data:[102,148,87,112,105,145,80,110,98]}],chart:{height:115,type:"area",fontFamily:"Roboto, Arial, sans-serif",foreColor:"#5d6162",zoom:{enabled:!1},sparkline:{enabled:!0}},tooltip:{enabled:!0,x:{show:!1},y:{title:{formatter:function(s){return""}}},marker:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:void 0},grid:{borderColor:"transparent"},xaxis:{crosshairs:{show:!1}},colors:["#64af6d"],stroke:{width:[1]},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60]}}},a=new ApexCharts(document.querySelector("#sleepTrack"),r);a.render()}
