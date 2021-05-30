$(document).ready(function() {
    $('.feature-items .bolts-stick').hide();
    $('.feature-items .feature--text').hide();
});

$('.feature-items').on('mouseover', function() {
    $(this).children('.bolts-stick').show();
    $(this).children('.feature--text').show();
});
$('.feature-items').on('mouseout', function() {
    $(this).children('.bolts-stick').hide();
    $(this).children('.feature--text').hide();
});
