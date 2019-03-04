$(document).ready(function () {
    var $home = $('#home');
    var $portfolio = $('#portfolio');
    $portfolio.hide();

    $('#myPortfolio').click(function() {
        $home.slideUp();
        $portfolio.show('slow');
      });
});

