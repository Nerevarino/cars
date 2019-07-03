insert into Sessions(userId) values
  ((select id from Users where name=? and passwd=?))
;

