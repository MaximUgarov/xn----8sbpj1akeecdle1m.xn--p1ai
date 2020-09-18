$(document).ready(function () {
//    
//    const searchString = new URLSearchParams(window.location.search);
//    const clickid = searchString.get('send-mail');
//    if (clickid == true) {
//        $(".successfully-window").addClass("active");
//    }
    
    $('.answer-block__close').on('click', function (event) {
        $(".answer-block").removeClass("active");
    })

    $('#1').on('click', function (event) {
        $("#1Q").toggleClass("active");
    })

    $('#2').on('click', function (event) {
        $("#2Q").toggleClass("active");
    })

    $('#3').on('click', function (event) {
        $("#3Q").toggleClass("active");
    })

    $('#4').on('click', function (event) {
        $("#4Q").toggleClass("active");
    })

    $('#5').on('click', function (event) {
        $("#5Q").toggleClass("active");
    })

    $('#6').on('click', function (event) {
        $("#6Q").toggleClass("active");
    })

    $('#7').on('click', function (event) {
        $("#7Q").toggleClass("active");
    })

    $('#8').on('click', function (event) {
        $("#8Q").toggleClass("active");
    })

    $('#9').on('click', function (event) {
        $("#9Q").toggleClass("active");
    })

    $('.header-block-btn__call').on('click', function (event) {
        $(".callback-window").addClass("active")
    })
    $('.callback-window-bg').on('click', function (event) {
        $(".callback-window").removeClass("active")
    })
    $(".callback-form__number").click(function () {
        $(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");
    
    $("#mini-callback-window-input").click(function () {
        $(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");


    $('#coast').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.service-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    $('#Progress-block').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.Progress-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    $('#elimination').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.elimination-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    $('#question').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.search-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    $('#colleagues').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.colleagues-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    $('#client').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.Results-block').offset().top + "px"
        }, {
            duration: 1E3
        });
    });

    $('#top').on('click', function () {
        $('html,body').animate({
            scrollTop: $('header').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    
    $('#top-mobile').on('click', function () {
        $('html,body').animate({
            scrollTop: $('header').offset().top + "px"
        }, {
            duration: 1E3
        });
    });
    $(".nav-btnsSocialBtnMain").on('click', function (event) {
        $(this).addClass("active");
        $(".nav-btnsSocialBtn").addClass("active");
        $(".nav-btnsSocial").addClass("active");
    })

    $('#nav-btnsSocialBtn').on('click', function (event) {
        $(this).removeClass("active");
        $('#nav-btnsSocial').removeClass("active");
        $('#nav-btnsSocial1').removeClass("active");
        $('#nav-btnsSocialBtnMain').removeClass("active")
    })

    $('.search-form-arrow').on('click', function (event) {
        $(".search-block-search-question").toggleClass("active");
        $(".search-form-arrow").toggleClass("active")
    })

    $('.search-form-text').on('click', function (event) {
        $(".search-block-search-question").addClass("active");
    })

    $('.service-block-content-blocks__animation').on('click', function (event) {
        $(this).toggleClass("active");

    })
    //        $('.search-form-arrow.active').on('click', function(event) {
    //            $(this).removeClass("active");
    //            $(".search-block-search-question.active").toggleClass("active");
    //        })

    let questionArr = [{
            descr: 'Нашли цены ниже?',
            id: 1
            },
        {
            descr: 'Нужен ли директор и все учредители для ликвидации фирмы?',
            id: 2
            },
        {
            descr: 'Какие документы нужны для ликвидации?',
            id: 3
            },
        {
            descr: 'Что будет с моей фирмой после ликвидации?',
            id: 4
            },
        {
            descr: 'Когда нужно закрыть расчетный счет?',
            id: 5
            },
        {
            descr: 'Могут ли учредители отвечать по долгам фирмы в случае ее ликвидации?',
            id: 6
            },
        {
            descr: 'Занимаетесь ли вы фирмами в других регионах?',
            id: 7
            },
        {
            descr: 'С чего начать процедуру ликвидации?',
            id: 8
            },
        {
            descr: 'Один из соучредителей не хочет ликвидировать фирму, а остальные хотят. Что делать в этом случае?',
            id: 9
            },
        ]
    document.querySelector('#search .search-form-text').oninput = function () {
        let searchElem = this;
        let foundTyping;
        foundTyping = questionArr.filter(({
            descr
        }) => {
            console.log(descr);
            return descr.trim().toLowerCase().includes(searchElem.value.trim().toLowerCase());
        });
        console.log(foundTyping)
        renderquestionArr(foundTyping);
    }

    function renderquestionArr(arr) {
        let el_container = document.querySelector('.search-block-search-question');
        el_container.innerHTML = '';
        let questions;
        if (arr) {
            questions = arr;
        } else {
            questions = questionArr;
        }

        questions.forEach(function (questionArr) {
            const el_newquestion = document.createElement('span');
            el_newquestion.className = 'search-answer';
            el_newquestion.id = questionArr.id;
            el_newquestion.innerHTML = `<span class="search-answer">${questionArr.descr}</span>`;
            el_container.appendChild(el_newquestion);
        })

        const el_callinf = document.createElement('span');
        el_callinf.className = 'search-answer';
        el_callinf.innerHTML = `<span class="search-answer-callSpan"><a href="tel:8172501286" class="search-answerLink">Здесь нет вашего вопроса?<span class="search-answer-callSpanColor"> Позвоните нам, это бесплатно (8172) 50-12-86</span></a></span>`;
        el_container.appendChild(el_callinf);
        initlisteners()
    }
    renderquestionArr();


    $('.answer-block__close').on('click', function (event) {
        $(".answer-block").removeClass("active");
    })

    function initlisteners() {
        $('#1').on('click', function (event) {
            $("#1Q").toggleClass("active");
        })
        $('#2').on('click', function (event) {
            $("#2Q").toggleClass("active");
        })

        $('#3').on('click', function (event) {
            $("#3Q").toggleClass("active");
        })

        $('#4').on('click', function (event) {
            $("#4Q").toggleClass("active");
        })

        $('#5').on('click', function (event) {
            $("#5Q").toggleClass("active");
        })

        $('#6').on('click', function (event) {
            $("#6Q").toggleClass("active");
        })

        $('#7').on('click', function (event) {
            $("#7Q").toggleClass("active");
        })

        $('#8').on('click', function (event) {
            $("#8Q").toggleClass("active");
        })

        $('#9').on('click', function (event) {
            $("#9Q").toggleClass("active");
        })
    }

    $('#menuToggle').on('click', function (event) {
        $(".nav-mini-block-content").toggleClass("active")
//        $('body').css('overflow', 'hidden')
        
    })

    $('.nav-mini-link').on('click', function (event) {
        $(".nav-mini-block-content").removeClass("active")
    })
    let ch = document.querySelector('#menuToggle input[type="checkbox"]')
    //    $('#callback-mobile').on('click', function (event) {
    //        $(".mini-callback-window").addClass("active");
    //        ch.checked = true;
    //        $(".nav-mini-block-content").addClass("active")
    //    })

    $('#menuToggle').on('click', function (event) {
        $(".mini-callback-window").removeClass("active");
    })


    $('.answer-block-bg').on('click', function (event) {
        $(".answer-block").removeClass("active")
    })
    $('.answer-block-btn__call').on('click', function (event) {
        $(".call-animation").toggleClass("active");
        $(".call-animationSpan").toggleClass("active");
        $(".answer-block-btn__mail").toggleClass("active");
    })

    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d1').on('click', function (event) {
                $("#d1").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')
            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d2').on('click', function (event) {
                $("#d2").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')
            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d3').on('click', function (event) {
                $("#d3").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')
            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d4').on('click', function (event) {
                $("#d4").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')
            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d5').on('click', function (event) {
                $("#d5").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')
            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d6').on('click', function (event) {
                $("#d6").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')

            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d7').on('click', function (event) {
                $("#d7").addClass("active");
                $('.service-block-content-blocks').css('display', 'none')
            })
        }
    });
    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d8').on('click', function (event) {
                $("#d8").addClass("active");
            })
        }
    });

    $(function () {
        if ($(window).width() < 1100) {
            $('#btn_d9').on('click', function (event) {
                $("#d9").addClass("active");
            })
        }
    });
    
    $(function () {
        if ($(window).width() < 1100) {
          $('.service-block-content-blocks').on('click', function (event) {
        $('body').css('overflow', 'hidden')
    })
        }
    });

    $(function () {
        if ($(window).width() > 600) {
            $('.answer-block-btn__mail').on('click', function (event) {
                $(".callback-window").addClass("active");
            })
        }
    });

    $('.mobile-description__btn').on('click', function (event) {
        $(".mobile-description").removeClass("active");
        $(".mini-callback-window").addClass("active");
    })
    $('.close__btn').on('click', function (event) {
        $(".mobile-description").removeClass("active");
        $(".mini-callback-window").removeClass("active");
        $('body').css('overflow-y', 'auto')
         $('.service-block-content-blocks').css('display', 'flex')
    })
    
    

    $(function () {
        if ($(window).width() > 600) {
            $(window).scroll(function () {
                var service = $('.service-block').offset().top;
                console.log(service);
                if ($(this).scrollTop() > service) {
                    $(".nav-mini-block1").addClass("active");

                } else {
                    $(".nav-mini-block1").removeClass("active");

                }
                
            });
        }
    });
    function numbers() {
    $(document).ready(function(){
        $('#numberSpanAnimationid1').spincrement({
            thousandSeparator: "",
            duration: 1200
        });
    });
}

