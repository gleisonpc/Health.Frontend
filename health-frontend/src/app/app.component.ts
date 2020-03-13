import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'health-frontend';

  seguradoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    nascimento: new FormControl('', Validators.required),
    endereco: new FormGroup({
      logradouro: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required)
    })
  });

  enviarSegurado(){
    console.log(this.seguradoForm.get('nome').value);
  }
}
