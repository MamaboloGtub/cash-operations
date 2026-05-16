package com.mamabologtub.cash_operations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mamabologtub.cash_operations.entity.Transaction;

/**
 * @Author Tshepo M Mahudu on May 16, 2026.
 */

public interface TransactionRespository extends JpaRepository<Transaction, Integer> {

}
