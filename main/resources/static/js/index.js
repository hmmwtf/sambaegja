		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		if(hour==15&&minute==41){ // 24시 정각일때
			axios.delete('/sub_boardDelete')
			  .then(function (response) {
			    // handle success
			    console.log(response.data);
			    let data = response.data;
			    for(d of data){
					div=$("<div style='width:800px;margin-left:35%;'></div>");
					textarea=$("<textarea id='board_content"+d.idx+"' cols='70' rows='10'>"+d.content+"</textarea>");
					$(textarea).appendTo(div);
					$("#result").html(div);
				}
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });
		}
		$(function(){ 
			$("#login").click(function(){
				location.href="/login";
			});
			$("#logout").click(function(){
				location.href="/logout";
			})
			$("#add").click(function(){ // 글쓰기
				if($("#login_id").val().length==0){
					alert("로그인후 이용해 주세요.");
					location.href="/login";
				}else{
					form=$("<form action='/noteAdd' method='post'></form>");
					input=$("<input type='hidden' name='content' value='"+$("#sub_board").val()+"'>");
					if($("#sub_board").val().length==0){
						alert("내용을 입력해주세요.");
						return false;
					}
					$(input).appendTo(form);
					$("#result2").html(form);
					$(form).submit();
				}
			});
			getSubBoard();
			
			  $("#select").change(function(){
				  axios.get('/selectBoard?option='+$("#select").val())
			  .then(function (response) {
			    // handle success
			    console.log(response.data);
			    let data = response.data;
			    $("#result").html("");
			    for(d of data){
			    	div=$("<div style='width:800px;margin-left:35%;'></div>");
			    	textarea=$("<textarea id='sub_content"+d.idx+"' cols='70' rows='10'>"+d.content+"</textarea>");
			    	span=$("<span id='likey"+d.idx+"'>"+d.likey+"</span>");
			    	button=$("<button onclick='del("+d.idx+")'>삭제</button>");
			    	img=$("<img style='margin-bottom:70px;cursor:pointer;width:50px;height:50px;' class='check"+d.idx+"' onclick='likey("+d.idx+")' src='/images/like1.png' alt='0'>");
			    	$(textarea).appendTo(div);
			    	$(span).appendTo(div);
			    	$(button).appendTo(div);
			    	$(img).appendTo(div);
			    	$(div).appendTo($("#result"));
			    }
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });
			  })
		})
		function getSubBoard(){
				axios.get('/selectBoard?option='+$("#select ").val())
				  .then(function (response) {
				    // handle success
				    console.log(response.data);
				    let data = response.data;
				    $("#result").html("");
				    for(d of data){
				    	div=$("<div style='width:800px;margin-left:35%;'></div>");
				    	textarea=$("<textarea id='sub_content"+d.idx+"' cols='70' rows='10'>"+d.content+"</textarea>");
				    	button=$("<button onclick='del("+d.idx+");'>삭제</button>");
				    	span=$("<span id='likey"+d.idx+"'>"+d.likey+"</span>");
				    	img=$("<img style='margin-bottom:70px;cursor:pointer;width:50px;height:50px;' class='check"+d.idx+"' onclick='likey("+d.idx+")' src='/images/like1.png' alt='0'>");
				    	$(textarea).appendTo(div);
				    	$(span).appendTo(div);
				    	$(button).appendTo(div);
				    	$(img).appendTo(div);
				    	$(div).appendTo($("#result"));
				    }
				  })
				  .catch(function (error) {
				    // handle error
				    console.log(error);
				  })
				  .then(function () {
				    // always executed
				  });
				  }
		function del(idx){
			if(confirm("해당글을 삭제하겠습니까?")){
				axios.delete('/sub_boardDeleteIdx/'+idx)
				  .then(function (response) {
				    // handle success
				    console.log(response.data);
				    getSubBoard();				    
				  })
				  .catch(function (error) {
				    // handle error
				    console.log(error);
				  })
				  .then(function () {
				    // always executed
				  });
			  }
		}
		async function likey(idx){ // 좋아요 누를시
			if($("#login_id").val().length==0){
				alert("로그인후 이용해 주세요.");
				location.href='/login';
				return false;
			}
				if($(".check"+idx).attr('alt')==0){
					$(".check"+idx).attr("src","/images/like2.png");
					$(".check"+idx).attr("alt",1);
					axios.post('/likePlus', {
					    content: $("#sub_content"+idx).val(),
					    idx: 1
					  })
					  .then(function (response) {
					    console.log(response);
					  })
					  .catch(function (error) {
					    console.log(error);
					  });
				}
				else{
					$(".check"+idx).attr("src","/images/like1.png");
					$(".check"+idx).attr("alt",0);
					axios.post('/likePlus', {
					    content: $("#sub_content"+idx).val(),
					    idx: 0
					  })
					  .then(function (response) {
					    console.log(response);
					  })
					  .catch(function (error) {
					    console.log(error);
					  });
				}				

			await	axios.get('/selectLikey/'+idx) // 좋아요순
				  .then(function (response) {
				    // handle success
				    console.log(response);
				    let data = response.data;
				    $("#likey"+idx).html(data.likey);
				  })
				  .catch(function (error) {
				    // handle error
				    console.log(error);
				  })
				  .then(function () {
				    // always executed
				  });
				
		}
