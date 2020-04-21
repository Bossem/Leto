$(document).ready(function () {

  $('.burger-menu-button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('burger-menu-button--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });

  var burgerLink = $('.nav-links__li');
  
  $('.nav-links__li').on('click', function() {
    $('.burger-menu-button').removeClass('burger-menu-button--active');
    $('.burger-menu').removeClass('burger-menu--active');
  });
  
  

  $("#header-nav-bar, #burger-nav-bar, #footer-links-leto, #footer-links-clients").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 150}, 1500);
  });

  var clubChoiceLink = $('#club-choice-link');
  var clubCardsLink = $('#club-cards-link');
  var clientsListChoice = $('#clients-list-choice');
  var clientsListCards = $('#clients-list-cards');

  clubChoiceLink.on('click', function(e) {
    e.preventDefault();
    var link = "index.php#club-choice";
    location.href = link;
  });
  clubCardsLink.on('click', function(e) {
    e.preventDefault();
    var link = "index.php#club-cards";
    location.href = link;
  });
  clientsListChoice.on('click', function(e) {
    e.preventDefault();
    var link = "index.php#club-choice";
    location.href = link;
  });
  clientsListCards.on('click', function(e) {
    e.preventDefault();
    var link = "index.php#club-cards";
    location.href = link;
  });

  // clubs links

  var fistClubBlock = $('#club-mozaika');
  var secondClubBlock = $('#club-shchelkovo');
  var url_1 = 'mozaika.php';
  var url_2 = 'shchelkovo.php';

  fistClubBlock.on('click', function() {
    location.href = url_1;
  });
  secondClubBlock.on('click', function() {
    location.href = url_2;
  });

  // end clubs links

 var mainSlider = new Swiper ('.main-slider__container', {
    loop: true,
    speed: 400,
    spaceBetween: 1000,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.main-slider__pagination',
    },

  });

  var servicesSlider = new Swiper('.services__slider-container', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.services__button-next',
      prevEl: '.services__button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });

  var gallerySlider = new Swiper('.gallery__slider-container', {
    loop: true,
    speed: 400,
    spaceBetween: 100,

    pagination: {
      el: '.gallery__slider-pagination',
    },

    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },

  });

  $('#club-cards-input-name').focus(function() {
    $('#club-cards-label-name').hide();
  });

  $('#club-cards-input-name').blur(function() {
      if ($(this).val().trim() === '') {
          $('#club-cards-label-name').show();
      }
  });

  $('#club-cards-input-phone').focus(function() {
    $('#club-cards-label-phone').hide();
  });

  $('#club-cards-input-phone').blur(function() {
      if ($(this).val().trim() === '') {
          $('#club-cards-label-phone').show();
      }
  });


  $('#club-mozaika-form-input-name').focus(function() {
    $('#club-mozaika-form-label-name').hide();
  });

  $('#club-mozaika-form-input-name').blur(function() {
      if ($(this).val().trim() === '') {
          $('#club-mozaika-form-label-name').show();
      }
  });

  $('#club-mozaika-form-input-phone').focus(function() {
    $('#club-mozaika-form-label-phone').hide();
  });

  $('#club-mozaika-form-input-phone').blur(function() {
      if ($(this).val().trim() === '') {
          $('#club-mozaika-form-label-phone').show();
      }
  });


  $('#club-shchelkovo-form-input-name').focus(function() {
    $('#club-shchelkovo-form-label-name').hide();
  });

  $('#club-shchelkovo-form-input-name').blur(function() {
      if ($(this).val().trim() === '') {
          $('#club-shchelkovo-form-label-name').show();
      }
  });

  $('#club-shchelkovo-form-input-phone').focus(function() {
    $('#club-shchelkovo-form-label-phone').hide();
  });

  $('#club-shchelkovo-form-input-phone').blur(function() {
      if ($(this).val().trim() === '') {
          $('#club-shchelkovo-form-label-phone').show();
      }
  });

  
  // modal

  var modal = $('.modal'),
      containerCall = $('.modal__container-call'),
      containerVisit = $('.modal__container-visit'),
      headerModalBtn = $('#btn-sumbit-header__button'),
      burgerModalBtn = $('#btn-sumbit-burger-menu__button'),
      footerModalBtn = $('#btn-sumbit-footer__button'),
      freeCallBtn = $('.header__sign-up-free-call'),
      closeBtn = $('.modal__close'),
      thanksModal = $('.thanks-modal'),
      thanksModalContainer = $('.thanks-modal__container-thanks'),
      thanksCloseBtn = $('.thanks-modal__close');

  burgerModalBtn.on('click', function () {
    containerVisit.removeClass('modal__container-visit--visible');
    modal.toggleClass('modal--visible');
    containerCall.addClass('modal__container-call--visible');
  });
  headerModalBtn.on('click', function () {
    containerVisit.removeClass('modal__container-visit--visible');
    modal.toggleClass('modal--visible');
    containerCall.addClass('modal__container-call--visible');
  });
  freeCallBtn.on('click', function () {
    containerCall.removeClass('modal__container-call--visible');
    modal.toggleClass('modal--visible');
    containerVisit.addClass('modal__container-visit--visible');
  });
  footerModalBtn.on('click', function () {
    containerVisit.removeClass('modal__container-visit--visible');
    modal.toggleClass('modal--visible');
    containerCall.addClass('modal__container-call--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  thanksCloseBtn.on('click', function () {
    thanksModal.removeClass('thanks-modal--visible');
    thanksModalContainer.removeClass('thanks-modal__container-thanks--active');
  });

  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      modal.removeClass('modal--visible');
      thanksModal.removeClass('thanks-modal--visible');
      thanksModalContainer.removeClass('thanks-modal__container-thanks--active');
    }
  });
  $(document).on('click', function (e) {
    if (modal.is(e.target)){
      $('.modal__form--1')[0].reset();
      $('.modal__form--2')[0].reset();
      $('div.invalid').remove();
      $('.modal__form').find('.invalid').removeClass('invalid');
      modal.removeClass('modal--visible');
    }
  });

  $(document).on('click', function (e) {
    if (thanksModal.is(e.target)){
      thanksModal.removeClass('thanks-modal--visible');
    }
  });

  $(document).on('click', function (e) {
    if (thanksModalContainer.is(e.target)){
      thanksModalContainer.removeClass('thanks-modal__container-thanks--active');
    }
  });
  // end modal

  // mini menu
  var menu1 = $('.header__mini-menu-1'),
      menu2 = $('.header__mini-menu-2'),
      menu2Clubs = $('.header__mini-menu-clubs-2'),
      checkBox1 = $('#header-checkbox-1'),
      menu3 = $('.header__mini-menu-3'),
      menu4 = $('.header__mini-menu-4');

  menu1.on('click', function() {
    menu1.toggleClass('header__mini-menu-1--active');
    menu2.addClass('header__mini-menu-2--active');
    menu2Clubs.addClass('header__mini-menu-clubs-2--active');
  });

  menu2.on('click', function() {
    menu2.removeClass('header__mini-menu-2--active');
    menu2Clubs.removeClass('header__mini-menu-clubs-2--active');

    if (checkBox1.prop('checked')) {
      menu3.addClass('header__mini-menu-3--active');
    } else {
      menu4.addClass('header__mini-menu-4--active');
    }
  });
  menu3.on('click', function() {
    menu3.removeClass('header__mini-menu-3--active');
    menu2.addClass('header__mini-menu-2--active');
    menu2Clubs.addClass('header__mini-menu-clubs-2--active');
  });
  menu4.on('click', function() {
    menu4.removeClass('header__mini-menu-4--active');
    menu2.addClass('header__mini-menu-2--active');
    menu2Clubs.addClass('header__mini-menu-clubs-2--active');
  });


  // span star in input
  var monthBtn = $('.cards-form-box__month-button');

  monthBtn.on('click', function(e) {
    monthBtn.removeClass('cards-form-box__month-button--active');
    $(this).addClass('cards-form-box__month-button--active');
  });

  var mozaikaBtn = $('.mozaika-form-box__price-button');

  mozaikaBtn.on('click', function(e) {
    mozaikaBtn.removeClass('mozaika-form-box__price-button--active');
    $(this).addClass('mozaika-form-box__price-button--active');
  });

  var shchelkovoBtn = $('.shchelkovo-form-box__price-button');

  shchelkovoBtn.on('click', function(e) {
    shchelkovoBtn.removeClass('shchelkovo-form-box__price-button--active');
    $(this).addClass('shchelkovo-form-box__price-button--active');
  });
  // span star in input


  // $(document).on('click', function (e) {
  //   var target = event.target;
  //   console.log(target);
    
  //   if (target.className !== 'header__mini-menu-clubs-2--active') {
  //     console.log('work');
  //     menu2.removeClass('header__mini-menu-2--active');
  //     menu2Clubs.removeClass('header__mini-menu-clubs-2--active');
  //   }
  // });
  // end mini menu




  // validate
  var formsClass = [
    ".modal__form--1",
    ".modal__form--2",
    ".club-cards__form",
    ".visit-form__form",
    ".club-mozaika-form__form",
    ".club-shchelkovo-form__form",
    
  ];

  for (var i = 0; i < formsClass.length; i++) {
    formsValidate(formsClass[i]);
  }

  function formsValidate (form) {
    $(form).validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 18,
        },
        userEmail: {
          required: true,
          email: true,
        },
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Не меньше 2-х букв",
          maxlength: "Не больше 15-и букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Не меньше 10-и цифр"
        },
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный email: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            $('.input-show').show();
            thanksModal.addClass('thanks-modal--visible');
            thanksModalContainer.addClass('thanks-modal__container-thanks--visible');
            ym(61650112, 'reachGoal', 'success-form'); return true;
          }
        });
      },
    });

    $('[type=tel]').mask('+7 (000) 000-00-00');

    // DISABLE BUTTONS
    $('#visit-checkbox').on('change', function(){
      if($('#visit-checkbox').prop('checked')){
      $('#btn-sumbit-visit').attr('disabled', false);
      $('#btn-sumbit-visit').css('opacity', 1);
    }else{
      $('#btn-sumbit-visit').attr('disabled', true);
      $('#btn-sumbit-visit').css('opacity', 0.5);
      }
    });

    $('#cards-form-box-checkbox-main').on('change', function(){
      if($('#cards-form-box-checkbox-main').prop('checked')){
      $('#btn-sumbit-cards-form-box').attr('disabled', false);
      $('#btn-sumbit-cards-form-box').css('opacity', 1);
      }else{
      $('#btn-sumbit-cards-form-box').attr('disabled', true);
      $('#btn-sumbit-cards-form-box').css('opacity', 0.5);
      }
    });

    $('#call-checkbox').on('change', function(){
      if($('#call-checkbox').prop('checked')){
      $('#btn-sumbit-call').attr('disabled', false);
      $('#btn-sumbit-call').css('opacity', 1);
      }else{
      $('#btn-sumbit-call').attr('disabled', true);
      $('#btn-sumbit-call').css('opacity', 0.5);
      }
    });

    $('#visit-modal-checkbox').on('change', function(){
      if($('#visit-modal-checkbox').prop('checked')){
      $('#btn-sumbit-modal-visit').attr('disabled', false);
      $('#btn-sumbit-modal-visit').css('opacity', 1);
      }else{
      $('#btn-sumbit-modal-visit').attr('disabled', true);
      $('#btn-sumbit-modal-visit').css('opacity', 0.5);
      }
    });

    $('#mozaika-form-box-checkbox-main').on('change', function(){
      if($('#mozaika-form-box-checkbox-main').prop('checked')){
      $('#btn-sumbit-mozaika-form-box').attr('disabled', false);
      $('#btn-sumbit-mozaika-form-box').css('opacity', 1);
      }else{
      $('#btn-sumbit-mozaika-form-box').attr('disabled', true);
      $('#btn-sumbit-mozaika-form-box').css('opacity', 0.5);
      }
    });

    $('#shchelkovo-form-box-checkbox-main').on('change', function(){
      if($('#shchelkovo-form-box-checkbox-main').prop('checked')){
      $('#btn-sumbit-shchelkovo-form-box').attr('disabled', false);
      $('#btn-sumbit-shchelkovo-form-box').css('opacity', 1);
      }else{
      $('#btn-sumbit-shchelkovo-form-box').attr('disabled', true);
      $('#btn-sumbit-shchelkovo-form-box').css('opacity', 0.5);
      }
    });
    // DISABLE BUTTONS
  }
  // validate

  // var btnName = $("#btn-sumbit-visit");
  // var isActiveBtn = btnName.attr("disabled", true);
  // if (!isActiveBtn) {
  //     btnName.css('opacity', 0.8);
  //     btnName.css('box-shadow', 'none');
  // }


  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;
  
  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.710687, 37.675100], // координаты центра на карте
      zoom: 16, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([55.710687, 37.675100], {
        balloonContent: "Здесь может быть ваш адрес",
        iconCaption: '7-я Кожуховская ул., 9',
    },{
      preset: 'islands#blueCircleDotIconWithCaption',
      // iconCaptionMaxWidth: '150'
    },{
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker-red.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    myMapTemp.behaviors.disable('scrollZoom');
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          |layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");
  
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
  
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
  
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
  
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });                
        }
      }
    );  
  };
  
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });

});

