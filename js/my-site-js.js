const headers = ["과목코드", "과목명", "학점", "요일", "시간", "정원", "신청"];

const couesers =
[
  {codes: "CS101", names: "웹 프로그래밍 기초", credits: 3, days: "월", times: "09:00 ~ 12:00", capacities: 30},
  {codes: "CS102", names: "자바 입문", credits: 3, days: "화", times: "09:00 ~ 12:00", capacities: 30},
  {codes: "DB201", names: "데이터 베이스", credits: 2, days: "수", times: "13:00 ~ 15:00", capacities: 25},
  {codes: "CS103", names: "알고리즘 기초", credits:2, days: "목", times: "13:00 ~ 15:00", capacities: 25},
]

const sumCredits = (list) => list.reduce((sum, c) => sum + c.credits, 0);

const cell = (text) => `<td>${text}</td>`

const renderHead = () => `<thead><tr><thclass="top" colspan="7">수강 과목 데이터</th></tr><tr>${cell{text}}`

//
function tables()
{
    let tableHtml = '<table class="data">';


    tableHtml += '<thead><tr><th class="top" colspan="7">수강 과목 데이터</th></tr><tr>';

    for (let i = 0; i < headers.length; i++) {
      tableHtml += "<th>" + headers[i] + "</th>";
    }

    tableHtml += "</tr></thead>";

    tableHtml += "<tbody>";

    let totalCredits = 0;

    for (let i = 0; i < codes.length; i++) {
      const c = couesers[i];

      tableHtml = tableHtml + `<tr>`;
    }
    {
      totalCredits += credits[i];

      tableHtml += "<tr>";

      tableHtml += '<td style="text-align: center;">' + codes[i] + "</td>";

      tableHtml += '<td style="text-align: center;">' + names[i] + "</td>";

      tableHtml += '<td style="text-align: center;">' + credits[i] + "</td>";

      tableHtml += '<td style="text-align: center;">' + days[i] + "</td>";

      if (i % 2 === 0) {
        tableHtml += '<td rowspan="2" style="text-align: center;">' + times[i / 2] + "</td>";
      }

      tableHtml += '<td style="text-align: center;">' + capacities[i] + "</td>";

      let j = codes[i];
      tableHtml +=
        '<td style="text-align: center;">' +
        '<form method="POST" action="https://httpbin.org/post" style="margin: 0;">' +
        '<input type="hidden" name="course" value="' + codes[i] + '">' +
        '<button type="submit">신청</button>' +
        "</form>" +
        "</td>";
      tableHtml += "</tr>";
    }

    tableHtml += "</tbody>";

    tableHtml += "<tfoot><tr>";

    tableHtml += '<th colspan="2" class="tfa">총 학점</th>';

    tableHtml += '<td class="tfb application" colspan="5">' + totalCredits + "</td>";

    tableHtml += "</tr></tfoot>";

    tableHtml += "</table>";

    return tableHtml;
}

document.querySelector("#table").innerHTML = tables();