create table Interface (
  id integer primary key,
  method_name text,
  method_command text,
  base_role integer,
  foreign key(base_role) references Roles(id)
);
-- delimiter
insert into Interface(method_name, method_command, base_role) values
  ('register', readfile('register.sql'), (select id from Roles where name='visitor'))
;
-- delimiter
create table Sessions (
  id integer primary key,
  userId integer,
  foreign key(userId) references Users(id) 
);
