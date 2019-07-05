insert into Users(name, passwd, roleId) values
  ('manager', 'Zk.,k.Lfie91', (select id from Roles where name='admin'))
;
