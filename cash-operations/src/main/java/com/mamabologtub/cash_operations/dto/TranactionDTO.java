package com.mamabologtub.cash_operations.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

public class TranactionDTO {

    private Integer transactionId;
    private BigDecimal amount;
    private String description;
    private String transactionType;
    private String status;



    private LocalDateTime dateCreated;

    public TranactionDTO() {
    }

    public TranactionDTO(Integer transactionId, BigDecimal amount, String description,
            String transactionType, String status, LocalDateTime dateCreated) {
        this.transactionId = transactionId;
        this.amount = amount;
        this.description = description;
        this.transactionType = transactionType;
        this.status = status;
        this.dateCreated = dateCreated;
    }

    public Integer getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }
    public String  getStatus() {
        return  status;
    }
    public void setStauts(String status) {
        this.status = status;
    }


}
