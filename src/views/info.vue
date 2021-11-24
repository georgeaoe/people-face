<template>
  <div class="info">
    <div class="header">
      <div class="title1">个人信息详情</div>
      <div class="title2">Personal Information</div>
    </div>
    <div class="main">
      <div class="tag">
        <div class="top5-title">
          <span>相关功能</span>
        </div>
        <div class="top5-content">
          <ul>
            <li>
              <div class="cicle"></div>
              <div class="li-content">
                <span>赚取积分</span>
              </div>
            </li>
            <li>
              <div class="cicle"></div>
              <div class="li-content">
                <span>交友</span>
              </div>
            </li>
            <li>
              <div class="cicle"></div>
              <div class="li-content">
                <span>找工作</span>
              </div>
            </li>
            <li>
              <div class="cicle"></div>
              <div class="li-content">
                <span>匹配队友</span>
              </div>
            </li>
            <li>
              <div class="cicle"></div>
              <div class="li-content">
                <span>退出登录</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="top5-title">
          <span>个人能力</span>
        </div>
      </div>
      <div class="total">
        <div class="data1">
          <span>人气值</span>
          <p>56847</p>
        </div>
        <div class="data2">
          <span>积分值</span>
          <p>1457000</p>
        </div>
        <div class="data3">
          <span>最近访客</span>
          <p>3000</p>
        </div>
        <div class="data4">
          <span>VIP</span>
          <p>5</p>
        </div>
        <canvas class="rain"></canvas>
        <canvas class="dashed"></canvas>
        <div class="sphere">
          <div class="sphere-bg"></div>
          <div class="sum">
            <span style="margin-left: -6rem">综合能力</span>
            <p>88.888</p>
          </div>
        </div>
        <div class="cicle3"></div>
        <div class="cicle4"></div>
        <div class="cicle5"></div>
        <div class="cicle6"></div>
        <div class="cicle7"></div>
        <div class="cicle8">
          <span style="margin-left: -0.11rem">89%</span>
          <p>完成率</p>
        </div>
        <div class="cicle9">
          <span style="margin-left: -0.11rem">89%</span>
          <p>完成率</p>
        </div>
        <div class="cicle10">
          <span style="margin-left: -0.11rem">89%</span>
          <p>完成率</p>
        </div>
        <div class="cicle11">
          <span style="margin-left: -0.11rem">89%</span>
          <p>完成率</p>
        </div>
      </div>
      <div class="analyse">
        <div class="analyse-title">
          <span>综合情况分析</span>
        </div>
        <ul>
          
          <li>
            <img src="../images/s2.png" alt="" />
            <h5>个人定位</h5>
            <br />
            <span>Personal Locate</span><br />
            <em>项目经理</em>
          </li>
          <li>
            <img src="../images/s1.png" alt="" />
            <h5>学习目标</h5>
            <br />
            <span>Studying Target</span><br />
            <em>GPA:4.0</em>
          </li>
          <li>
            <img src="../images/s2.png" alt="" />
            <h5>比赛需求</h5>
            <br />
            <span>Race Target</span><br />
            <em>文案、美工</em>
          </li>
        </ul>
      </div>
      <div class="sale">
        <ul>
          <li>
            <div class="showImg">
              <img src="../images/shoe.png" alt="" />
            </div>
            <div class="data">
              <span>运动</span>
              <span>52.56</span>
            </div>
            <div class="shoeChart"></div>
          </li>
          <li>
            <div class="showImg">
              <img src="../images/clothes.png" alt="" />
            </div>
            <div class="data">
              <span>学习</span>
              <span>32.56</span>
            </div>
            <div class="clothesChart"></div>
          </li>
          <li>
            <div class="showImg">
              <img src="../images/mz.png" alt="" />
            </div>
            <div class="data">
              <span>交际</span>
              <span>12.56</span>
            </div>
            <div class="mzChart"></div>
          </li>
        </ul>
      </div>
      <echartt class="chart"></echartt>
    </div>
    <div class="bottom">
      <h5><span>数据状况</span></h5>
      <p>Data Status</p>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import echartt from "./radar.vue";
