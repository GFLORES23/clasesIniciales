var persona1={
    nombre:"Juan",
    apellido:"Fernandez",
    edad:34
}
var persona2={
    nombre:"Sofia",
    apellido:"Flores",
    edad:30,

    nombrecompleto: function(){
        return this.nombre +" "+ this.apellido;

    },
    fnacimiento: function(){
        nacimiento = 2019 -this.edad;
        return nacimiento;

    }
};
alert(persona2.fnacimiento() );

