import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-current-user',
  imports: [],
  templateUrl: './current-user.html',
  styleUrl: './current-user.css'
})
export class CurrentUser {

  currentUser = resource({
    loader: (({ params, abortSignal }) => {
      return fetch(`http://localhost:3000/currentUser`, { signal: abortSignal })
        .then(response => response.json());
    })
  });

}
