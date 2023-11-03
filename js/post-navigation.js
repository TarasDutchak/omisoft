(function ($) {

    $(document).ready(function () {


       


        if ($('.postmiansectbody__post').length > 0) {
            var headers = document.querySelectorAll('.postcontent h2');
            for (var i = 0; i < headers.length; i++) {
                headers[i].setAttribute('id', i + 1);
            }
    
    
            var headers = document.querySelectorAll('.postcontent h2');
            var list = document.querySelector('.postnav');
            var ul = document.createElement('ul');
    
            for (var i = 0; i < headers.length; i++) {
                var text = headers[i].textContent;
                var id = headers[i].getAttribute('id');
                var listItem = document.createElement('li');
                var link = document.createElement('a');
    
                link.textContent = text;
                link.setAttribute('href', '#' + id);
                listItem.appendChild(link);
                ul.appendChild(listItem);
            }
    
            list.appendChild(ul);
    
    
            // -----------.
    
    
            $(".postnav ul").on("click", "a", function (event) {
                console.log('sdsdsd')
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({ scrollTop: top - 105 }, 1500);
            });
    
    
            const links = document.querySelectorAll('.postnav li a');
            window.addEventListener('scroll', () => {
                const anchors = document.querySelectorAll('.postmiansectbody__post [id]');
                anchors.forEach(anchor => {
                    if (anchor.closest('.postmiansectbody__post')) {
                        const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                        if (window.pageYOffset >= anchorTop - 110) {
                            links.forEach(link => {
                                const correspondingLink = document.querySelector(`.postnav li a[href="#${anchor.id}"]`);
                                if (correspondingLink) {
                                    link.classList.remove('active');
                                    correspondingLink.classList.add('active');
                                }
                            });
                        }
                    }
                });
            });

        }



        // post update


        //   Space containers
        var windowWidth = $(document).width(),
            containerWidth = $('.postcontainer').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.articlecontainer').css('padding-right', paddingContainer)



        $(window).resize(function () {
            var windowWidth = $(document).width(),
                containerWidth = $('.postcontainer').width(),
                paddingContainer = ((windowWidth - containerWidth) / 2)
            $('.articlecontainer').css('padding-right', paddingContainer)
        });


        $('.articlestickybox .arrow').click(function(){
            $(this).parents('.articlestickybox').addClass('hiddenelms');
        });

        $('.articlestickybox .showbox').click(function(){
            $(this).parents('.articlestickybox').removeClass('hiddenelms');
        });



        






    })

}(jQuery));