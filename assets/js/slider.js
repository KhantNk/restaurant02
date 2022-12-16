$(document).ready(function () {
  $(".slick-slider").slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  );

  $(".slider-for")
    .on("init", () => {
      $('.slick-slide[data-slick-index="-1"]').addClass("left");
      $('.slick-slide[data-slick-index="1"]').addClass("right");
    })

    .slick({
      centerMode: true,
      centerPadding: "25%",
      arrows: true,
      draggable: true,
      dots: false,
      asNavFor: ".slider-nav",
      focusOnSelect: true,
    })

    .on("beforeChange", (event, slick, current, next) => {
      $(".slick-slide.right").removeClass("right");
      $(".slick-slide.left").removeClass("left");
      const left = current < next && current > 0 ? current : next - 1;
      const right = current < next || next === 0 ? next + 1 : current;
      $(`.slick-slide[data-slick-index="${left}"]`).addClass("left");
      $(`.slick-slide[data-slick-index="${right}"]`).addClass("right");
    });

  $(".slider-nav").slick({
    centerMode: true,
    centerPadding: "117px",
    arrows: false,
    draggable: false,
    dots: false,
    infinite: true,
    asNavFor: ".slider-for",
    focusOnSelect: true,
  });

  $(".slick-slider").slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true
  });

});
