package com.mamabologtub.cash_operations.service;

import java.util.List;

import com.mamabologtub.cash_operations.dto.TransactionCreateDTO;
import com.mamabologtub.cash_operations.dto.TransactionUpdateDTO;
import com.mamabologtub.cash_operations.entity.Transaction;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

public interface TransactionService {

    List<Transaction> getAllTransactions();

    Transaction createTransaction(TransactionCreateDTO dto);

    Transaction updateTransaction(int id, TransactionUpdateDTO dto);

    void deleteTransaction(int id);

}
