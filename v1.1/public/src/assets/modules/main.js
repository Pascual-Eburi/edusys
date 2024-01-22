export function LoadScripts (){
    
var Xt = Object.defineProperty;
var _t = (e, r, t) =>
    r in e
        ? Xt(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
          })
        : (e[r] = t);
var z = (e, r, t) => (_t(e, typeof r != "symbol" ? r + "" : r, t), t);
var h = document.getElementById("crm-main");
if (h !== null) {
    h.innerHTML = "";
    var qe = {
            chart: {
                height: 127,
                width: 100,
                type: "radialBar",
            },
            series: [48],
            colors: ["rgba(255,255,255,0.9)"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "55%",
                        background: "#fff",
                    },
                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#4b9bfa",
                            fontSize: ".625rem",
                            show: !1,
                        },
                        value: {
                            offsetY: 5,
                            color: "#4b9bfa",
                            fontSize: ".875rem",
                            show: !0,
                            fontWeight: 600,
                        },
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            labels: ["Status"],
        },
        ee = new ApexCharts(document.querySelector("#crm-main"), qe);
    ee.render();
}
var h = document.getElementById("crm-total-customers");
if (h !== null) {
    h.innerHTML = "";
    var K = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 19, 10, 23, 20, 22, 9, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(132, 90, 223)"],
        },
        K = new ApexCharts(document.querySelector("#crm-total-customers"), K);
    K.render();
}

function jt(e) {
    function r(t, o, l) {
        return (
            "#" + ((1 << 24) | (t << 16) | (o << 8) | l).toString(16).slice(1)
        );
    }
    K.updateOptions({
        colors: [r(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
    });
}
var h = document.getElementById("crm-total-revenue");
if (h !== null) {
    h.innerHTML = "";
    var oe = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 20, 22, 9, 12, 19, 10, 25],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(35, 183, 229)"],
        },
        oe = new ApexCharts(document.querySelector("#crm-total-revenue"), oe);
    oe.render();
}
var h = document.getElementById("crm-conversion-ratio");
if (h !== null) {
    h.innerHTML = "";
    var ae = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 20, 22, 9, 14, 19, 10, 25, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(38, 191, 148)"],
        },
        ae = new ApexCharts(
            document.querySelector("#crm-conversion-ratio"),
            ae
        );
    ae.render();
}
var h = document.getElementById("crm-total-deals");
if (h !== null) {
    h.innerHTML = "";
    var le = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 20, 22, 9, 12, 14, 19, 10, 25],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(245, 184, 73)"],
        },
        le = new ApexCharts(document.querySelector("#crm-total-deals"), le);
    le.render();
}
var h = document.getElementById("crm-revenue-analytics");
if (h !== null) {
    h.innerHTML = "";
    var qe = {
            series: [
                {
                    type: "line",
                    name: "Profit",
                    data: [
                        {
                            x: "Jan",
                            y: 100,
                        },
                        {
                            x: "Feb",
                            y: 210,
                        },
                        {
                            x: "Mar",
                            y: 180,
                        },
                        {
                            x: "Apr",
                            y: 454,
                        },
                        {
                            x: "May",
                            y: 230,
                        },
                        {
                            x: "Jun",
                            y: 320,
                        },
                        {
                            x: "Jul",
                            y: 656,
                        },
                        {
                            x: "Aug",
                            y: 830,
                        },
                        {
                            x: "Sep",
                            y: 350,
                        },
                        {
                            x: "Oct",
                            y: 350,
                        },
                        {
                            x: "Nov",
                            y: 210,
                        },
                        {
                            x: "Dec",
                            y: 410,
                        },
                    ],
                },
                {
                    type: "line",
                    name: "Revenue",
                    chart: {
                        dropShadow: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            top: 5,
                            left: 0,
                            blur: 3,
                            color: "#000",
                            opacity: 0.1,
                        },
                    },
                    data: [
                        {
                            x: "Jan",
                            y: 180,
                        },
                        {
                            x: "Feb",
                            y: 620,
                        },
                        {
                            x: "Mar",
                            y: 476,
                        },
                        {
                            x: "Apr",
                            y: 220,
                        },
                        {
                            x: "May",
                            y: 520,
                        },
                        {
                            x: "Jun",
                            y: 780,
                        },
                        {
                            x: "Jul",
                            y: 435,
                        },
                        {
                            x: "Aug",
                            y: 515,
                        },
                        {
                            x: "Sep",
                            y: 738,
                        },
                        {
                            x: "Oct",
                            y: 454,
                        },
                        {
                            x: "Nov",
                            y: 525,
                        },
                        {
                            x: "Dec",
                            y: 230,
                        },
                    ],
                },
                {
                    type: "area",
                    name: "Sales",
                    chart: {
                        dropShadow: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            top: 5,
                            left: 0,
                            blur: 3,
                            color: "#000",
                            opacity: 0.1,
                        },
                    },
                    data: [
                        {
                            x: "Jan",
                            y: 200,
                        },
                        {
                            x: "Feb",
                            y: 530,
                        },
                        {
                            x: "Mar",
                            y: 110,
                        },
                        {
                            x: "Apr",
                            y: 130,
                        },
                        {
                            x: "May",
                            y: 480,
                        },
                        {
                            x: "Jun",
                            y: 520,
                        },
                        {
                            x: "Jul",
                            y: 780,
                        },
                        {
                            x: "Aug",
                            y: 435,
                        },
                        {
                            x: "Sep",
                            y: 475,
                        },
                        {
                            x: "Oct",
                            y: 738,
                        },
                        {
                            x: "Nov",
                            y: 454,
                        },
                        {
                            x: "Dec",
                            y: 480,
                        },
                    ],
                },
            ],
            chart: {
                height: 350,
                animations: {
                    speed: 500,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 8,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            colors: [
                "rgb(132, 90, 223)",
                "rgba(35, 183, 229, 0.85)",
                "rgba(119, 119, 142, 0.05)",
            ],
            dataLabels: {
                enabled: !1,
            },
            grid: {
                borderColor: "#f1f1f1",
                strokeDashArray: 3,
            },
            stroke: {
                curve: "smooth",
                width: [2, 2, 0],
                dashArray: [0, 5, 0],
            },
            xaxis: {
                axisTicks: {
                    show: !1,
                },
            },
            yaxis: {
                labels: {
                    formatter: function (t) {
                        return "$" + t;
                    },
                },
            },
            tooltip: {
                y: [
                    {
                        formatter: function (t) {
                            return t !== void 0 ? "$" + t.toFixed(0) : t;
                        },
                    },
                    {
                        formatter: function (t) {
                            return t !== void 0 ? "$" + t.toFixed(0) : t;
                        },
                    },
                    {
                        formatter: function (t) {
                            return t !== void 0 ? t.toFixed(0) : t;
                        },
                    },
                ],
            },
            legend: {
                show: !0,
                customLegendItems: ["Profit", "Revenue", "Sales"],
                inverseOrder: !0,
            },
            title: {
                text: "Revenue Analytics with sales & profit (USD)",
                align: "left",
                style: {
                    fontSize: ".8125rem",
                    fontWeight: "semibold",
                    color: "#8c9097",
                },
            },
            markers: {
                hover: {
                    sizeOffset: 5,
                },
            },
        },
        ee = new ApexCharts(
            document.querySelector("#crm-revenue-analytics"),
            qe
        );
    ee.render();
}

function Ut(e) {
    ee.updateOptions({
        colors: [
            "rgba(" + e + ", 1)",
            "rgba(35, 183, 229, 0.85)",
            "rgba(119, 119, 142, 0.05)",
        ],
    });
}
var h = document.getElementById("crm-profits-earned");
if (h !== null) {
    h.innerHTML = "";
    var Kt = {
            series: [
                {
                    name: "Profit Earned",
                    data: [44, 42, 57, 86, 58, 55, 70],
                },
                {
                    name: "Total Sales",
                    data: [34, 22, 37, 56, 21, 35, 60],
                },
            ],
            chart: {
                type: "bar",
                height: 180,
                toolbar: {
                    show: !1,
                },
            },
            grid: {
                borderColor: "#f1f1f1",
                strokeDashArray: 3,
            },
            colors: ["rgb(132, 90, 223)", "#e4e7ed"],
            plotOptions: {
                bar: {
                    colors: {
                        ranges: [
                            {
                                from: -100,
                                to: -46,
                                color: "#ebeff5",
                            },
                            {
                                from: -45,
                                to: 0,
                                color: "#ebeff5",
                            },
                        ],
                    },
                    columnWidth: "60%",
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                show: !0,
                width: 2,
                colors: void 0,
            },
            legend: {
                show: !1,
                position: "top",
            },
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "13px",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    formatter: function (e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "week",
                categories: ["S", "M", "T", "W", "T", "F", "S"],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                },
            },
        },
        vt = new ApexCharts(document.querySelector("#crm-profits-earned"), Kt);
    vt.render();
}

function Qt(e) {
    vt.updateOptions({
        colors: ["rgba(" + e + ", 1)", "#ededed"],
    });
}
let X;

function Zt(e) {
    typeof X < "u" && X !== null && X.destroy(),
        (Chart.defaults.elements.arc.borderWidth = 0),
        (Chart.defaults.datasets.doughnut.cutout = "85%"),
        (X = new Chart(document.getElementById("leads-source"), {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [32, 27, 25, 16],
                        backgroundColor: [
                            `rgb(${e})`,
                            "rgb(35, 183, 229)",
                            "rgb(245, 184, 73)",
                            "rgb(38, 191, 148)",
                        ],
                    },
                ],
            },
            plugins: [
                {
                    afterUpdate: function (r) {
                        r.getDatasetMeta(0).data.forEach(function (o) {
                            o.round = {
                                x: (r.chartArea.left + r.chartArea.right) / 2,
                                y: (r.chartArea.top + r.chartArea.bottom) / 2,
                                radius: (o.outerRadius + o.innerRadius) / 2,
                                thickness: (o.outerRadius - o.innerRadius) / 2,
                                backgroundColor: o.options.backgroundColor,
                            };
                        });
                    },
                    afterDraw: (r) => {
                        const { ctx: t, canvas: o } = r;
                        r.getDatasetMeta(0).data.forEach((l) => {
                            Math.PI / 2 - l.startAngle;
                            const n = Math.PI / 2 - l.endAngle;
                            t.save(),
                                t.translate(l.round.x, l.round.y),
                                (t.fillStyle = l.options.backgroundColor),
                                t.beginPath(),
                                t.arc(
                                    l.round.radius * Math.sin(n),
                                    l.round.radius * Math.cos(n),
                                    l.round.thickness,
                                    0,
                                    2 * Math.PI
                                ),
                                t.closePath(),
                                t.fill(),
                                t.restore();
                        });
                    },
                },
            ],
        }));
}
var pt = document.getElementById("earnings");
if (pt !== null) {
    pt.innerHTML = "";
    var Vt = {
            series: [
                {
                    name: "Total Orders",
                    data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
                },
            ],
            chart: {
                type: "bar",
                height: 200,
            },
            grid: {
                borderColor: "#f2f6f7",
            },
            colors: [
                "rgba(132, 90, 223, 0.3)",
                "rgba(132, 90, 223, 0.3)",
                "rgba(132, 90, 223, 0.3)",
                "rgba(132, 90, 223, 0.3)",
                "rgb(132, 90, 223)",
                "rgba(132, 90, 223, 0.3)",
                "#e4e7ed",
                "#e4e7ed",
                "#e4e7ed",
                "#e4e7ed",
                "#e4e7ed",
                "#e4e7ed",
            ],
            plotOptions: {
                bar: {
                    columnWidth: "25%",
                    distributed: !0,
                    borderRadius: 7,
                },
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !1,
            },
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "12px",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 500,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    formatter: function (e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "sep",
                    "oct",
                    "nov",
                    "dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                },
            },
        },
        St = new ApexCharts(document.querySelector("#earnings"), Vt);
    St.render();
}

function er(e) {
    St.updateOptions({
        colors: [
            "rgba(" + e + ", 0.3)",
            "rgba(" + e + ", 0.3)",
            "rgba(" + e + ", 0.3)",
            "rgba(" + e + ", 0.3)",
            "rgb(" + e + ")",
            "rgba(" + e + ", 0.3)",
            "#e4e7ed",
            "#e4e7ed",
            "#e4e7ed",
            "#e4e7ed",
            "#e4e7ed",
            "#e4e7ed",
        ],
    });
}
var d = document.getElementById("crypto");
if (d !== null) {
    d.innerHTML = "";
    var tr = {
            series: [
                {
                    data: [
                        {
                            x: new Date(15387786e5),
                            y: [6629.81, 6650.5, 6623.04, 6633.33],
                        },
                        {
                            x: new Date(15387804e5),
                            y: [6632.01, 6643.59, 6620, 6630.11],
                        },
                        {
                            x: new Date(15387822e5),
                            y: [6630.71, 6648.95, 6623.34, 6635.65],
                        },
                        {
                            x: new Date(1538784e6),
                            y: [6635.65, 6651, 6629.67, 6638.24],
                        },
                        {
                            x: new Date(15387858e5),
                            y: [6638.24, 6640, 6620, 6624.47],
                        },
                        {
                            x: new Date(15387876e5),
                            y: [6624.53, 6636.03, 6621.68, 6624.31],
                        },
                        {
                            x: new Date(15387894e5),
                            y: [6624.61, 6632.2, 6617, 6626.02],
                        },
                        {
                            x: new Date(15387912e5),
                            y: [6627, 6627.62, 6584.22, 6603.02],
                        },
                        {
                            x: new Date(1538793e6),
                            y: [6605, 6608.03, 6598.95, 6604.01],
                        },
                        {
                            x: new Date(15387948e5),
                            y: [6604.5, 6614.4, 6602.26, 6608.02],
                        },
                        {
                            x: new Date(15387966e5),
                            y: [6608.02, 6610.68, 6601.99, 6608.91],
                        },
                        {
                            x: new Date(15387984e5),
                            y: [6608.91, 6618.99, 6608.01, 6612],
                        },
                        {
                            x: new Date(15388002e5),
                            y: [6612, 6615.13, 6605.09, 6612],
                        },
                        {
                            x: new Date(1538802e6),
                            y: [6612, 6624.12, 6608.43, 6622.95],
                        },
                        {
                            x: new Date(15388038e5),
                            y: [6623.91, 6623.91, 6615, 6615.67],
                        },
                        {
                            x: new Date(15388056e5),
                            y: [6618.69, 6618.74, 6610, 6610.4],
                        },
                        {
                            x: new Date(15388074e5),
                            y: [6611, 6622.78, 6610.4, 6614.9],
                        },
                        {
                            x: new Date(15388092e5),
                            y: [6614.9, 6626.2, 6613.33, 6623.45],
                        },
                        {
                            x: new Date(1538811e6),
                            y: [6623.48, 6627, 6618.38, 6620.35],
                        },
                        {
                            x: new Date(15388128e5),
                            y: [6619.43, 6620.35, 6610.05, 6615.53],
                        },
                        {
                            x: new Date(15388146e5),
                            y: [6615.53, 6617.93, 6610, 6615.19],
                        },
                        {
                            x: new Date(15388164e5),
                            y: [6615.19, 6621.6, 6608.2, 6620],
                        },
                        {
                            x: new Date(15388182e5),
                            y: [6619.54, 6625.17, 6614.15, 6620],
                        },
                        {
                            x: new Date(153882e7),
                            y: [6620.33, 6634.15, 6617.24, 6624.61],
                        },
                        {
                            x: new Date(15388218e5),
                            y: [6625.95, 6626, 6611.66, 6617.58],
                        },
                        {
                            x: new Date(15388236e5),
                            y: [6619, 6625.97, 6595.27, 6598.86],
                        },
                        {
                            x: new Date(15388254e5),
                            y: [6598.86, 6598.88, 6570, 6587.16],
                        },
                        {
                            x: new Date(15388272e5),
                            y: [6588.86, 6600, 6580, 6593.4],
                        },
                        {
                            x: new Date(1538829e6),
                            y: [6593.99, 6598.89, 6585, 6587.81],
                        },
                        {
                            x: new Date(15388308e5),
                            y: [6587.81, 6592.73, 6567.14, 6578],
                        },
                        {
                            x: new Date(15388326e5),
                            y: [6578.35, 6581.72, 6567.39, 6579],
                        },
                        {
                            x: new Date(15388344e5),
                            y: [6579.38, 6580.92, 6566.77, 6575.96],
                        },
                        {
                            x: new Date(15388362e5),
                            y: [6575.96, 6589, 6571.77, 6588.92],
                        },
                        {
                            x: new Date(1538838e6),
                            y: [6588.92, 6594, 6577.55, 6589.22],
                        },
                        {
                            x: new Date(15388398e5),
                            y: [6589.3, 6598.89, 6589.1, 6596.08],
                        },
                        {
                            x: new Date(15388416e5),
                            y: [6597.5, 6600, 6588.39, 6596.25],
                        },
                        {
                            x: new Date(15388434e5),
                            y: [6598.03, 6600, 6588.73, 6595.97],
                        },
                        {
                            x: new Date(15388452e5),
                            y: [6595.97, 6602.01, 6588.17, 6602],
                        },
                        {
                            x: new Date(1538847e6),
                            y: [6602, 6607, 6596.51, 6599.95],
                        },
                        {
                            x: new Date(15388488e5),
                            y: [6600.63, 6601.21, 6590.39, 6591.02],
                        },
                        {
                            x: new Date(15388506e5),
                            y: [6591.02, 6603.08, 6591, 6591],
                        },
                        {
                            x: new Date(15388524e5),
                            y: [6591, 6601.32, 6585, 6592],
                        },
                        {
                            x: new Date(15388542e5),
                            y: [6593.13, 6596.01, 6590, 6593.34],
                        },
                        {
                            x: new Date(1538856e6),
                            y: [6593.34, 6604.76, 6582.63, 6593.86],
                        },
                        {
                            x: new Date(15388578e5),
                            y: [6593.86, 6604.28, 6586.57, 6600.01],
                        },
                        {
                            x: new Date(15388596e5),
                            y: [6601.81, 6603.21, 6592.78, 6596.25],
                        },
                        {
                            x: new Date(15388614e5),
                            y: [6596.25, 6604.2, 6590, 6602.99],
                        },
                        {
                            x: new Date(15388632e5),
                            y: [6602.99, 6606, 6584.99, 6587.81],
                        },
                        {
                            x: new Date(1538865e6),
                            y: [6587.81, 6595, 6583.27, 6591.96],
                        },
                        {
                            x: new Date(15388668e5),
                            y: [6591.97, 6596.07, 6585, 6588.39],
                        },
                        {
                            x: new Date(15388686e5),
                            y: [6587.6, 6598.21, 6587.6, 6594.27],
                        },
                        {
                            x: new Date(15388704e5),
                            y: [6596.44, 6601, 6590, 6596.55],
                        },
                        {
                            x: new Date(15388722e5),
                            y: [6598.91, 6605, 6596.61, 6600.02],
                        },
                        {
                            x: new Date(1538874e6),
                            y: [6600.55, 6605, 6589.14, 6593.01],
                        },
                        {
                            x: new Date(15388758e5),
                            y: [6593.15, 6605, 6592, 6603.06],
                        },
                        {
                            x: new Date(15388776e5),
                            y: [6603.07, 6604.5, 6599.09, 6603.89],
                        },
                        {
                            x: new Date(15388794e5),
                            y: [6604.44, 6604.44, 6600, 6603.5],
                        },
                        {
                            x: new Date(15388812e5),
                            y: [6603.5, 6603.99, 6597.5, 6603.86],
                        },
                        {
                            x: new Date(1538883e6),
                            y: [6603.85, 6605, 6600, 6604.07],
                        },
                        {
                            x: new Date(15388848e5),
                            y: [6604.98, 6606, 6604.07, 6606],
                        },
                    ],
                },
            ],
            chart: {
                type: "candlestick",
                borderRadius: 20,
                height: 275,
                toolbar: {
                    show: !1,
                },
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: "rgb(132, 90, 223)",
                        downward: "rgba(132, 90, 223, 0.2)",
                    },
                },
            },
            title: {
                align: "left",
            },
            grid: {
                borderColor: "#f2f6f7",
            },
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: !1,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !1,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            yaxis: {
                tooltip: {
                    enabled: !0,
                },
            },
        },
        xt = new ApexCharts(document.querySelector("#crypto"), tr);
    xt.render();
}

