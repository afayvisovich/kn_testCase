CREATE DATABASE tcase;
\c tcase
CREATE TABLE codenames(id INTEGER, code VARCHAR, name VARCHAR);
INSERT INTO codenames values(null, '03325', 'test');
INSERT INTO codenames values(3, '025 ', 'test');
INSERT INTO codenames values(31, '222025', 'tsssrsfest');
INSERT INTO codenames values(1, '025', 'Some text and not a test');
INSERT INTO codenames values(5, '025', 'Some name');
INSERT INTO codenames values(7, '025', 'testing filter');