import { Component } from '@angular/core';
import Moralis from 'moralis';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;

  constructor() {}

  async ngOnInit() {
    //make sure you add your Moralis serverlUrl and appId
    const serverUrl = 'xxxx-xxxxx-xxxxx';
    const appId = 'xxxx-xxxxx-xxxxxx';
    Moralis.start({ serverUrl, appId });
  }

  async login() {
    console.log('loginworking');
    this.user = Moralis.User.current();

    await Moralis.authenticate({
      provider: 'walletconnect',
      chainId: 1,
      signingMessage: 'Login via Digital Dope',
    });
    await Moralis.enableWeb3({
      provider: 'walletconnect',
      chainId: 1,
    });
  }

  async logout() {
    await Moralis.User.logOut();
  }
}
