// importing data
const tableData = data;

//refrence table from HTML
var tbody = d3.select("tbdoy");




//Creating table building function from the data

function buildTable(data){
    tbody.html("");                                //clears out table 
  
     // loops through each object in the array
    data.forEach((dataRow) => {
        // append a row to HTML table 
        let row = tbody.append("tr");

        //Added each value from the object to a cell in the table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
 };


function handleClick(){
    let date = d3.select("#datetime").property("value");

    let filterData = tabelData;
     // Check to see if a date was entered and filter the
     // data using that date.

    if (date) {

        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value

        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //build table
    buildTable(filterData);
};

d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData);
