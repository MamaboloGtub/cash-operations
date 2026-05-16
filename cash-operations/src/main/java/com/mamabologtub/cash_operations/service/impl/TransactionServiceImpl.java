package com.mamabologtub.cash_operations.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mamabologtub.cash_operations.dto.TransactionCreateDTO;
import com.mamabologtub.cash_operations.dto.TransactionUpdateDTO;
import com.mamabologtub.cash_operations.entity.Transaction;
import com.mamabologtub.cash_operations.exception.ResourceNotFoundException;
import com.mamabologtub.cash_operations.repository.TransactionRespository;
import com.mamabologtub.cash_operations.service.TransactionService;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRespository transactionRepository;

    public TransactionServiceImpl(TransactionRespository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public Transaction createTransaction(TransactionCreateDTO dto) {
        Transaction transaction = new Transaction();
        transaction.setAmount(dto.getAmount());
        transaction.setDescription(dto.getDescription());
        transaction.setTransactionType(dto.getTransactionType());
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction updateTransaction(int id, TransactionUpdateDTO dto) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Transaction not found with id: " + id));

        transaction.setAmount(dto.getAmount());
        transaction.setDescription(dto.getDescription());
        transaction.setTransactionType(dto.getTransactionType());

        return transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransaction(int id) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Transaction not found with id: " + id));

        transactionRepository.delete(transaction);
    }

}
