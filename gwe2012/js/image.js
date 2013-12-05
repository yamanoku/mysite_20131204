// JavaScript Document

$(function(){
     $('a img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_2', '_1'));
          }, function(){
             if (!$(this).hasClass('currentPage')) {
             $(this).attr('src', $(this).attr('src').replace('_1', '_2'));
        }
   });
});