function rr(e) {
    xt.updateOptions({
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "rgb(" + e + ")",
                    downward: "rgba(" + e + ", 0.2)",
                },
            },
        },
    });
}
var d = document.getElementById("btc-chart");
if (d !== null) {
    d.innerHTML = "";
    var ne = {
            chart: {
                type: "line",
                height: 40,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [
                        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41,
                        35, 27, 93, 53, 61, 27, 54, 43, 19, 46,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#26bf94"],
        },
        ne = new ApexCharts(document.querySelector("#btc-chart"), ne);
    ne.render();
}
var d = document.getElementById("eth-chart");
if (d !== null) {
    d.innerHTML = "";
    var se = {
            chart: {
                type: "line",
                height: 40,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [
                        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41,
                        35, 27, 93, 53, 61, 27, 54, 43, 19, 46,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#26bf94"],
        },
        se = new ApexCharts(document.querySelector("#eth-chart"), se);
    se.render();
}
var d = document.getElementById("dash-chart");
if (d !== null) {
    d.innerHTML = "";
    var ie = {
            chart: {
                type: "line",
                height: 40,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [
                        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41,
                        35, 27, 93, 53, 61, 27, 54, 43, 19, 46,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#e6533c"],
        },
        ie = new ApexCharts(document.querySelector("#dash-chart"), ie);
    ie.render();
}
var d = document.getElementById("bitcoin-price-graph");
if (d !== null) {
    d.innerHTML = "";
    var ce = {
            chart: {
                type: "line",
                height: 20,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            series: [
                {
                    name: "Value",
                    data: [
                        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41,
                        35, 27, 93, 53, 61, 27, 54, 43, 19, 46,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#26bf94"],
        },
        ce = new ApexCharts(document.querySelector("#bitcoin-price-graph"), ce);
    ce.render();
}
var d = document.getElementById("etherium-price-graph");
if (d !== null) {
    d.innerHTML = "";
    var de = {
            chart: {
                type: "line",
                height: 20,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            series: [
                {
                    name: "Value",
                    data: [
                        0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54,
                        43, 19, 46, 31, 37, 39, 62, 51, 35, 41,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#e6533c"],
        },
        de = new ApexCharts(
            document.querySelector("#etherium-price-graph"),
            de
        );
    de.render();
}
var d = document.getElementById("dash-price-graph");
if (d !== null) {
    d.innerHTML = "";
    var ue = {
            chart: {
                type: "line",
                height: 20,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            series: [
                {
                    name: "Value",
                    data: [
                        61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56,
                        24, 65, 35, 27, 93, 53, 62, 51, 35, 41,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#26bf94"],
        },
        ue = new ApexCharts(document.querySelector("#dash-price-graph"), ue);
    ue.render();
}
var d = document.getElementById("ripple-price-graph");
if (d !== null) {
    d.innerHTML = "";
    var me = {
            chart: {
                type: "line",
                height: 20,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            series: [
                {
                    name: "Value",
                    data: [
                        61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31,
                        37, 39, 0, 45, 54, 38, 62, 51, 35, 41,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#26bf94"],
        },
        me = new ApexCharts(document.querySelector("#ripple-price-graph"), me);
    me.render();
}
var d = document.getElementById("iota-price-graph");
if (d !== null) {
    d.innerHTML = "";
    var he = {
            chart: {
                type: "line",
                height: 20,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            series: [
                {
                    name: "Value",
                    data: [
                        61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43,
                        19, 56, 24, 65, 35, 27, 93, 53, 46, 31,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#e6533c"],
        },
        he = new ApexCharts(document.querySelector("#iota-price-graph"), he);
    he.render();
}
var d = document.getElementById("neo-price-graph");
if (d !== null) {
    d.innerHTML = "";
    var ye = {
            chart: {
                type: "line",
                height: 20,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            series: [
                {
                    name: "Value",
                    data: [
                        62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46,
                        31, 61, 27, 54, 37, 39, 0, 45, 54, 38,
                    ],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#e6533c"],
        },
        ye = new ApexCharts(document.querySelector("#neo-price-graph"), ye);
    ye.render();
}
var W = document.getElementById("subscriptionOverview");
if (W !== null) {
    W.innerHTML = "";
    var Ae = {
            series: [
                {
                    name: "Basic",
                    data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53],
                },
                {
                    name: "Pro",
                    data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82],
                },
            ],
            chart: {
                toolbar: {
                    show: !1,
                },
                height: 295,
                type: "line",
                zoom: {
                    enabled: !1,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.15,
                },
            },
            grid: {
                borderColor: "#f1f1f1",
            },
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                width: [2, 2],
                curve: ["smooth", "smooth"],
                lineCap: "butt",
                dashArray: [0, 0],
            },
            title: {
                text: void 0,
            },
            legend: {
                show: !0,
                position: "top",
                horizontalAlign: "center",
                fontWeight: 600,
                fontSize: "11px",
                tooltipHoverFormatter: function (e, r) {
                    return (
                        e +
                        " - " +
                        r.w.globals.series[r.seriesIndex][r.dataPointIndex]
                    );
                },
                labels: {
                    colors: "#74767c",
                },
                markers: {
                    width: 7,
                    height: 7,
                    strokeWidth: 0,
                    radius: 12,
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 5,
                        fillColor: "#305cfc",
                        strokeColor: "#fff",
                        size: 4,
                        shape: "circle",
                    },
                    {
                        seriesIndex: 0,
                        dataPointIndex: 11,
                        fillColor: "#305cfc",
                        strokeColor: "#fff",
                        size: 4,
                        shape: "circle",
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 10,
                        fillColor: "#23b7e5",
                        strokeColor: "#fff",
                        size: 4,
                        shape: "circle",
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 4,
                        fillColor: "#23b7e5",
                        strokeColor: "#fff",
                        size: 4,
                        shape: "circle",
                    },
                ],
                hover: {
                    sizeOffset: 6,
                },
            },
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "14px",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    formatter: function (e) {
                        return e.toFixed(0) + "";
                    },
                    show: !0,
                    style: {
                        colors: "#8c9097",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-xaxis-label",
                    },
                },
            },
            xaxis: {
                type: "day",
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                    "09 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                    style: {
                        colors: "#8c9097",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-xaxis-label",
                    },
                },
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (e) {
                                return e;
                            },
                        },
                    },
                    {
                        title: {
                            formatter: function (e) {
                                return e;
                            },
                        },
                    },
                    {
                        title: {
                            formatter: function (e) {
                                return e;
                            },
                        },
                    },
                ],
            },
            colors: ["rgb(132, 90, 223)", "#23b7e5"],
        },
        kt = new ApexCharts(
            document.querySelector("#subscriptionOverview"),
            Ae
        );
    kt.render();
}

function or(e) {
    kt.updateOptions({
        colors: ["rgb(" + e + ")", "#23b7e5"],
    });
}
var W = document.getElementById("candidates-chart");
if (W !== null) {
    W.innerHTML = "";
    var Ae = {
            series: [1754, 1234],
            labels: ["Female", "Male"],
            chart: {
                height: 260,
                type: "donut",
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !1,
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "round",
                colors: "#fff",
                width: 0,
                dashArray: 0,
            },
            plotOptions: {
                pie: {
                    expandOnClick: !1,
                    donut: {
                        size: "80%",
                        background: "transparent",
                        labels: {
                            show: !0,
                            name: {
                                show: !0,
                                fontSize: "20px",
                                color: "",
                                offsetY: -4,
                            },
                            value: {
                                show: !0,
                                fontSize: "18px",
                                color: void 0,
                                offsetY: 8,
                                formatter: function (r) {
                                    return r + "%";
                                },
                            },
                            total: {
                                show: !0,
                                showAlways: !0,
                                label: "Total",
                                fontSize: "22px",
                                fontWeight: 600,
                                color: "",
                            },
                        },
                    },
                },
            },
            colors: ["rgb(132, 90, 223)", "#23b7e5"],
        },
        qt = new ApexCharts(document.querySelector("#candidates-chart"), Ae);
    qt.render();
}

function ar(e) {
    qt.updateOptions({
        colors: ["rgb(" + e + ")", "#23b7e5"],
    });
}
var G = document.getElementById("nft-balance-chart");
if (G !== null) {
    G.innerHTML = "";
    var Q = {
            chart: {
                type: "line",
                height: 40,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 2.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 19, 10, 25, 20, 22, 9, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["rgb(132, 90, 223)"],
        },
        Q = new ApexCharts(document.querySelector("#nft-balance-chart"), Q);
    Q.render();
}

function lr(e) {
    Q.updateOptions({
        colors: ["rgb(" + e + ")"],
    });
}
var G = document.getElementById("nft-statistics");
if (G !== null) {
    G.innerHTML = "";
    var nr = {
            series: [
                {
                    name: "Price",
                    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
                },
                {
                    name: "Volume",
                    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: !1,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                position: "top",
                horizontalAlign: "center",
                offsetX: -15,
                fontWeight: "bold",
            },
            stroke: {
                curve: "smooth",
                width: "3",
                dashArray: [0, 5],
            },
            grid: {
                borderColor: "#f2f6f7",
            },
            colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)"],
            yaxis: {
                title: {
                    text: "Statistics",
                    style: {
                        color: "#adb5be",
                        fontSize: "14px",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    formatter: function (e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                },
            },
        },
        At = new ApexCharts(document.querySelector("#nft-statistics"), nr);
    At.render();
}

function sr(e) {
    At.updateOptions({
        colors: ["rgb(" + e + ")", "rgba(" + e + ", 0.3)"],
    });
}
typeof Swiper < "u" &&
    new Swiper(".pagination-dynamic", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: !0,
            clickable: !0,
        },
        loop: !0,
        autoplay: {
            delay: 1500,
            disableOnInteraction: !1,
        },
    });
var M = document.getElementById("salesOverview");
if (M !== null) {
    M.innerHTML = "";
    var Le = {
            series: [
                {
                    name: "Sales",
                    data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
                },
                {
                    name: "OPEX Ratio",
                    data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
                },
                {
                    name: "General & Admin",
                    data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
                },
                {
                    name: "Marketing",
                    data: [
                        -34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89,
                        -53,
                    ],
                },
            ],
            chart: {
                stacked: !0,
                type: "bar",
                height: 325,
            },
            grid: {
                borderColor: "#f5f4f4",
                strokeDashArray: 5,
            },
            colors: [
                "rgb(132, 90, 223)",
                "rgba(132, 90, 223, 0.6)",
                "rgba(132, 90, 223, 0.3)",
                "#ebeff5",
            ],
            plotOptions: {
                bar: {
                    colors: {
                        ranges: [
                            {
                                from: -100,
                                to: -46,
                                color: "#ebeff5",
                            },
                            {
                                from: -45,
                                to: 0,
                                color: "#ebeff5",
                            },
                        ],
                    },
                    columnWidth: "20%",
                },
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !0,
                position: "top",
            },
            yaxis: {
                title: {
                    text: "Growth",
                    style: {
                        color: "#adb5be",
                        fontSize: "14px",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    formatter: function (e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "sep",
                    "oct",
                    "nov",
                    "dec",
                ],
                axisBorder: {
                    show: !1,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !1,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                },
            },
        },
        Lt = new ApexCharts(document.querySelector("#salesOverview"), Le);
    Lt.render();
}

function ir(e) {
    Lt.updateOptions({
        colors: [
            "rgb(" + e + ")",
            "rgba(" + e + ", 0.6)",
            "rgba(" + e + ", 0.3)",
            "#ebeff5",
        ],
    });
}
if (typeof jsVectorMap < "u") {
    var cr = [
            {
                name: "Usa",
                coords: [40.3, -101.38],
            },
            {
                name: "India",
                coords: [20.5937, 78.9629],
            },
            {
                name: "Vatican City",
                coords: [41.9, 12.45],
            },
            {
                name: "Canada",
                coords: [56.1304, -106.3468],
            },
            {
                name: "Mauritius",
                coords: [-20.2, 57.5],
            },
            {
                name: "Singapore",
                coords: [1.3, 103.8],
            },
            {
                name: "Palau",
                coords: [7.35, 134.46],
            },
            {
                name: "Maldives",
                coords: [3.2, 73.22],
            },
            {
                name: "São Tomé and Príncipe",
                coords: [0.33, 6.73],
            },
        ],
        M = document.getElementById("visitors-countries");
    M !== null &&
        ((M.innerHTML = ""),
        new jsVectorMap({
            map: "world_merc",
            selector: "#visitors-countries",
            markersSelectable: !0,
            zoomOnScroll: !1,
            zoomButtons: !1,
            onMarkerSelected(r, t, o) {
                console.log(r, t, o);
            },
            labels: {
                markers: {
                    render: function (r) {
                        return r.name;
                    },
                },
            },
            markers: cr,
            markerStyle: {
                hover: {
                    stroke: "#DDD",
                    strokeWidth: 3,
                    fill: "#FFF",
                },
                selected: {
                    fill: "#ff525d",
                },
            },
            markerLabelStyle: {
                initial: {
                    fontFamily: "Poppins",
                    fontSize: 13,
                    fontWeight: 500,
                    fill: "#35373e",
                },
            },
        }));
}
var M = document.getElementById("sale-value");
if (M !== null) {
    M.innerHTML = "";
    var Le = {
            chart: {
                height: 236,
                type: "radialBar",
            },
            series: [60],
            colors: ["rgb(132, 90, 223)"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#fff",
                    },
                    track: {
                        dropShadow: {
                            enabled: !0,
                            top: 2,
                            left: 0,
                            blur: 2,
                            opacity: 0.15,
                        },
                    },
                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#845adf",
                            fontSize: "16px",
                            show: !1,
                        },
                        value: {
                            color: "",
                            fontSize: "30px",
                            show: !0,
                        },
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            labels: ["Cart"],
        },
        Bt = new ApexCharts(document.querySelector("#sale-value"), Le);
    Bt.render();
}

function dr(e) {
    Bt.updateOptions({
        colors: ["rgb(" + e + ")"],
    });
}
var u = document.getElementById("analytics-users");
if (u !== null) {
    u.innerHTML = "";
    var fe = {
            chart: {
                type: "line",
                height: 40,
                width: 120,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
            },
            stroke: {
                show: !0,
                curve: "straight",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [0, 21, 54, 38, 56, 24, 65],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                show: !1,
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#23b7e5"],
        },
        fe = new ApexCharts(document.querySelector("#analytics-users"), fe);
    fe.render();
}
var u = document.getElementById("analytics-bouncerate");
if (u !== null) {
    u.innerHTML = "";
    var Z = {
            chart: {
                type: "line",
                height: 45,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 1,
                    color: "#fff",
                    opacity: 0.05,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 2,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["rgba(132, 90, 223, 0.1)"],
            tooltip: {
                enabled: !1,
            },
        },
        Z = new ApexCharts(document.querySelector("#analytics-bouncerate"), Z);
    Z.render();
}

function ur(e) {
    Z.updateOptions({
        colors: ["rgba(" + e + ", 0.1)"],
    });
}
var u = document.getElementById("sessions");
if (u !== null) {
    u.innerHTML = "";
    var E = {
            series: [1754, 1234, 878, 270],
            labels: ["Mobile", "Tablet", "Desktop", "Others"],
            chart: {
                height: 257,
                type: "donut",
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !1,
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "round",
                colors: "#fff",
                width: 0,
                dashArray: 0,
            },
            plotOptions: {
                pie: {
                    expandOnClick: !1,
                    donut: {
                        size: "80%",
                        background: "transparent",
                        labels: {
                            show: !0,
                            name: {
                                show: !0,
                                fontSize: "20px",
                                color: "#495057",
                                offsetY: -4,
                            },
                            value: {
                                show: !0,
                                fontSize: "18px",
                                color: void 0,
                                offsetY: 8,
                                formatter: function (e) {
                                    return e + "%";
                                },
                            },
                            total: {
                                show: !0,
                                showAlways: !0,
                                label: "Total",
                                fontSize: "22px",
                                fontWeight: 600,
                                color: "#495057",
                            },
                        },
                    },
                },
            },
            colors: [
                "rgba(132, 90, 223, 1)",
                "rgba(35, 183, 229, 1)",
                "rgba(38, 191, 148, 1)",
                "rgba(245, 184, 73, 1)",
            ],
        },
        It = new ApexCharts(document.querySelector("#sessions"), E);
    It.render();
}

function mr(e) {
    It.updateOptions({
        colors: [
            "rgba(" + e + ", 1)",
            "rgba(35, 183, 229, 1)",
            "rgba(38, 191, 148, 1)",
            "rgba(245, 184, 73, 1)",
        ],
    });
}
var u = document.getElementById("audienceReport");
if (u !== null) {
    u.innerHTML = "";
    var E = {
            series: [
                {
                    name: "Views",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35],
                },
                {
                    name: "Followers",
                    type: "line",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27],
                },
            ],
            chart: {
                toolbar: {
                    show: !1,
                },
                type: "line",
                height: 250,
            },
            grid: {
                borderColor: "#f1f1f1",
                strokeDashArray: 3,
            },
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                width: [1, 1.1],
                curve: ["straight", "smooth"],
            },
            legend: {
                show: !0,
                position: "top",
            },
            xaxis: {
                axisBorder: {
                    color: "#e9e9e9",
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "20%",
                    borderRadius: 2,
                },
            },
            colors: ["rgba(132, 90, 223, 1)", "#23b7e5"],
        },
        Et = new ApexCharts(document.querySelector("#audienceReport"), E);
    Et.render();
}

function hr(e) {
    Et.updateOptions({
        colors: ["rgba(" + e + ", 1)", "#23b7e5"],
    });
}
var u = document.getElementById("country-sessions");
if (u !== null) {
    u.innerHTML = "";
    var E = {
            series: [
                {
                    name: "Session",
                    data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
                    type: "line",
                },
                {
                    name: "Bounce Rate",
                    data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
                    type: "bar",
                },
            ],
            chart: {
                height: 330,
                zoom: {
                    enabled: !1,
                },
            },
            dataLabels: {
                enabled: !1,
                show: !0,
            },
            grid: {
                borderColor: "#f1f1f1",
                strokeDashArray: 3,
            },
            legend: {
                show: !0,
                position: "top",
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    columnWidth: "40%",
                    dataLabels: {
                        position: "top",
                    },
                },
            },
            colors: ["rgb(132, 90, 223)", "#ededed"],
            stroke: {
                curve: ["smooth", "stepline"],
                width: [2, 0],
                columnWidth: "10%",
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    color: "#e9e9e9",
                },
            },
        },
        Ct = new ApexCharts(document.querySelector("#country-sessions"), E);
    Ct.render();
}

function yr(e) {
    Ct.updateOptions({
        colors: ["rgb(" + e + ")", "#ededed"],
    });
}
var u = document.getElementById("session-users");
if (u !== null) {
    u.innerHTML = "";
    var fr = {
            series: [
                {
                    name: "New Users",
                    data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
                },
                {
                    name: "Sessions",
                    data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136],
                },
                {
                    name: "Avg Session Duration",
                    data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98],
                },
            ],
            chart: {
                height: 420,
                type: "line",
                toolbar: {
                    show: !1,
                },
                background: "none",
                fill: "#fff",
            },
            grid: {
                borderColor: "#f2f6f7",
            },
            colors: ["rgb(132, 90, 223)", "#23b7e5", "#f5b849"],
            background: "transparent",
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                curve: "straight",
                width: 3,
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !0,
                position: "top",
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                show: !1,
                axisBorder: {
                    show: !1,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !1,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                },
            },
            yaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
        Mt = new ApexCharts(document.querySelector("#session-users"), fr);
    Mt.render();
}

function gr(e) {
    Mt.updateOptions({
        colors: ["rgb(" + e + ")", "#23b7e5", "#f5b849"],
    });
}
var u = document.getElementById("analytics-followers");
if (u !== null) {
    u.innerHTML = "";
    var E = {
            chart: {
                height: 120,
                width: 100,
                type: "radialBar",
            },
            series: [48],
            colors: ["#23b7e5"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "50%",
                        background: "#fff",
                    },
                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#23b7e5",
                            fontSize: "10px",
                            show: !1,
                        },
                        value: {
                            offsetY: 5,
                            color: "#23b7e5",
                            fontSize: "12px",
                            show: !0,
                            fontWeight: 800,
                        },
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            labels: ["Followers"],
        },
        pr = new ApexCharts(document.querySelector("#analytics-followers"), E);
    pr.render();
}
var u = document.getElementById("analytics-views");
if (u !== null) {
    u.innerHTML = "";
    var E = {
            chart: {
                height: 120,
                width: 100,
                type: "radialBar",
            },
            series: [65],
            colors: ["#f7b731"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "50%",
                        background: "#fff",
                    },
                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#f7b731",
                            fontSize: "10px",
                            show: !1,
                        },
                        value: {
                            offsetY: 5,
                            color: "#f7b731",
                            fontSize: "12px",
                            show: !0,
                            fontWeight: 800,
                        },
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            labels: ["Views"],
        },
        br = new ApexCharts(document.querySelector("#analytics-views"), E);
    br.render();
}
var g = document.getElementById("projectAnalysis");
if (g !== null) {
    g.innerHTML = "";
    var wr = {
            series: [
                {
                    name: "Projects",
                    type: "column",
                    data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8],
                },
                {
                    name: "Tasks",
                    type: "column",
                    data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5],
                },
                {
                    name: "Revenue",
                    type: "line",
                    data: [20, 29, 37, 35, 44, 43, 50],
                },
            ],
            chart: {
                toolbar: {
                    show: !1,
                },
                height: 315,
                type: "line",
                stacked: !1,
                fontFamily: "Poppins, Arial, sans-serif",
            },
            grid: {
                borderColor: "#f5f4f4",
                strokeDashArray: 3,
            },
            dataLabels: {
                enabled: !1,
            },
            title: {
                text: void 0,
            },
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            yaxis: [
                {
                    show: !0,
                    axisTicks: {
                        show: !0,
                    },
                    axisBorder: {
                        show: !1,
                        color: "#4eb6d0",
                    },
                    labels: {
                        style: {
                            colors: "#4eb6d0",
                        },
                    },
                    title: {
                        text: void 0,
                    },
                    tooltip: {
                        enabled: !0,
                    },
                },
                {
                    seriesName: "Projects",
                    opposite: !0,
                    axisTicks: {
                        show: !0,
                    },
                    axisBorder: {
                        show: !1,
                    },
                    labels: {
                        style: {
                            colors: "#00E396",
                        },
                    },
                    title: {
                        text: void 0,
                    },
                },
                {
                    seriesName: "Revenue",
                    opposite: !0,
                    axisTicks: {
                        show: !0,
                    },
                    axisBorder: {
                        show: !1,
                    },
                    labels: {
                        show: !1,
                    },
                    title: {
                        text: void 0,
                    },
                },
            ],
            tooltip: {
                enabled: !0,
            },
            legend: {
                show: !0,
                position: "top",
                offsetX: 40,
                fontSize: "13px",
                fontWeight: "normal",
                labels: {
                    colors: "#acb1b1",
                },
                markers: {
                    width: 10,
                    height: 10,
                },
            },
            stroke: {
                width: [0, 0, 1.5],
                curve: "straight",
                dashArray: [0, 0, 0],
            },
            plotOptions: {
                bar: {
                    columnWidth: "35%",
                    borderRadius: 3,
                },
            },
            colors: ["rgb(132, 90, 223)", "#ededed", "#23b7e5"],
        },
        Dt = new ApexCharts(document.querySelector("#projectAnalysis"), wr);
    Dt.render();
}

function vr(e) {
    Dt.updateOptions({
        colors: ["rgb(" + e + ")", "#ededed", "#23b7e5"],
    });
}
var g = document.getElementById("user1");
if (g !== null) {
    g.innerHTML = "";
    var ge = {
            chart: {
                type: "line",
                height: 20,
                width: 80,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [54, 38, 56, 24, 65],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                show: !1,
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#09ad95"],
        },
        ge = new ApexCharts(document.querySelector("#user1"), ge);
    ge.render();
}
var g = document.getElementById("user2");
if (g !== null) {
    g.innerHTML = "";
    var pe = {
            chart: {
                type: "line",
                height: 20,
                width: 80,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [24, 54, 15, 42, 16],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                show: !1,
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#fb6b27"],
        },
        pe = new ApexCharts(document.querySelector("#user2"), pe);
    pe.render();
}
var g = document.getElementById("user3");
if (g !== null) {
    g.innerHTML = "";
    var be = {
            chart: {
                type: "line",
                height: 20,
                width: 80,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [15, 42, 16, 44, 24],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                show: !1,
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#1170e4"],
        },
        be = new ApexCharts(document.querySelector("#user3"), be);
    be.render();
}
var g = document.getElementById("user4");
if (g !== null) {
    g.innerHTML = "";
    var we = {
            chart: {
                type: "line",
                height: 20,
                width: 80,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [54, 38, 56, 24, 65],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                show: !1,
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#e82646"],
        },
        we = new ApexCharts(document.querySelector("#user4"), we);
    we.render();
}
var g = document.getElementById("user5");
if (g !== null) {
    g.innerHTML = "";
    var ve = {
            chart: {
                type: "line",
                height: 20,
                width: 80,
                sparkline: {
                    enabled: !0,
                },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: "#000",
                    opacity: 0.1,
                },
            },
            grid: {
                show: !1,
                xaxis: {
                    lines: {
                        show: !1,
                    },
                },
                yaxis: {
                    lines: {
                        show: !1,
                    },
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                gradient: {
                    enabled: !1,
                },
            },
            series: [
                {
                    name: "Value",
                    data: [15, 42, 16, 44, 24],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
            },
            xaxis: {
                show: !1,
                axisTicks: {
                    show: !1,
                },
                axisBorder: {
                    show: !1,
                },
            },
            yaxis: {
                axisBorder: {
                    show: !1,
                },
            },
            colors: ["#f7b731"],
        },
        ve = new ApexCharts(document.querySelector("#user5"), ve);
    ve.render();
}
var J = document.getElementById("performanceReport");
if (J !== null) {
    J.innerHTML = "";
    var Be = {
            series: [
                {
                    name: "Designing",
                    data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
                },
                {
                    name: "Development",
                    data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27],
                },
                {
                    name: "SEO",
                    data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14],
                },
            ],
            chart: {
                type: "bar",
                height: 310,
                stacked: !0,
                toolbar: {
                    show: !0,
                },
                zoom: {
                    enabled: !0,
                },
            },
            grid: {
                borderColor: "#f1f1f1",
                strokeDashArray: 3,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            colors: [
                "rgba(132, 90, 223, 1)",
                "rgba(132, 90, 223, 0.5)",
                "rgba(132, 90, 223, 0.2)",
            ],
            legend: {
                show: !1,
                position: "top",
            },
            plotOptions: {
                bar: {
                    columnWidth: "20%",
                },
            },
            dataLabels: {
                enabled: !1,
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            fill: {
                opacity: 1,
            },
        },
        Tt = new ApexCharts(document.querySelector("#performanceReport"), Be);
    Tt.render();
}

function Sr(e) {
    Tt.updateOptions({
        colors: [
            "rgba(" + e + ", 1)",
            "rgba(" + e + ", 0.5)",
            "rgba(" + e + ", 0.2)",
        ],
    });
}
var J = document.getElementById("jobs-summary");
if (J !== null) {
    J.innerHTML = "";
    var Be = {
            series: [1754, 544, 682, 263],
            labels: ["Published", "Private", "Closed", "On Hold"],
            chart: {
                height: 250,
                type: "donut",
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !1,
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "round",
                colors: "#fff",
                width: 0,
                dashArray: 0,
            },
            plotOptions: {
                pie: {
                    expandOnClick: !1,
                    donut: {
                        size: "70%",
                        background: "transparent",
                        labels: {
                            show: !0,
                            name: {
                                show: !0,
                                fontSize: "20px",
                                color: "#495057",
                                offsetY: -4,
                            },
                            value: {
                                show: !0,
                                fontSize: "18px",
                                color: void 0,
                                offsetY: 8,
                                formatter: function (r) {
                                    return r + "%";
                                },
                            },
                            total: {
                                show: !0,
                                showAlways: !0,
                                label: "Total",
                                fontSize: "22px",
                                fontWeight: 600,
                                color: "#495057",
                            },
                        },
                    },
                },
            },
            colors: [
                "rgb(132, 90, 223)",
                "rgba(132, 90, 223, 0.7)",
                "rgba(132, 90, 223,0.4)",
                "rgb(243, 246, 248)",
            ],
        },
        Pt = new ApexCharts(document.querySelector("#jobs-summary"), Be);
    Pt.render();
}

function xr(e) {
    Pt.updateOptions({
        colors: [
            "rgb(" + e + ")",
            "rgba(" + e + ", 0.7)",
            "rgba(" + e + ", 0.4)",
            "rgb(243, 246, 248)",
        ],
    });
}
var p = document.getElementById("total-invested");
if (p !== null) {
    p.innerHTML = "";
    var V = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 19, 10, 23, 20, 22, 9, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(132, 90, 223)"],
        },
        V = new ApexCharts(document.querySelector("#total-invested"), V);
    V.render();
}

function kr(e) {
    function r(t, o, l) {
        return (
            "#" + ((1 << 24) | (t << 16) | (o << 8) | l).toString(16).slice(1)
        );
    }
    V.updateOptions({
        colors: [r(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
    });
}
var p = document.getElementById("total-investments");
if (p !== null) {
    p.innerHTML = "";
    var Se = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 19, 10, 23, 20, 22, 9, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(14, 168, 186)"],
        },
        Se = new ApexCharts(document.querySelector("#total-investments"), Se);
    Se.render();
}
var p = document.getElementById("portfolio-value");
if (p !== null) {
    p.innerHTML = "";
    var xe = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 19, 10, 23, 20, 22, 9, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(245, 184, 73)"],
        },
        xe = new ApexCharts(document.querySelector("#portfolio-value"), xe);
    xe.render();
}
var p = document.getElementById("returns-rate");
if (p !== null) {
    p.innerHTML = "";
    var ke = {
            chart: {
                type: "line",
                height: 40,
                width: 100,
                sparkline: {
                    enabled: !0,
                },
            },
            stroke: {
                show: !0,
                curve: "smooth",
                lineCap: "butt",
                colors: void 0,
                width: 1.5,
                dashArray: 0,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.9,
                    opacityTo: 0.9,
                    stops: [0, 98],
                },
            },
            series: [
                {
                    name: "Value",
                    data: [20, 14, 19, 10, 23, 20, 22, 9, 12],
                },
            ],
            yaxis: {
                min: 0,
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
            },
            tooltip: {
                enabled: !1,
            },
            colors: ["rgb(38, 191, 148)"],
        },
        ke = new ApexCharts(document.querySelector("#returns-rate"), ke);
    ke.render();
}
var p = document.getElementById("totalInvestmentsStats");
if (p !== null) {
    p.innerHTML = "";
    var Ie = {
            series: [
                {
                    name: "Invested",
                    data: [
                        [13273596e5, 30.95],
                        [1327446e6, 31.34],
                        [13275324e5, 31.18],
                        [13276188e5, 31.05],
                        [1327878e6, 31],
                        [13279644e5, 30.95],
                        [13280508e5, 31.24],
                        [13281372e5, 31.29],
                        [13282236e5, 31.85],
                        [13284828e5, 31.86],
                        [13285692e5, 32.28],
                        [13286556e5, 32.1],
                        [1328742e6, 32.65],
                        [13288284e5, 32.21],
                        [13290876e5, 32.35],
                        [1329174e6, 32.44],
                        [13292604e5, 32.46],
                        [13293468e5, 32.86],
                        [13294332e5, 32.75],
                        [13297788e5, 32.54],
                        [13298652e5, 32.33],
                        [13299516e5, 32.97],
                        [1330038e6, 33.41],
                        [13302972e5, 33.27],
                        [13303836e5, 33.27],
                        [133047e7, 32.89],
                        [13305564e5, 33.1],
                        [13306428e5, 33.73],
                        [1330902e6, 33.22],
                        [13309884e5, 31.99],
                        [13310748e5, 32.41],
                        [13311612e5, 33.05],
                        [13312476e5, 33.64],
                        [13315068e5, 33.56],
                        [13315932e5, 34.22],
                        [13316796e5, 33.77],
                        [1331766e6, 34.17],
                        [13318524e5, 33.82],
                        [13321116e5, 34.51],
                        [1332198e6, 33.16],
                        [13322844e5, 33.56],
                        [13323708e5, 33.71],
                        [13324572e5, 33.81],
                        [13327128e5, 34.4],
                        [13327992e5, 34.63],
                        [13328856e5, 34.46],
                        [1332972e6, 34.48],
                        [13330584e5, 34.31],
                        [13333176e5, 34.7],
                        [1333404e6, 34.31],
                        [13334904e5, 33.46],
                        [13335768e5, 33.59],
                        [13339224e5, 33.22],
                        [13340088e5, 32.61],
                        [13340952e5, 33.01],
                        [13341816e5, 33.55],
                        [1334268e6, 33.18],
                        [13345272e5, 32.84],
                        [13346136e5, 33.84],
                        [13347e8, 33.39],
                        [13347864e5, 32.91],
                        [13348728e5, 33.06],
                        [1335132e6, 32.62],
                        [13352184e5, 32.4],
                        [13353048e5, 33.13],
                        [13353912e5, 33.26],
                        [13354776e5, 33.58],
                        [13357368e5, 33.55],
                        [13358232e5, 33.77],
                        [13359096e5, 33.76],
                        [1335996e6, 33.32],
                        [13360824e5, 32.61],
                        [13363416e5, 32.52],
                        [1336428e6, 32.67],
                        [13365144e5, 32.52],
                        [13366008e5, 31.92],
                        [13366872e5, 32.2],
                        [13369464e5, 32.23],
                        [13370328e5, 32.33],
                        [13371192e5, 32.36],
                        [13372056e5, 32.01],
                        [1337292e6, 31.31],
                        [13375512e5, 32.01],
                        [13376376e5, 32.01],
                        [1337724e6, 32.18],
                        [13378104e5, 31.54],
                        [13378968e5, 31.6],
                        [13382424e5, 32.05],
                        [13383288e5, 31.29],
                        [13384152e5, 31.05],
                        [13385016e5, 29.82],
                        [13387608e5, 30.31],
                        [13388472e5, 30.7],
                        [13389336e5, 31.69],
                        [133902e7, 31.32],
                        [13391064e5, 31.65],
                        [13393656e5, 31.13],
                        [1339452e6, 31.77],
                        [13395384e5, 31.79],
                        [13396248e5, 31.67],
                        [13397112e5, 32.39],
                        [13399704e5, 32.63],
                        [13400568e5, 32.89],
                        [13401432e5, 31.99],
                        [13402296e5, 31.23],
                        [1340316e6, 31.57],
                        [13405752e5, 30.84],
                        [13406616e5, 31.07],
                        [1340748e6, 31.41],
                        [13408344e5, 31.17],
                        [13409208e5, 32.37],
                        [134118e7, 32.19],
                        [13412664e5, 32.51],
                        [13414392e5, 32.53],
                        [13415256e5, 31.37],
                        [13417848e5, 30.43],
                        [13418712e5, 30.44],
                        [13419576e5, 30.2],
                        [1342044e6, 30.14],
                        [13421304e5, 30.65],
                        [13423896e5, 30.4],
                        [1342476e6, 30.65],
                        [13425624e5, 31.43],
                        [13426488e5, 31.89],
                        [13427352e5, 31.38],
                        [13429944e5, 30.64],
                        [13430808e5, 30.02],
                        [13431672e5, 30.33],
                        [13432536e5, 30.95],
                        [134334e7, 31.89],
                        [13435992e5, 31.01],
                        [13436856e5, 30.88],
                        [1343772e6, 30.69],
                        [13438584e5, 30.58],
                        [13439448e5, 32.02],
                        [1344204e6, 32.14],
                        [13442904e5, 32.37],
                        [13443768e5, 32.51],
                        [13444632e5, 32.65],
                        [13445496e5, 32.64],
                        [13448088e5, 32.27],
                        [13448952e5, 32.1],
                        [13449816e5, 32.91],
                        [1345068e6, 33.65],
                        [13451544e5, 33.8],
                        [13454136e5, 33.92],
                        [13455e8, 33.75],
                        [13455864e5, 33.84],
                        [13456728e5, 33.5],
                        [13457592e5, 32.26],
                        [13460184e5, 32.32],
                        [13461048e5, 32.06],
                        [13461912e5, 31.96],
                        [13462776e5, 31.46],
                        [1346364e6, 31.27],
                        [13467096e5, 31.43],
                        [1346796e6, 32.26],
                        [13468824e5, 32.79],
                        [13469688e5, 32.46],
                        [1347228e6, 32.13],
                        [13473144e5, 32.43],
                        [13474008e5, 32.42],
                        [13474872e5, 32.81],
                        [13475736e5, 33.34],
                        [13478328e5, 33.41],
                        [13479192e5, 32.57],
                        [13480056e5, 33.12],
                        [1348092e6, 34.53],
                        [13481784e5, 33.83],
                        [13484376e5, 33.41],
                        [1348524e6, 32.9],
                        [13486104e5, 32.53],
                        [13486968e5, 32.8],
                        [13487832e5, 32.44],
                        [13490424e5, 32.62],
                        [13491288e5, 32.57],
                        [13492152e5, 32.6],
                        [13493016e5, 32.68],
                        [1349388e6, 32.47],
                        [13496472e5, 32.23],
                        [13497336e5, 31.68],
                        [134982e7, 31.51],
                        [13499064e5, 31.78],
                        [13499928e5, 31.94],
                        [1350252e6, 32.33],
                        [13503384e5, 33.24],
                        [13504248e5, 33.44],
                        [13505112e5, 33.48],
                        [13505976e5, 33.24],
                        [13508568e5, 33.49],
                        [13509432e5, 33.31],
                        [13510296e5, 33.36],
                        [1351116e6, 33.4],
                        [13512024e5, 34.01],
                        [1351638e6, 34.02],
                        [13517244e5, 34.36],
                        [13518108e5, 34.39],
                        [135207e7, 34.24],
                        [13521564e5, 34.39],
                        [13522428e5, 33.47],
                        [13523292e5, 32.98],
                        [13524156e5, 32.9],
                        [13526748e5, 32.7],
                        [13527612e5, 32.54],
                        [13528476e5, 32.23],
                        [1352934e6, 32.64],
                        [13530204e5, 32.65],
                        [13532796e5, 32.92],
                        [1353366e6, 32.64],
                        [13534524e5, 32.84],
                        [13536252e5, 33.4],
                        [13538844e5, 33.3],
                        [13539708e5, 33.18],
                        [13540572e5, 33.88],
                        [13541436e5, 34.09],
                        [135423e7, 34.61],
                        [13544892e5, 34.7],
                        [13545756e5, 35.3],
                        [1354662e6, 35.4],
                        [13547484e5, 35.14],
                        [13548348e5, 35.48],
                        [1355094e6, 35.75],
                        [13551804e5, 35.54],
                        [13552668e5, 35.96],
                        [13553532e5, 35.53],
                        [13554396e5, 37.56],
                        [13556988e5, 37.42],
                        [13557852e5, 37.49],
                        [13558716e5, 38.09],
                        [1355958e6, 37.87],
                        [13560444e5, 37.71],
                        [13563036e5, 37.53],
                        [13564764e5, 37.55],
                        [13565628e5, 37.3],
                        [13566492e5, 36.9],
                        [13569084e5, 37.68],
                        [13570812e5, 38.34],
                        [13571676e5, 37.75],
                        [1357254e6, 38.13],
                        [13575132e5, 37.94],
                        [13575996e5, 38.14],
                        [1357686e6, 38.66],
                        [13577724e5, 38.62],
                        [13578588e5, 38.09],
                        [1358118e6, 38.16],
                        [13582044e5, 38.15],
                        [13582908e5, 37.88],
                        [13583772e5, 37.73],
                        [13584636e5, 37.98],
                        [13588092e5, 37.95],
                        [13588956e5, 38.25],
                        [1358982e6, 38.1],
                        [13590684e5, 38.32],
                        [13593276e5, 38.24],
                        [1359414e6, 38.52],
                        [13595004e5, 37.94],
                        [13595868e5, 37.83],
                        [13596732e5, 38.34],
                        [13599324e5, 38.1],
                        [13600188e5, 38.51],
                        [13601052e5, 38.4],
                        [13601916e5, 38.07],
                        [1360278e6, 39.12],
                        [13605372e5, 38.64],
                        [13606236e5, 38.89],
                        [136071e7, 38.81],
                        [13607964e5, 38.61],
                        [13608828e5, 38.63],
                        [13612284e5, 38.99],
                        [13613148e5, 38.77],
                        [13614012e5, 38.34],
                        [13614876e5, 38.55],
                        [13617468e5, 38.11],
                        [13618332e5, 38.59],
                        [13619196e5, 39.6],
                    ],
                },
            ],
            chart: {
                id: "area-datetime",
                fontFamily: "Roboto, Arial, sans-serif",
                type: "area",
                height: 320,
                zoom: {
                    autoScaleYaxis: !0,
                },
                toolbar: {
                    show: !1,
                },
            },
            grid: {
                borderColor: "#f3f3f3",
                strokeDashArray: 3,
            },
            dataLabels: {
                enabled: !1,
            },
            markers: {
                size: 0,
                style: "hollow",
            },
            xaxis: {
                type: "datetime",
                min: new Date("01 Mar 2012").getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: "dd MMM yyyy",
                },
            },
            colors: ["rgb(132, 90, 223)"],
            stroke: {
                width: [1.2],
                curve: ["smooth"],
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.7,
                    stops: [0, 100],
                },
            },
        },
        Rt = new ApexCharts(
            document.querySelector("#totalInvestmentsStats"),
            Ie
        );
    Rt.render();
}

function qr(e) {
    function r(t, o, l) {
        return (
            "#" + ((1 << 24) | (t << 16) | (o << 8) | l).toString(16).slice(1)
        );
    }
    Rt.updateOptions({
        colors: [r(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
    });
}
var p = document.getElementById("stocks-marketcap");
if (p !== null) {
    p.innerHTML = "";
    var Ie = {
            series: [
                {
                    data: [
                        {
                            x: new Date(15387786e5),
                            y: [6629.81, 6650.5, 6623.04, 6633.33],
                        },
                        {
                            x: new Date(15387804e5),
                            y: [6632.01, 6643.59, 6620, 6630.11],
                        },
                        {
                            x: new Date(15387822e5),
                            y: [6630.71, 6648.95, 6623.34, 6635.65],
                        },
                        {
                            x: new Date(1538784e6),
                            y: [6635.65, 6651, 6629.67, 6638.24],
                        },
                        {
                            x: new Date(15387858e5),
                            y: [6638.24, 6640, 6620, 6624.47],
                        },
                        {
                            x: new Date(15387876e5),
                            y: [6624.53, 6636.03, 6621.68, 6624.31],
                        },
                        {
                            x: new Date(15387894e5),
                            y: [6624.61, 6632.2, 6617, 6626.02],
                        },
                        {
                            x: new Date(15387912e5),
                            y: [6627, 6627.62, 6584.22, 6603.02],
                        },
                        {
                            x: new Date(1538793e6),
                            y: [6605, 6608.03, 6598.95, 6604.01],
                        },
                        {
                            x: new Date(15387948e5),
                            y: [6604.5, 6614.4, 6602.26, 6608.02],
                        },
                        {
                            x: new Date(15387966e5),
                            y: [6608.02, 6610.68, 6601.99, 6608.91],
                        },
                        {
                            x: new Date(15387984e5),
                            y: [6608.91, 6618.99, 6608.01, 6612],
                        },
                        {
                            x: new Date(15388002e5),
                            y: [6612, 6615.13, 6605.09, 6612],
                        },
                        {
                            x: new Date(1538802e6),
                            y: [6612, 6624.12, 6608.43, 6622.95],
                        },
                        {
                            x: new Date(15388038e5),
                            y: [6623.91, 6623.91, 6615, 6615.67],
                        },
                        {
                            x: new Date(15388056e5),
                            y: [6618.69, 6618.74, 6610, 6610.4],
                        },
                        {
                            x: new Date(15388074e5),
                            y: [6611, 6622.78, 6610.4, 6614.9],
                        },
                        {
                            x: new Date(15388092e5),
                            y: [6614.9, 6626.2, 6613.33, 6623.45],
                        },
                        {
                            x: new Date(1538811e6),
                            y: [6623.48, 6627, 6618.38, 6620.35],
                        },
                        {
                            x: new Date(15388128e5),
                            y: [6619.43, 6620.35, 6610.05, 6615.53],
                        },
                        {
                            x: new Date(15388146e5),
                            y: [6615.53, 6617.93, 6610, 6615.19],
                        },
                        {
                            x: new Date(15388164e5),
                            y: [6615.19, 6621.6, 6608.2, 6620],
                        },
                        {
                            x: new Date(15388182e5),
                            y: [6619.54, 6625.17, 6614.15, 6620],
                        },
                        {
                            x: new Date(153882e7),
                            y: [6620.33, 6634.15, 6617.24, 6624.61],
                        },
                        {
                            x: new Date(15388218e5),
                            y: [6625.95, 6626, 6611.66, 6617.58],
                        },
                        {
                            x: new Date(15388236e5),
                            y: [6619, 6625.97, 6595.27, 6598.86],
                        },
                        {
                            x: new Date(15388254e5),
                            y: [6598.86, 6598.88, 6570, 6587.16],
                        },
                        {
                            x: new Date(15388272e5),
                            y: [6588.86, 6600, 6580, 6593.4],
                        },
                        {
                            x: new Date(1538829e6),
                            y: [6593.99, 6598.89, 6585, 6587.81],
                        },
                        {
                            x: new Date(15388308e5),
                            y: [6587.81, 6592.73, 6567.14, 6578],
                        },
                        {
                            x: new Date(15388326e5),
                            y: [6578.35, 6581.72, 6567.39, 6579],
                        },
                        {
                            x: new Date(15388344e5),
                            y: [6579.38, 6580.92, 6566.77, 6575.96],
                        },
                        {
                            x: new Date(15388362e5),
                            y: [6575.96, 6589, 6571.77, 6588.92],
                        },
                        {
                            x: new Date(1538838e6),
                            y: [6588.92, 6594, 6577.55, 6589.22],
                        },
                        {
                            x: new Date(15388398e5),
                            y: [6589.3, 6598.89, 6589.1, 6596.08],
                        },
                        {
                            x: new Date(15388416e5),
                            y: [6597.5, 6600, 6588.39, 6596.25],
                        },
                        {
                            x: new Date(15388434e5),
                            y: [6598.03, 6600, 6588.73, 6595.97],
                        },
                        {
                            x: new Date(15388452e5),
                            y: [6595.97, 6602.01, 6588.17, 6602],
                        },
                        {
                            x: new Date(1538847e6),
                            y: [6602, 6607, 6596.51, 6599.95],
                        },
                        {
                            x: new Date(15388488e5),
                            y: [6600.63, 6601.21, 6590.39, 6591.02],
                        },
                        {
                            x: new Date(15388506e5),
                            y: [6591.02, 6603.08, 6591, 6591],
                        },
                        {
                            x: new Date(15388524e5),
                            y: [6591, 6601.32, 6585, 6592],
                        },
                        {
                            x: new Date(15388542e5),
                            y: [6593.13, 6596.01, 6590, 6593.34],
                        },
                        {
                            x: new Date(1538856e6),
                            y: [6593.34, 6604.76, 6582.63, 6593.86],
                        },
                        {
                            x: new Date(15388578e5),
                            y: [6593.86, 6604.28, 6586.57, 6600.01],
                        },
                        {
                            x: new Date(15388596e5),
                            y: [6601.81, 6603.21, 6592.78, 6596.25],
                        },
                        {
                            x: new Date(15388614e5),
                            y: [6596.25, 6604.2, 6590, 6602.99],
                        },
                        {
                            x: new Date(15388632e5),
                            y: [6602.99, 6606, 6584.99, 6587.81],
                        },
                        {
                            x: new Date(1538865e6),
                            y: [6587.81, 6595, 6583.27, 6591.96],
                        },
                        {
                            x: new Date(15388668e5),
                            y: [6591.97, 6596.07, 6585, 6588.39],
                        },
                        {
                            x: new Date(15388686e5),
                            y: [6587.6, 6598.21, 6587.6, 6594.27],
                        },
                        {
                            x: new Date(15388704e5),
                            y: [6596.44, 6601, 6590, 6596.55],
                        },
                        {
                            x: new Date(15388722e5),
                            y: [6598.91, 6605, 6596.61, 6600.02],
                        },
                        {
                            x: new Date(1538874e6),
                            y: [6600.55, 6605, 6589.14, 6593.01],
                        },
                        {
                            x: new Date(15388758e5),
                            y: [6593.15, 6605, 6592, 6603.06],
                        },
                        {
                            x: new Date(15388776e5),
                            y: [6603.07, 6604.5, 6599.09, 6603.89],
                        },
                        {
                            x: new Date(15388794e5),
                            y: [6604.44, 6604.44, 6600, 6603.5],
                        },
                        {
                            x: new Date(15388812e5),
                            y: [6603.5, 6603.99, 6597.5, 6603.86],
                        },
                        {
                            x: new Date(1538883e6),
                            y: [6603.85, 6605, 6600, 6604.07],
                        },
                        {
                            x: new Date(15388848e5),
                            y: [6604.98, 6606, 6604.07, 6606],
                        },
                    ],
                },
            ],
            chart: {
                type: "candlestick",
                borderRadius: 20,
                height: 350,
                toolbar: {
                    show: !1,
                },
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: "rgb(132, 90, 223)",
                        downward: "rgb(35, 183, 229)",
                    },
                },
            },
            title: {
                align: "left",
            },
            grid: {
                borderColor: "#f1f1f1",
                strokeDashArray: 3,
            },
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: !1,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !1,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            yaxis: {
                tooltip: {
                    enabled: !0,
                },
            },
        },
        Ot = new ApexCharts(document.querySelector("#stocks-marketcap"), Ie);
    Ot.render();
}

function Ar(e) {
    function r(t, o, l) {
        return (
            "#" + ((1 << 24) | (t << 16) | (o << 8) | l).toString(16).slice(1)
        );
    }
    Ot.updateOptions({
        plotOptions: {
            candlestick: {
                colors: {
                    upward: r(
                        e.split(",")[0],
                        e.split(",")[1],
                        e.split(",")[2]
                    ),
                    downward: "rgb(35, 183, 229)",
                },
            },
        },
    });
}
var N = document.getElementById("courses-earnings");
if (N !== null) {
    N.innerHTML = "";
    var Lr = {
            series: [
                {
                    name: "Earnings",
                    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51],
                },
                {
                    name: "Students",
                    data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38],
                },
            ],
            chart: {
                height: 340,
                type: "bar",
            },
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                width: [1.1, 1.1],
                show: !0,
                curve: ["smooth", "smooth"],
            },
            grid: {
                borderColor: "#f3f3f3",
                strokeDashArray: 3,
            },
            xaxis: {
                axisBorder: {
                    color: "rgba(119, 119, 142, 0.05)",
                },
            },
            legend: {
                show: !1,
            },
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            markers: {
                size: 0,
            },
            colors: ["rgb(132, 90, 223)", "#e9e9e9"],
            plotOptions: {
                bar: {
                    columnWidth: "50%",
                    borderRadius: 2,
                },
            },
        },
        Ht = new ApexCharts(document.querySelector("#courses-earnings"), Lr);
    Ht.render();
}

function Br(e) {
    Ht.updateOptions({
        colors: ["rgb(" + e + ")", "#e9e9e9"],
    });
}
var N = document.getElementById("course-payouts");
if (N !== null) {
    N.innerHTML = "";
    var Ir = {
            series: [
                {
                    name: "Paid",
                    data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
                    type: "line",
                },
                {
                    name: "UnPaid",
                    data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
                    type: "line",
                },
            ],
            chart: {
                height: 265,
                toolbar: {
                    show: !1,
                },
                background: "none",
                fill: "#fff",
            },
            grid: {
                borderColor: "#f2f6f7",
            },
            colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
            background: "transparent",
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                dashArray: [0, 5],
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            dataLabels: {
                enabled: !1,
            },
            legend: {
                show: !0,
                position: "top",
            },
            xaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !1,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                },
            },
            yaxis: {
                show: !1,
                axisBorder: {
                    show: !1,
                },
                axisTicks: {
                    show: !1,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
        $t = new ApexCharts(document.querySelector("#course-payouts"), Ir);
    $t.render();
}

function Er(e) {
    $t.updateOptions({
        colors: ["rgb(" + e + ")", "rgba(230, 83, 60,0.5)"],
    });
}
var Y = document.getElementById("waterTrack");
if (Y !== null) {
    Y.innerHTML = "";
    var Ee = {
            series: [
                {
                    data: [98, 110, 80, 145, 105, 112, 87, 148, 102],
                },
            ],
            chart: {
                height: 115,
                type: "area",
                fontFamily: "Roboto, Arial, sans-serif",
                foreColor: "#5d6162",
                zoom: {
                    enabled: !1,
                },
                sparkline: {
                    enabled: !0,
                },
            },
            tooltip: {
                enabled: !0,
                x: {
                    show: !1,
                },
                y: {
                    title: {
                        formatter: function (e) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: !1,
                },
            },
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                curve: "straight",
            },
            title: {
                text: void 0,
            },
            grid: {
                borderColor: "transparent",
            },
            xaxis: {
                crosshairs: {
                    show: !1,
                },
            },
            colors: ["rgb(132, 90, 223)"],
            stroke: {
                width: [1],
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.5,
                    opacityTo: 0.2,
                    stops: [0, 60],
                },
            },
        },
        Ft = new ApexCharts(document.querySelector("#waterTrack"), Ee);
    Ft.render();
}

function Cr(e) {
    function r(t, o, l) {
        return (
            "#" + ((1 << 24) | (t << 16) | (o << 8) | l).toString(16).slice(1)
        );
    }
    Ft.updateOptions({
        colors: [r(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
    });
}
var Y = document.getElementById("sleepTrack");
if (Y !== null) {
    Y.innerHTML = "";
    var Ee = {
            series: [
                {
                    data: [102, 148, 87, 112, 105, 145, 80, 110, 98],
                },
            ],
            chart: {
                height: 115,
                type: "area",
                fontFamily: "Roboto, Arial, sans-serif",
                foreColor: "#5d6162",
                zoom: {
                    enabled: !1,
                },
                sparkline: {
                    enabled: !0,
                },
            },
            tooltip: {
                enabled: !0,
                x: {
                    show: !1,
                },
                y: {
                    title: {
                        formatter: function (r) {
                            return "";
                        },
                    },
                },
                marker: {
                    show: !1,
                },
            },
            dataLabels: {
                enabled: !1,
            },
            stroke: {
                curve: "straight",
            },
            title: {
                text: void 0,
            },
            grid: {
                borderColor: "transparent",
            },
            xaxis: {
                crosshairs: {
                    show: !1,
                },
            },
            colors: ["#64af6d"],
            stroke: {
                width: [1],
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.5,
                    opacityTo: 0.2,
                    stops: [0, 60],
                },
            },
        },
        Mr = new ApexCharts(document.querySelector("#sleepTrack"), Ee);
    Mr.render();
}
(function () {
    var o = document.getElementById("btcCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [
                    {
                        data: [34, 55, 41, 67, 22, 43, 21],
                    },
                ],
                chart: {
                    sparkline: {
                        enabled: !0,
                    },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#47bbed"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: {
                        show: !1,
                    },
                    y: {
                        title: {
                            formatter: function (m) {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: !1,
                    },
                },
                colors: ["#47bbed"],
                stroke: {
                    width: [1.5],
                    curve: ["smooth"],
                },
                xaxis: {
                    crosshairs: {
                        show: !1,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    },
                },
            },
            r = new ApexCharts(document.querySelector("#btcCoin"), e);
        r.render();
    }
    var o = document.getElementById("ethCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [
                    {
                        data: [34, 55, 41, 47, 32, 53, 31],
                    },
                ],
                chart: {
                    sparkline: {
                        enabled: !0,
                    },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#60a5fa"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: {
                        show: !1,
                    },
                    y: {
                        title: {
                            formatter: function (x) {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: !1,
                    },
                },
                colors: ["#60a5fa"],
                stroke: {
                    width: [1.5],
                    curve: ["smooth"],
                },
                xaxis: {
                    crosshairs: {
                        show: !1,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    },
                },
            },
            t = new ApexCharts(document.querySelector("#ethCoin"), e);
        t.render();
    }
    var o = document.getElementById("dshCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [
                    {
                        data: [31, 53, 32, 47, 41, 55, 44],
                    },
                ],
                chart: {
                    sparkline: {
                        enabled: !0,
                    },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#FF534D"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: {
                        show: !1,
                    },
                    y: {
                        title: {
                            formatter: function (q) {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: !1,
                    },
                },
                colors: ["#FF534D"],
                stroke: {
                    width: [1.5],
                    curve: ["smooth"],
                },
                xaxis: {
                    crosshairs: {
                        show: !1,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    },
                },
            },
            t = new ApexCharts(document.querySelector("#dshCoin"), e);
        t.render();
    }
    var o = document.getElementById("glmCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [
                    {
                        data: [21, 43, 22, 45, 35, 55, 34],
                    },
                ],
                chart: {
                    sparkline: {
                        enabled: !0,
                    },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#FFBE14"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: {
                        show: !1,
                    },
                    y: {
                        title: {
                            formatter: function (q) {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: !1,
                    },
                },
                colors: ["#FFBE14"],
                stroke: {
                    width: [1.5],
                    curve: ["smooth"],
                },
                xaxis: {
                    crosshairs: {
                        show: !1,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    },
                },
            },
            t = new ApexCharts(document.querySelector("#glmCoin"), e);
        t.render();
    }
    var o = document.getElementById("totalRevenue");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [
                    {
                        name: "Revenue",
                        data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55],
                    },
                ],
                chart: {
                    height: 180,
                    type: "area",
                    sparkline: {
                        enabled: !0,
                    },
                },
                dataLabels: {
                    enabled: !1,
                },
                stroke: {
                    width: [1.4],
                    show: !0,
                    curve: ["smooth"],
                },
                xaxis: {
                    crosshairs: {
                        show: !1,
                    },
                },
                legend: {
                    show: !1,
                },
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                markers: {
                    size: 0,
                },
                colors: ["#60a5fa"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.7,
                        stops: [0, 100],
                    },
                },
            },
            t = new ApexCharts(document.querySelector("#totalRevenue"), e);
        t.render();
    }
    var o = document.getElementById("sessionsByDevice");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [
                    {
                        name: "Tablet",
                        data: [[10, 35, 80]],
                    },
                    {
                        name: "Mobile",
                        data: [[22, 10, 80]],
                    },
                    {
                        name: "Desktop",
                        data: [[25, 25, 150]],
                    },
                ],
                chart: {
                    height: 350,
                    type: "bubble",
                    toolbar: {
                        show: !1,
                    },
                },
                grid: {
                    borderColor: "#f3f3f3",
                    strokeDashArray: 3,
                },
                colors: ["#f43f63", "#60a5fa", "#6366f1"],
                dataLabels: {
                    enabled: !1,
                },
                legend: {
                    show: !0,
                    fontSize: "13px",
                    labels: {
                        colors: "#959595",
                    },
                    markers: {
                        width: 10,
                        height: 10,
                    },
                },
                xaxis: {
                    min: 0,
                    max: 50,
                    labels: {
                        show: !1,
                    },
                    axisBorder: {
                        show: !1,
                    },
                },
                yaxis: {
                    max: 50,
                    labels: {
                        show: !1,
                    },
                },
            },
            l = new ApexCharts(document.querySelector("#sessionsByDevice"), e);
        l.render();
    }
    if (typeof jsVectorMap < "u") {
        var n = [
                {
                    name: "Russia",
                    coords: [61, 105],
                    style: {
                        fill: "#60a5fa",
                    },
                },
                {
                    name: "Geenland",
                    coords: [72, -42],
                    style: {
                        fill: "#6366f1",
                    },
                },
                {
                    name: "Canada",
                    coords: [56, -106],
                    style: {
                        fill: "#ff534d",
                    },
                },
                {
                    name: "Palestine",
                    coords: [31.5, 34.8],
                    style: {
                        fill: "#ffbe14",
                    },
                },
                {
                    name: "Brazil",
                    coords: [-14.235, -51.9253],
                    style: {
                        fill: "#f43f63",
                    },
                },
            ],
            o = document.getElementById("users-map");
        o !== null &&
            ((o.innerHTML = ""),
            new jsVectorMap({
                map: "world_merc",
                selector: "#users-map",
                markersSelectable: !0,
                onMarkerSelected(x, q, B) {},
                labels: {
                    markers: {
                        render: function (x) {
                            return x.name;
                        },
                    },
                },
                markers: n,
                markerStyle: {
                    hover: {
                        stroke: "#DDD",
                        strokeWidth: 3,
                        fill: "#FFF",
                    },
                    selected: {
                        fill: "#ff525d",
                    },
                },
                markerLabelStyle: {
                    initial: {
                        fontFamily: "Poppins",
                        fontSize: 13,
                        fontWeight: 500,
                        fill: "#35373e",
                    },
                },
            }));
    }
})();

