create table Roles (
  id integer primary key,
  name text
);

-- delimiter
insert into Roles(name) values
  ('self'),
  ('visitor'),
  ('user'),
  ('client'),
  ('admin')
;

-- delimiter
create table Users (
  id integer primary key,
  name text,
  passwd text,
  roleId integer,
  FOREIGN KEY(roleId) REFERENCES Roles(id)  
);

-- delimiter
insert into Users(name, passwd, roleId) values
  ('manager', 'Zk.,k.Lfie91', (select id from Roles where name='admin'))
;

-- delimiter
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
create table Cars (
  id integer primary key,
  brand text,
  model text,
  photo text
);

-- delimiter
insert into Cars(brand, model, photo) values
  ('Kia', 'Mohave', 'mohave'),
  ('Audi', 'Q7', 'q7'),
  ('BMW', 'X5', 'x5'),
  ('Chevrolet', 'Tahoe', 'tahoe'),
  ('Mitsubishi', 'Outlander', 'outlander'),
  ('Toyota', 'Land Cruiser 200', 'cruiser200'),
  ('Renault', 'Duster', 'duster'),
  ('Nissan', 'Pathfinder', 'pathfinder')  
;

-- delimiter
create table Sessions (
  id integer primary key,
  userId integer,
  foreign key(userId) references Users(id) 
);
