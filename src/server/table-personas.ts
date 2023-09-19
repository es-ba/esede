"use strict";
                
import {TableDefinition, TableContext} from "./types-esede";
export function personas(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
    "name": "personas",
    editable: esEditable,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
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
            "name": "lp",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "l0",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "msi",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "msnombrei",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "msedadi",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entreaind",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "noreaind",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "esede9_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sd1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd9",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd12",
            "typeName": "decimal",
            "nullable": true
        },
        {
            "name": "sd13",
            "typeName": "decimal",
            "nullable": true
        },
        {
            "name": "sd14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd15",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e2",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "esede4_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "esede8_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "c1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "c2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "c3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "c4",
            "typeName": "text",
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
        {
            "name": "ac3",
            "typeName": "bigint",
            "nullable": true
        }
    ],
    "sql": {
        "isReferable": true,
        skipEnance: true,
    },
    "primaryKey": [
        "operativo",
        "vivienda",
        "persona"
    ],
    "detailTables": [],
    "foreignKeys": [
        {
            "references": "viviendas",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "onDelete": 'cascade'
        }
    ]
};
}