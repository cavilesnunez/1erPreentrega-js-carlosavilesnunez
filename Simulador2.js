
let nombreUsuario = prompt('Ingresa tu nombre');
while(nombreUsuario==''){
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}
alert('Bienvenido/a '+nombreUsuario);


let mensaje = prompt(nombreUsuario+' A continuación te dare una serie de ejemplos de ciclos e iteraciones para pruebas: \ndeseas continuar? (Si=s ó No=n)');
while(mensaje == 's' || mensaje=='S'){
    let producto = prompt('1-Ejemplo de "for"\n2-Ejemplo de "if"\n3-Ejemplo de "while"');
    switch(producto){
        case '1':
            alert('Elegiste el "for"');
            
            //Ejemplo de tabla de multiplicar
            let valor1 = parseInt( prompt('Ingresa un numero del 1 al 10 para generar tu tabla de multiplicar'));
            let i = 0;
            for (let i = 1; i <= 10; i++) {
                let res =  valor1 * i;
                multiplica(valor1,i,res);
                const tabla = 10[i];
            }
            break;

        case '2':
            alert('Elegiste el "if"');

            //Ejemplo calcula edad por anio de nacimiento
            let anio = prompt('Te gustaria saber la edad de tus amigos?\nDime su año de nacimiento:');
            if (anio<2023) {
                edad=2023-anio;
                alert('La edad que necesitas saber es: '+ edad+' años');
            }
            break;

        case '3':
            alert('Elegiste el "while"');

            //Ejemplo para saber tu futuro
            let futuro = prompt('Te gustaria saber tu futuro? (Si=s ó No=n)');
            while (futuro == 's' || futuro == 'S') {
                let vision =  prompt('Elige un numero del 1 al 5 y tendras tu visión:');
                switch (vision) {
                    case '1':
                        alert('Encontrarás dinero en la calle!!!');
                        break;

                    case '2':
                        alert('Comerás algo delicioso el dia de hoy!!!');
                        break;

                    case '3':
                        alert('Tendrás un reencuantro que te hara feliz!!!');
                        break;

                    case '4':
                        alert('Recibirás un detalle del alguien que estimas!!!');
                        break;

                    case '5':
                        alert('Tendrás una larga vida!!!');
                        break;

                    default:
                        alert('Suerte para la proxima!!!');
                        break;
                }
                futuro = prompt('Te gustaria saber tu futuro? (Si=s ó No=n)');
                
            }
            break; 

            default:
            alert('Numero de ejemplo inexistente');
            break;
    }
    mensaje = prompt('Quieres elegir un nuevo ciclo? (Si=s ó No=n)');
}

alert('Gracias por participar');


function multiplica(a,b,res) {
    alert(a+' x '+b+' = '+res);
}

