package com.mamabologtub.cash_operations.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

public class TransactionUpdateDTO {

    @NotNull
    @Digits(integer = 16, fraction = 2)
    private BigDecimal amount;

    @NotBlank
    @Size(max = 255)
    private String description;

    @NotBlank
    @Pattern(regexp = "^(Deposit|Withdrawal|Transfer)$")
    private String transactionType;

    public TransactionUpdateDTO() {
    }

    public TransactionUpdateDTO(BigDecimal amount, String description, String transactionType) {
        this.amount = amount;
        this.description = description;
        this.transactionType = transactionType;
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

}
