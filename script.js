var modal = document.getElementsByClassName('modal-wrapper')[0];
var overlay = document.getElementsByClassName('overlay')[0];

function removeClass(element, classToRemove) {
    var classList = element.className;
}

function openModal() {
    modal.className += " active";
    overlay.className += " active";
}

function closeModal() {
    modal.className = "modal-wrapper";
    overlay.className = "overlay";
}

function openDropdown() {
    var dropdown = this.parentNode.getElementsByClassName('dropdown-menu')[0];
    if (dropdown.className == "dropdown-menu active") {
        dropdown.className = "dropdown-menu";
    } else {
        dropdown.className += " active";
    }
}

function openCollapsible() {
    var act = document.querySelectorAll('.collapsible-data.active')[0];

    if (act != null) {
        act.className = "collapsible-data";
    }
    var collapsibleData = this.parentNode.getElementsByClassName('collapsible-data')[0];
    if (act !== collapsibleData) {
        collapsibleData.className += " active";
    }
}

function tabNavigation() {
    document.getElementsByClassName('nav-bar')[0].getElementsByClassName('active')[0].className = "";
    document.getElementsByClassName('tab-content')[0].getElementsByClassName('active')[0].className = "";
    this.className = "active";
    var a = this.children[0].getAttribute("href");
    var c = this.children[0].innerHTML;
    a = a.slice(1);
    document.getElementById(a).className = "active";
}

function bindEvents() {
    //Modal bindings
    document.getElementById('try-modal').addEventListener('click', openModal);
    document.getElementsByClassName('close-button')[0].addEventListener('click', closeModal);

    //Dropdown bindings
    var tabs = document.getElementsByClassName('dropdown-toggle');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', openDropdown);
    }

    //collapsible bindings
    var collapsible = document.getElementsByClassName('collapsible-header');
    for (var i = 0; i < collapsible.length; i++) {
        collapsible[i].addEventListener('click', openCollapsible);
    }
    //navigation tabs bindigs
    var navTab = document.getElementsByClassName('nav-bar')[0].children;
    for (var j = 0; j < navTab.length; j++) {
        navTab[j].addEventListener('click', tabNavigation);
    }
}


window.onload = bindEvents();