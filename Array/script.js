console.log('Loading Javascript');

//variables types 
//Let  
//var
//Const
//Array
//Object Key:value
/* date=Date(); */
/* function fecha(){ */
/*     let dia= 'Hola mundo en Javascript'; */
/*     console.log(dia); */
/*     console.log(date); */
/* } */
/*  */
/* function array(){ */
/*     let dia = "Martes"; */
/*     Lunes= "EL día lunes"; */
/*     array=[date,dia,3,Lunes] */
/*     console.log(array); */
/* } */
/*  */
/* let diasSemana= ['Lunes']; */
/* diasSemana.push('martes','miercoles'); */
/* diasSemana[0]=1; */
/*  */
/* console.log('Los dias son:', diasSemana); */
/* console.log('La cantidad del array es:', diasSemana.length); */
/*  */
/*  */
function object(){
    datos ={
        id: 12,
        nombre:"Daniel",
        Apellido:"Sanchez",
        ciudad:"Cali",
        carro:"peugeout"
        
    }
    alert(datos.nombre + " " + datos.Apellido);
    a=datos.ciudad;
    console.log(a);

}
datos ={
    id: 12,
    nombre:"Daniel",
    Apellido:"Sanchez",
    ciudad:"Cali",
    carro:"peugeout"
    
}
datos=[1,true,"Valentina","Programmer"];
//para leer objects 
console.log(Object.values(datos));
//para leer array .map
/* datos.map((elemento)=>console.log(elemento)) */






