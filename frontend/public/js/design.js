element.addEventListener("touchmove", function(e) {
    if (e.cancelable) {
        e.preventDefault();
    }
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
  
  $('.dropdown-trigger').dropdown({coverTrigger: false, constrainWidth: false});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

  $(document).ready(function(){
    $('select').formSelect();
  });       

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
