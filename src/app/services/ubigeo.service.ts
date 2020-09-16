import { Departamento, Provincia, Distrito } from './../interfaces/ubigeo.interface';
import { Injectable } from '@angular/core';

import departments from '../../assets/ubigeo/departments.json';
import provinces from '../../assets/ubigeo/provinces.json';
import districs from '../../assets/ubigeo/districts.json';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  private departamentos: Departamento[] = departments;
  private provincias : Provincia[] = provinces;
  private distritos: Distrito[] = districs;

  constructor() { }

  get Departamentos() {
    return this.departamentos;
}

get Provincias() {
    return this.provincias;
}

get Distritos() {
    return this.distritos;
}

getDepartamento( id: string ): string {
    if ( !id || id === 'undefined' ) return '';
    for ( const x of this.departamentos ) {
        if ( x.id_department === id ) {
            return x.name_department;
        }
    }
    return id;
}

getProvincia( id: string ): any {
    if ( !id || id === 'undefined' ) return '';
    for ( const x of this.provincias ) {
        if ( x.id_province === id ) {
            return x.name_province;
        }
    }
    return id;
}

getDistrito( id: string ): string {
    if ( !id || id === 'undefined' ) return '';
    for ( const x of this.distritos ) {
        if ( x.id_district === id ) {
            return x.name_district;
        }
    }
    return id;
}

getProvinciasByIdDepartamento( idDepartment: string ): Provincia[] {
    return this.provincias.filter( ( p ) => p.id_department === idDepartment );
}

getDistritosByIdProvincia( idProvince: string ): Distrito[] {
    return this.distritos.filter( ( p ) => p.id_province === idProvince );
}

}
