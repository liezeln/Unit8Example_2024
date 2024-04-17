import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list-paginated',
  templateUrl: './product-list-paginated.component.html',
  styleUrls: ['./product-list-paginated.component.css']
})
export class ProductListPaginatedComponent implements OnInit {
  pageNum: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.pageNum = +params['page'] || 0;
    })
  }

  nextPage() {
    if (this.pageNum) {
      this.router.navigate(['/product-list-paginated'],
        { queryParams: { page: this.pageNum + 1 } });
    }

  }
}
