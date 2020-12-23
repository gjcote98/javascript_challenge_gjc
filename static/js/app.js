//from data.js
var tableData = data;

var tbody = d3.select("tbody");

function append(data)
{
    tbody.html("")
    data.forEach(function(entry)
    {
        var row = tbody.append("tr");
        Object.values(entry).forEach((value) =>
        {
            var cell = row.append("td");
            cell.text(value);
        })
    })
    console.log("Data Successfully Loaded");
}

append(tableData);


function search()
{   
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if (date)
    {
        filterData = filterData.filter(row => row.datetime === date);
    }
    append(filterData);
    console.log("Data Successfully Filtered");
}

d3.selectAll("#filter-btn").on("click",search);
