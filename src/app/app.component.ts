import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctor-front';


  constructor() {
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'https://code.jquery.com/jquery-3.5.1.slim.min.js',
      'https://getbootstrap.com/docs/4.5/dist/js/bootstrap.bundle.min.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}

