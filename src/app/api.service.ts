import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@capacitor-community/http';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
    private alertController: AlertController,
  ) { }


  // link ApiService
  apiURL(){
    return 'https://kasir-api-project-mobile.herokuapp.com/api/kasir';
  }

  getMakanan(){
    return this.http.get(this.apiURL()+'/makanan');
  }

  deleteMakanan(id: any){
    return Http.request({
      method : 'DELETE',
      url: this.apiURL()+'/makanan',
      headers: { 'Content-Type': 'application/json'},
      data: {
        id: id,
      }
    }).then((data) => {
      console.log(data);
      if (data['data']['success']) {
        console.log('berhasil hapus');
        location.reload();
      } else {
        this.alertController.create({
          header: 'Notif',
          message: 'Gagal',
          buttons: ['OK']
        }).then( res => {
          res.present();
        });
      }
    })
  }
  ambilMakanan(id: any){
    return this.http.get(this.apiURL()+'/makanan/'+id);
  }



}