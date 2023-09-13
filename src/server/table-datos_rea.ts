"use strict";
import {TableDefinition, TableContext} from "./types-esede";
export function datos_rea(context:TableContext):TableDefinition {
    return {
    name: "datos_rea",
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
            "name": "obs_re",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_vis",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "soporte",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entreav",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "identif",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "habita",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "construc",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_viv",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon3",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resid_hog",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_hog",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_9v",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "contacto",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon9_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "fecha_realiz",
            "typeName": "date",
            "nullable": true
        },
        {
            "name": "d1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "d2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "d3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "los_nombres",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_m",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "respond",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "nombrer",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sorteo",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tp",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "cr_num_miembro",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "msnombre",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "s1a1_obs_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_vis_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "soporte_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "modo_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "confir_tel_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "domicilio_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "confir_dom_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "identifico",
            "typeName": "bigint",
            "nullable": true
        },
        { name: "consistido"    , label:'consistido'            , typeName: 'timestamp'},
        {
            "name": "entrea_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "esede9_sup_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resp_comp_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resp_comp_ed_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "resp_indi_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resp_indi_ed_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entrevista",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "respon_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "respon_enc",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "fecha_realiz_sup",
            "typeName": "date",
            "nullable": true
        },
        {
            "name": "nombres_componentes_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_m_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "nombrer_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sorteo_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tp_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ms_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "msnombre_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sup_ind",
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
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd13",
            "typeName": "bigint",
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
            select v.*,
            persona, nombre, sexo, edad, lp, l0, msi, msnombrei, msedadi, entreaind, noreaind, esede9_esp, sd1, sd2, sd3, sd4, sd5, sd6, sd7, sd8, sd9, sd10_1, sd10_2, sd10_3, sd10_4, sd10_5, sd10_6, sd10_7, sd10_8, sd11_1, sd11_2, sd11_3, sd11_4, sd11_5, sd12, sd13, sd14, sd15, e1, e2, e3, esede4_esp, e4, esede8_esp, e5, c1, c2, c3, c4, ac1, ac1a, ac2, ac2a, ac3
            ,t.rea,t.resumen_estado,t.resultado,tt.verificado, tt.estado
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