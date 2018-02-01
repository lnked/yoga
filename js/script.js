$(document).ready(function(){
    
    $("body").on("click", ".js-open-popup", function(e){
        
        e.preventDefault();
        
        $("#popup-recall").css({
            
            'display': 'flex'
            
        })
        
    })
    
    $('body').on('click', '.js-close-popup', function(e){
        
        e.preventDefault();
        
        $("#popup-recall").css({
            
            'display': 'none'
            
        })
        
    })
    
    $('body').on('click', '.js-navigation', function(e){
        
        e.preventDefault();
        
        $('body').toggleClass('navigation-open');
        
    })
    
    $('body').on('click', '.js-disabled', function(e){
        
        
        e.preventDefault();
        
        var temp = $(this).attr('id').split('-');
        
        $(".js-check-checkbox[name='"+temp[0]+"'][value='"+temp[1]+"']").prop("checked", false);
        
        $(this).closest('.sidebar__tags__list__item').remove();
        
        if($("#sidebar-choose").find(".sidebar__tags__list__item").length){
            
            $("#sidebar-choose").removeClass("sidebar__tags--hidden");
            
        }else{
            
            $("#sidebar-choose").addClass("sidebar__tags--hidden");
            
        }
        
    })
    
    $('body').on('click', '.js-disabled-all', function(e){
        
        
        e.preventDefault();
        
        $(".js-check-checkbox").prop("checked", false);
        
        $("#sidebar-choose").find(".sidebar__tags__list__item").remove();
        
        $("#sidebar-choose").addClass("sidebar__tags--hidden");
        
    })
    
    $('body').on('change', '.js-check-checkbox', function(e){
        
        
        var checked = $(this).prop("checked");
        
        var value = $(this).val();
        
        var text = $(this).closest(".checkbox").find(".checkbox__label__name").text();
        
        var name = $(this).attr('name');
        
        
        if($("#" + name + '-' + value).length){
            
            $("#" + name + '-' + value).closest("li").remove();
            
        }else{
            
            var template = [
            
            '<li class="sidebar__tags__list__item">',
                '<a href="#" id="',name,'-',value,'" class="disabled-checkbox js-disabled">',
                    text,
                '</a>',
            '</li>'
            
            ] 
            
            $("#tag-list").append(template.join(""));
            
        }
        
        if($("#sidebar-choose").find(".sidebar__tags__list__item").length){
            
            $("#sidebar-choose").removeClass("sidebar__tags--hidden");
            
        }else{
            
            $("#sidebar-choose").addClass("sidebar__tags--hidden");
            
        }
        
    })
    
})