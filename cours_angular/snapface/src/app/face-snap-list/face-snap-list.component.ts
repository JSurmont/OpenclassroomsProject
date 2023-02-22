import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibalde',
        description:'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountain',
        description:'Un endroit magnifique pour les randonnées.',
        createdDate: new Date(),
        snaps: 90,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        location: 'la montagne'
      },
      {
        title: 'Un bon repas',
        description:'Mmmh que c\'est bon !',
        createdDate: new Date(),
        snaps: 50,
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      },
      {
        title: 'Archibalde',
        description:'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 150,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountain',
        description:'Un endroit magnifique pour les randonnées.',
        createdDate: new Date(),
        snaps: 250,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        location: 'la montagne'
      },
      {
        title: 'Un bon repas',
        description:'Mmmh que c\'est bon !',
        createdDate: new Date(),
        snaps: 350,
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      }
    ];
  }

}