function Dr(e) {
    var r = {
        series: [
            {
                data: [17, 22, 37, 47, 39, 28, 14],
                name: "Revenue",
            },
        ],
        chart: {
            type: "bar",
            height: 235,
            toolbar: {
                show: !1,
            },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 6,
                left: 6,
                blur: 3,
                color: "#000",
                opacity: 0.05,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "35%",
                borderRadius: 4,
                horizontal: !1,
                colors: {
                    ranges: [
                        {
                            from: 41,
                            to: 1 / 0,
                            color: "rgb(" + e + ")",
                        },
                        {
                            from: 0,
                            to: 40,
                            color: "rgba(" + e + ", 0.2)",
                        },
                    ],
                },
            },
        },
        dataLabels: {
            enabled: !1,
        },
        grid: {
            show: !1,
            borderColor: "transparent",
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            yaxis: {
                lines: {
                    show: !1,
                },
            },
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
            colors: "#fff",
            axisBorder: {
                show: !1,
            },
            axisTicks: {
                show: !1,
            },
            labels: {
                rotate: -90,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
        },
        yaxis: {
            colors: "#fff",
            axisBorder: {
                show: !1,
            },
            axisTicks: {
                show: !1,
            },
            labels: {
                show: !1,
            },
        },
    };
    document.querySelector("#report").innerHTML = "";
    var t = new ApexCharts(document.querySelector("#report"), r);
    t.render();
}

