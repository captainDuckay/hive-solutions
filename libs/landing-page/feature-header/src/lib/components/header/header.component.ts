import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header[lan-header]',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgOptimizedImage, RouterLink],
})
export class HeaderComponent {}
