const headers = ["과목코드", "과목명", "학점", "요일", "시간", "정원", "신청"];
const codes = ["CS101", "CS102", "DB201", "CS103"];
const names = ["웹 프로그래밍 기초", "자바 입문", "데이터베이스", "알고리즘 기초"];
const credits = [3, 3, 2, 2];
const days = ["월", "화", "수", "목"];
const times = ["09:00-12:00", "13:00-15:00"];
const capacities = [30, 30, 25, 25];

const tables = () =>
{
let tableHtml = '<table class="data">';

tableHtml += '<thead><tr><th class="top" colspan="7">수강 과목 데이터</th></tr><tr>';

for (let i = 0; i < headers.length; i++)
{
  tableHtml += "<th>" + headers[i] + "</th>";
}

tableHtml += "</tr></thead>";

tableHtml += "<tbody>";

let totalCredits = 0;

for (let i = 0; i < codes.length; i++)
{
  totalCredits += credits[i];

  tableHtml += "<tr>";

  tableHtml += '<td style="text-align: center;">' + codes[i] + "</td>";

  tableHtml += '<td style="text-align: center;">' + names[i] + "</td>";

  
  tableHtml += '<td style="text-align: center;">' + credits[i] + "</td>";

  tableHtml += '<td style="text-align: center;">' + days[i] + "</td>";

  if (i % 2 === 0)
  {
    tableHtml += '<td rowspan="2" style="text-align: center;">' + times[i / 2] + "</td>";
  }

  tableHtml += '<td style="text-align: center;">' + capacities[i] + "</td>";

  let j = codes[i];
  tableHtml += '<td style="text-align: center;">' + '<a href = "https://httpbin.org/get?course=' + j + '">신청</a>' + "</td>";

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