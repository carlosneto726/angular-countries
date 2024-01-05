import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CountryItem } from '../../interfaces/CountryItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-item.component.html',
  styleUrl: './country-item.component.css'
})
export class CountryItemComponent implements OnInit{

  @Input() country: CountryItem;
  
  ngOnInit(): void {

  }

}
