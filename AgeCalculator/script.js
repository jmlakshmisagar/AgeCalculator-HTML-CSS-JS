let date = document.getElementById("date");
date.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    let dob = new Date(date.value);

    let d1 = dob.getDay();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();

    let cDate = new Date();

    let d2 = cDate.getDay();
    let m2 = cDate.getMonth() + 1;
    let y2 = cDate.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    console.log(y3, m3, d3);

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old`;
}

