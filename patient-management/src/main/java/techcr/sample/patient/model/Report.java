package techcr.sample.patient.model;

import java.io.Serializable;
import java.util.Date;

public class Report implements Serializable {

    private Date startDate;
    private Date endDate;

    public Report() {
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
