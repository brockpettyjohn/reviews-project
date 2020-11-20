import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Review } from '../review';


@Component({
  selector: 'app-review-detail-modal',
  templateUrl: './review-detail-modal.component.html',
  styleUrls: ['./review-detail-modal.component.scss']
})
export class ReviewDetailModalComponent implements OnInit {

 
    closeResult = '';
    review: Review;
    @Input() id: number
  
    constructor(private modalService: NgbModal, private dataService: DataService) {}

    ngOnInit() {
      
    }
  
    open(content: any) {
      this.dataService.getReview(this.id).subscribe(rev => {
        this.review = rev
      })
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
