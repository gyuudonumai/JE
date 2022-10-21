var epil =
  "第一次世界大戦後混沌としていたロシア帝国にある男が現れた。" +
  "彼の名はレーニン。彼は、ロシア帝国のあった場所に全員が平等な夢のような国を作ろうと試みた。" +
  "ただ、普通に選挙で負けたので、武力でなんとかした。あと、議会はぶっ壊した。こうしてできたのが後の大国、ソビエト連邦である。" +
  "レーニン亡き後、ヨシフ・スターリンがソ連を継いだ。これは、そのヨシフおじさんのパーフェクト数学教室である";
document.querySelector("#start").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("start_audio").currentTime = 0; //連続クリックに対応
  document.getElementById("start_audio").play(); //クリックしたら音を再生
});

window.onload = function () {
  Swal.fire({
    html: `<h1  style="color:#cd0000">あらすじ</h1>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png" alt="epilo" style="height:29%"></img>
           <p>${epil}</p>`,
    padding: "0rem",
    backdrop: "rgba(80,80,80,0.99)",
    background: "#ffd800",
  });
};
