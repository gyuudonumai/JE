document.querySelector("#start").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("start_audio").currentTime = 0; //連続クリックに対応
  document.getElementById("start_audio").play(); //クリックしたら音を再生
});
