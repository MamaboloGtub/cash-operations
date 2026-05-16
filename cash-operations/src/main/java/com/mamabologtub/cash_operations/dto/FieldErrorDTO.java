package com.mamabologtub.cash_operations.dto;


/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

public class FieldErrorDTO {

    private String field;
    private String message;

    public FieldErrorDTO() {
    }

    public FieldErrorDTO(String field, String message) {
        this.field = field;
        this.message = message;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
