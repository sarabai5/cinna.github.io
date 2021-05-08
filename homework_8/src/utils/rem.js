function setRem() {
  // 320 default 16px; 320px = 20rem ; each element px/16
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  //get Dom element
  let htmlDom = document.getElementsByTagName("html")[0];
  //set body font size
  htmlDom.style.fontSize = htmlWidth / 20 + "px";
}
// initial
setRem();
// invoke setRem() to be responsive
window.onresize = function() {
  setRem();
};
