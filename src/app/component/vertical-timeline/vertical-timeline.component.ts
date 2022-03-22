import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/service/our-services/our-services.service';

export interface IVerticalTimelineModel {
    id: string;
    time?: Date;
    title: string;
    content: string;
    image_thumbnail?: image_thumbnail[];
    badge_footer?: badge_footer[];
}

export interface image_thumbnail {
    image_id: string;
    image_url: string;
}

export interface badge_footer {
    badge_id: string;
    badge_class: string;
    badge_text: string;
}

@Component({
    selector: 'app-vertical-timeline',
    templateUrl: './vertical-timeline.component.html',
    styleUrls: ['./vertical-timeline.component.css']
})
export class VerticalTimelineComponent implements OnInit {

    Timeline: IVerticalTimelineModel[];

    constructor(
        private ourServiceServices: OurServicesService
    ) { }

    ngOnInit(): void {
        this.onGetTimeline();
    }

    onGetTimeline(): void {
        this.ourServiceServices.onGetAllServices()
            .subscribe((result) => {
                this.Timeline = result.content;
            }, (error) => {

            }, () => {
                setTimeout(() => {
                    this.onFormattingTimeline(this.Timeline);
                }, 500);
            });
    }

    onFormattingTimeline(timeline: IVerticalTimelineModel[]): void {
        timeline.forEach((item) => {
            let paragraph = document.getElementById(`paragraph${item.id}`) as HTMLElement;
            paragraph.innerHTML = item.content;
        });
    }
}
