"use strict";

var tabItems = Array.from(document.querySelectorAll('.tab-item'));
var contentItems = Array.from(document.querySelectorAll('.content-item'));

var clearActiveClass = function clearActiveClass(element) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is-active';
  element.find(function (item) {
    return item.classList.remove("".concat(className));
  });
};

var setActiveClass = function setActiveClass(element, index) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is-active';
  element[index].classList.add("".concat(className));
};

var checkoutTabs = function checkoutTabs(item, index) {
  item.addEventListener('click', function () {
    if (item.classList.contains('is-active')) return;
    console.log(item);
    clearActiveClass(tabItems);
    clearActiveClass(contentItems);
    setActiveClass(tabItems, index);
    setActiveClass(contentItems, index);
  });
};

tabItems.forEach(checkoutTabs);