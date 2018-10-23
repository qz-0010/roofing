$(function() {
  var $items = $('.js-lightbox');

  if($items.length === 0) return;

  $items.magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    }
  });
});