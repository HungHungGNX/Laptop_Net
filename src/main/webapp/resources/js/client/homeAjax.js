
function addToCart(id)
	{
		$.ajax({
			type: "GET",		
			url: "http://localhost:8080/laptopshop/api/gio-hang/addSanPham?id="+id,
			success: function(result){
				if(result.status == "false")
				{
					window.alert("Sản phẩm đang hết hàng, quý khách vui lòng quay lại sau");	
				}else
				{
					window.alert("Đã thêm sản phẩm vào giỏ hàng");
				}		
			},
			error : function(e){
				alert("Error: ",e);
				console.log("Error" , e );
			}
		});

		
	}


$(document).ready(function(){
	ajaxGet();

	function ajaxGet(){
		$.ajax({
			type: "GET",		
			url: "http://localhost:8080/laptopshop/api/san-pham/latest",
			success: function(result){
				let content;
				$.each(result, function(i, sanpham){
				console.log(sanpham,i)
				if(i<8){
				  content = '';
                  content ='<div class="swiper-slide">' +
                  		          '<div class="movie-box">' + 
                  		             '<img src="/laptopshop/img/'+sanpham.id+'.png" class="movie-box-img" />' +
                  		             '<div class="box-text">' +
                  		             	'<h2 class="movie-title">' + sanpham.tenSanPham + '</h2>' + 
                  		             	'<span class="movie-type">' + accounting.formatMoney(sanpham.donGia) + ' đ</span>' +
                  		                '<a href="#" class="watch-btn play-btn" onClick="addToCart(' +
                                sanpham.id +
                                ')">' +
                                            '<i class="bx bx-cart-add"></i>' + '</a>'+
                  		             '</div>'+
                  		            '</div>'+
                  		            '</div>'
                 $('.popular-swiper-wrapper').append(content); 		            
                  		  }
		        });
			},
			error : function(e){
				alert("Error: ",e);
				console.log("Error" , e );
			}
		});
	}
	
})

