
SELECT columnname, ...
FROM tablename, ...
[WHERE ...]
[UNION ...]
[GROUP BY ...]
[HAVING ...]
[ORDER BY ...];

INSERT INTO tablename SET ...

UPDATE tablename
SET columname = value, ...
[WHERE ...];

DELETE FROM tablename
[WHERE ...];


通配符：


Sample:
```
select * from a,b
where a.type = b.type and info like '%e6%' and type='x'
order by id desc limit 20 offset 10

select count(*) as count from a join b
using (type)
```