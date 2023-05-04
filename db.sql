create database test;
create table users(
    id int not null auto_increment primary key,
    login varchar(30),
    password varchar(30),
)
insert into users values 
(1,'testlogin','testpassword'),
(1,'adrew','tate'),
(1,'testlogin1','testpassword1'),
(1,'testlogin2','testpassword2'),
(1,'testlogin3','testpassword3'),
(1,'testlogin4','testpassword4');