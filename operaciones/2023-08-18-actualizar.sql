set role esede231_owner; --adaptar al usuario que corresponda según el entorno
set search_path=base;

alter table no_rea add column pasa_a_recuperacion boolean default false;
alter table no_rea add column pasa_a_supervision boolean default false;