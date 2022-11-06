import { Component } from '@angular/core';
import { faCocktail, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  iconHeader = faBarsStaggered;
  iconInfo = faCocktail;


  courseItems = [
    {
      title: 'Angular',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      creationDate: '20.03.2012',
      duration: '2:30 hours',
      authors: ['Authors: Dave Haisenberg, Tony Ja'
       ]
    },
    {
      title: 'Java',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      creationDate: '14.08.2017',
      duration: '1:00 hours',
      authors: ['Authors: Dave Simonnds, Valentina Lary'
    ]
    },
    {
      title: 'ASP.NET',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      creationDate: '01.06.2022',
      duration: '3:30 hours',
      authors: ['Authors: Sam Smith Tony Robbins'
    ]
    }
  ]


}
