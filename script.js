function insert_Row() {
    // Table ko select karo
	
    let tb = document.getElementById("sampleTable");

    // Nayi row banao
    let tr = document.createElement("tr");

    // Do cells banao
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    // Unme text daalo
    td1.textContent = "New Cell1";
    td2.textContent = "New Cell2";

    // Row me cells daalo
    tr.appendChild(td1);
    tr.appendChild(td2);

    // Row ko table ke top me add karo (prepend)
    tb.prepend(tr);
}
