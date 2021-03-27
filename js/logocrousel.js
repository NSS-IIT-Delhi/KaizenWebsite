$(document).ready(function () {
    $(".customer-logos")
        .slick({
            centerMode: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,

            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        centerMode: true,
                    },
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    },
                },
            ],
        })
        .on("setPosition", function (event, slick) {
            slick.$slides.css("height", slick.$slideTrack.height() + "px")
        })
})

$(document).ready(function () {
    $(".customer-logosCSR").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    })
})

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault()

            // Store hash
            var hash = this.hash

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                500,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash
                }
            )
        } // End if
    })
})