function Tr(e) {
    var r = {
        series: [
            {
                name: "Job Applied",
                type: "line",
                data: [25, 50, 30, 55, 20, 45, 30],
            },
            {
                name: "Job Viewed",
                type: "area",
                data: [35, 25, 40, 30, 45, 35, 60],
            },
        ],
        chart: {
            height: 320,
            type: "line",
            stacked: !1,
            toolbar: {
                show: !1,
            },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 7,
                left: 1,
                blur: 3,
                color: "#000",
                opacity: 0.2,
            },
        },
        colors: ["rgba(" + e + ", 1)", "rgba(" + e + ", 0.1)"],
        grid: {
            borderColor: "#e9edf4",
            padding: {
                top: 10,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: [2, 2],
            curve: "smooth",
            dashArray: [0, 4],
        },
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        markers: {
            size: 4,
            hover: {
                size: 5,
            },
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shadeIntensity: 1,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        legend: {
            show: !0,
            position: "top",
            fontFamily: "Inter, sans-serif",
            markers: {
                width: 10,
                height: 10,
            },
        },
        xaxis: {
            type: "week",
            axisBorder: {
                show: !0,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: !0,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
            },
        },
        yaxis: {
            title: {
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                },
            },
            labels: {
                formatter: function (o) {
                    return o.toFixed(0) + "";
                },
            },
        },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (o) {
                    return typeof o < "u" ? o.toFixed(0) + " points" : o;
                },
            },
        },
    };
    document.querySelector("#views").innerHTML = "";
    var t = new ApexCharts(document.querySelector("#views"), r);
    t.render();
}
const Ce = 300,
    y = document.getElementById("sidebar");