function numbers1() {
    $(document).ready(function(){
        $('#numberSpanAnimationid2').spincrement({
            thousandSeparator: "",
            duration: 4000
        });
    });
}
function numbers2() {
    $(document).ready(function(){
        $('#numberSpanAnimationid3').spincrement({
            thousandSeparator: "",
            duration: 3500
        });
    });
}
    

    $(window).scroll(function () {
        var numberSpan = $('.Progress-block').offset().top
        console.log(numberSpan)
        if ($(this).scrollTop() > numberSpan / 1.3) {
            numbers ()
            numbers1 ()
            numbers2 ()

        } 
        }
    );

    $('.responsive').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    arrows: false,

                }
    },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    arrows: false,
                }
    },
            {
                breakpoint: 564,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    arrows: false,

                }
    },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,

                }
    }

  ]

    });
    $('.responsive_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    

                }
    },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    arrows: false,
                }
    },
            {
                breakpoint: 564,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    arrows: false,

                }
    },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,

                }
    }

  ]

    });

    $("[data-fancybox]").fancybox({
        slideShow: false,
        fullScreen: true,
        thumbs: false,
        showCloseButton: true,
        infobar: false,
        arrows: false,
    })

    $('.callback-form__name').onsubmit = function (e) {
        let validateCallback = e.currentTarget.value;
        if (validateCallback === "") {
            console.log(dsefgedfrg)
            $(".callback-form__btn").disabled = true
            return false
        } else {
            $(".callback-form__btn").disabled = false
        }
    }

    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('.nav-mini-link').on('click', function(event) {
        $('body').css('overflow-y', 'auto')
        
    })
    
    $(".callback-window").submit(function() {
		var form_data = $(this).serialize(); 
		$.ajax({
			type: "POST", 
			url: "send-mail.php",
			data: form_data,
			success: function() {
				$(".successfully-wrapper").addClass("active");
                $(".callback-window").removeClass("active");
                setTimeout (function() {
                  $(".successfully-wrapper").removeClass("active");
                }, 3000);
                
			}
		});
		event.preventDefault();
        
	});
     $(".mini-callback-window").submit(function() {
		var form_data = $(this).serialize(); 
		$.ajax({
			type: "POST", 
			url: "send-mail.php",
			data: form_data,
			success: function() {
				$(".successfully-wrapper").addClass("active");
                $(".mini-callback-window").removeClass("active");
                setTimeout (function() {
                  $(".successfully-wrapper").removeClass("active");
                    $('body').css('overflow-y', 'auto');
                }, 2000);
                
			}
		});
		event.preventDefault();
	});
    
})
