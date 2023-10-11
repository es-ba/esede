"use strict";

import * as dmencu from "./types-esede";
import * as miniTools from "mini-tools";
import {Context, MenuInfoBase, Request, Response, OptsClientPage, TableDefinition, 
        TableContext, MenuInfo, MenuDefinition, MenuInfoWScreen } from "./types-esede";
import {defConfig} from "./def-config"
import {procedures} from "./procedures-esede"

/* tablas ua */
import { viviendas           } from './table-viviendas';
import { visitas             } from './table-visitas';
import { personas            } from './table-personas';
import { visitas_sup         } from './table-visitas_sup';
import { personas_sup        } from './table-personas_sup';
import { datos_control       } from './table-datos_control';
import { rea_anticuerpos     } from './table-rea_anticuerpos';

const APP_DM_VERSION="#23-10-11";

export type Constructor<T> = new(...args: any[]) => T;
export function emergeAppEsede<T extends Constructor<dmencu.AppAppDmEncuType>>(Base:T){
  return class AppEsede extends Base{
    constructor(...args:any[]){ 
        super(args);
    }
    
    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(defConfig);
    }

    async getProcedures(){
        var parentProc = await super.getProcedures()
        return parentProc.concat(procedures);
    }

    addSchrödingerServices(mainApp:dmencu.Express, baseUrl:string){
        let be=this;
        super.addSchrödingerServices(mainApp, baseUrl);
        //permito levantar mis imagenes en aplicaciones dependientes
        //be.app.use('/img', express.static('node_modules/dmencu/dist/unlogged/unlogged/img'))
    }
    clientIncludes(req:Request, hideBEPlusInclusions:OptsClientPage){
        return super.clientIncludes(req, hideBEPlusInclusions).concat([
            { type: 'js', src: 'client/esede.js' },
            { type: 'js', src: 'my-bypass-formulario.js' },
            { type: 'js', src: 'my-render-formulario.js' }
        ])
    }
    createResourcesForCacheJson(parameters:Record<string,any>){
        var be = this;
        var jsonResult:any = super.createResourcesForCacheJson(parameters);
        jsonResult.version = APP_DM_VERSION;
        jsonResult.appName = 'esede';
        jsonResult.cache=jsonResult.cache.concat([
            "my-render-formulario.js",
            'my-bypass-formulario.js'
        ])
        return jsonResult
    }
    getColorsJson(sufijo:'_test'|'_capa'|''){
        let miSufijo: '_prod'|'_test'|'_capa' = sufijo || '_prod';
        let coloresEntornos = {
            "_prod":"#067DB5",
            "_test":"#C47208",
            "_capa":"#880996",
        }
        return {
            "start_url": "../campo",
            "display": "standalone",
            "theme_color": "#3F51B5",
            "background_color": coloresEntornos[miSufijo]
        }
    }
    override getMenuControles(context:Context){
        var menuControles =super.getMenuControles(context);
        menuControles.push( {menuType:'table', name:'Datos', table: 'datos_control'});
       // menuControles.push( {menuType:'table', name:'reas resultados anticuerpos', table: 'rea_anticuerpos'});
        //console.log('longitud ',menuControles.length)
        return menuControles
     }
    getMenu(context:Context){
        return super.getMenu(context);
    }
    prepareGetTables(){
        var be=this;
        super.prepareGetTables();
        delete(this.getTableDefinition['hogares']);
        delete(this.getTableDefinition['hogares_sup']);
        this.getTableDefinition={
            ...this.getTableDefinition,
            viviendas,
            visitas,
            personas,
            visitas_sup,
            personas_sup,
            datos_control,
            rea_anticuerpos,
        }
        be.appendToTableDefinition('tem',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => element !='semana');
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.find((field)=>field.name=='semana')!.visible=true;
        });
        be.appendToTableDefinition('tareas_tem',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => element !='semana');
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.push(
                {name:'semana'               , typeName:'integer' , editable: false, inTable: false },
            );
            tableDef.sql!.from = tableDef.sql!.from!.replace(
                'select tt.tarea, t.operativo, t.enc, t.area',
                'select tt.tarea, t.operativo, t.enc, t.area, t.semana '
            );
        })
        be.appendToTableDefinition('inconsistencias',function(tableDef:TableDefinition, context?:TableContext){
            tableDef.sql={...tableDef.sql, isTable:true};
            tableDef.editable=tableDef.editable || context?.puede?.encuestas.justificar;
            tableDef.fields.forEach(function(field){
                if(field.name=='pk_integrada'){
                    field.visible=false;
                }
                if(field.name=='justificacion'){
                    field.editable=context?.forDump || context?.puede?.encuestas.justificar;
                }
            })
            tableDef.fields=tableDef.fields.filter(f=>f.name !='hogar');
        })
        be.appendToTableDefinition('areas', function(tableDef){
            tableDef.selfRefresh = true;
            tableDef.refrescable = true;
        });
    }
  }
}