let _ = document.querySelector(".main-content");
const Pr = document.querySelectorAll(".nav > ul > .slide.has-sub"),
    Rr = document.querySelectorAll(".nav > ul > .slide.has-sub > a"),
    Or = document.querySelectorAll(
        ".nav > ul > .slide.has-sub .slide.has-sub > a"
    );
class Hr {
    constructor(r, t) {
        z(this, "instance", null);
        z(this, "reference", null);
        z(this, "popperTarget", null);
        this.init(r, t);
    }
    init(r, t) {
        (this.reference = r),
            (this.popperTarget = t),
            (this.instance = Popper.createPopper(
                this.reference,
                this.popperTarget,
                {
                    placement: "bottom",
                    strategy: "relative",
                    resize: !0,
                    modifiers: [
                        {
                            name: "computeStyles",
                            options: {
                                adaptive: !1,
                            },
                        },
                    ],
                }
            )),
            document.addEventListener(
                "click",
                (l) => this.clicker(l, this.popperTarget, this.reference),
                !1
            );
        const o = new ResizeObserver(() => {
            this.instance.update();
        });
        o.observe(this.popperTarget), o.observe(this.reference);
    }
    clicker(r, t, o) {
        y.classList.contains("collapsed") &&
            !t.contains(r.target) &&
            !o.contains(r.target) &&
            this.hide();
    }
    hide() {}
}
class $r {
    constructor() {
        z(this, "subMenuPoppers", []);
        this.init();
    }
    init() {
        Pr.forEach((r) => {
            this.subMenuPoppers.push(new Hr(r, r.lastElementChild)),
                this.closePoppers();
        });
    }
    togglePopper(r) {
        window.getComputedStyle(r).visibility === "hidden" &&
        window.getComputedStyle(r).visibility === void 0
            ? (r.style.visibility = "visible")
            : (r.style.visibility = "hidden");
    }
    updatePoppers() {
        this.subMenuPoppers.forEach((r) => {
            (r.instance.state.elements.popper.style.display = "none"),
                r.instance.update();
        });
    }
    closePoppers() {
        this.subMenuPoppers.forEach((r) => {
            r.hide();
        });
    }
}
const te = (e, r = Ce) => {
        const { parentElement: t } = e;
        t.classList.remove("open"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = `${r}ms`),
            (e.style.boxSizing = "border-box"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = 0),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
                (e.style.display = "none"),
                    e.style.removeProperty("height"),
                    e.style.removeProperty("padding-top"),
                    e.style.removeProperty("padding-bottom"),
                    e.style.removeProperty("margin-top"),
                    e.style.removeProperty("margin-bottom"),
                    e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property");
            }, r);
    },
    zt = (e, r = Ce) => {
        const { parentElement: t } = e;
        t.classList.add("open"), e.style.removeProperty("display");
        let { display: o } = window.getComputedStyle(e);
        o === "none" && (o = "block"), (e.style.display = o);
        const l = e.offsetHeight;
        (e.style.overflow = "hidden"),
            (e.style.height = 0),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.boxSizing = "border-box"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = `${r}ms`),
            (e.style.height = `${l}px`),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
                e.style.removeProperty("height"),
                    e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property");
            }, r);
    },
    Wt = (e, r = Ce) => {
        let t = document.querySelector("html");
        if (
            !(
                (t.getAttribute("data-nav-style") === "menu-hover" &&
                    t.getAttribute("data-toggled") === "menu-hover-closed" &&
                    window.innerWidth >= 992) ||
                (t.getAttribute("data-nav-style") === "icon-hover" &&
                    t.getAttribute("data-toggled") === "icon-hover-closed" &&
                    window.innerWidth >= 992)
            ) &&
            e &&
            e.nodeType != 3
        )
            return window.getComputedStyle(e).display === "none"
                ? zt(e, r)
                : te(e, r);
    };
new $r();
const Fr = document.querySelectorAll(".slide.has-sub.open");
Fr.forEach((e) => {
    e.lastElementChild.style.display = "block";
});
Rr.forEach((e) => {
    e.addEventListener("click", () => {
        let r = document.querySelector("html");
        if (
            !(
                (r.getAttribute("data-nav-style") === "menu-hover" &&
                    r.getAttribute("data-toggled") === "menu-hover-closed" &&
                    window.innerWidth >= 992) ||
                (r.getAttribute("data-nav-style") === "icon-hover" &&
                    r.getAttribute("data-toggled") === "icon-hover-closed" &&
                    window.innerWidth >= 992)
            )
        ) {
            const t = e.closest(".nav.sub-open");
            t &&
                t
                    .querySelectorAll(":scope > ul > .slide.has-sub > a")
                    .forEach((o) => {
                        (o.nextElementSibling.style.display === "block" ||
                            window.getComputedStyle(o.nextElementSibling)
                                .display === "block") &&
                            te(o.nextElementSibling);
                    }),
                Wt(e.nextElementSibling);
        }
    });
});
Or.forEach((e) => {
    document.querySelector("html"),
        e.addEventListener("click", () => {
            const r = e.closest(".slide-menu");
            r &&
                r.querySelectorAll(":scope .slide.has-sub > a").forEach((t) => {
                    var o;
                    t.nextElementSibling &&
                        ((o = t.nextElementSibling) == null
                            ? void 0
                            : o.style.display) === "block" &&
                        te(t.nextElementSibling);
                }),
                Wt(e.nextElementSibling);
        });
});
window.addEventListener("resize", () => {
    let e = document.querySelector(".main-content");
    setTimeout(() => {
        window.innerWidth <= 992
            ? e.addEventListener("click", O)
            : e.removeEventListener("click", O);
    }, 100);
});
let bt, b;
(() => {
    let e = document.querySelector("html");
    (bt = document.querySelector(".sidemenu-toggle")),
        bt.addEventListener("click", v);
    let r = document.querySelector(".main-content");

    window.innerWidth <= 992
        ? r.addEventListener("click", O)
        : r.removeEventListener("click", O),
        (b = [window.innerWidth]),
        D(),
        e.getAttribute("data-nav-layout") === "horizontal" &&
        window.innerWidth >= 992
            ? (f(), r.addEventListener("click", f))
            : r.removeEventListener("click", f),
        window.addEventListener("resize", F),
        De(),
        !localStorage.getItem("Ynexlayout") &&
            !localStorage.getItem("Ynexnavstyles") &&
            !localStorage.getItem("Ynexverticalstyles") &&
            !document.querySelector(".landing-body") &&
            document.querySelector("html").getAttribute("data-nav-layout") !==
                "horizontal" &&
            !e.getAttribute("data-vertical-style") &&
            !e.getAttribute("data-nav-style") &&
            Me(),
        v(),
        (e.getAttribute("data-nav-style") === "menu-hover" ||
            e.getAttribute("data-nav-style") === "icon-hover") &&
            window.innerWidth >= 992 &&
            f(),
        window.innerWidth < 992 && e.setAttribute("data-toggled", "close");
})();

function F() {
    let e = document.querySelector("html"),
        r = document.querySelector(".main-content");
    b.push(window.innerWidth),
        b.length > 2 && b.shift(),
        b.length > 1 &&
            (b[b.length - 1] < 992 &&
                b[b.length - 2] >= 992 &&
                (r.addEventListener("click", O),
                D(),
                v(),
                r.removeEventListener("click", f)),
            b[b.length - 1] >= 992 &&
                b[b.length - 2] < 992 &&
                (r.removeEventListener("click", O),
                v(),
                e.getAttribute("data-nav-layout") === "horizontal"
                    ? (f(), r.addEventListener("click", f))
                    : r.removeEventListener("click", f),
                !document.querySelector("html").getAttribute("data-toggled") ==
                    "double-menu-open" && e.removeAttribute("data-toggled"))),
        Te(),
        b[b.length - 1] >= 992 &&
            localStorage.ynexnavstyles == "menu-click" &&
            e.removeAttribute("data-toggled");
}

function O() {
    document.querySelector("html").setAttribute("data-toggled", "close"),
        document
            .querySelector("#responsive-overlay")
            .classList.remove("active");
}

