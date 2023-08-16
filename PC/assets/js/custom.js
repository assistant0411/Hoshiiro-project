$(window).on("load", function(){
    wow.init();
    setTimeout(() => {
        $(".p-mv__main").addClass("is-active");
    }, 800);
    
    $(".p-intro__gallery__item").on('click', function(){
        var classList = $(this).attr("class");
        var classArr = classList.split(/\s+/);
        var number;
        $.each(classArr, function(index, value){
            if(value.indexOf("p-intro__gallery__item--0") != -1){
                number = value.replace('p-intro__gallery__item--0','');
            }
        });
        var gallery__item = ".p-intro__gallery__item--0" + number;
        var intro__item = ".p-intro__item--0" + number;
        var detail__item = ".p-intro__detail__item--0" + number;
        disableActive(".p-intro__gallery__item");
        disableActive(".p-intro__item");
        disableActive(".p-intro__detail__item");
        enableActive(gallery__item);
        enableActive(intro__item);
        enableActive(detail__item);
    })
    
    function disableActive(val){
        $(val).each(function(){
            $(this).removeClass("is-active");
        })
    }
    
    function enableActive(val){
        $(val).addClass("is-active");
    }

});