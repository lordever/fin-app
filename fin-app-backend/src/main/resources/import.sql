-- Restart tables
TRUNCATE TABLE credit RESTART IDENTITY CASCADE;
TRUNCATE TABLE finUser RESTART IDENTITY CASCADE;
TRUNCATE TABLE goal RESTART IDENTITY CASCADE;

INSERT INTO finUser (id, first_name, last_name, wage, free_income) VALUES ('2f228280-3065-4621-a767-de44cafa1283', 'Aleksandr', 'Zheleznov', 10000, 0);
INSERT INTO goal (id, name, cost, priority, user_id) VALUES ('2e259d22-b805-4950-8e2c-598751b027d3', 'Buy car', 1000000, 0, '2f228280-3065-4621-a767-de44cafa1283');
INSERT INTO credit (id, name, cost_per_month, full_cost, user_id) VALUES ('1dbb907b-346d-4a7d-9f26-4bf130d9da0f', 'Car credit', 20000, 1000000, '2f228280-3065-4621-a767-de44cafa1283');