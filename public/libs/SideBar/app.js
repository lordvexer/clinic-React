const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;
var toggleSlidebar = () => {
    document.body.classList.toggle("shrink");
    setTimeout(moveActiveTab, 200);

    shrink_btn.classList.add("hovered");

    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
    }, 500);
};
var closeSlidebar = () => {
    document.body.classList.add("shrink");
};
var openSlidebar = () => {
    document.body.classList.remove("shrink");
};
shrink_btn.addEventListener("click", toggleSlidebar);

search.addEventListener("click", () => {
    document.body.classList.remove("shrink");
    search.lastElementChild.focus();
});

window.addEventListener("resize", function(){
    if(window.innerWidth<800){
        closeSlidebar();
    }
else{
    openSlidebar();
}
});


function moveActiveTab() {
    let topPosition = activeIndex * 58 + 2.5;

    if (activeIndex > 7) {
        topPosition += shortcuts.clientHeight;
    }

    active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
    sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
    this.classList.add("active");

    activeIndex = this.dataset.active;

    moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
    let tooltip = this.parentNode.lastElementChild;
    let spans = tooltip.children;
    let tooltipIndex = this.dataset.tooltip;

    Array.from(spans).forEach((sp) => sp.classList.remove("show"));
    if (spans[tooltipIndex]) spans[tooltipIndex].classList.add("show");

    tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
    elem.addEventListener("mouseover", showTooltip);
});

// Tabs
function ChangeSection(evt, SectionName) {
    var i, tabcontent, tablinks;
    $('#' + SectionName).parent().find('.tabcontent').removeClass('active').css('display', 'none');
    $('#' + SectionName).parent().find('.tablinks').removeClass('active');
    document.getElementById(SectionName).style.display = "block";
    evt.currentTarget.className += " active";
}