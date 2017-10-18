(function(){
	var skillBox = $(".skills .list>li");
	var skillLen = skillBox.length;
	for(var i=0; i<skillLen; i++){
		skillBox.eq(i).css({"transform":"translate("+(-480+190*i)+"px,50px) scale(1)","transiton":" 1s "+ (skillLen-1-i)*0.1 +"s"});
	}
	})();
	var $container = $("#lightBox");
    $container.isotope({
        filter:"*",
        animationOptions:{
            duration:770,
            easing:"linear"
        },
        layoutMode:"cellsByRow",
        cellsByRow:{
            columnWidth:195,
            rowHeight:190
        }
    });
	 $("#cat a").click(function(){
        $("#cat a").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
            filter:selector,
            animationOptions:{
                duration:750,
                easing:"linear"
            }
        });
        return false;
    });

setTimeout(function(){
	$(document).scrollTop(0);
},50);
var $part = $('.page');
var $li = $('#silder ul li');
var $img = $('.page img');

//页面滚动
(function(){
	var index = 0;
	var wH = $(window).height();
	var nowTime = new Date();

	$(window).resize(function(){
		wH = $(window).height();
	});
	$li.click(function(){
		index = $(this).index();
		move();
	});
	$(document).mousewheel(function(){
		if ( new Date() - nowTime > 500 )
		{
			nowTime = new Date();
			var d = arguments[1];
			index=d<0?(index>=$li.length-1?0:index+1):(index<=0?$li.length-1:index-1);
			move();
		};
	});
	function move(){
		$li.eq(index).addClass('on').siblings().removeClass('on');
		$('body,html').animate({
			scrollTop : index*wH
		},500);
		
	}
})();