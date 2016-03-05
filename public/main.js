console.log('got here');
var $ctx;
var myNewChart;
var $days;
var $lates;
var $missed;

var data;


$( document ).ready(function() {
  // Get context with jQuery - using jQuery's .get() method.
  $ctx = $("#myChart").get(0).getContext("2d");

  data = {
    labels: days,
    datasets: [
      { label: "My First dataset",
        fillColor: "rgba(255, 80, 80,0.2)",
        strokeColor: "rgba(255,255,255,1)",
        pointColor: "rgba(255,255,255,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: misses
      },
      { label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(255, 80, 80,1)",
        pointColor: "rgba(255, 80, 80,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: lates
      }
    ]
  };
  // This will get the first returned node in the jQuery collection.
  myNewChart = new Chart($ctx).Line(data);
});
