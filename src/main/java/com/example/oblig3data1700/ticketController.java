package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ticketController {
    //public final List<Ticket> allTickets = new ArrayList<>();

    @Autowired
    private TicketRepository rep;

    @PostMapping("/lagre")
    public void lagre(Ticket ticket) {
        //allTickets.add(ticket);
        rep.saveTicket(ticket);
    }
    @GetMapping("/hentAlle")
    public List<Ticket> hentAlle() {
        //return allTickets;
        return rep.getAllTickets();
    }

    @DeleteMapping("/deleteTickets")
    public void deleteTickets() {
        //allTickets.clear();
        rep.deleteAllTickets();
    }
}