insert into Users(name, passwd, roleId) values
  ('manager', 'myadminpassword', (select id from Roles where name='admin'))
;
