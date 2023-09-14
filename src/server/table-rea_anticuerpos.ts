"use strict";
/* control rea anticuerpos se puede tal vez generalizar basandonos en la datos_rea, consultar si quieren mirar también las reas no verificadas */
import {TableDefinition, TableContext} from "./types-esede";
export function rea_anticuerpos(context:TableContext):TableDefinition {
    return {
    name: "rea_anticuerpos",
    editable: false,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "visible": false,
            "nullable": false
        },
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "vdominio",
            "typeName": "bigint",
            "nullable": true
        }, 
        {
            "name": "persona",
            "typeName": "bigint",
            "nullable": false
        },        
        {
            "name": "nombre",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sexo",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "edad",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entreaind",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac1a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac2a",
            "typeName": "bigint",
            "nullable": true
        },
        {name:'resumen_estado'       , typeName:'text'     },
        {name:'resultado'            , typeName:'text'     },
        {name:'verificado'           , typeName:'text'     }, 
        {name:'estado'               , typeName:'text'     },
    ],
    primaryKey: [
        "operativo",
        "vivienda"
    ],
    sql: {
        from: `(
            select v.operativo, v.vivienda,v.vdominio,
            persona, nombre, sexo, edad, entreaind,ac1, ac1a, ac2, ac2a,
            t.rea,t.resumen_estado,t.resultado,tt.verificado, tt.estado
                from viviendas v
                inner join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda 
                inner join tem t on t.operativo=v.operativo and t.enc=v.vivienda
                inner join tareas_tem tt on t.operativo=tt.operativo and t.enc=tt.enc and tt.estado='V' and tt.tarea=t.tarea_actual
                where t.rea=1 and v.cr_num_miembro=p.persona
                order by v.vivienda, p.persona
            )`,
        isTable: false
    },
};
}