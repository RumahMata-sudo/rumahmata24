
document.addEventListener('DOMContentLoaded', function(){
  // simple date in header
  var el = document.getElementById('today');
  if(el) el.textContent = new Date().toLocaleDateString('id-ID', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
});
