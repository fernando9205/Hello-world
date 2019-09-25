import { Component } from '@angular/core';

@Component({
    selector : 'app-body',
    templateUrl: './body.component.html'
})


 export class BodyComponent {

    mostrar = false;

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor : 'Ben parker'
    };

    personajes: string[] = ['SuperMan', 'BatMan', 'Flash'];

}
