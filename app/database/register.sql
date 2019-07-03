insert into Users(name, passwd, roleId) values
  (?, ?, (select id from Roles where name='client'))
;
