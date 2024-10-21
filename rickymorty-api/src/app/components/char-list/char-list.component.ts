import { Component, OnInit } from '@angular/core';
import { CharList } from '../../interface/api-response';
import { CharServiceService } from '../../services/char-service.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrl: './char-list.component.css'
})
export class CharListComponent implements OnInit {

  charList: CharList[] = [];

  constructor(private charService: CharServiceService) { }

  ngOnInit(): void {

    this.charService.getCharListResponse().subscribe((response) => {

      this.charList = response.results;

    });

  }


}
