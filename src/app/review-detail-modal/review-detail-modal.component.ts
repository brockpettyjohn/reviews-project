import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Review } from '../review';
import { } from '@angular/core';


@Component({
  selector: 'app-review-detail-modal',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './review-detail-modal.component.html',
  styleUrls: ['./review-detail-modal.component.scss']
})
export class ReviewDetailModalComponent implements OnInit {


  closeResult = '';
  review: Review;
  @Input() id: number

  constructor(private modalService: NgbModal, private dataService: DataService) { }

  ngOnInit() {

  }

  open(content: any) {
    this.dataService.getReview(this.id).subscribe(rev => {
      this.review = { ...rev, publish_date: new Date(rev.publish_date).toLocaleDateString() }
    })
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title', 
      windowClass: 'modal-custom'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