function v() {
    let e = document.querySelector("html"),
        r = e.getAttribute("data-nav-layout");
    if (window.innerWidth >= 992) {
        if (r === "vertical") {
            switch (
                (y.removeEventListener("mouseenter", T),
                y.removeEventListener("mouseleave", P),
                y.removeEventListener("click", j),
                _.removeEventListener("click", U),
                document
                    .querySelectorAll(".main-menu li > .side-menu__item")
                    .forEach((n) => n.removeEventListener("click", Pe)),
                e.getAttribute("data-vertical-style"))
            ) {
                case "closed":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "close-menu-close"
                            ? e.removeAttribute("data-toggled")
                            : e.setAttribute(
                                  "data-toggled",
                                  "close-menu-close"
                              );
                    break;
                case "overlay":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "icon-overlay-close"
                            ? (e.removeAttribute(
                                  "data-toggled",
                                  "icon-overlay-close"
                              ),
                              y.removeEventListener("mouseenter", T),
                              y.removeEventListener("mouseleave", P))
                            : window.innerWidth >= 992
                            ? (e.setAttribute(
                                  "data-toggled",
                                  "icon-overlay-close"
                              ),
                              y.addEventListener("mouseenter", T),
                              y.addEventListener("mouseleave", P))
                            : (y.removeEventListener("mouseenter", T),
                              y.removeEventListener("mouseleave", P));
                    break;
                case "icontext":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "icon-text-close"
                            ? (e.removeAttribute(
                                  "data-toggled",
                                  "icon-text-close"
                              ),
                              y.removeEventListener("click", j),
                              _.removeEventListener("click", U))
                            : (e.setAttribute(
                                  "data-toggled",
                                  "icon-text-close"
                              ),
                              window.innerWidth >= 992
                                  ? (y.addEventListener("click", j),
                                    _.addEventListener("click", U))
                                  : (y.removeEventListener("click", j),
                                    _.removeEventListener("click", U)));
                    break;
                case "doublemenu":
                    if (
                        (e.removeAttribute("data-nav-style"),
                        e.getAttribute("data-toggled") === "double-menu-open")
                    )
                        e.setAttribute("data-toggled", "double-menu-close"),
                            document.querySelector(".slide-menu") &&
                                document
                                    .querySelectorAll(".slide-menu")
                                    .forEach((m) => {
                                        m.classList.contains(
                                            "double-menu-active"
                                        ) &&
                                            m.classList.remove(
                                                "double-menu-active"
                                            );
                                    });
                    else {
                        let n = document.querySelector(
                            ".side-menu__item.active"
                        );
                        n &&
                            (e.setAttribute("data-toggled", "double-menu-open"),
                            n.nextElementSibling
                                ? n.nextElementSibling.classList.add(
                                      "double-menu-active"
                                  )
                                : document
                                      .querySelector("html")
                                      .setAttribute("data-toggled", ""));
                    }
                    jr();
                    break;
                case "detached":
                    e.getAttribute("data-toggled") === "detached-close"
                        ? (e.removeAttribute("data-toggled", "detached-close"),
                          y.removeEventListener("mouseenter", T),
                          y.removeEventListener("mouseleave", P))
                        : (e.setAttribute("data-toggled", "detached-close"),
                          window.innerWidth >= 992
                              ? (y.addEventListener("mouseenter", T),
                                y.addEventListener("mouseleave", P))
                              : (y.removeEventListener("mouseenter", T),
                                y.removeEventListener("mouseleave", P)));
                    break;
                case "default":
                    Me(), e.removeAttribute("data-toggled");
            }
            switch (e.getAttribute("data-nav-style")) {
                case "menu-click":
                    e.getAttribute("data-toggled") === "menu-click-closed"
                        ? e.removeAttribute("data-toggled")
                        : e.setAttribute("data-toggled", "menu-click-closed");
                    break;
                case "menu-hover":
                    e.getAttribute("data-toggled") === "menu-hover-closed"
                        ? (e.removeAttribute("data-toggled"), D())
                        : (e.setAttribute("data-toggled", "menu-hover-closed"),
                          f());
                    break;
                case "icon-click":
                    e.getAttribute("data-toggled") === "icon-click-closed"
                        ? e.removeAttribute("data-toggled")
                        : e.setAttribute("data-toggled", "icon-click-closed");
                    break;
                case "icon-hover":
                    e.getAttribute("data-toggled") === "icon-hover-closed"
                        ? (e.removeAttribute("data-toggled"), D())
                        : (e.setAttribute("data-toggled", "icon-hover-closed"),
                          f());
                    break;
            }
        }
    } else if (e.getAttribute("data-toggled") === "close") {
        e.setAttribute("data-toggled", "open");
        let t = document.createElement("div");
        (t.id = "responsive-overlay"),
            setTimeout(() => {
                document.querySelector("html").getAttribute("data-toggled") ==
                    "open" &&
                    (document
                        .querySelector("#responsive-overlay")
                        .classList.add("active"),
                    document
                        .querySelector("#responsive-overlay")
                        .addEventListener("click", () => {
                            document
                                .querySelector("#responsive-overlay")
                                .classList.remove("active"),
                                O();
                        })),
                    window.addEventListener("resize", () => {
                        window.screen.width >= 992 &&
                            document
                                .querySelector("#responsive-overlay")
                                .classList.remove("active");
                    });
            }, 100);
    } else e.setAttribute("data-toggled", "close");
}

function T() {
    document.querySelector("html").setAttribute("icon-overlay", "open");
}

function P() {
    document.querySelector("html").removeAttribute("icon-overlay");
}

function j() {
    document.querySelector("html").setAttribute("icon-text", "open");
}

function U() {
    document.querySelector("html").removeAttribute("icon-text");
}

function zr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "closed"),
        v();
}

function Wr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "detached"),
        e.removeAttribute("data-nav-style", "menu-hover"),
        e.removeAttribute("data-toggled", "menu-hover-close"),
        v();
}

function Gr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "icontext"),
        v();
}

function Me() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "overlay"),
        v();
}

function Jr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "doublemenu"),
        v();
    const r = document.querySelectorAll(".main-menu > li > .side-menu__item"),
        t = document.createElement("div");
    t.style.setProperty("position", "fixed"),
        t.style.setProperty("display", "none"),
        t.style.setProperty("padding", "0.5rem"),
        t.style.setProperty("font-weight", "500"),
        t.style.setProperty("font-size", "0.75rem"),
        t.style.setProperty("background-color", "rgb(15, 23 ,42)"),
        t.style.setProperty("color", "rgb(255, 255 ,255)"),
        t.style.setProperty("margin-inline-start", "45px"),
        t.style.setProperty("border-radius", "0.25rem"),
        t.style.setProperty("z-index", "99"),
        r.forEach((o) => {
            o.addEventListener("mouseenter", () => {
                t.style.setProperty("display", "block"),
                    (t.textContent =
                        o.querySelector(".side-menu__label").textContent),
                    document
                        .querySelector("html")
                        .getAttribute("data-vertical-style") == "doublemenu" &&
                        o.appendChild(t);
            }),
                o.addEventListener("mouseleave", () => {
                    t.style.setProperty("display", "none"),
                        (t.textContent =
                            o.querySelector(".side-menu__label").textContent),
                        document
                            .querySelector("html")
                            .getAttribute("data-vertical-style") ==
                            "doublemenu" && o.removeChild(t);
                });
        });
}

function Nr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "menu-click"),
        e.removeAttribute("data-hor-style"),
        e.removeAttribute("data-vertical-style"),
        v(),
        e.getAttribute("data-nav-layout") === "vertical" && D();
}

function Yr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "menu-hover"),
        e.removeAttribute("data-hor-style"),
        e.removeAttribute("data-vertical-style"),
        v(),
        e.getAttribute("data-toggled") === "menu-hover-closed" && f();
}

function Xr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "icon-click"),
        v(),
        e.getAttribute("data-nav-layout") === "vertical" && D();
}

function _r() {
    document.querySelector("html").setAttribute("data-nav-style", "icon-hover"),
        v(),
        f();
}

function D() {
    let e = window.location.pathname.split("/")[0];
    (e = location.pathname == "/" ? "index" : location.pathname.substring(1)),
        (e = e.substring(e.lastIndexOf("/") + 1)),
        document.querySelectorAll(".side-menu__item").forEach((t) => {
            if (
                (e === "/" && (e = "index"),
                t.getAttribute("href") === window.location.href)
            ) {
                t.classList.add("active"),
                    t.parentElement.classList.add("active");
                let o = t.closest("ul"),
                    l = t.closest("ul:not(.main-menu)"),
                    n = !0;
                for (; n; )
                    o
                        ? (o.classList.add("active"),
                          o.previousElementSibling.classList.add("active"),
                          o.parentElement.classList.add("active"),
                          zt(o),
                          (o = o.parentElement.closest("ul")),
                          o &&
                              o.closest("ul:not(.main-menu)") &&
                              (l = o.closest("ul:not(.main-menu)")),
                          l || (n = !1))
                        : (n = !1);
            }
        });
}

function f() {
    document.querySelectorAll("ul.slide-menu").forEach((r) => {
        let t = r.closest("ul"),
            o = r.closest("ul:not(.main-menu)");
        if (t) {
            let l = t.closest("ul.main-menu");
            for (; l; )
                t.classList.add("active"),
                    te(t),
                    (t = t.parentElement.closest("ul")),
                    (o = t.closest("ul:not(.main-menu)")),
                    o || (l = !1);
        }
    });
}

function De() {
    function e() {
        let r = document.querySelectorAll(".slide"),
            t = document.querySelectorAll(".slide-menu");
        r.forEach((o, l) => {
            o.classList.contains("is-expanded") == !0 &&
                o.classList.remove("is-expanded");
        }),
            t.forEach((o, l) => {
                o.classList.contains("open") == !0 &&
                    (o.classList.remove("open"), (o.style.display = "none"));
            });
    }
    e();
}
let R = document.querySelector(".slide-left"),
    I = document.querySelector(".slide-right");
R.addEventListener("click", () => {
    let e = document.querySelector(".main-menu"),
        r = document.querySelector(".main-sidebar"),
        t = Math.ceil(
            Number(window.getComputedStyle(e).marginLeft.split("px")[0])
        ),
        o = Math.ceil(
            Number(window.getComputedStyle(e).marginRight.split("px")[0])
        ),
        l = r.offsetWidth;
    e.scrollWidth > r.offsetWidth
        ? document.querySelector("html").getAttribute("dir") !== "rtl"
            ? t < 0 && !(Math.abs(t) < l)
                ? ((e.style.marginRight = 0),
                  (e.style.marginLeft =
                      Number(e.style.marginLeft.split("px")[0]) +
                      Math.abs(l) +
                      "px"),
                  I.classList.remove("hidden"))
                : (t >= 0,
                  (e.style.marginLeft = "0px"),
                  R.classList.add("hidden"),
                  I.classList.remove("hidden"))
            : o < 0 && !(Math.abs(o) < l)
            ? ((e.style.marginLeft = 0),
              (e.style.marginRight =
                  Number(e.style.marginRight.split("px")[0]) +
                  Math.abs(l) +
                  "px"),
              I.classList.remove("hidden"))
            : (o >= 0,
              (e.style.marginRight = "0px"),
              R.classList.add("hidden"),
              I.classList.remove("hidden"))
        : ((document.querySelector(".main-menu").style.marginLeft = "0px"),
          (document.querySelector(".main-menu").style.marginRight = "0px"));
    let n = document.querySelector(".main-menu > .slide.open"),
        m = document.querySelector(".main-menu > .slide.open >ul");
    n && n.classList.remove("active"), m && (m.style.display = "none"), De();
});
I.addEventListener("click", () => {
    let e = document.querySelector(".main-menu"),
        r = document.querySelector(".main-sidebar"),
        t = Math.ceil(
            Number(window.getComputedStyle(e).marginLeft.split("px")[0])
        ),
        o = Math.ceil(
            Number(window.getComputedStyle(e).marginRight.split("px")[0])
        ),
        l = e.scrollWidth - r.offsetWidth,
        n = r.offsetWidth;
    e.scrollWidth > r.offsetWidth &&
        (document.querySelector("html").getAttribute("dir") !== "rtl"
            ? Math.abs(l) > Math.abs(t) &&
              ((e.style.marginRight = 0),
              Math.abs(l) > Math.abs(t) + n ||
                  ((n = Math.abs(l) - Math.abs(t)), I.classList.add("hidden")),
              (e.style.marginLeft =
                  Number(e.style.marginLeft.split("px")[0]) -
                  Math.abs(n) +
                  "px"),
              R.classList.remove("hidden"))
            : Math.abs(l) > Math.abs(o) &&
              ((e.style.marginLeft = 0),
              Math.abs(l) > Math.abs(o) + n ||
                  ((n = Math.abs(l) - Math.abs(o)), I.classList.add("hidden")),
              (e.style.marginRight =
                  Number(e.style.marginRight.split("px")[0]) -
                  Math.abs(n) +
                  "px"),
              R.classList.remove("hidden")));
    let m = document.querySelector(".main-menu > .slide.open"),
        x = document.querySelector(".main-menu > .slide.open >ul");
    m && m.classList.remove("active"), x && (x.style.display = "none"), De();
});

function Te() {
    let e = document.querySelector(".main-menu"),
        r = document.querySelector(".main-sidebar"),
        t = document.querySelector(".slide-left"),
        o = document.querySelector(".slide-right"),
        l = Math.ceil(
            Number(window.getComputedStyle(e).marginLeft.split("px")[0])
        ),
        n = Math.ceil(
            Number(window.getComputedStyle(e).marginRight.split("px")[0])
        ),
        m = e.scrollWidth - r.offsetWidth;
    e.scrollWidth > r.offsetWidth
        ? (o.classList.remove("hidden"), t.classList.add("hidden"))
        : (o.classList.add("hidden"),
          t.classList.add("hidden"),
          (e.style.marginLeft = "0px"),
          (e.style.marginRight = "0px")),
        document.querySelector("html").getAttribute("dir") !== "rtl"
            ? (e.scrollWidth > r.offsetWidth &&
                  Math.abs(m) < Math.abs(l) &&
                  ((e.style.marginLeft = -m + "px"),
                  t.classList.remove("hidden"),
                  o.classList.add("hidden")),
              l == 0
                  ? (t.classList.add("hidden"), o.classList.remove("hidden"))
                  : t.classList.remove("hidden"))
            : (e.scrollWidth > r.offsetWidth &&
                  Math.abs(m) < Math.abs(n) &&
                  ((e.style.marginRight = -m + "px"),
                  t.classList.remove("hidden"),
                  o.classList.add("hidden")),
              n == 0
                  ? t.classList.add("hidden")
                  : t.classList.remove("hidden")),
        (l != 0 || n != 0) && t.classList.remove("hidden");
}

function jr() {
    window.innerWidth >= 992 &&
        (document.querySelector("html"),
        document
            .querySelectorAll(".main-menu > li > .side-menu__item")
            .forEach((r) => {
                r.addEventListener("click", Pe);
            }));
}

function Pe() {
    var e = this;
    let r = document.querySelector("html");
    var t = e.nextElementSibling;
    t &&
        (t.classList.contains("double-menu-active") ||
            (document.querySelector(".slide-menu") &&
                document.querySelectorAll(".slide-menu").forEach((l) => {
                    l.classList.contains("double-menu-active") &&
                        (l.classList.remove("double-menu-active"),
                        r.setAttribute("data-toggled", "double-menu-close"));
                }),
            t.classList.add("double-menu-active"),
            r.setAttribute("data-toggled", "double-menu-open")));
}
window.addEventListener("unload", () => {
    document.querySelector(".main-content").removeEventListener("click", f),
        window.removeEventListener("resize", F),
        document
            .querySelectorAll(".main-menu li > .side-menu__item")
            .forEach((t) => t.removeEventListener("click", Pe));
});
let Ur = () => {
    document.querySelectorAll(".side-menu__item").forEach((e) => {
        if (e.classList.contains("active")) {
            let r = e.getBoundingClientRect();
            e.children[0] &&
                e.parentElement.classList.contains("has-sub") &&
                r.top > 435 &&
                e.scrollIntoView({
                    behavior: "smooth",
                });
        }
    });
};
setTimeout(() => {
    Ur();
}, 300);
document.querySelector(".landing-body") ||
    document.querySelector(".content").addEventListener("click", () => {
        document.querySelectorAll(".slide-menu").forEach((e) => {
            (document.querySelector("html").getAttribute("data-toggled") ==
                "menu-click-closed" ||
                document.querySelector("html").getAttribute("data-toggled") ==
                    "icon-click-closed") &&
                (e.style.display = "none");
        });
    });
let Gt;
(function () {
    document.querySelector("html"),
        (Gt = document.querySelector(".main-content")),
        document.querySelector("#hs-overlay-switcher") &&
            (to(),
            Kr(),
            L(),
            setTimeout(() => {
                L();
            }, 1e3));
})();

