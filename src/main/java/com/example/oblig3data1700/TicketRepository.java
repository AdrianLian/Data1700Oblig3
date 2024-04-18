package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {
    @Autowired
    private JdbcTemplate db;

    public void saveTicket( Ticket innTicket ){
        String sql = "INSERT INTO Ticket ( film, antall, fornavn, etternavn, t  elefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,innTicket.getFilm(),innTicket.getAntall(),innTicket.getFornavn(),innTicket.getEtternavn(),innTicket.gettelefonnr(),innTicket.getEpost());
    }
    public List<Ticket> getAllTickets(){
        String sql = "SELECT * FROM Ticket ORDER BY etternavnz";
        List<Ticket> allTickets = db.query(sql, new BeanPropertyRowMapper(Ticket.class));
        return allTickets;
    }

    public void deleteAllTickets(){
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }

}