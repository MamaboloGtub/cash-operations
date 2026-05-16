IF NOT EXISTS (SELECT 1 FROM Transactions)
BEGIN
    INSERT INTO Transactions (Amount, Description, TransactionType, DateCreated) VALUES
        (1500.75,  'ATM Cash Withdrawal',              'Withdrawal', GETDATE()),
        (25000.00, 'Salary Deposit',                   'Deposit',    GETDATE()),
        (320.50,   'Electricity Payment',              'Transfer',   GETDATE()),
        (899.99,   'Online Shopping Purchase',         'Transfer',   GETDATE()),
        (5000.00,  'Transfer from Savings Account',    'Transfer',   GETDATE()),
        (120.00,   'Mobile Airtime Purchase',          'Deposit',    GETDATE()),
        (450.25,   'Restaurant Payment',               'Withdrawal', GETDATE()),
        (10000.00, 'Freelance Payment Received',       'Deposit',    GETDATE()),
        (75.00,    'Bank Charges',                     'Transfer',   GETDATE()),
        (2200.00,  'Rent Payment',                     'Deposit',    GETDATE()),
        (650.00,   'Grocery Shopping',                 'Withdrawal', GETDATE()),
        (1200.00,  'Fuel Purchase',                    'Withdrawal', GETDATE()),
        (299.00,   'Internet Subscription',            'Transfer',   GETDATE()),
        (850.00,   'Medical Consultation Payment',     'Withdrawal', GETDATE()),
        (3000.00,  'Cash Deposit at Branch',           'Deposit',    GETDATE()),
        (520.00,   'Insurance Premium Payment',        'Transfer',   GETDATE()),
        (45.00,    'Parking Fee',                      'Withdrawal', GETDATE()),
        (189.99,   'Online Book Purchase',             'Transfer',   GETDATE())
END
