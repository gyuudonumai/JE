const canvas = document.querySelector("#tut");
const ctx = canvas.getContext("2d");
const deen = () => {
  document.getElementById("start_audio").currentTime = 0; //連続クリックに対応
  document.getElementById("start_audio").play();
};
const moji = (a, b = 1) => {
  ctx.fillText(a, 40, 670 + 38 * (b - 1));
};
const e = () => {
  ctx.clearRect(38, 630, 1320, 784);
};
function sleep(waitSec, callbackFunc) {
  var spanedSec = 0;
  var id = setInterval(function () {
    spanedSec++;
    if (spanedSec >= waitSec) {
      clearInterval(id);
      if (callbackFunc) callbackFunc();
    }
  }, 1000);
}

var img = new Image();
img.src = "./DPvSJSy0cmo23mV1666610219_1666610254.png";

const whatName = () => {
  canvas.width = 1400;
  canvas.height = 784;
  canvas.setAttribute("style", "margin:61px;background-color: #000000");
  ctx.font = "40px dotfont";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  moji("同士よ、私のパーフェクト計算教室にようこそ!諸君の名前はなんだね？");
  document.querySelector("#tut").style.display = "block";
  document.querySelector("#first").style.display = "none";
  sleep(3, function () {
    Swal.fire({
      html: "<h1 style='color:#cd0000'>あなたの名前</h1>",
      padding: "0rem",
      backdrop: "rgba(80,80,80,0.99)",
      background: "#ffd800",
      input: "text",
      inputValidator: (value) => {
        if (
          !value ||
          value == "" ||
          value.length > 7 ||
          value.includes("トロツキー") ||
          value == "チャーチル"
        ) {
          if (value.includes("トロツキー") || value == "チャーチル") {
            return "粛清確定な";
          } else {
            return "六文字以下で";
          }
        }
      },
    }).then((result) => {
      console.log(result.value == "");
      name = result.value == "" ? "匿名" : result.value;
      e();
      moji(`${name}か、いい名前だな。よろしく頼むぞ${name}くん。`);
      moji(`ああ私の名前はヨシフ...ん?スターリンだろって？`, 2);
      moji(`違う違う私はジュガシヴィリだ。`, 3);
      sleep(3, function () {
        e();
        moji("では、チュートリアルを始めよう。");
      });
    });
  });
};
var epil =
  "第一次世界大戦後混沌としていたロシア帝国にある男が現れた。" +
  "彼の名はレーニン。彼は、ロシア帝国のあった場所に全員が平等な夢のような国を作ろうと試みた。" +
  "ただ、普通に選挙で負けたので、武力でなんとかした。あと、議会はぶっ壊した。こうしてできたのが後の大国、ソビエト連邦である。" +
  "レーニン亡き後、ヨシフ・スターリンがソ連を継いだ。これは、そのヨシフおじさんのパーフェクト計算教室である";
document.querySelector("#start").addEventListener("click", (e) => {
  e.preventDefault();
  deen();
  whatName();
});

window.onload = function () {
  var name = "";
  deen();
  Swal.fire({
    html: `<h1  style="color:#cd0000">あらすじ</h1>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png" alt="epilo" style="height:29%"></img>
           <p>${epil}</p>`,
    padding: "0rem",
    backdrop: "rgba(80,80,80,0.99)",
    background: "#ffd800",
  });
  document.querySelector(".swal2-confirm").addEventListener("click", (e) => {
    deen();
  });
};
