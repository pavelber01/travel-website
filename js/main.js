var reg = document.getElementById('reg');
var log = document.getElementById('auth');

var log_link = document.getElementById('log_link');
var reg_link = document.getElementById('reg_link');

log_link.style.borderLeft  = '4px solid #73BCFF';
reg.style.display = 'none';

log_link.onclick = function() {
  log_link.style.borderLeft  = '4px solid #73BCFF';
  reg_link.style.borderLeft  = 'none';

  log.style.display = 'block';
  reg.style.display = 'none';
};

reg_link.onclick = function() {
  reg_link.style.borderLeft  = '4px solid #73BCFF';
  log_link.style.borderLeft  = 'none';

  reg.style.display = 'block';
  log.style.display = 'none';
};
