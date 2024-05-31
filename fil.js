// const list = document.querySelector('.list')
//         items = document.querySelectorAll('.blocks__items')
//         listItems = document.querySelectorAll('.list__item')

// function filter() {
//     list.addEventListener('click', event => {
//         const  targetId = event.target.dataset.id
//         const target = event.target

//         listItems.forEach(listItem => listItem.classList.remove('active'))
//         target.classList.add('active')

//         switch(targetId){
//             case 'all':
//                 getItems('blcoks__item')
//                 break
//             case 'winter':
//                 getItems(targetId)
//                 break
//             case 'spring':
//                 getItems(targetId)
//                 break
//             case 'autumn':
//                 getItems(targetId)
//                 break 
//                 case 'summer':
//                 getItems(targetId)
//                 break 

         
               

//         }
//     })
// }
// filter()

// function getItems(className) {
//     item.array.forEach(item => {
//         if (item.classList.contains(className)){
//             item.style.display = 'block'
//         } else{
//             item.style.display = 'none'
//         }
//     })
// }

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}