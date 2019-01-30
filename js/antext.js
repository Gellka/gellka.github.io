$.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
   });
  });
 };

$(function() {
    var otop = $('.example').offset().top - window.innerHeight;
    $(window).scroll(function(){
        if($('.example').is(":hidden")){
            var ptop = $('body').scrollTop();
            if(ptop > otop){
                $('.example').show();
                $('.example').animate_Text();
            }
        }
    });
});