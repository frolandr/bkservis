/*============ Перемещение подчеркивания выбранного пункта меню =============*/
(function() {
    const menuItems = document.querySelectorAll(".menu__item");                //все пункты меню
    const menuActive = document.querySelector('.menu__item--active');          //активный пункт меню
    const menuEffect = document.querySelector('.menu__effect');                //подчеркивание
    const menuInput = document.querySelector('.burger__input');                //input

    function RecalcEffect(target) {                                            //функция для выделенного элемента
        if (window.innerWidth < 768) {
            menuEffect.style.display = "none";
            //menuEffect.style.left = "-200px";
        }
        else {            
            menuEffect.style.display = "block";                                //иначе размер дисплея > 767px
            menuEffect.style.top = "auto";                                     //Top
            menuEffect.style.left = target.offsetLeft + 'px';                  //Left
            menuEffect.style.width = target.offsetWidth + 'px';                //Width
        }
    }
    /*-----------------------------------------------------------------------*/
    menuItems.forEach(item => {                                                //перебираем все пункты меню
        item.addEventListener('click', function(event) {                       //вешаем на них обработчики "click"
            menuItems.forEach(el => {                                          //перебираем и
                el.classList.remove("menu__item--active");                     //удаляем класс активного пункта
            });
            item.classList.toggle("menu__item--active");                       //устанавливаем класс активного пункта
            RecalcEffect(item);                                                //двигаем подчеркивание
        });
    });
    /*-----------------------------------------------------------------------*/
    window.addEventListener('resize', () => {                                  //обработчик изменение размера
        const menuActive = document.querySelector('.menu__item--active');      //выбираем активный пункт меню
        if (menuActive)                                                        //если найден, то
            RecalcEffect(menuActive);                                          //подстраиваем подчеркивающую линию
    });
    /*-----------------------------------------------------------------------*/
    if (menuActive) 
        RecalcEffect(menuActive);                                              //омечаем активный элемент
})();
/*===========================================================================*/