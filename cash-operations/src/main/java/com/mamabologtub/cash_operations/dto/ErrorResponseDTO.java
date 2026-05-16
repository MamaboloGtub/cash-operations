package com.mamabologtub.cash_operations.dto;

import java.time.LocalDateTime;
import java.util.List;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

public class ErrorResponseDTO {

    private int status;
    private String message;
    private LocalDateTime timestamp;
    private List<FieldErrorDTO> errors;

    public ErrorResponseDTO() {
    }

    public ErrorResponseDTO(int status, String message, LocalDateTime timestamp, List<FieldErrorDTO> errors) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
        this.errors = errors;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public List<FieldErrorDTO> getErrors() {
        return errors;
    }

    public void setErrors(List<FieldErrorDTO> errors) {
        this.errors = errors;
    }

}