export default {
  name: "info",
  components: { echartt },
  mounted() {
    this.draw(".shoeChart", 52563, "击败", 65000, "#09c4ca");
    this.draw(".clothesChart", 32563, "击败", 45000, "#09c4ca");
    this.draw(".mzChart", 12563, "击败", 35000, "#09c4ca");

    this.rainBg();
    this.dashed();
  },
  methods: {
    draw(ele, val, con, max, color) {
      var chart = echarts.init(document.querySelector(ele));
      var value = val;
      var w = 18.75;
      var option = {
        grid: {
          left: "20%",
          top: "0",
          right: "20%",
          bottom: "0",
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "category",
            inverse: false,
            data: [],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "pictorialBar",
            data: [value],
            itemStyle: {
              normal: {
                color: color,
              },
            },
            symbolRepeat: "fixed",
            symbolClip: true,
            symbolSize: [0.5 * w, w],
            symbol: "roundRect",
            label: {
              show: true,
              position: "left",
              formatter: function () {
                return con;
              },
              color: "#fff",
              fontSize: 0.7 * w,
            },
            z: 1000,
          },
          {
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#193040",
              },
            },
            data: [max],
            animationDuration: 0,
            symbolRepeat: "fixed",
            // symbolMargin: '20%',
            symbol: "roundRect",
            symbolSize: [0.5 * w, w],
            label: {
              show: true,
              position: "right",
              formatter: function () {
                return Math.floor((val * 100) / max) + "%";
              },
              color: "#fff",
              fontSize: 0.7 * w,
            },
          },
        ],
      };
      chart.setOption(option);
    },
    rainBg() {
      var c = document.querySelector(".rain");
      var ctx = c.getContext("2d"); //获取canvas上下文
      var w = (c.width = document.querySelector(".total").clientWidth);
      var h = (c.height = document.querySelector(".total").clientHeight);
      //设置canvas宽、高

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      function RainDrop() {}
      //雨滴对象 这是绘制雨滴动画的关键
      RainDrop.prototype = {
        init: function () {
          this.x = random(0, w); //雨滴的位置x
          this.y = h; //雨滴的位置y
          this.color = "hsl(180, 100%, 50%)"; //雨滴颜色 长方形的填充色
          this.vy = random(4, 5); //雨滴下落速度
          this.hit = 0; //下落的最大值
          this.size = 2; //长方形宽度
        },
        draw: function () {
          if (this.y > this.hit) {
            var linearGradient = ctx.createLinearGradient(
              this.x,
              this.y,
              this.x,
              this.y + this.size * 30
            );
            // 设置起始颜色
            linearGradient.addColorStop(0, "#14789c");
            // 设置终止颜色
            linearGradient.addColorStop(1, "#090723");
            // 设置填充样式
            ctx.fillStyle = linearGradient;
            ctx.fillRect(this.x, this.y, this.size, this.size * 50); //绘制长方形，通过多次叠加长方形，形成雨滴下落效果
          }
          this.update(); //更新位置
        },
        update: function () {
          if (this.y > this.hit) {
            this.y -= this.vy; //未达到底部，增加雨滴y坐标
          } else {
            this.init();
          }
        },
      };

      function resize() {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
      }

      //初始化一个雨滴

      var rs = [];
      for (var i = 0; i < 10; i++) {
        setTimeout(function () {
          var r = new RainDrop();
          r.init();
          rs.push(r);
        }, i * 300);
      }

      function anim() {
        ctx.clearRect(0, 0, w, h); //填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
        for (var i = 0; i < rs.length; i++) {
          rs[i].draw(); //绘制雨滴
        }
        requestAnimationFrame(anim); //控制动画帧
      }

      window.addEventListener("resize", resize);
      //启动动画
      anim();
    },
    dashed() {
      var canvas = document.querySelector(".dashed");
      var ctx = canvas.getContext("2d");
      var w = (canvas.width = document.querySelector(".total").clientWidth);
      var h = (canvas.height =
        (document.querySelector(".total").clientHeight / 3) * 2);
      ctx.lineWidth = 3;
      ctx.setLineDash([3, 3]);
      ctx.fillStyle = "#93f8fb";
      ctx.shadowOffsetX = 0;
      // 阴影的y偏移
      ctx.shadowOffsetY = 0;
      // 阴影颜色
      ctx.shadowColor = "#93f8fb";
      // 阴影的模糊半径
      ctx.shadowBlur = 15;
      ctx.save(); //缓存初始状态
      // 绘制第一条曲线
      ctx.beginPath();
      var grd = ctx.createLinearGradient((w / 11) * 2, h / 3, (w / 5) * 2, h);
      grd.addColorStop(0, "#54e2e6");
      grd.addColorStop(1, "#065261");
      ctx.strokeStyle = grd;
      ctx.moveTo((w / 5) * 2, h);
      ctx.quadraticCurveTo(w / 5, (h / 6) * 5, (w / 11) * 2, h / 3);
      ctx.stroke();
      // 绘制第一条曲线上的圆光效果
      ctx.beginPath();
      ctx.moveTo((w / 11) * 2, h / 3);
      ctx.arc((w / 11) * 2, h / 3, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      // 绘制第二条线
      ctx.beginPath();
      var grd1 = ctx.createLinearGradient(
        (w / 11) * 3.3,
        h / 2,
        (w / 3) * 1.1,
        (h / 6) * 5
      );
      grd1.addColorStop(0, "#e08d03");
      grd1.addColorStop(1, "#2e6a5c");
      ctx.strokeStyle = grd1;
      ctx.moveTo((w / 3) * 1.1, (h / 6) * 5);
      ctx.quadraticCurveTo((w / 5) * 1.5, (h / 6) * 4.2, (w / 11) * 3.3, h / 2);
      ctx.stroke();
      // 绘制第二条曲线上的圆光效果
      ctx.beginPath();
      ctx.moveTo((w / 11) * 3.3, h / 2);
      ctx.arc((w / 11) * 3.3, h / 2, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      // 绘制第三条线
      ctx.beginPath();
      var grd2 = ctx.createLinearGradient(
        (w / 3) * 1.4,
        h / 5,
        (w / 5) * 2,
        h / 2
      );
      grd2.addColorStop(0, "#e08d03");
      grd2.addColorStop(1, "#2e6a5c");
      ctx.strokeStyle = grd2;
      ctx.moveTo((w / 5) * 2, h / 2);
      ctx.quadraticCurveTo((w / 3) * 1.2, (h / 4) * 1.4, (w / 3) * 1.4, h / 5);
      ctx.stroke();
      // 绘制第三条曲线上的圆光效果
      ctx.beginPath();
      ctx.moveTo((w / 3) * 1.4, h / 5);
      ctx.arc((w / 3) * 1.4, h / 5, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      // 绘制第四条线
      ctx.beginPath();
      var grd3 = ctx.createLinearGradient(
        (w / 5) * 3.1,
        (h / 3) * 1.2,
        (w / 5) * 3.2,
        (h / 2) * 1.5
      );
      grd3.addColorStop(0, "#e08d03");
      grd3.addColorStop(1, "#2e6a5c");
      ctx.strokeStyle = grd3;
      ctx.moveTo((w / 5) * 3.2, (h / 2) * 1.5);
      ctx.quadraticCurveTo(
        (w / 5) * 3.35,
        (h / 2) * 1.2,
        (w / 5) * 3.1,
        (h / 3) * 1.2
      );
      ctx.stroke();
      // 绘制第四条曲线上的圆光效果
      ctx.beginPath();
      ctx.moveTo((w / 5) * 3.1, (h / 3) * 1.2);
      ctx.arc((w / 5) * 3.1, (h / 3) * 1.2, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      // 绘制第五条线
      ctx.beginPath();
      var grd4 = ctx.createLinearGradient(
        (w / 5) * 3.3,
        h / 4,
        (w / 5) * 3.2,
        (h / 2) * 1.9
      );
      grd4.addColorStop(0, "#e08d03");
      grd4.addColorStop(1, "#2e6a5c");
      ctx.strokeStyle = grd4;
      ctx.moveTo((w / 5) * 3.03, (h / 2) * 1.9);
      ctx.quadraticCurveTo((w / 5) * 3.8, (h / 2) * 1.2, (w / 5) * 3.3, h / 4);
      ctx.stroke();
      // 绘制第五条曲线上的圆光效果
      ctx.beginPath();
      ctx.moveTo((w / 5) * 3.3, h / 4);
      ctx.arc((w / 5) * 3.3, h / 4, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.save();
      // 绘制第六条线
      ctx.beginPath();
      var grd5 = ctx.createLinearGradient(
        (w / 5) * 3.8,
        (h / 2) * 1.2,
        (w / 5) * 2.9,
        h
      );
      grd5.addColorStop(0, "#e08d03");
      grd5.addColorStop(1, "#2e6a5c");
      ctx.strokeStyle = grd5;
      ctx.moveTo((w / 5) * 2.9, h);
      ctx.quadraticCurveTo(
        (w / 5) * 3.7,
        (h / 2) * 1.6,
        (w / 5) * 3.8,
        (h / 2) * 1.2
      );
      ctx.stroke();
      // 绘制第六条曲线上的圆光效果
      ctx.beginPath();
      ctx.moveTo((w / 5) * 3.8, (h / 2) * 1.2);
      ctx.arc((w / 5) * 3.8, (h / 2) * 1.2, 5, 0, Math.PI * 2);
      ctx.fill();
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  display: block;
}
.info {
  width: 100%;
  height: 100vh;
  background: url("../images/53bg.png") no-repeat;
}
.header {
  height: 12%;
  width: 100%;
  background: url("../images/53titlebg.png") no-repeat top center;
  background-size: 100%;
  text-align: center;
}
.title1 {
  font-size: 3rem;
  height: 50%;
  margin: auto;
  display: table;
  font-weight: 500;
  background-image: -webkit-linear-gradient(bottom, #86919e, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title2 {
  font-size: 1.5rem;
  background-image: -webkit-linear-gradient(bottom, #86919e, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main {
  height: 78%;
  width: 100%;
  padding: 0 2.5%;
  box-sizing: border-box;
  position: relative;
}

.tag {
  width: 17.5%;
  height: 70%;
  float: left;
}
.main .tag .top5-title {
  width: 100%;
  height: 10%;
  background: url("../images/title.png") no-repeat center;
  background-size: 100%;
  color: #fff;
  text-align: center;
  display: table;
  font-size: 0.9rem;
}
.main .tag .top5-title span {
  display: table-cell;
  vertical-align: middle;
}
.main .tag .top5-content {
  width: 100%;
  height: 80%;
}
.main .tag .top5-content ul {
  width: 100%;
  height: 100%;
}
.main .tag .top5-content ul li {
  width: 100%;
  height: 15%;
  margin-top: 5%;
  position: relative;
}
.main .tag .top5-content ul li .li-content {
  width: 90%;
  height: 100%;
  margin-left: 5%;
  background: url("../images/border.png") no-repeat center;
  background-size: contain;
  font-size: 0.8rem;
  padding-left: 15%;
  padding-top: 6%;
  color: #fff;
  box-sizing: border-box;
}
.main .tag .top5-content ul li .li-content span {
  margin-right: 2%;
}
.main .tag .top5-content ul li .cicle {
  content: "";
  display: block;
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  background: url("../images/green.png") no-repeat center;
  background-size: 100%;
  left: 0;
  bottom: 0;
}
.main .tag .top5-content ul li:hover .li-content {
  cursor: pointer;
  background: url("../images/border2.png") no-repeat center;
  background-size: contain;
}
.main .tag .top5-content ul li:hover .cicle {
  cursor: pointer;
  background: url("../images/orange.png") no-repeat center;
  background-size: 100%;
}

.main .total {
  width: 65%;
  height: 100%;
  float: left;
  position: relative;
}
.main .total .rain {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.main .total .data1,
.main .total .data2,
.main .total .data3,
.main .total .data4 {
  width: 8rem;
  height: 4rem;
  position: absolute;
}
.main .total .data1 span,
.main .total .data2 span,
.main .total .data3 span,
.main .total .data4 span {
  color: #0ac1c7;
  font-size: 0.8rem;
  font-family: "宋体";
}
.main .total .data1 p,
.main .total .data2 p,
.main .total .data3 p,
.main .total .data4 p {
  font-family: "LCdd";
  font-size: 1.5rem;
  color: #f29701;
}
.main .total .data1 {
  left: 10%;
  top: 12%;
}
.main .total .data2 {
  left: 42%;
  top: 3%;
}
.main .total .data3 {
  left: 62%;
  top: 5%;
}
.main .total .data4 {
  left: 73%;
  top: 28%;
}
.main .total .dashed {
  position: absolute;
  left: 0;
  top: 0;
}
.main .total .sphere {
  width: 20rem;
  height: 20rem;
  position: relative;
  margin: 14% auto 0;
}
.main .total .sphere .sphere-bg {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../images/53earth.png") no-repeat center;
  background-size: contain;
}
.main .total .sphere .sum {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../images/53cloud.png") no-repeat center;
  background-size: 55%;
}
.main .total .sphere .sum span {
  display: block;
  margin-top: 30%;
  padding-left: 32%;
  color: #005a79;
  font-size: 0.9rem;
}
.main .total .sphere .sum p {
  margin-top: 2%;
  text-align: center;
  color: #003c63;
  font-family: "LCdd";
  font-size: 2rem;
}
.main .total .cicle3 {
  width: 35rem;
  height: 35rem;
  background: url("../images/circle.png") no-repeat center;
  background-size: 100%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform-style: preserve-3d;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate3 20s linear infinite;
}
.main .total .cicle4 {
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform-style: preserve-3d;
  background: url("../images/53gqright.png") no-repeat center;
  background-size: 100%;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate3 2s linear infinite;
}
.main .total .cicle5 {
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: 62%;
  left: 50%;
  transform-style: preserve-3d;
  background: url("../images/53gqleft.png") no-repeat center;
  background-size: 100%;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate4 2s linear infinite;
}
.main .total .cicle6 {
  width: 12rem;
  height: 12rem;
  position: absolute;
  top: 70%;
  left: 50%;
  transform-style: preserve-3d;
  background: url("../images/535gqbottomright.png") no-repeat center;
  background-size: 100%;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate3 2s linear infinite;
}
.main .total .cicle7 {
  width: 12rem;
  height: 12rem;
  position: absolute;
  top: 72%;
  left: 50%;
  transform-style: preserve-3d;
  background: url("../images/53gqbottomleft.png") no-repeat center;
  background-size: 100%;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate4 2s linear infinite;
}
.main .total .cicle8,
.main .total .cicle9,
.main .total .cicle10,
.main .total .cicle11 {
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  margin-left: -2.5rem;
  border-radius: 50%;
}
.main .total .cicle8 span,
.main .total .cicle9 span,
.main .total .cicle10 span,
.main .total .cicle11 span {
  font-family: "LCdd";
  display: block;
  margin-left: 25%;
  font-size: 1.5rem;
  margin-top: 20%;
}
.main .total .cicle8 p,
.main .total .cicle9 p,
.main .total .cicle10 p,
.main .total .cicle11 p {
  text-align: center;
  font-size: 0.7rem;
}
.main .total .cicle8 {
  background: url("../images/circle1.png") no-repeat;
  background-size: 100%;
  animation: rotate5 20s linear infinite;
  color: #f29701;
}
.main .total .cicle9 {
  background: url("../images/circle2.png") no-repeat;
  background-size: 100%;
  animation: rotate6 20s linear infinite;
  color: #0ac1c7;
}
.main .total .cicle10 {
  background: url("../images/circle1.png") no-repeat;
  background-size: 100%;
  animation: rotate7 20s linear infinite;
  color: #f29701;
}
.main .total .cicle11 {
  background: url("../images/circle2.png") no-repeat;
  background-size: 100%;
  color: #0ac1c7;
  animation: rotate8 20s linear infinite;
}
.chart {
  width: 27.5%;
  height: 40%;
  position: absolute;
  bottom: 0;
  right: 2.5%;
}
.main .analyse {
  width: 17.5%;
  height: 70%;
  float: left;
}
.main .analyse .analyse-title {
  width: 100%;
  height: 10%;
  background: url("../images/title.png") no-repeat center;
  background-size: 100%;
  color: #fff;
  text-align: center;
  display: table;
  font-size: 0.9rem;
}
.main .analyse .analyse-title span {
  display: table-cell;
  vertical-align: middle;
}
.main .analyse ul {
  width: 100%;
  height: 60%;
}
.main .analyse ul li {
  width: 100%;
  height: 30%;
  margin: 3% 0;
}
.main .analyse ul li img {
  height: 80%;
  float: left;
  vertical-align: 0%;
}
.main .analyse ul li h5 {
  float: left;
  color: #fff;
  margin-left: 5%;
}
.main .analyse ul li span {
  font-size: 0.5rem;
  float: left;
  color: #fff;
  margin-left: 5%;
}
.main .analyse ul li em {
  font-style: normal;
  font-size: 1.3rem;
  color: #0ac1c7;
  margin-left: 4rem;
  text-align: left;
}
.main .analyse ul li:nth-of-type(1) em {
  color: #f29701;
}
.main .sale {
  width: 27.5%;
  height: 30%;
  position: absolute;
  bottom: 0;
  left: 2.5%;
}

.main .sale {
  width: 27.5%;
  height: 30%;
  position: absolute;
  bottom: 0;
  left: 2.5%;
}
.main .sale ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main .sale ul li {
  width: 100%;
  height: 30%;
  margin-top: 1%;
}
.main .sale ul li .showImg {
  float: left;
  width: 10%;
  height: 100%;
  text-align: center;
}
.main .sale ul li .showImg img {
  vertical-align: 0%;
  width: 70%;
  margin-top: 30%;
}
.main .sale ul li .data {
  float: left;
  width: 10%;
  height: 100%;
  text-align: center;
}
.main .sale ul li .data span {
  color: #fff;
  font-size: 0.6rem;
}
.main .sale ul li .data span:nth-of-type(2) {
  color: #0ac1c7;
}
.main .sale ul li .shoeChart,
.main .sale ul li .clothesChart,
.main .sale ul li .mzChart {
  height: 100%;
  width: 75%;
  float: left;
}

.bottom {
  width: 100%;
  height: 10%;
  background: url(../images/53bottomsjbg.png) no-repeat bottom center;
  background-size: 100%;
  text-align: center;
}
.bottom h5 {
  background-image: -webkit-linear-gradient(bottom, #86919e, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 40%;
  display: table;
  margin: auto;
}
.bottom h5 span {
  display: table-cell;
  vertical-align: middle;
}
.bottom p {
  color: #0ac1c7;
  font-size: 0.6rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotateX(75deg) rotateZ(0);
  }
  100% {
    transform: rotateX(75deg) rotateZ(360deg);
  }
}
@keyframes rotate3 {
  0% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(0);
  }
  100% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(360deg);
  }
}
@keyframes rotate4 {
  0% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(0);
  }
  100% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(-360deg);
  }
}
@keyframes rotate5 {
  0% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index: 100;
  }
  1% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  2% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  3% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  4% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  5% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  6% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  7% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  8% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  9% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  10% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  11% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  12% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  13% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  14% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  15% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  16% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  17% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  18% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  19% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  20% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  21% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  22% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  23% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  24% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  25% {
    transform: matrix3d(
      1.23333,
      0,
      0,
      0,
      0,
      1.23333,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      100,
      0,
      1
    );
    z-index: 101;
  }
  26% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  27% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  28% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  29% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  30% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  31% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  32% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  33% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  34% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  35% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  36% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  37% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  38% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  39% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  40% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  41% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  42% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  43% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  44% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  45% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  46% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  47% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  48% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  49% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  50% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index: 100;
  }
  51% {
    transform: matrix3d(
      0.87907,
      0,
      0,
      0,
      0,
      0.87907,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      -6.27905,
      0,
      1
    );
    z-index: 99.93721;
  }
  52% {
    transform: matrix3d(
      0.85822,
      0,
      0,
      0,
      0,
      0.85822,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      -12.53332,
      0,
      1
    );
    z-index: 99.87467;
  }
  53% {
    transform: matrix3d(
      0.83754,
      0,
      0,
      0,
      0,
      0.83754,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      -18.73813,
      0,
      1
    );
    z-index: 99.81262;
  }
  54% {
    transform: matrix3d(
      0.8171,
      0,
      0,
      0,
      0,
      0.8171,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      -24.86899,
      0,
      1
    );
    z-index: 99.75131;
  }
  55% {
    transform: matrix3d(
      0.79699,
      0,
      0,
      0,
      0,
      0.79699,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      -30.9017,
      0,
      1
    );
    z-index: 99.69098;
  }
  56% {
    transform: matrix3d(
      0.77729,
      0,
      0,
      0,
      0,
      0.77729,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      -36.81246,
      0,
      1
    );
    z-index: 99.63188;
  }
  57% {
    transform: matrix3d(
      0.75807,
      0,
      0,
      0,
      0,
      0.75807,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      -42.57793,
      0,
      1
    );
    z-index: 99.57422;
  }
  58% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      -48.17537,
      0,
      1
    );
    z-index: 99.51825;
  }
  59% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      -53.58268,
      0,
      1
    );
    z-index: 99.46417;
  }
  60% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      -58.77853,
      0,
      1
    );
    z-index: 99.41221;
  }
  61% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03857,
      -63.7424,
      0,
      1
    );
    z-index: 99.36258;
  }
  62% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      -68.45471,
      0,
      1
    );
    z-index: 99.31545;
  }
  63% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      -72.89686,
      0,
      1
    );
    z-index: 99.27103;
  }
  64% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10447,
      -77.05132,
      0,
      1
    );
    z-index: 99.22949;
  }
  65% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70201,
      -80.9017,
      0,
      1
    );
    z-index: 99.19098;
  }
  66% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      -84.43279,
      0,
      1
    );
    z-index: 99.15567;
  }
  67% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07348,
      -87.63067,
      0,
      1
    );
    z-index: 99.12369;
  }
  68% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96039,
      -90.4827,
      0,
      1
    );
    z-index: 99.09517;
  }
  69% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39361,
      -92.97765,
      0,
      1
    );
    z-index: 99.07022;
  }
  70% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43456,
      -95.10565,
      0,
      1
    );
    z-index: 99.04894;
  }
  71% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14622,
      -96.85831,
      0,
      1
    );
    z-index: 99.03142;
  }
  72% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59289,
      -98.22872,
      0,
      1
    );
    z-index: 99.01771;
  }
  73% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83989,
      -99.21146,
      0,
      1
    );
    z-index: 99.00789;
  }
  74% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95333,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  75% {
    transform: matrix3d(
      0.56667,
      0,
      0,
      0,
      0,
      0.56667,
      0,
      0,
      0,
      0,
      1,
      0,
      0.00015,
      -99.99999,
      0,
      1
    );
    z-index: 99;
  }
  76% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95364,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  77% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      33.84024,
      -99.21145,
      0,
      1
    );
    z-index: 99.00789;
  }
  78% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59331,
      -98.2287,
      0,
      1
    );
    z-index: 99.01771;
  }
  79% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14674,
      -96.85828,
      0,
      1
    );
    z-index: 99.03142;
  }
  80% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      83.4352,
      -95.1056,
      0,
      1
    );
    z-index: 99.04894;
  }
  81% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39444,
      -92.97758,
      0,
      1
    );
    z-index: 99.07022;
  }
  82% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96147,
      -90.48262,
      0,
      1
    );
    z-index: 99.09517;
  }
  83% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07487,
      -87.63055,
      0,
      1
    );
    z-index: 99.12369;
  }
  84% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67503,
      -84.43264,
      0,
      1
    );
    z-index: 99.15567;
  }
  85% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70434,
      -80.9015,
      0,
      1
    );
    z-index: 99.19099;
  }
  86% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10748,
      -77.05106,
      0,
      1
    );
    z-index: 99.22949;
  }
  87% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      184.83158,
      -72.89652,
      0,
      1
    );
    z-index: 99.27103;
  }
  88% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82649,
      -68.45427,
      0,
      1
    );
    z-index: 99.31546;
  }
  89% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      208.04493,
      -63.74182,
      0,
      1
    );
    z-index: 99.36258;
  }
  90% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      218.4427,
      -58.77778,
      0,
      1
    );
    z-index: 99.41222;
  }
  91% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      227.97887,
      -53.58172,
      0,
      1
    );
    z-index: 99.46418;
  }
  92% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      236.61593,
      -48.17414,
      0,
      1
    );
    z-index: 99.51826;
  }
  93% {
    transform: matrix3d(
      0.75808,
      0,
      0,
      0,
      0,
      0.75808,
      0,
      0,
      0,
      0,
      1,
      0,
      244.31993,
      -42.57636,
      0,
      1
    );
    z-index: 99.57424;
  }
  94% {
    transform: matrix3d(
      0.7773,
      0,
      0,
      0,
      0,
      0.7773,
      0,
      0,
      0,
      0,
      1,
      0,
      251.06067,
      -36.81045,
      0,
      1
    );
    z-index: 99.6319;
  }
  95% {
    transform: matrix3d(
      0.797,
      0,
      0,
      0,
      0,
      0.797,
      0,
      0,
      0,
      0,
      1,
      0,
      256.81175,
      -30.89914,
      0,
      1
    );
    z-index: 99.69101;
  }
  96% {
    transform: matrix3d(
      0.81711,
      0,
      0,
      0,
      0,
      0.81711,
      0,
      0,
      0,
      0,
      1,
      0,
      261.55076,
      -24.86574,
      0,
      1
    );
    z-index: 99.75134;
  }
  97% {
    transform: matrix3d(
      0.83755,
      0,
      0,
      0,
      0,
      0.83755,
      0,
      0,
      0,
      0,
      1,
      0,
      265.25934,
      -18.73401,
      0,
      1
    );
    z-index: 99.81266;
  }
  98% {
    transform: matrix3d(
      0.85824,
      0,
      0,
      0,
      0,
      0.85824,
      0,
      0,
      0,
      0,
      1,
      0,
      267.92326,
      -12.52811,
      0,
      1
    );
    z-index: 99.87472;
  }
  99% {
    transform: matrix3d(
      0.87909,
      0,
      0,
      0,
      0,
      0.87909,
      0,
      0,
      0,
      0,
      1,
      0,
      269.5325,
      -6.27248,
      0,
      1
    );
    z-index: 99.93728;
  }
  100% {
    transform: matrix3d(
      0.90003,
      0,
      0,
      0,
      0,
      0.90003,
      0,
      0,
      0,
      0,
      1,
      0,
      270.08133,
      0.00827,
      0,
      1
    );
    z-index: 100.00008;
  }
}
@keyframes rotate6 {
  0% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  1% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  2% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  3% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  4% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  5% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  6% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  7% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  8% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  9% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  10% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  11% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  12% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  13% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  14% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  15% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  16% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  17% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  18% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  19% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  20% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  21% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  22% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  23% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  24% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index: 100;
  }
  25% {
    transform: matrix3d(
      0.87907,
      0,
      0,
      0,
      0,
      0.87907,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      -6.27905,
      0,
      1
    );
    z-index: 99.93721;
  }
  26% {
    transform: matrix3d(
      0.85822,
      0,
      0,
      0,
      0,
      0.85822,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      -12.53332,
      0,
      1
    );
    z-index: 99.87467;
  }
  27% {
    transform: matrix3d(
      0.83754,
      0,
      0,
      0,
      0,
      0.83754,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      -18.73813,
      0,
      1
    );
    z-index: 99.81262;
  }
  28% {
    transform: matrix3d(
      0.8171,
      0,
      0,
      0,
      0,
      0.8171,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      -24.86899,
      0,
      1
    );
    z-index: 99.75131;
  }
  29% {
    transform: matrix3d(
      0.79699,
      0,
      0,
      0,
      0,
      0.79699,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      -30.9017,
      0,
      1
    );
    z-index: 99.69098;
  }
  30% {
    transform: matrix3d(
      0.77729,
      0,
      0,
      0,
      0,
      0.77729,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      -36.81246,
      0,
      1
    );
    z-index: 99.63188;
  }
  31% {
    transform: matrix3d(
      0.75807,
      0,
      0,
      0,
      0,
      0.75807,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      -42.57793,
      0,
      1
    );
    z-index: 99.57422;
  }
  32% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      -48.17537,
      0,
      1
    );
    z-index: 99.51825;
  }
  33% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      -53.58268,
      0,
      1
    );
    z-index: 99.46417;
  }
  34% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      -58.77853,
      0,
      1
    );
    z-index: 99.41221;
  }
  35% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03857,
      -63.7424,
      0,
      1
    );
    z-index: 99.36258;
  }
  36% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      -68.45471,
      0,
      1
    );
    z-index: 99.31545;
  }
  37% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      -72.89686,
      0,
      1
    );
    z-index: 99.27103;
  }
  38% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10447,
      -77.05132,
      0,
      1
    );
    z-index: 99.22949;
  }
  39% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70201,
      -80.9017,
      0,
      1
    );
    z-index: 99.19098;
  }
  40% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      -84.43279,
      0,
      1
    );
    z-index: 99.15567;
  }
  41% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07348,
      -87.63067,
      0,
      1
    );
    z-index: 99.12369;
  }
  42% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96039,
      -90.4827,
      0,
      1
    );
    z-index: 99.09517;
  }
  43% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39361,
      -92.97765,
      0,
      1
    );
    z-index: 99.07022;
  }
  44% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43456,
      -95.10565,
      0,
      1
    );
    z-index: 99.04894;
  }
  45% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14622,
      -96.85831,
      0,
      1
    );
    z-index: 99.03142;
  }
  46% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59289,
      -98.22872,
      0,
      1
    );
    z-index: 99.01771;
  }
  47% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83989,
      -99.21146,
      0,
      1
    );
    z-index: 99.00789;
  }
  48% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95333,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  49% {
    transform: matrix3d(
      0.56667,
      0,
      0,
      0,
      0,
      0.56667,
      0,
      0,
      0,
      0,
      1,
      0,
      0.00015,
      -99.99999,
      0,
      1
    );
    z-index: 99;
  }
  50% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95364,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  51% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      33.84024,
      -99.21145,
      0,
      1
    );
    z-index: 99.00789;
  }
  52% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59331,
      -98.2287,
      0,
      1
    );
    z-index: 99.01771;
  }
  53% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14674,
      -96.85828,
      0,
      1
    );
    z-index: 99.03142;
  }
  54% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      83.4352,
      -95.1056,
      0,
      1
    );
    z-index: 99.04894;
  }
  55% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39444,
      -92.97758,
      0,
      1
    );
    z-index: 99.07022;
  }
  56% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96147,
      -90.48262,
      0,
      1
    );
    z-index: 99.09517;
  }
  57% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07487,
      -87.63055,
      0,
      1
    );
    z-index: 99.12369;
  }
  58% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67503,
      -84.43264,
      0,
      1
    );
    z-index: 99.15567;
  }
  59% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70434,
      -80.9015,
      0,
      1
    );
    z-index: 99.19099;
  }
  60% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10748,
      -77.05106,
      0,
      1
    );
    z-index: 99.22949;
  }
  61% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      184.83158,
      -72.89652,
      0,
      1
    );
    z-index: 99.27103;
  }
  62% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82649,
      -68.45427,
      0,
      1
    );
    z-index: 99.31546;
  }
  63% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      208.04493,
      -63.74182,
      0,
      1
    );
    z-index: 99.36258;
  }
  64% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      218.4427,
      -58.77778,
      0,
      1
    );
    z-index: 99.41222;
  }
  65% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      227.97887,
      -53.58172,
      0,
      1
    );
    z-index: 99.46418;
  }
  66% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      236.61593,
      -48.17414,
      0,
      1
    );
    z-index: 99.51826;
  }
  67% {
    transform: matrix3d(
      0.75808,
      0,
      0,
      0,
      0,
      0.75808,
      0,
      0,
      0,
      0,
      1,
      0,
      244.31993,
      -42.57636,
      0,
      1
    );
    z-index: 99.57424;
  }
  68% {
    transform: matrix3d(
      0.7773,
      0,
      0,
      0,
      0,
      0.7773,
      0,
      0,
      0,
      0,
      1,
      0,
      251.06067,
      -36.81045,
      0,
      1
    );
    z-index: 99.6319;
  }
  69% {
    transform: matrix3d(
      0.797,
      0,
      0,
      0,
      0,
      0.797,
      0,
      0,
      0,
      0,
      1,
      0,
      256.81175,
      -30.89914,
      0,
      1
    );
    z-index: 99.69101;
  }
  70% {
    transform: matrix3d(
      0.81711,
      0,
      0,
      0,
      0,
      0.81711,
      0,
      0,
      0,
      0,
      1,
      0,
      261.55076,
      -24.86574,
      0,
      1
    );
    z-index: 99.75134;
  }
  71% {
    transform: matrix3d(
      0.83755,
      0,
      0,
      0,
      0,
      0.83755,
      0,
      0,
      0,
      0,
      1,
      0,
      265.25934,
      -18.73401,
      0,
      1
    );
    z-index: 99.81266;
  }
  72% {
    transform: matrix3d(
      0.85824,
      0,
      0,
      0,
      0,
      0.85824,
      0,
      0,
      0,
      0,
      1,
      0,
      267.92326,
      -12.52811,
      0,
      1
    );
    z-index: 99.87472;
  }
  73% {
    transform: matrix3d(
      0.87909,
      0,
      0,
      0,
      0,
      0.87909,
      0,
      0,
      0,
      0,
      1,
      0,
      269.5325,
      -6.27248,
      0,
      1
    );
    z-index: 99.93728;
  }
  74% {
    transform: matrix3d(
      0.90003,
      0,
      0,
      0,
      0,
      0.90003,
      0,
      0,
      0,
      0,
      1,
      0,
      270.08133,
      0.00827,
      0,
      1
    );
    z-index: 100.00008;
  }
  75% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index: 100;
  }
  76% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  77% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  78% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  79% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  80% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  81% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  82% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  83% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  84% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  85% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  86% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  87% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  88% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  89% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  90% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  91% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  92% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  93% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  94% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  95% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  96% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  97% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  98% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  99% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  100% {
    transform: matrix3d(
      1.23333,
      0,
      0,
      0,
      0,
      1.23333,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      100,
      0,
      1
    );
    z-index: 101;
  }
}
@keyframes rotate7 {
  0% {
    transform: matrix3d(
      0.85822,
      0,
      0,
      0,
      0,
      0.85822,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      -12.53332,
      0,
      1
    );
    z-index: 99.87467;
  }
  1% {
    transform: matrix3d(
      0.83754,
      0,
      0,
      0,
      0,
      0.83754,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      -18.73813,
      0,
      1
    );
    z-index: 99.81262;
  }
  2% {
    transform: matrix3d(
      0.8171,
      0,
      0,
      0,
      0,
      0.8171,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      -24.86899,
      0,
      1
    );
    z-index: 99.75131;
  }
  3% {
    transform: matrix3d(
      0.79699,
      0,
      0,
      0,
      0,
      0.79699,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      -30.9017,
      0,
      1
    );
    z-index: 99.69098;
  }
  4% {
    transform: matrix3d(
      0.77729,
      0,
      0,
      0,
      0,
      0.77729,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      -36.81246,
      0,
      1
    );
    z-index: 99.63188;
  }
  5% {
    transform: matrix3d(
      0.75807,
      0,
      0,
      0,
      0,
      0.75807,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      -42.57793,
      0,
      1
    );
    z-index: 99.57422;
  }
  6% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      -48.17537,
      0,
      1
    );
    z-index: 99.51825;
  }
  7% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      -53.58268,
      0,
      1
    );
    z-index: 99.46417;
  }
  8% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      -58.77853,
      0,
      1
    );
    z-index: 99.41221;
  }
  9% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03857,
      -63.7424,
      0,
      1
    );
    z-index: 99.36258;
  }
  10% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      -68.45471,
      0,
      1
    );
    z-index: 99.31545;
  }
  11% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      -72.89686,
      0,
      1
    );
    z-index: 99.27103;
  }
  12% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10447,
      -77.05132,
      0,
      1
    );
    z-index: 99.22949;
  }
  13% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70201,
      -80.9017,
      0,
      1
    );
    z-index: 99.19098;
  }
  14% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      -84.43279,
      0,
      1
    );
    z-index: 99.15567;
  }
  15% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07348,
      -87.63067,
      0,
      1
    );
    z-index: 99.12369;
  }
  16% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96039,
      -90.4827,
      0,
      1
    );
    z-index: 99.09517;
  }
  17% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39361,
      -92.97765,
      0,
      1
    );
    z-index: 99.07022;
  }
  18% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43456,
      -95.10565,
      0,
      1
    );
    z-index: 99.04894;
  }
  19% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14622,
      -96.85831,
      0,
      1
    );
    z-index: 99.03142;
  }
  20% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59289,
      -98.22872,
      0,
      1
    );
    z-index: 99.01771;
  }
  21% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83989,
      -99.21146,
      0,
      1
    );
    z-index: 99.00789;
  }
  22% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95333,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  23% {
    transform: matrix3d(
      0.56667,
      0,
      0,
      0,
      0,
      0.56667,
      0,
      0,
      0,
      0,
      1,
      0,
      0.00015,
      -99.99999,
      0,
      1
    );
    z-index: 99;
  }
  24% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95364,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  25% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      33.84024,
      -99.21145,
      0,
      1
    );
    z-index: 99.00789;
  }
  26% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59331,
      -98.2287,
      0,
      1
    );
    z-index: 99.01771;
  }
  27% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14674,
      -96.85828,
      0,
      1
    );
    z-index: 99.03142;
  }
  28% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      83.4352,
      -95.1056,
      0,
      1
    );
    z-index: 99.04894;
  }
  29% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39444,
      -92.97758,
      0,
      1
    );
    z-index: 99.07022;
  }
  30% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96147,
      -90.48262,
      0,
      1
    );
    z-index: 99.09517;
  }
  31% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07487,
      -87.63055,
      0,
      1
    );
    z-index: 99.12369;
  }
  32% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67503,
      -84.43264,
      0,
      1
    );
    z-index: 99.15567;
  }
  33% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70434,
      -80.9015,
      0,
      1
    );
    z-index: 99.19099;
  }
  34% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10748,
      -77.05106,
      0,
      1
    );
    z-index: 99.22949;
  }
  35% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      184.83158,
      -72.89652,
      0,
      1
    );
    z-index: 99.27103;
  }
  36% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82649,
      -68.45427,
      0,
      1
    );
    z-index: 99.31546;
  }
  37% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      208.04493,
      -63.74182,
      0,
      1
    );
    z-index: 99.36258;
  }
  38% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      218.4427,
      -58.77778,
      0,
      1
    );
    z-index: 99.41222;
  }
  39% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      227.97887,
      -53.58172,
      0,
      1
    );
    z-index: 99.46418;
  }
  40% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      236.61593,
      -48.17414,
      0,
      1
    );
    z-index: 99.51826;
  }
  41% {
    transform: matrix3d(
      0.75808,
      0,
      0,
      0,
      0,
      0.75808,
      0,
      0,
      0,
      0,
      1,
      0,
      244.31993,
      -42.57636,
      0,
      1
    );
    z-index: 99.57424;
  }
  42% {
    transform: matrix3d(
      0.7773,
      0,
      0,
      0,
      0,
      0.7773,
      0,
      0,
      0,
      0,
      1,
      0,
      251.06067,
      -36.81045,
      0,
      1
    );
    z-index: 99.6319;
  }
  43% {
    transform: matrix3d(
      0.797,
      0,
      0,
      0,
      0,
      0.797,
      0,
      0,
      0,
      0,
      1,
      0,
      256.81175,
      -30.89914,
      0,
      1
    );
    z-index: 99.69101;
  }
  44% {
    transform: matrix3d(
      0.81711,
      0,
      0,
      0,
      0,
      0.81711,
      0,
      0,
      0,
      0,
      1,
      0,
      261.55076,
      -24.86574,
      0,
      1
    );
    z-index: 99.75134;
  }
  45% {
    transform: matrix3d(
      0.83755,
      0,
      0,
      0,
      0,
      0.83755,
      0,
      0,
      0,
      0,
      1,
      0,
      265.25934,
      -18.73401,
      0,
      1
    );
    z-index: 99.81266;
  }
  46% {
    transform: matrix3d(
      0.85824,
      0,
      0,
      0,
      0,
      0.85824,
      0,
      0,
      0,
      0,
      1,
      0,
      267.92326,
      -12.52811,
      0,
      1
    );
    z-index: 99.87472;
  }
  47% {
    transform: matrix3d(
      0.87909,
      0,
      0,
      0,
      0,
      0.87909,
      0,
      0,
      0,
      0,
      1,
      0,
      269.5325,
      -6.27248,
      0,
      1
    );
    z-index: 99.93728;
  }
  48% {
    transform: matrix3d(
      0.90003,
      0,
      0,
      0,
      0,
      0.90003,
      0,
      0,
      0,
      0,
      1,
      0,
      270.08133,
      0.00827,
      0,
      1
    );
    z-index: 100.00008;
  }
  49% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index: 100;
  }
  50% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  51% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  52% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  53% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  54% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  55% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  56% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  57% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  58% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  59% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  60% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  61% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  62% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  63% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  64% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  65% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  66% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  67% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  68% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  69% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  70% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  71% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  72% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  73% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  74% {
    transform: matrix3d(
      1.23333,
      0,
      0,
      0,
      0,
      1.23333,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      100,
      0,
      1
    );
    z-index: 101;
  }
  75% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  76% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  77% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  78% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  79% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  80% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  81% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  82% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  83% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  84% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  85% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  86% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  87% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  88% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  89% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  90% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  91% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  92% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  93% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  94% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  95% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  96% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  97% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  98% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  99% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index: 100;
  }
  100% {
    transform: matrix3d(
      0.87907,
      0,
      0,
      0,
      0,
      0.87907,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      -6.27905,
      0,
      1
    );
    z-index: 99.93721;
  }
}
@keyframes rotate8 {
  0% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59331,
      -98.2287,
      0,
      1
    );
    z-index: 99.01771;
  }
  1% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14674,
      -96.85828,
      0,
      1
    );
    z-index: 99.03142;
  }
  2% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      83.4352,
      -95.1056,
      0,
      1
    );
    z-index: 99.04894;
  }
  3% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39444,
      -92.97758,
      0,
      1
    );
    z-index: 99.07022;
  }
  4% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96147,
      -90.48262,
      0,
      1
    );
    z-index: 99.09517;
  }
  5% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07487,
      -87.63055,
      0,
      1
    );
    z-index: 99.12369;
  }
  6% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67503,
      -84.43264,
      0,
      1
    );
    z-index: 99.15567;
  }
  7% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70434,
      -80.9015,
      0,
      1
    );
    z-index: 99.19099;
  }
  8% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10748,
      -77.05106,
      0,
      1
    );
    z-index: 99.22949;
  }
  9% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      184.83158,
      -72.89652,
      0,
      1
    );
    z-index: 99.27103;
  }
  10% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82649,
      -68.45427,
      0,
      1
    );
    z-index: 99.31546;
  }
  11% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      208.04493,
      -63.74182,
      0,
      1
    );
    z-index: 99.36258;
  }
  12% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      218.4427,
      -58.77778,
      0,
      1
    );
    z-index: 99.41222;
  }
  13% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      227.97887,
      -53.58172,
      0,
      1
    );
    z-index: 99.46418;
  }
  14% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      236.61593,
      -48.17414,
      0,
      1
    );
    z-index: 99.51826;
  }
  15% {
    transform: matrix3d(
      0.75808,
      0,
      0,
      0,
      0,
      0.75808,
      0,
      0,
      0,
      0,
      1,
      0,
      244.31993,
      -42.57636,
      0,
      1
    );
    z-index: 99.57424;
  }
  16% {
    transform: matrix3d(
      0.7773,
      0,
      0,
      0,
      0,
      0.7773,
      0,
      0,
      0,
      0,
      1,
      0,
      251.06067,
      -36.81045,
      0,
      1
    );
    z-index: 99.6319;
  }
  17% {
    transform: matrix3d(
      0.797,
      0,
      0,
      0,
      0,
      0.797,
      0,
      0,
      0,
      0,
      1,
      0,
      256.81175,
      -30.89914,
      0,
      1
    );
    z-index: 99.69101;
  }
  18% {
    transform: matrix3d(
      0.81711,
      0,
      0,
      0,
      0,
      0.81711,
      0,
      0,
      0,
      0,
      1,
      0,
      261.55076,
      -24.86574,
      0,
      1
    );
    z-index: 99.75134;
  }
  19% {
    transform: matrix3d(
      0.83755,
      0,
      0,
      0,
      0,
      0.83755,
      0,
      0,
      0,
      0,
      1,
      0,
      265.25934,
      -18.73401,
      0,
      1
    );
    z-index: 99.81266;
  }
  20% {
    transform: matrix3d(
      0.85824,
      0,
      0,
      0,
      0,
      0.85824,
      0,
      0,
      0,
      0,
      1,
      0,
      267.92326,
      -12.52811,
      0,
      1
    );
    z-index: 99.87472;
  }
  21% {
    transform: matrix3d(
      0.87909,
      0,
      0,
      0,
      0,
      0.87909,
      0,
      0,
      0,
      0,
      1,
      0,
      269.5325,
      -6.27248,
      0,
      1
    );
    z-index: 99.93728;
  }
  22% {
    transform: matrix3d(
      0.90003,
      0,
      0,
      0,
      0,
      0.90003,
      0,
      0,
      0,
      0,
      1,
      0,
      270.08133,
      0.00827,
      0,
      1
    );
    z-index: 100.00008;
  }
  23% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index: 100;
  }
  24% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  25% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  26% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  27% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  28% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  29% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  30% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  31% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  32% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  33% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  34% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  35% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  36% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  37% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  38% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  39% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  40% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  41% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  42% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  43% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  44% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  45% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  46% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  47% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  48% {
    transform: matrix3d(
      1.23333,
      0,
      0,
      0,
      0,
      1.23333,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      100,
      0,
      1
    );
    z-index: 101;
  }
  49% {
    transform: matrix3d(
      1.23268,
      0,
      0,
      0,
      0,
      1.23268,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95344,
      99.80267,
      0,
      1
    );
    z-index: 100.99803;
  }
  50% {
    transform: matrix3d(
      1.2307,
      0,
      0,
      0,
      0,
      1.2307,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83997,
      99.21147,
      0,
      1
    );
    z-index: 100.99211;
  }
  51% {
    transform: matrix3d(
      1.22743,
      0,
      0,
      0,
      0,
      1.22743,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59295,
      98.22873,
      0,
      1
    );
    z-index: 100.98229;
  }
  52% {
    transform: matrix3d(
      1.22286,
      0,
      0,
      0,
      0,
      1.22286,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14627,
      96.85832,
      0,
      1
    );
    z-index: 100.96858;
  }
  53% {
    transform: matrix3d(
      1.21702,
      0,
      0,
      0,
      0,
      1.21702,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43459,
      95.10565,
      0,
      1
    );
    z-index: 100.95106;
  }
  54% {
    transform: matrix3d(
      1.20993,
      0,
      0,
      0,
      0,
      1.20993,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39363,
      92.97765,
      0,
      1
    );
    z-index: 100.92978;
  }
  55% {
    transform: matrix3d(
      1.20161,
      0,
      0,
      0,
      0,
      1.20161,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96041,
      90.48271,
      0,
      1
    );
    z-index: 100.90483;
  }
  56% {
    transform: matrix3d(
      1.1921,
      0,
      0,
      0,
      0,
      1.1921,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07349,
      87.63067,
      0,
      1
    );
    z-index: 100.87631;
  }
  57% {
    transform: matrix3d(
      1.18144,
      0,
      0,
      0,
      0,
      1.18144,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      84.43279,
      0,
      1
    );
    z-index: 100.84433;
  }
  58% {
    transform: matrix3d(
      1.16967,
      0,
      0,
      0,
      0,
      1.16967,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70202,
      80.9017,
      0,
      1
    );
    z-index: 100.80902;
  }
  59% {
    transform: matrix3d(
      1.15684,
      0,
      0,
      0,
      0,
      1.15684,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10448,
      77.05132,
      0,
      1
    );
    z-index: 100.77051;
  }
  60% {
    transform: matrix3d(
      1.14299,
      0,
      0,
      0,
      0,
      1.14299,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      72.89686,
      0,
      1
    );
    z-index: 100.72897;
  }
  61% {
    transform: matrix3d(
      1.12818,
      0,
      0,
      0,
      0,
      1.12818,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      68.45471,
      0,
      1
    );
    z-index: 100.68455;
  }
  62% {
    transform: matrix3d(
      1.11247,
      0,
      0,
      0,
      0,
      1.11247,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03858,
      63.7424,
      0,
      1
    );
    z-index: 100.63742;
  }
  63% {
    transform: matrix3d(
      1.09593,
      0,
      0,
      0,
      0,
      1.09593,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      58.77853,
      0,
      1
    );
    z-index: 100.58779;
  }
  64% {
    transform: matrix3d(
      1.07861,
      0,
      0,
      0,
      0,
      1.07861,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      53.58268,
      0,
      1
    );
    z-index: 100.53583;
  }
  65% {
    transform: matrix3d(
      1.06058,
      0,
      0,
      0,
      0,
      1.06058,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      48.17537,
      0,
      1
    );
    z-index: 100.48175;
  }
  66% {
    transform: matrix3d(
      1.04193,
      0,
      0,
      0,
      0,
      1.04193,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      42.57793,
      0,
      1
    );
    z-index: 100.42578;
  }
  67% {
    transform: matrix3d(
      1.02271,
      0,
      0,
      0,
      0,
      1.02271,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      36.81246,
      0,
      1
    );
    z-index: 100.36812;
  }
  68% {
    transform: matrix3d(
      1.00301,
      0,
      0,
      0,
      0,
      1.00301,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      30.9017,
      0,
      1
    );
    z-index: 100.30902;
  }
  69% {
    transform: matrix3d(
      0.9829,
      0,
      0,
      0,
      0,
      0.9829,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      24.86899,
      0,
      1
    );
    z-index: 100.24869;
  }
  70% {
    transform: matrix3d(
      0.96246,
      0,
      0,
      0,
      0,
      0.96246,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      18.73813,
      0,
      1
    );
    z-index: 100.18738;
  }
  71% {
    transform: matrix3d(
      0.94178,
      0,
      0,
      0,
      0,
      0.94178,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      12.53332,
      0,
      1
    );
    z-index: 100.12533;
  }
  72% {
    transform: matrix3d(
      0.92093,
      0,
      0,
      0,
      0,
      0.92093,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      6.27905,
      0,
      1
    );
    z-index: 100.06279;
  }
  73% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index: 100;
  }
  74% {
    transform: matrix3d(
      0.87907,
      0,
      0,
      0,
      0,
      0.87907,
      0,
      0,
      0,
      0,
      1,
      0,
      -269.46722,
      -6.27905,
      0,
      1
    );
    z-index: 99.93721;
  }
  75% {
    transform: matrix3d(
      0.85822,
      0,
      0,
      0,
      0,
      0.85822,
      0,
      0,
      0,
      0,
      1,
      0,
      -267.87097,
      -12.53332,
      0,
      1
    );
    z-index: 99.87467;
  }
  76% {
    transform: matrix3d(
      0.83754,
      0,
      0,
      0,
      0,
      0.83754,
      0,
      0,
      0,
      0,
      1,
      0,
      -265.21756,
      -18.73813,
      0,
      1
    );
    z-index: 99.81262;
  }
  77% {
    transform: matrix3d(
      0.8171,
      0,
      0,
      0,
      0,
      0.8171,
      0,
      0,
      0,
      0,
      1,
      0,
      -261.51745,
      -24.86899,
      0,
      1
    );
    z-index: 99.75131;
  }
  78% {
    transform: matrix3d(
      0.79699,
      0,
      0,
      0,
      0,
      0.79699,
      0,
      0,
      0,
      0,
      1,
      0,
      -256.78526,
      -30.9017,
      0,
      1
    );
    z-index: 99.69098;
  }
  79% {
    transform: matrix3d(
      0.77729,
      0,
      0,
      0,
      0,
      0.77729,
      0,
      0,
      0,
      0,
      1,
      0,
      -251.03965,
      -36.81246,
      0,
      1
    );
    z-index: 99.63188;
  }
  80% {
    transform: matrix3d(
      0.75807,
      0,
      0,
      0,
      0,
      0.75807,
      0,
      0,
      0,
      0,
      1,
      0,
      -244.3033,
      -42.57793,
      0,
      1
    );
    z-index: 99.57422;
  }
  81% {
    transform: matrix3d(
      0.73942,
      0,
      0,
      0,
      0,
      0.73942,
      0,
      0,
      0,
      0,
      1,
      0,
      -236.6028,
      -48.17537,
      0,
      1
    );
    z-index: 99.51825;
  }
  82% {
    transform: matrix3d(
      0.72139,
      0,
      0,
      0,
      0,
      0.72139,
      0,
      0,
      0,
      0,
      1,
      0,
      -227.96854,
      -53.58268,
      0,
      1
    );
    z-index: 99.46417;
  }
  83% {
    transform: matrix3d(
      0.70407,
      0,
      0,
      0,
      0,
      0.70407,
      0,
      0,
      0,
      0,
      1,
      0,
      -218.43459,
      -58.77853,
      0,
      1
    );
    z-index: 99.41221;
  }
  84% {
    transform: matrix3d(
      0.68753,
      0,
      0,
      0,
      0,
      0.68753,
      0,
      0,
      0,
      0,
      1,
      0,
      -208.03857,
      -63.7424,
      0,
      1
    );
    z-index: 99.36258;
  }
  85% {
    transform: matrix3d(
      0.67182,
      0,
      0,
      0,
      0,
      0.67182,
      0,
      0,
      0,
      0,
      1,
      0,
      -196.82153,
      -68.45471,
      0,
      1
    );
    z-index: 99.31545;
  }
  86% {
    transform: matrix3d(
      0.65701,
      0,
      0,
      0,
      0,
      0.65701,
      0,
      0,
      0,
      0,
      1,
      0,
      -184.82772,
      -72.89686,
      0,
      1
    );
    z-index: 99.27103;
  }
  87% {
    transform: matrix3d(
      0.64316,
      0,
      0,
      0,
      0,
      0.64316,
      0,
      0,
      0,
      0,
      1,
      0,
      -172.10447,
      -77.05132,
      0,
      1
    );
    z-index: 99.22949;
  }
  88% {
    transform: matrix3d(
      0.63033,
      0,
      0,
      0,
      0,
      0.63033,
      0,
      0,
      0,
      0,
      1,
      0,
      -158.70201,
      -80.9017,
      0,
      1
    );
    z-index: 99.19098;
  }
  89% {
    transform: matrix3d(
      0.61856,
      0,
      0,
      0,
      0,
      0.61856,
      0,
      0,
      0,
      0,
      1,
      0,
      -144.67323,
      -84.43279,
      0,
      1
    );
    z-index: 99.15567;
  }
  90% {
    transform: matrix3d(
      0.6079,
      0,
      0,
      0,
      0,
      0.6079,
      0,
      0,
      0,
      0,
      1,
      0,
      -130.07348,
      -87.63067,
      0,
      1
    );
    z-index: 99.12369;
  }
  91% {
    transform: matrix3d(
      0.59839,
      0,
      0,
      0,
      0,
      0.59839,
      0,
      0,
      0,
      0,
      1,
      0,
      -114.96039,
      -90.4827,
      0,
      1
    );
    z-index: 99.09517;
  }
  92% {
    transform: matrix3d(
      0.59007,
      0,
      0,
      0,
      0,
      0.59007,
      0,
      0,
      0,
      0,
      1,
      0,
      -99.39361,
      -92.97765,
      0,
      1
    );
    z-index: 99.07022;
  }
  93% {
    transform: matrix3d(
      0.58298,
      0,
      0,
      0,
      0,
      0.58298,
      0,
      0,
      0,
      0,
      1,
      0,
      -83.43456,
      -95.10565,
      0,
      1
    );
    z-index: 99.04894;
  }
  94% {
    transform: matrix3d(
      0.57714,
      0,
      0,
      0,
      0,
      0.57714,
      0,
      0,
      0,
      0,
      1,
      0,
      -67.14622,
      -96.85831,
      0,
      1
    );
    z-index: 99.03142;
  }
  95% {
    transform: matrix3d(
      0.57257,
      0,
      0,
      0,
      0,
      0.57257,
      0,
      0,
      0,
      0,
      1,
      0,
      -50.59289,
      -98.22872,
      0,
      1
    );
    z-index: 99.01771;
  }
  96% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      -33.83989,
      -99.21146,
      0,
      1
    );
    z-index: 99.00789;
  }
  97% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      -16.95333,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  98% {
    transform: matrix3d(
      0.56667,
      0,
      0,
      0,
      0,
      0.56667,
      0,
      0,
      0,
      0,
      1,
      0,
      0.00015,
      -99.99999,
      0,
      1
    );
    z-index: 99;
  }
  99% {
    transform: matrix3d(
      0.56732,
      0,
      0,
      0,
      0,
      0.56732,
      0,
      0,
      0,
      0,
      1,
      0,
      16.95364,
      -99.80266,
      0,
      1
    );
    z-index: 99.00197;
  }
  100% {
    transform: matrix3d(
      0.5693,
      0,
      0,
      0,
      0,
      0.5693,
      0,
      0,
      0,
      0,
      1,
      0,
      33.84024,
      -99.21145,
      0,
      1
    );
    z-index: 99.00789;
  }
}
</style>