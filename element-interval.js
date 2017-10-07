function ElementInterval(config) {
  config = config || {};
  config.wait = config.wait || 60;
  config.el = config.el || '#ElementInterval';
  config.waitInterval = 0;
  return {

    start: function() {
      var el = document.querySelector(config.el);
      el.dataset.html = el.innerHTML;
      config.waitInterval = setInterval(this.doEvent, 1000);
    },
    doEvent: function() {
      var el = document.querySelector(config.el);
      if (config.wait > 0) {
        el.disabled = true;
        el.innerHTML = "等待" + (--config.wait) + "S";
      } else {
        el.disabled = false;
        el.innerHTML = el.dataset.html;
        clearInterval(config.waitInterval);
      }
    }
  }
}
