$(function () {
  $('#myModal').modal({
    show: false
  });

  $('#loginButton').login('jQuery plugin Hooray!');

  $.getJSON('http://localhost:8080/stories', function(profiles) {
    $('.container.profiles').mustache('profiles', {
      profiles: profiles
    });
  });
  
}());