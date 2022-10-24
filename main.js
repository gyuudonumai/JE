const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const deen = () => {
  document.getElementById("start_audio").currentTime = 0; //連続クリックに対応
  document.getElementById("start_audio").play();
};
const whatName = () => {
  canvas.width = 900;
  canvas.height = 400;
  canvas.setAttribute(
    "style",
    "display:block;margin:auto;background-color: #ffffff"
  );
  console.log("hey");
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
