// Tabs
$('#btn-nav-previous').click(function() {
    $(".menu-inner-box").animate({ scrollLeft: "-=100px" });
});

$('#btn-nav-next').click(function() {
    $(".menu-inner-box").animate({ scrollLeft: "+=100px" });
});

//scroll Smooth
function SmoothScroll() {
    window.scrollTo({ end: 0, behavior: 'smooth' })
}

//visit chart
var xValues = ["آزاد", "بیمه", "تکمیلی"];
var yValues = [55, 49, 44];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
];

new Chart("ChartVisitInfo", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "آنالیز نوع بیمه"
        }
    }
});


//Monthvisit chart
var ctxL = document.getElementById("MonthChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        datasets: [{
                label: "بیمار جدید",
                data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2
            },
            {
                label: "بیمار با سابقه",
                data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(0, 137, 132, .2)',
                ],
                borderColor: [
                    'rgba(0, 10, 130, .7)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

//Money Chart
var ctxP = document.getElementById("MoneyChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["خالص", "طلب از بیمه", "هزینه", "مالیات", ],
        datasets: [{
            data: [300, 50, 100, 40],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }]
    },
    options: {
        responsive: true
    }
});

//ChartOfInsurance
var xValues = ["ایران", "دی", "پاسارگاد", "تامین", "sos", "پارسیان"];
var yValues = [55, 49, 44, 44, 30, 70];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#541690",
    "#FF4949",
    "#FF8D29",

];

new Chart("ChartOfInsurance", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "شرکت بیمه گر"
        }
    }
});


//DropDowns
function formatState(state) {
    if (!state.id) {
        return state.text;
    }

    var baseUrl = "/user/pages/images/flags";
    var $state = $(
        '<span><img class="img-flag" /> <span></span></span>'
    );

    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    return $state;
};

$(".Selector").select2({
    templateSelection: formatState
});


//media query js for wide select