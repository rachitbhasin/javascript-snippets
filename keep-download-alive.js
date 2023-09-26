// Small snippet to resume stopped or paused downloads in chrome
function keepAlive() {
  var dm = document.getElementsByTagName('downloads-manager')[0];
  if(dm) {
      var list = dm.shadowRoot.querySelector("#downloadsList");
      if(list) {
          var item = list.querySelector("downloads-item");
          if(item) {
              var button = item.shadowRoot.querySelector("#pauseOrResume");
              if(button && button.innerText === "Resume") {
                  button.click()
              }

              if(!button) {
                  clearInterval(window.stopKeepAlive);
              }
          }
      }
  }
}

window.stopKeepAlive = setInterval(keepAlive, 5 * 1000)