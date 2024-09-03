import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-task';
}
