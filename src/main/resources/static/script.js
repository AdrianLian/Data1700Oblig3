function regTicket() {
    const ticket = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val()
    }
    $.post("/lagre", ticket, function () {
        hentAlle()
    });
    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function hentAlle() {
    $.get("/hentAlle", function (tickets) {
        formaterData(tickets);
    });
}

function formaterData(tickets) {
    let ut = "<table><tr><th>film</th><th>antall</th><th>fornavn</th><th>etternavn</th><th>telefonnr</th><th>epost</th></tr>";
    for(const ticket of tickets) {
        ut += "<tr><td>"+ticket.film+"</td><td>"+ticket.antall+"</td><td>"+ticket.fornavn+"</td><td>"+ticket.etternavn+"</td><td>"+ticket.telefonnr+"</td><td>"+ticket.epost+"</td></tr>";
    }
    ut += "</table>";
    $("#ticketTable").html(ut);
}

function deleteTickets() {
    $("#ticketTable").html("<table><tr><th>film</th><th>antall</th><th>fornavn</th><th>etternavn</th><th>telefonnr</th><th>epost</th></tr>");

    $.ajax({
        url: "/deleteTickets",
        type: "DELETE",
        success: function () {
        }
    })
}