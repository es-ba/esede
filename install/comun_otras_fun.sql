--set role esede241_owner;
CREATE OR REPLACE FUNCTION comun.hora_a_minutos(
	p_hora interval)
    RETURNS bigint
    LANGUAGE 'sql'
AS $BODY$
  select (extract( EPOCH from  p_hora)/60)::bigint;
$BODY$;

