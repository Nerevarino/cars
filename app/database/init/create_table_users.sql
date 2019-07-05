create table Users (
  id integer primary key,
  name text,
  passwd text,
  roleId integer,
  FOREIGN KEY(roleId) REFERENCES Roles(id)  
);
