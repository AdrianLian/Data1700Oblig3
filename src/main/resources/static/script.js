function regTicket() {
    const ticket = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val()
    }

    let ut = "";
    let validTicket = true;

    //film
    if (ticket.film === "-1") {
        validTicket = false;
        ut += "- Du må velge en film <br>";
    }

    //antall
    if (ticket.antall < 1 || ticket.antall === "" || ticket.antall % 1 !== 0) {
        validTicket = false;
        ut += "- Antall må være et helt tall større enn 1 <br>";
    }

    //fornavn
    if (ticket.fornavn === "") {
        validTicket = false;
        ut += "- Må fylle inn fornavn <br>";
    }

    //etternavn
    if (ticket.etternavn === "") {
        validTicket = false;
        ut += "- Må fylle inn etternavn <br>";
    }

    //Telefonnr
    const norwegianPhoneRegex = /^(?:\+47)?\s?(\d{2}\s?\d{2}\s?\d{2}\s?\d{2}|\d{3}\s?\d{2}\s?\d{3}|\d{5}\s?\d{3})$/;
    if (!norwegianPhoneRegex.test(ticket.telefonnr)) {
        validTicket = false;
        ut += "- ugyldig telefonnummer <br>";
    }

    //Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(ticket.epost)){
        validTicket = false;
        ut += "- ugyldig epost <br>";
    }

    document.querySelector('#errorTxt').innerHTML = ut;

    if (validTicket === true){
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