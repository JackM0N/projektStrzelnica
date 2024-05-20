package edu.grupa2.strzelnica.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import java.sql.Time;
import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "service_unavailability")
public class ServiceUnavailability {
    @Id
    @ColumnDefault("nextval('service_unavailability_id_seq'")
    @Column(name = "id", nullable = false)
    private Integer id;

    //@ManyToOne(fetch = FetchType.EAGER, optional = false)
    //@JoinColumn(name = "service_id", nullable = false)
    //private Service service;

    @Column(name = "service_id", nullable = false)
    private Integer serviceId;

    @Column(name = "start_date", nullable = false)
    private Date start_date;

    @Column(name = "start_time")
    private String start_time;

    @Column(name = "end_date")
    private Date end_date;

    @Column(name = "end_time")
    private Time end_time;
}