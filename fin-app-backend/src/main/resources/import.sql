-- Restart tables
TRUNCATE TABLE credit RESTART IDENTITY CASCADE;
TRUNCATE TABLE finUser RESTART IDENTITY CASCADE;
TRUNCATE TABLE goal RESTART IDENTITY CASCADE;

INSERT INTO finUser (id, first_name, last_name, wage, free_income) VALUES (1, 'Aleksandr', 'Zheleznov', 10000, 0);
INSERT INTO goal (id, name, cost, user_id) VALUES (1, 'But car', 1000000, 1);
INSERT INTO credit (id, name, cost_per_month, full_cost, user_id) VALUES (1, 'Car credit', 20000, 1000000, 1);