function Kr() {
    let e,
        r,
        t,
        o,
        l,
        n,
        m,
        x,
        q,
        B,
        H,
        w,
        C,
        A,
        $,
        s,
        S,
        Re,
        Oe,
        He,
        $e,
        Fe,
        ze,
        We,
        Ge,
        Je,
        Ne,
        Ye,
        Xe,
        _e,
        je,
        Ue,
        Ke,
        Qe,
        Ze,
        Ve,
        et,
        tt,
        rt,
        ot,
        at,
        lt,
        nt,
        st,
        it,
        ct,
        dt,
        ut,
        mt,
        ht,
        yt,
        ft,
        gt,
        a = document.querySelector("html");
    (l = document.querySelector("#switcher-light-theme")),
        (n = document.querySelector("#switcher-dark-theme")),
        (e = document.querySelector("#switcher-ltr")),
        (r = document.querySelector("#switcher-rtl")),
        (t = document.querySelector("#switcher-vertical")),
        (o = document.querySelector("#switcher-horizontal")),
        (m = document.querySelector("#switcher-boxed")),
        (x = document.querySelector("#switcher-full-width")),
        (w = document.querySelector("#switcher-menu-fixed")),
        (B = document.querySelector("#switcher-menu-scroll")),
        (H = document.querySelector("#switcher-header-fixed")),
        (q = document.querySelector("#switcher-header-scroll")),
        (C = document.querySelector("#switcher-header-light")),
        (A = document.querySelector("#switcher-header-dark")),
        ($ = document.querySelector("#switcher-header-primary")),
        (s = document.querySelector("#switcher-header-gradient")),
        (Fe = document.querySelector("#switcher-header-transparent")),
        (S = document.querySelector("#switcher-menu-light")),
        (Re = document.querySelector("#switcher-menu-dark")),
        (Oe = document.querySelector("#switcher-menu-primary")),
        (He = document.querySelector("#switcher-menu-gradient")),
        ($e = document.querySelector("#switcher-menu-transparent")),
        (ze = document.querySelector("#switcher-regular")),
        (We = document.querySelector("#switcher-classic")),
        (Ge = document.querySelector("#switcher-modern")),
        (Je = document.querySelector("#switcher-default-menu")),
        (Ue = document.querySelector("#switcher-menu-click")),
        (Ke = document.querySelector("#switcher-menu-hover")),
        (Qe = document.querySelector("#switcher-icon-click")),
        (Ze = document.querySelector("#switcher-icon-hover")),
        (Ne = document.querySelector("#switcher-closed-menu")),
        (Ye = document.querySelector("#switcher-icontext-menu")),
        (_e = document.querySelector("#switcher-icon-overlay")),
        (je = document.querySelector("#switcher-double-menu")),
        (Xe = document.querySelector("#switcher-detached")),
        document.querySelector("#resetbtn"),
        (Ve = document.querySelector("#switcher-primary")),
        (et = document.querySelector("#switcher-primary1")),
        (tt = document.querySelector("#switcher-primary2")),
        (rt = document.querySelector("#switcher-primary3")),
        (ot = document.querySelector("#switcher-primary4")),
        (at = document.querySelector("#switcher-background")),
        (lt = document.querySelector("#switcher-background1")),
        (nt = document.querySelector("#switcher-background2")),
        (st = document.querySelector("#switcher-background3")),
        (it = document.querySelector("#switcher-background4")),
        (ct = document.querySelector("#switcher-bg-img")),
        (dt = document.querySelector("#switcher-bg-img1")),
        (ut = document.querySelector("#switcher-bg-img2")),
        (mt = document.querySelector("#switcher-bg-img3")),
        (ht = document.querySelector("#switcher-bg-img4")),
        (yt = document.querySelector("#reset-all")),
        (ft = document.querySelector("#switcher-loader-enable")),
        (gt = document.querySelector("#switcher-loader-disable")),
        Ve.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "58, 88, 146"),
                localStorage.setItem("primaryRGB1", "58 88 146"),
                a.style.setProperty("--primary-rgb", "58, 88, 146"),
                a.style.setProperty("--primary", "58 88 146"),
                k(),
                (document.querySelector("#switcher-primary").checked = !0);
        }),
        et.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "92, 144, 163"),
                localStorage.setItem("primaryRGB1", "92 144 163"),
                a.style.setProperty("--primary-rgb", "92, 144, 163"),
                a.style.setProperty("--primary", "92 144 163"),
                k(),
                (document.querySelector("#switcher-primary1").checked = !0);
        }),
        tt.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "161, 90, 223"),
                localStorage.setItem("primaryRGB1", "161 90 223"),
                a.style.setProperty("--primary-rgb", "161, 90, 223"),
                a.style.setProperty("--primary", "161 90 223"),
                k(),
                (document.querySelector("#switcher-primary2").checked = !0);
        }),
        rt.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "78, 172, 76"),
                localStorage.setItem("primaryRGB1", "78 172 76"),
                a.style.setProperty("--primary-rgb", "78, 172, 76"),
                a.style.setProperty("--primary", "78 172 76"),
                k(),
                (document.querySelector("#switcher-primary3").checked = !0);
        }),
        ot.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "223, 90, 90"),
                localStorage.setItem("primaryRGB1", "223 90 90"),
                a.style.setProperty("--primary-rgb", "223, 90, 90"),
                a.style.setProperty("--primary", "223 90 90"),
                k(),
                (document.querySelector("#switcher-primary4").checked = !0);
        }),
        at.addEventListener("click", () => {
            localStorage.setItem(
                "bodyBgRGB",
                `${20 + 14} ${30 + 14} ${96 + 14}`
            ),
                localStorage.setItem("darkBgRGB", "20 30 96"),
                localStorage.setItem("ynexMenu", "dark"),
                localStorage.setItem("ynexHeader", "dark"),
                a.classList.add("dark"),
                a.classList.remove("light"),
                a.setAttribute("data-menu-styles", "dark"),
                a.setAttribute("data-header-styles", "dark"),
                document
                    .querySelector("html")
                    .style.setProperty("--light", "25 35 102"),
                document
                    .querySelector("html")
                    .style.setProperty("--input-border", "25 35 102"),
                localStorage.setItem("--light", "25 35 102"),
                document
                    .querySelector("html")
                    .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                    .querySelector("html")
                    .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0),
                (document.querySelector("#switcher-background").checked = !0);
        }),
        lt.addEventListener("click", () => {
            localStorage.setItem(
                "bodyBgRGB",
                `${8 + 14} ${78 + 14} ${115 + 14}`
            ),
                localStorage.setItem("darkBgRGB", "8 78 115"),
                localStorage.setItem("ynexMenu", "dark"),
                localStorage.setItem("ynexHeader", "dark"),
                a.classList.add("dark"),
                a.classList.remove("light"),
                a.setAttribute("data-menu-styles", "dark"),
                a.setAttribute("data-header-styles", "dark"),
                document
                    .querySelector("html")
                    .style.setProperty("--light", "13 83 120"),
                document
                    .querySelector("html")
                    .style.setProperty("--input-border", "13 83 120"),
                localStorage.setItem("--light", "13 83 120"),
                document
                    .querySelector("html")
                    .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                    .querySelector("html")
                    .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0),
                (document.querySelector("#switcher-background1").checked = !0);
        }),
        nt.addEventListener("click", () => {
            localStorage.setItem(
                "bodyBgRGB",
                `${90 + 14} ${37 + 14} ${135 + 14}`
            ),
                localStorage.setItem("darkBgRGB", "90 37 135"),
                localStorage.setItem("ynexMenu", "dark"),
                localStorage.setItem("ynexHeader", "dark"),
                a.classList.add("dark"),
                a.classList.remove("light"),
                a.setAttribute("data-menu-styles", "dark"),
                a.setAttribute("data-header-styles", "dark"),
                document
                    .querySelector("html")
                    .style.setProperty("--light", "95 42 140"),
                document
                    .querySelector("html")
                    .style.setProperty("--input-border", "95 42 140"),
                localStorage.setItem("--light", "95 42 140"),
                document
                    .querySelector("html")
                    .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                    .querySelector("html")
                    .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0),
                (document.querySelector("#switcher-background2").checked = !0);
        }),
        st.addEventListener("click", () => {
            localStorage.setItem(
                "bodyBgRGB",
                `${24 + 14} ${101 + 14} ${50 + 14}`
            ),
                localStorage.setItem("darkBgRGB", "24 101 51"),
                localStorage.setItem("ynexMenu", "dark"),
                localStorage.setItem("ynexHeader", "dark"),
                a.classList.add("dark"),
                a.classList.remove("light"),
                a.setAttribute("data-menu-styles", "dark"),
                a.setAttribute("data-header-styles", "dark"),
                document
                    .querySelector("html")
                    .style.setProperty("--light", "29 106 56"),
                document
                    .querySelector("html")
                    .style.setProperty("--input-border", "29 106 56"),
                localStorage.setItem("--light", "29 106 56"),
                document
                    .querySelector("html")
                    .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                    .querySelector("html")
                    .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0),
                (document.querySelector("#switcher-background3").checked = !0);
        }),
        it.addEventListener("click", () => {
            localStorage.setItem(
                "bodyBgRGB",
                `${120 + 14} ${66 + 14} ${20 + 14}`
            ),
                localStorage.setItem("darkBgRGB", "120 66 20"),
                localStorage.setItem("ynexMenu", "dark"),
                localStorage.setItem("ynexHeader", "dark"),
                a.classList.add("dark"),
                a.classList.remove("light"),
                a.setAttribute("data-menu-styles", "dark"),
                a.setAttribute("data-header-styles", "dark"),
                document
                    .querySelector("html")
                    .style.setProperty("--light", "125 71 25"),
                document
                    .querySelector("html")
                    .style.setProperty("--input-border", "125 71 25"),
                localStorage.setItem("--light", "125 71 25"),
                document
                    .querySelector("html")
                    .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                    .querySelector("html")
                    .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0),
                (document.querySelector("#switcher-background4").checked = !0);
        }),
        ct.addEventListener("click", () => {
            a.setAttribute("bg-img", "bgimg1"),
                localStorage.setItem("bgimg", "bgimg1");
        }),
        dt.addEventListener("click", () => {
            a.setAttribute("bg-img", "bgimg2"),
                localStorage.setItem("bgimg", "bgimg2");
        }),
        ut.addEventListener("click", () => {
            a.setAttribute("bg-img", "bgimg3"),
                localStorage.setItem("bgimg", "bgimg3");
        }),
        mt.addEventListener("click", () => {
            a.setAttribute("bg-img", "bgimg4"),
                localStorage.setItem("bgimg", "bgimg4");
        }),
        ht.addEventListener("click", () => {
            a.setAttribute("bg-img", "bgimg5"),
                localStorage.setItem("bgimg", "bgimg5");
        }),
        l.addEventListener("click", () => {
            Nt(),
                localStorage.setItem("ynexHeader", "light"),
                localStorage.removeItem("darkBgRGB"),
                localStorage.removeItem("bodyBgRGB"),
                localStorage.removeItem("ynexMenu");
        }),
        n.addEventListener("click", () => {
            Zr(),
                localStorage.setItem("ynexMenu", "dark"),
                localStorage.setItem("ynexHeader", "dark");
        }),
        S.addEventListener("click", () => {
            a.setAttribute("data-menu-styles", "light"),
                localStorage.setItem("ynexMenu", "light");
        }),
        Oe.addEventListener("click", () => {
            a.setAttribute("data-menu-styles", "color"),
                localStorage.setItem("ynexMenu", "color");
        }),
        Re.addEventListener("click", () => {
            a.setAttribute("data-menu-styles", "dark"),
                localStorage.setItem("ynexMenu", "dark");
        }),
        He.addEventListener("click", () => {
            a.setAttribute("data-menu-styles", "gradient"),
                localStorage.setItem("ynexMenu", "gradient");
        }),
        $e.addEventListener("click", () => {
            a.setAttribute("data-menu-styles", "transparent"),
                localStorage.setItem("ynexMenu", "transparent");
        }),
        C.addEventListener("click", () => {
            a.setAttribute("data-header-styles", "light"),
                localStorage.setItem("ynexHeader", "light");
        }),
        $.addEventListener("click", () => {
            a.setAttribute("data-header-styles", "color"),
                localStorage.setItem("ynexHeader", "color");
        }),
        A.addEventListener("click", () => {
            a.setAttribute("data-header-styles", "dark"),
                localStorage.setItem("ynexHeader", "dark");
        }),
        s.addEventListener("click", () => {
            a.setAttribute("data-header-styles", "gradient"),
                localStorage.setItem("ynexHeader", "gradient");
        }),
        Fe.addEventListener("click", () => {
            a.setAttribute("data-header-styles", "transparent"),
                localStorage.setItem("ynexHeader", "transparent");
        }),
        x.addEventListener("click", () => {
            a.setAttribute("data-width", "fullwidth"),
                localStorage.setItem("ynexfullwidth", !0),
                localStorage.removeItem("ynexboxed");
        }),
        m.addEventListener("click", () => {
            a.setAttribute("data-width", "boxed"),
                localStorage.setItem("ynexboxed", !0),
                localStorage.removeItem("ynexfullwidth"),
                Te();
        }),
        ze.addEventListener("click", () => {
            a.setAttribute("data-page-style", "regular"),
                localStorage.setItem("ynexregular", !0),
                localStorage.removeItem("ynexclassic"),
                localStorage.removeItem("ynexmodern");
        }),
        We.addEventListener("click", () => {
            a.setAttribute("data-page-style", "classic"),
                localStorage.setItem("ynexclassic", !0),
                localStorage.removeItem("ynexregular");
        }),
        Ge.addEventListener("click", () => {
            a.setAttribute("data-page-style", "modern"),
                localStorage.setItem("ynexmodern", !0),
                localStorage.removeItem("ynexregular"),
                localStorage.removeItem("ynexclassic");
        }),
        H.addEventListener("click", () => {
            a.setAttribute("data-header-position", "fixed"),
                localStorage.setItem("ynexheaderfixed", !0),
                localStorage.removeItem("ynexheaderscrollable");
        }),
        q.addEventListener("click", () => {
            a.setAttribute("data-header-position", "scrollable"),
                localStorage.setItem("ynexheaderscrollable", !0),
                localStorage.removeItem("ynexheaderfixed");
        }),
        w.addEventListener("click", () => {
            a.setAttribute("data-menu-position", "fixed"),
                localStorage.setItem("ynexmenufixed", !0),
                localStorage.removeItem("ynexmenuscrollable");
        }),
        B.addEventListener("click", () => {
            a.setAttribute("data-menu-position", "scrollable"),
                localStorage.setItem("ynexmenuscrollable", !0),
                localStorage.removeItem("ynexmenufixed");
        }),
        Je.addEventListener("click", () => {
            a.setAttribute("data-vertical-style", "default"),
                a.setAttribute("data-nav-layout", "vertical"),
                v(),
                localStorage.removeItem("ynexverticalstyles"),
                document.querySelectorAll(".main-menu>li.open").forEach((i) => {
                    i.classList.contains("active") ||
                        (i.classList.remove("open"),
                        (i.querySelector("ul").style.display = "none"));
                });
        }),
        Ne.addEventListener("click", () => {
            zr(),
                localStorage.setItem("ynexverticalstyles", "closed"),
                document.querySelectorAll(".main-menu>li.open").forEach((i) => {
                    i.classList.contains("active") ||
                        (i.classList.remove("open"),
                        (i.querySelector("ul").style.display = "none"));
                });
        }),
        Xe.addEventListener("click", () => {
            Wr(), localStorage.setItem("ynexverticalstyles", "detached");
        }),
        Ye.addEventListener("click", () => {
            Gr(), localStorage.setItem("ynexverticalstyles", "icontext");
        }),
        _e.addEventListener("click", () => {
            Me(),
                localStorage.setItem("ynexverticalstyles", "overlay"),
                document.querySelectorAll(".main-menu>li.open").forEach((i) => {
                    i.classList.contains("active") ||
                        (i.classList.remove("open"),
                        (i.querySelector("ul").style.display = "none"));
                });
        }),
        je.addEventListener("click", () => {
            Jr(), localStorage.setItem("ynexverticalstyles", "doublemenu");
        }),
        Ue.addEventListener("click", () => {
            a.removeAttribute("data-vertical-style"),
                Nr(),
                localStorage.setItem("ynexnavstyles", "menu-click"),
                localStorage.removeItem("ynexverticalstyles"),
                document.querySelectorAll(".main-menu>li.open").forEach((i) => {
                    i.classList.contains("active") ||
                        (i.classList.remove("open"),
                        (i.querySelector("ul").style.display = "none"));
                }),
                document
                    .querySelector("html")
                    .getAttribute("data-nav-layout") == "horizontal" &&
                    ((document.querySelector(".main-menu").style.marginLeft =
                        "0px"),
                    (document.querySelector(".main-menu").style.marginRight =
                        "0px"),
                    F());
        }),
        Ke.addEventListener("click", () => {
            a.removeAttribute("data-vertical-style"),
                Yr(),
                localStorage.setItem("ynexnavstyles", "menu-hover"),
                localStorage.removeItem("ynexverticalstyles"),
                document
                    .querySelector("html")
                    .getAttribute("data-nav-layout") == "horizontal" &&
                    ((document.querySelector(".main-menu").style.marginLeft =
                        "0px"),
                    (document.querySelector(".main-menu").style.marginRight =
                        "0px"),
                    F());
        }),
        Qe.addEventListener("click", () => {
            a.removeAttribute("data-vertical-style"),
                Xr(),
                localStorage.setItem("ynexnavstyles", "icon-click"),
                localStorage.removeItem("ynexverticalstyles"),
                document
                    .querySelector("html")
                    .getAttribute("data-nav-layout") == "horizontal" &&
                    ((document.querySelector(".main-menu").style.marginLeft =
                        "0px"),
                    (document.querySelector(".main-menu").style.marginRight =
                        "0px"),
                    F(),
                    document
                        .querySelector("#slide-left")
                        .classList.add("d-none")),
                document.querySelectorAll(".main-menu>li.open").forEach((i) => {
                    i.classList.contains("active") ||
                        (i.classList.remove("open"),
                        (i.querySelector("ul").style.display = "none"));
                });
        }),
        Ze.addEventListener("click", () => {
            a.removeAttribute("data-vertical-style"),
                _r(),
                localStorage.setItem("ynexnavstyles", "icon-hover"),
                localStorage.removeItem("ynexverticalstyles"),
                document
                    .querySelector("html")
                    .getAttribute("data-nav-layout") == "horizontal" &&
                    ((document.querySelector(".main-menu").style.marginLeft =
                        "0px"),
                    (document.querySelector(".main-menu").style.marginRight =
                        "0px"),
                    F(),
                    document
                        .querySelector("#slide-left")
                        .classList.add("d-none"));
        }),
        t.addEventListener("click", () => {
            let i = document.querySelector(".main-content");
            localStorage.removeItem("ynexlayout"),
                localStorage.setItem("ynexverticalstyles", "default"),
                Yt(),
                D(),
                i.removeEventListener("click", f),
                (document.querySelector(".main-menu").style.marginLeft = "0px"),
                (document.querySelector(".main-menu").style.marginRight =
                    "0px"),
                document.querySelectorAll(".slide").forEach((re) => {
                    re.classList.contains("open") &&
                        !re.classList.contains("active") &&
                        (re.querySelector("ul").style.display = "none");
                });
        }),
        o.addEventListener("click", () => {
            let i = document.querySelector(".main-content");
            a.removeAttribute("data-vertical-style"),
                localStorage.setItem("ynexlayout", "horizontal"),
                localStorage.removeItem("ynexverticalstyles"),
                Vr(),
                f(),
                i.addEventListener("click", f);
        }),
        r.addEventListener("click", () => {
            localStorage.setItem("ynexrtl", !0),
                localStorage.removeItem("ynexltr"),
                Qr(),
                document.querySelector(".noUi-target") &&
                    (console.log("working"),
                    document.querySelectorAll(".noUi-origin").forEach((i) => {
                        i.classList.add("!transform-none");
                    }));
        }),
        e.addEventListener("click", () => {
            localStorage.setItem("ynexltr", !0),
                localStorage.removeItem("ynexrtl"),
                Jt(),
                document.querySelector(".noUi-target") &&
                    document.querySelectorAll(".noUi-origin").forEach((i) => {
                        i.classList.add("!transform-none");
                    });
        }),
        yt.addEventListener("click", () => {
            eo(),
                D(),
                document
                    .querySelector("html")
                    .setAttribute("data-menu-styles", "dark"),
                (document.querySelector("#switcher-menu-dark").checked = !0),
                document.querySelectorAll(".slide").forEach((i) => {
                    i.classList.contains("open") &&
                        !i.classList.contains("active") &&
                        (i.querySelector("ul").style.display = "none");
                });
        }),
        (ft.onclick = () => {
            document.querySelector("html").setAttribute("loader", "enable"),
                localStorage.setItem("loaderEnable", "true");
        }),
        (gt.onclick = () => {
            document.querySelector("html").setAttribute("loader", "disable"),
                localStorage.setItem("loaderEnable", "false");
        });
}

function Jt() {
    document.querySelector("html").setAttribute("dir", "ltr"),
        (document.querySelector("#switcher-ltr").checked = !0),
        L();
}

function Qr() {
    document.querySelector("html").setAttribute("dir", "rtl"), L();
}

