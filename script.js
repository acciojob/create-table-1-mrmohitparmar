function insert_Row() {
    // Table ko select karo
    let table = document.getElementById("sampleTable");

    // Table ke top me (index 0) ek nayi row insert karo
    let newRow = table.insertRow(0);

    // Row ke andar 2 new cells banao
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Unme text daal do
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}
