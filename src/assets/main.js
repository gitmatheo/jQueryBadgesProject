$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/matteuszd.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourse(response.courses.completed)
    }
  });


  function addCourse(courses) {
    var $badges = $('#badges');

    courses.forEach(function(course){
        var $course = $("<div>", {
          'class': 'course'
        }).appendTo($badges);

        $("<h3>", {
          'text': course.title
        }).appendTo($course);

        $("<img>", {
          'src': course.badge
        }).appendTo($course);

        $("<a>", {
          'href': course.url,
          'target': '_blank',
          'class': 'btn btn-primary',
          'text': 'See Course'
        }).appendTo($course);

    })
  }



});