function Nt() {
    let e = document.querySelector("html");
    e.setAttribute("class", "light"),
        e.setAttribute("data-header-styles", "light"),
        localStorage.getItem("ynexlayout") == "horizontal" &&
            e.setAttribute("data-menu-styles", "light"),
        localStorage.getItem("primaryRGB") || e.setAttribute("style", ""),
        (document.querySelector("#switcher-light-theme").checked = !0),
        (document.querySelector("#switcher-menu-light").checked = !0),
        (document.querySelector("#switcher-header-light").checked = !0),
        k(),
        localStorage.removeItem("ynexdarktheme"),
        localStorage.removeItem("ynexbgColor"),
        localStorage.removeItem("ynexheaderbg"),
        localStorage.removeItem("ynexbgwhite"),
        localStorage.removeItem("ynexmenubg"),
        localStorage.removeItem("ynexmenubg"),
        L(),
        e.style.removeProperty("--body-bg-rgb"),
        e.style.removeProperty("--body-bg-rgb2"),
        e.style.removeProperty("--body-bg"),
        e.style.removeProperty("--dark-bg"),
        e.style.removeProperty("--light"),
        e.style.removeProperty("--form-control-bg"),
        e.style.removeProperty("--input-border"),
        (document.querySelector("#switcher-background4").checked = !1),
        (document.querySelector("#switcher-background3").checked = !1),
        (document.querySelector("#switcher-background2").checked = !1),
        (document.querySelector("#switcher-background1").checked = !1),
        (document.querySelector("#switcher-background").checked = !1),
        (document.querySelector("#switcher-menu-light").checked = !0),
        (document.querySelector("#switcher-header-light").checked = !0);
}

function Zr() {
    let e = document.querySelector("html");
    e.setAttribute("class", "dark"),
        e.setAttribute("data-header-styles", "dark"),
        e.setAttribute("data-menu-styles", "dark"),
        localStorage.getItem("primaryRGB") || e.setAttribute("style", ""),
        (document.querySelector("#switcher-menu-dark").checked = !0),
        (document.querySelector("#switcher-header-dark").checked = !0),
        document.querySelector("html").style.removeProperty("--body-bg-rgb"),
        document.querySelector("html").style.removeProperty("--body-bg-rgb2"),
        document.querySelector("html").style.removeProperty("--body-bg"),
        document.querySelector("html").style.removeProperty("--dark-bg"),
        document.querySelector("html").style.removeProperty("--light"),
        document
            .querySelector("html")
            .style.removeProperty("--form-control-bg"),
        document.querySelector("html").style.removeProperty("--input-border"),
        k(),
        localStorage.setItem("ynexdarktheme", !0),
        localStorage.removeItem("ynexlighttheme"),
        localStorage.removeItem("bodyBgRGB"),
        localStorage.removeItem("ynexbgColor"),
        localStorage.removeItem("ynexheaderbg"),
        localStorage.removeItem("ynexbgwhite"),
        localStorage.removeItem("ynexmenubg"),
        L(),
        (document.querySelector("#switcher-background4").checked = !1),
        (document.querySelector("#switcher-background3").checked = !1),
        (document.querySelector("#switcher-background2").checked = !1),
        (document.querySelector("#switcher-background1").checked = !1),
        (document.querySelector("#switcher-background").checked = !1),
        (document.querySelector("#switcher-menu-dark").checked = !0),
        (document.querySelector("#switcher-header-dark").checked = !0);
}

function Yt() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "overlay"),
        e.removeAttribute("data-nav-style"),
        localStorage.removeItem("ynexnavstyles"),
        e.removeAttribute("data-toggled"),
        (document.querySelector("#switcher-vertical").checked = !0),
        (document.querySelector("#switcher-menu-click").checked = !1),
        (document.querySelector("#switcher-menu-hover").checked = !1),
        (document.querySelector("#switcher-icon-click").checked = !1),
        (document.querySelector("#switcher-icon-hover").checked = !1),
        L(),
        localStorage.ynexMenu || e.setAttribute("data-menu-styles", "dark");
}

function Vr() {
    (document.querySelector("#switcher-horizontal").checked = !0),
        (document.querySelector("#switcher-menu-click").checked = !0);
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "horizontal"),
        e.removeAttribute("data-vertical-style"),
        e.getAttribute("data-nav-style") ||
            e.setAttribute("data-nav-style", "menu-click"),
        !localStorage.ynexMenu &&
            !localStorage.darkBgRGB &&
            (e.setAttribute("data-menu-styles", "light"),
            (document.querySelector("#switcher-menu-light").checked = !0),
            L()),
        L(),
        Te();
}

function eo() {
    let e = document.querySelector("html");
    localStorage.getItem("ynexlayout") == "horizontal" &&
        (document.querySelector(".main-menu").style.display = "block"),
        L(),
        localStorage.clear(),
        Nt(),
        document.querySelector("html").removeAttribute("style"),
        e.removeAttribute("data-nav-style"),
        e.removeAttribute("data-menu-position"),
        e.removeAttribute("data-header-position"),
        e.removeAttribute("data-width"),
        e.removeAttribute("data-page-style"),
        e.removeAttribute("bg-img"),
        e.style.removeProperty("--primary"),
        e.style.removeProperty("--body-bg-rgb"),
        Jt(),
        Yt(),
        Gt.removeEventListener("click", f),
        (document.querySelector("#switcher-classic").checked = !1),
        (document.querySelector("#switcher-modern").checked = !1),
        (document.querySelector("#switcher-regular").checked = !0),
        (document.querySelector("#switcher-full-width").checked = !0),
        (document.querySelector("#switcher-boxed").checked = !1),
        (document.querySelector("#switcher-menu-fixed").checked = !0),
        (document.querySelector("#switcher-menu-scroll").checked = !1),
        (document.querySelector("#switcher-header-fixed").checked = !0),
        (document.querySelector("#switcher-header-scroll").checked = !1),
        (document.querySelector("#switcher-default-menu").checked = !0),
        (document.querySelector("#switcher-closed-menu").checked = !1),
        (document.querySelector("#switcher-icontext-menu").checked = !1),
        (document.querySelector("#switcher-icon-overlay").checked = !1),
        (document.querySelector("#switcher-detached").checked = !1),
        (document.querySelector("#switcher-double-menu").checked = !1),
        (document.querySelector("#switcher-primary").checked = !1),
        (document.querySelector("#switcher-primary1").checked = !1),
        (document.querySelector("#switcher-primary2").checked = !1),
        (document.querySelector("#switcher-primary3").checked = !1),
        (document.querySelector("#switcher-primary4").checked = !1),
        (document.querySelector("#switcher-background").checked = !1),
        (document.querySelector("#switcher-background1").checked = !1),
        (document.querySelector("#switcher-background2").checked = !1),
        (document.querySelector("#switcher-background3").checked = !1),
        (document.querySelector("#switcher-background4").checked = !1),
        (document.querySelector("#switcher-bg-img").checked = !1),
        (document.querySelector("#switcher-bg-img1").checked = !1),
        (document.querySelector("#switcher-bg-img2").checked = !1),
        (document.querySelector("#switcher-bg-img3").checked = !1),
        (document.querySelector("#switcher-bg-img4").checked = !1),
        k(),
        (document.querySelector(".main-menu").style.marginLeft = "0px"),
        (document.querySelector(".main-menu").style.marginRight = "0px");
}

function L() {
    if (
        (localStorage.getItem("ynexdarktheme") &&
            (document.querySelector("#switcher-dark-theme").checked = !0),
        localStorage.getItem("ynexlayout") === "horizontal"
            ? ((document.querySelector("#switcher-horizontal").checked = !0),
              (document.querySelector("#switcher-menu-click").checked = !0))
            : (document.querySelector("#switcher-vertical").checked = !0),
        localStorage.getItem("ynexrtl")
            ? (document.querySelector("#switcher-rtl").checked = !0)
            : (document.querySelector("#switcher-ltr").checked = !0),
        localStorage.getItem("ynexHeader") === "light" &&
            (document.querySelector("#switcher-header-light").checked = !0),
        localStorage.getItem("ynexHeader") === "color" &&
            (document.querySelector("#switcher-header-primary").checked = !0),
        localStorage.getItem("ynexHeader") === "gradient" &&
            (document.querySelector("#switcher-header-gradient").checked = !0),
        localStorage.getItem("ynexHeader") === "dark" &&
            (document.querySelector("#switcher-header-dark").checked = !0),
        localStorage.getItem("ynexHeader") === "transparent" &&
            (document.querySelector("#switcher-header-transparent").checked =
                !0),
        localStorage.getItem("ynexMenu") === "light" &&
            (document.querySelector("#switcher-menu-light").checked = !0),
        localStorage.getItem("ynexMenu") === "color" &&
            (document.querySelector("#switcher-menu-primary").checked = !0),
        localStorage.getItem("ynexMenu") === "gradient" &&
            (document.querySelector("#switcher-menu-gradient").checked = !0),
        localStorage.getItem("ynexMenu") === "dark" &&
            (document.querySelector("#switcher-menu-dark").checked = !0),
        localStorage.getItem("ynexMenu") === "transparent" &&
            (document.querySelector("#switcher-menu-transparent").checked = !0),
        localStorage.getItem("ynexboxed") &&
            (document.querySelector("#switcher-boxed").checked = !0),
        localStorage.getItem("ynexheaderscrollable") &&
            (document.querySelector("#switcher-header-scroll").checked = !0),
        localStorage.getItem("ynexmenuscrollable") &&
            (document.querySelector("#switcher-menu-scroll").checked = !0),
        localStorage.getItem("ynexheaderfixed") &&
            (document.querySelector("#switcher-header-fixed").checked = !0),
        localStorage.getItem("ynexmenufixed") &&
            (document.querySelector("#switcher-menu-fixed").checked = !0),
        localStorage.getItem("ynexclassic") &&
            (document.querySelector("#switcher-classic").checked = !0),
        localStorage.getItem("ynexmodern") &&
            (document.querySelector("#switcher-modern").checked = !0),
        localStorage.ynexverticalstyles)
    )
        switch (localStorage.getItem("ynexverticalstyles")) {
            case "default":
                document.querySelector("#switcher-default-menu").checked = !0;
                break;
            case "closed":
                document.querySelector("#switcher-closed-menu").checked = !0;
                break;
            case "icontext":
                document.querySelector("#switcher-icontext-menu").checked = !0;
                break;
            case "overlay":
                document.querySelector("#switcher-icon-overlay").checked = !0;
                break;
            case "detached":
                document.querySelector("#switcher-detached").checked = !0;
                break;
            case "doublemenu":
                document.querySelector("#switcher-double-menu").checked = !0;
                break;
            default:
                document.querySelector("#switcher-default-menu").checked = !0;
                break;
        }
    if (localStorage.ynexnavstyles)
        switch (localStorage.getItem("ynexnavstyles")) {
            case "menu-click":
                document.querySelector("#switcher-menu-click").checked = !0;
                break;
            case "menu-hover":
                document.querySelector("#switcher-menu-hover").checked = !0;
                break;
            case "icon-click":
                document.querySelector("#switcher-icon-click").checked = !0;
                break;
            case "icon-hover":
                document.querySelector("#switcher-icon-hover").checked = !0;
                break;
        }
    localStorage.loaderEnable != "true" &&
        (document.querySelector("#switcher-loader-disable").checked = !0);
}
let c, wt;

function k() {
    (wt = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-rgb")
        .trim()),
        (c = localStorage.getItem("primaryRGB") || wt),
        document.querySelector("#crm-total-customers") !== null && jt(c),
        document.querySelector("#crm-revenue-analytics") !== null && Ut(c),
        document.querySelector("#crm-profits-earned") !== null && Qt(c),
        document.querySelector("#leads-source") !== null && Zt(c),
        document.querySelector("#earnings") !== null && er(c),
        document.querySelector("#crypto") !== null && rr(c),
        document.querySelector("#subscriptionOverview") !== null && or(c),
        document.querySelector("#candidates-chart") !== null && ar(c),
        document.querySelector("#nft-balance-chart") !== null && lr(c),
        document.querySelector("#nft-statistics") !== null && sr(c),
        document.querySelector("#salesOverview") !== null && ir(c),
        document.querySelector("#sale-value") !== null && dr(c),
        document.querySelector("#analytics-bouncerate") !== null && ur(c),
        document.querySelector("#sessions") !== null && mr(c),
        document.querySelector("#audienceReport") !== null && hr(c),
        document.querySelector("#country-sessions") !== null && yr(c),
        document.querySelector("#session-users") !== null && gr(c),
        document.querySelector("#projectAnalysis") !== null && vr(c),
        document.querySelector("#performanceReport") !== null && Sr(c),
        document.querySelector("#jobs-summary") !== null && xr(c),
        document.querySelector("#total-invested") !== null && kr(c),
        document.querySelector("#totalInvestmentsStats") !== null && qr(c),
        document.querySelector("#stocks-marketcap") !== null && Ar(c),
        document.querySelector("#courses-earnings") !== null && Br(c),
        document.querySelector("#course-payouts") !== null && Er(c),
        document.querySelector("#waterTrack") !== null && Cr(c),
        document.querySelector("#report") !== null && Dr(c),
        document.querySelector("#views") !== null && Tr(c);
}
if (document.querySelector("#hs-overlay-switcher")) {
    const e = document.querySelector(".pickr-container-primary"),
        r = document.querySelector(".theme-container-primary"),
        t = document.querySelector(".pickr-container-background"),
        o = document.querySelector(".theme-container-background"),
        l = [
            [
                "nano",
                {
                    defaultRepresentation: "RGB",
                    components: {
                        preview: !0,
                        opacity: !1,
                        hue: !0,
                        interaction: {
                            hex: !1,
                            rgba: !0,
                            hsva: !1,
                            input: !0,
                            clear: !1,
                            save: !1,
                        },
                    },
                },
            ],
        ],
        n = [];
    let m = null;
    for (const [B, H] of l) {
        const w = document.createElement("button");
        (w.innerHTML = B),
            n.push(w),
            w.addEventListener("click", () => {
                const C = document.createElement("p");
                e.appendChild(C), m && m.destroyAndRemove();
                for (const A of n)
                    A.classList[A === w ? "add" : "remove"]("active");
                (m = new Pickr(
                    Object.assign(
                        {
                            el: C,
                            theme: B,
                            default: "#845adf",
                        },
                        H
                    )
                )),
                    m.on("changestop", (A, $) => {
                        let s = $.getColor().toRGBA(),
                            S = document.querySelector("html");
                        S.style.setProperty(
                            "--primary",
                            `${Math.floor(s[0])} ${Math.floor(
                                s[1]
                            )} ${Math.floor(s[2])}`
                        ),
                            S.style.setProperty(
                                "--color-primary-rgb",
                                `${Math.floor(s[0])} ,${Math.floor(
                                    s[1]
                                )}, ${Math.floor(s[2])}`
                            ),
                            localStorage.setItem(
                                "primaryRGB",
                                `${Math.floor(s[0])}, ${Math.floor(
                                    s[1]
                                )}, ${Math.floor(s[2])}`
                            ),
                            localStorage.setItem(
                                "primaryRGB1",
                                `${Math.floor(s[0])} ${Math.floor(
                                    s[1]
                                )} ${Math.floor(s[2])}`
                            ),
                            k();
                    });
            }),
            r.appendChild(w);
    }
    n[0].click();
    const x = [];
    let q = null;
    for (const [B, H] of l) {
        const w = document.createElement("button");
        (w.innerHTML = B),
            x.push(w),
            w.addEventListener("click", () => {
                const C = document.createElement("p");
                t.appendChild(C), q && q.destroyAndRemove();
                for (const A of n)
                    A.classList[A === w ? "add" : "remove"]("active");
                (q = new Pickr(
                    Object.assign(
                        {
                            el: C,
                            theme: B,
                            default: "#845adf",
                        },
                        H
                    )
                )),
                    q.on("changestop", (A, $) => {
                        let s = $.getColor().toRGBA(),
                            S = document.querySelector("html");
                        S.style.setProperty(
                            "--body-bg",
                            `${Math.floor(s[0] + 14)}
             ${Math.floor(s[1] + 14)}
              ${Math.floor(s[2] + 14)}`
                        ),
                            S.style.setProperty(
                                "--dark-bg",
                                `
            ${Math.floor(s[0])}
            ${Math.floor(s[1])}
            ${Math.floor(s[2])}
            `
                            ),
                            S.style.setProperty(
                                "--light",
                                `
            ${Math.floor(s[0] + 5)}
            ${Math.floor(s[1] + 5)}
            ${Math.floor(s[2] + 5)}
            `
                            ),
                            localStorage.removeItem("bgtheme"),
                            k(),
                            S.classList.add("dark"),
                            S.classList.remove("light"),
                            S.setAttribute("data-menu-styles", "dark"),
                            S.setAttribute("data-header-styles", "dark"),
                            (document.querySelector(
                                "#switcher-dark-theme"
                            ).checked = !0),
                            localStorage.setItem(
                                "bodyBgRGB",
                                `${Math.floor(s[0] + 14)}
             ${Math.floor(s[1] + 14)}
              ${Math.floor(s[2] + 14)}`
                            ),
                            localStorage.setItem(
                                "--light",
                                `${Math.floor(s[0] + 5)}
             ${Math.floor(s[1] + 5)}
              ${Math.floor(s[2] + 5)}`
                            ),
                            localStorage.setItem(
                                "darkBgRGB",
                                `${Math.floor(s[0])} ${Math.floor(
                                    s[1]
                                )} ${Math.floor(s[2])}`
                            );
                    });
            }),
            o.appendChild(w);
    }
    x[0].click();
}
k();

function to() {
    (localStorage.bodyBgRGB || localStorage.darkBgRGB) &&
        ((document.querySelector("#switcher-dark-theme").checked = !0),
        (document.querySelector("#switcher-menu-dark").checked = !0),
        (document.querySelector("#switcher-header-dark").checked = !0)),
        localStorage.bodyBgRGB &&
            localStorage.darkBgRGB &&
            (localStorage.bodyBgRGB == "34 44 110" &&
                (document.querySelector("#switcher-background").checked = !0),
            localStorage.bodyBgRGB == "22 92 129" &&
                (document.querySelector("#switcher-background1").checked = !0),
            localStorage.bodyBgRGB == "104 51 149" &&
                (document.querySelector("#switcher-background2").checked = !0),
            localStorage.bodyBgRGB == "38 115 64" &&
                (document.querySelector("#switcher-background3").checked = !0),
            localStorage.bodyBgRGB == "134 80 34" &&
                (document.querySelector("#switcher-background4").checked = !0)),
        localStorage.primaryRGB &&
            (localStorage.primaryRGB == "58, 88, 146" &&
                (document.querySelector("#switcher-primary").checked = !0),
            localStorage.primaryRGB == "92, 144, 163" &&
                (document.querySelector("#switcher-primary1").checked = !0),
            localStorage.primaryRGB == "161, 90, 223" &&
                (document.querySelector("#switcher-primary2").checked = !0),
            localStorage.primaryRGB == "78, 172, 76" &&
                (document.querySelector("#switcher-primary3").checked = !0),
            localStorage.primaryRGB == "223, 90, 90" &&
                (document.querySelector("#switcher-primary4").checked = !0)),
        localStorage.loaderEnable == "true" &&
            (document.querySelector("#switcher-loader-enable").checked = !0);
}

}