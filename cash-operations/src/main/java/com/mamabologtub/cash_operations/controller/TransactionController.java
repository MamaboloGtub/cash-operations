package com.mamabologtub.cash_operations.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mamabologtub.cash_operations.dto.ErrorResponseDTO;
import com.mamabologtub.cash_operations.dto.TranactionDTO;
import com.mamabologtub.cash_operations.dto.TransactionCreateDTO;
import com.mamabologtub.cash_operations.dto.TransactionUpdateDTO;
import com.mamabologtub.cash_operations.entity.Transaction;
import com.mamabologtub.cash_operations.service.TransactionService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin
@Tag(name = "Transactions", description = "CRUD operations for banking transactions")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    @Operation(summary = "Get all transactions", description = "Retrieves all transactions from the database")
    @ApiResponse(responseCode = "200", description = "List of transactions retrieved successfully")
    public List<TranactionDTO> getAllTransactions() {
        return transactionService.getAllTransactions().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Create a transaction", description = "Creates a new banking transaction")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Transaction created successfully"),
        @ApiResponse(responseCode = "400", description = "Validation error",
        content = @Content(schema = @Schema(implementation = ErrorResponseDTO.class)))
    })
    public TranactionDTO createTransaction(@Valid @RequestBody TransactionCreateDTO dto) {
        Transaction created = transactionService.createTransaction(dto);
        return toDTO(created);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update a transaction", description = "Updates an existing transaction by ID")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Transaction updated successfully"),
        @ApiResponse(responseCode = "400", description = "Validation error",
        content = @Content(schema = @Schema(implementation = ErrorResponseDTO.class))),
        @ApiResponse(responseCode = "404", description = "Transaction not found",
        content = @Content(schema = @Schema(implementation = ErrorResponseDTO.class)))
    })
    public TranactionDTO updateTransaction(@PathVariable int id,
            @Valid @RequestBody TransactionUpdateDTO dto) {
        Transaction updated = transactionService.updateTransaction(id, dto);
        return toDTO(updated);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Operation(summary = "Delete a transaction", description = "Deletes a transaction by ID")
    @ApiResponses({
        @ApiResponse(responseCode = "204", description = "Transaction deleted successfully"),
        @ApiResponse(responseCode = "404", description = "Transaction not found",
        content = @Content(schema = @Schema(implementation = ErrorResponseDTO.class)))
    })
    public void deleteTransaction(@PathVariable int id) {
        transactionService.deleteTransaction(id);
    }

    private TranactionDTO toDTO(Transaction transaction) {
        return new TranactionDTO(
                transaction.getTransactionId(),
                transaction.getAmount(),
                transaction.getDescription(),
                transaction.getTransactionType(),
                transaction.getStatus(),
                transaction.getDateCreated()
                );
    }

}
