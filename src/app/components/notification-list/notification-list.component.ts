import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  pessoas = [
    {
      titulo: 'IFOOD',
      subtitulo: 'Seu produto está a caminho!',
      data: new Date().toLocaleString()
    },
    {
      titulo: 'IFOOD',
      subtitulo: 'Seu produto está a caminho!',
      data: new Date().toLocaleString()
    },
    {
      titulo: 'IFOOD',
      subtitulo: 'Cupom de R$15 disponível no seu aplicativo',
      data: new Date().toLocaleString()
    },
  ];

  salvarPessoa() {
    console.log('Salvo com sucesso!');
  }
}
