import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';



  //$("#carousel-home .owl-carousel").on("initialized.owl.carousel",function(){setTimeout(function(){$("#carousel-home .owl-carousel .owl-item.active .owl-slide-animated").addClass("is-transitioned"),$("section").show()},200)});const $owlCarousel=$("#carousel-home .owl-carousel").owlCarousel({items:1,loop:!0,nav:!1,dots:!0,responsive:{0:{dots:!1},767:{dots:!1},768:{dots:!0}}});$owlCarousel.on("changed.owl.carousel",function(o){$(".owl-slide-animated").removeClass("is-transitioned"),$(".owl-item").eq(o.item.index).find(".owl-slide-animated").addClass("is-transitioned")}),$owlCarousel.on("resize.owl.carousel",function(){setTimeout(function(){},50)});
}
