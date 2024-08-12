set role esede241_owner; 
set search_path=base;

alter table personas alter column e5 type text;
update variables
  set tipovar='texto'
  where operativo= 'esede241'
    and tabla_datos='personas'
    and variable='e5';