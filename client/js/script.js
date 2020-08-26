$(document).ready(function() {
      $("#keyword").keyup(function() {
          var k = $(this).val();
          $("#store-table > tbody > tr").hide();
          var temp = $("#store-table > tbody > tr > td:nth-child(3n+2):contains('" + k + "')");

          $(temp).parent().show();
      })
  })
