import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  notificacoes = [
    {
      titulo: 'IFOOD',
      subtitulo: 'Seu produto está a caminho!',
      data: new Date().toLocaleString(),
      status: false,
    },
    {
      titulo: 'IFOOD',
      subtitulo: 'Recebemos o seu pedido. Aguarde o tempo previsto!',
      data: new Date().toLocaleString(),
      status: false,
    },
    {
      titulo: 'IFOOD',
      subtitulo: 'Cupom de R$15 disponível no seu aplicativo',
      data: new Date().toLocaleString(),
      status: false,
    },
  ];


  statusCheck(i) {
    this.notificacoes[i].status = !this.notificacoes[i].status; 
  }
}

