var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
if (hour == 16 && minute == 22) { // 24시 정각일때
	axios.delete('/sub_boardDelete')
		.then(function(response) {
			// handle success
			console.log(response.data);
			console.log('pass');
			let data = response.data;
			$("#main_board").html(" ");
			for (d of data) {
				div = $("<div  class='blackShadow thisWeekStory' onclick='boardClick(" + d.idx + ");'></div>");
				textarea = $("<p id='board_content" + d.idx + "' cols='100' rows='10' style='cursor:pointer;'>" + d.content + "</p>");
				$(textarea).appendTo(div);
				//$("#main_board").html(div);
				$(div).appendTo($("#main_board"))
			}
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
}
function boardClick(idx) {
	x = Math.ceil((window.screen.width - 550) / 2);
	y = Math.ceil((window.screen.height - 700) / 2);
	win = window.open('selectBoardByIdx/' + idx, '내용', 'width=700,height=700,left=' + x + ', top=' + y);
}
$(function() {
	$("#login").click(function() {
		location.href = "/login";
	});
	$("#logout").click(function() {
		location.href = "/logout";
	})
	$("#prevBoard").click(function(){
		if($('#login_id').val().length==0){
			alert("로그인후 이용해 주세요.");
			location.href='/login';
			return false;
		}
		location.href="/prevBoard";
	});
	$("#add").click(function() { // 글쓰기
		if ($("#login_id").val().length == 0) {
			alert("로그인후 이용해 주세요.");
			location.href = "/login";
		} else {
			form = $("<form action='/noteAdd' method='post'></form>");
			input = $("<input type='hidden' name='content' value='" + $("#sub_board").val() + "'>");
			if ($("#sub_board").val().length == 0) {
				alert("내용을 입력해주세요.");
				return false;
			}
			$(input).appendTo(form);
			$("#result2").html(form);
			$(form).submit();
		}
	});
	getSubBoard();
	axios.get('/selectMainBoard')
		.then(function(response) {
			// handle success
			console.log(response.data);
			let data = response.data;
			console.log("data : ",data.length);
			if(data.length>0){
				let boardTitle = response.data[0];
				dateString=boardTitle.title;
				dateFormat = new Date(dateString);
				console.log(dateFormat.getFullYear());
				console.log("날짜 : ",dateFormat);
				date=$("<span>"+dateFormat.getFullYear()+"년 "+(Number)(dateFormat.getMonth()+1)+"월 "+dateFormat.getDate()+"일</span>");
				$(date).appendTo($("#boardDate"));
				$("#main_board").html(" ");
				for (d of data) {
					div = $("<div  class='blackShadow thisWeekStory' onclick='boardClick(" + d.idx + ");'></div>");
					textarea = $("<p id='board_content" + d.idx + "' cols='100' rows='10' style='cursor:pointer;'>" + d.content + "</p>");
					$(textarea).appendTo(div);
					//$("#main_board").html(div);
					$(div).appendTo($("#main_board"))
				}
			}
		})
		.catch(function(error) {
			// handle error
			console.log(error);
			console.log("?");
		})
		.then(function() {
			// always executed
		});
	$("#select").change(function() {//추천순, 날짜순
		axios.get('/selectBoard?option=' + $("#select").val())
			.then(function(response) {
				// handle success
				let data = response.data;
				$("#result").html("");
				for (d of data) {
					// div = $("<div style='width:800px;margin-left:35%;'></div>");
					// textarea = $("<textarea id='sub_content" + d.idx + "' cols='70' rows='10'>" + d.content + "</textarea>");
					// span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
					// button = $("<button onclick='del(" + d.idx + ");'  class='btn btn-outline-secondary btn-sm' >삭제</button>");
					// img = $("<img style='margin-bottom:70px;cursor:pointer;width:50px;height:50px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
					// $(textarea).appendTo(div);
					// $(span).appendTo(div);
					// $(button).appendTo(div);
					// $(img).appendTo(div);
					div = $("<div class = 'blackShadow mention'></div>");
					div2 = $("<div></div>")
					p = $("<p id='sub_content" + d.idx + "' cols='70' rows='10'>" + d.content + "</p>");//이거 왜 textarea일 때는 되고 p일때는 안됨?
					span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
					img = $("<img style='cursor:pointer;width:25px;height:25px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
					$(p).appendTo(div);
					$(span).appendTo(div2);
					$(img).appendTo(div2);
					$(div2).appendTo(div);
					$(div).appendTo($("#result"));
				}
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	})
})
function getSubBoard() {
	axios.get('/selectBoard?option=' + $("#select ").val())
		.then(function(response) {
			// handle success
			console.log("qwer : ",response.data);
			let data = response.data;
			$("#result").html("");
			for (d of data) {
				// div = $("<div style='width:800px;margin-left:35%;'></div>");
				// textarea = $("<textarea id='sub_content" + d.idx + "' cols='70' rows='10'>" + d.content + "</textarea>");
				// button = $("<button onclick='del(" + d.idx + ");' class='btn btn-outline-secondary btn-sm'>삭제</button>");
				// span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
				// img = $("<img style='margin-bottom:70px;cursor:pointer;width:50px;height:50px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
				// $(textarea).appendTo(div);
				// $(span).appendTo(div);
				// $(button).appendTo(div);
				// $(img).appendTo(div);
				div = $("<div class = 'blackShadow mention'></div>");
				div2 = $("<div></div>")
				p = $("<p id='sub_content" + d.idx + "' cols='70' rows='10' style='font-size: 30px'>" + d.content + "</p>");//이거 왜 textarea일 때는 되고 p일때는 안됨?
				span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
				img = $("<img style='cursor:pointer;width:25px;height:25px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
				$(p).appendTo(div);
				$(span).appendTo(div2);
				$(img).appendTo(div2);
				$(div2).appendTo(div);
				$(div).appendTo($("#result"));
			}
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
}
function del(idx) {// 댓글삭제
	if (confirm("해당글을 삭제하겠습니까?")) {
		axios.delete('/sub_boardDeleteIdx/' + idx)
			.then(function(response) {
				// handle success
				console.log(response.data);
				getSubBoard();
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}
}
async function likey(idx) { // 좋아요 누를시
	if ($("#login_id").val().length == 0) {
		alert("로그인후 이용해 주세요.");
		location.href = '/login';
		return false;
	}
	if ($(".check" + idx).attr('alt') == 0) {
		$(".check" + idx).attr("src", "/img/like2.png");
		$(".check" + idx).attr("alt", 1);
		axios.post('/likePlus', {
			'idx2': idx,
			'idx': 1
		})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	else {
		$(".check" + idx).attr("src", "/img/like1.png");
		$(".check" + idx).attr("alt", 0);
		axios.post('/likePlus', {
			'idx2': idx,
			'idx': 0
		})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	await axios.get('/selectLikey/' + idx) // 좋아요 순
		.then(function(response) {
			// handle success
			console.log(response);
			let data = response.data;
			$("#likey" + idx).html(data.likey);
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});

}

document.addEventListener('DOMContentLoaded', function () {
	const changeButton = document.getElementById('change_div');
	const textareaContainer = document.getElementById('textarea-container');
	const commentsContainer = document.getElementById('comments-container');
	let toggleState = 0;

	changeButton.addEventListener('click', function () {
		if (toggleState === 0) {
			textareaContainer.classList.remove('hidden-container');
			commentsContainer.classList.add('hidden-container');
			toggleState = 1;
		} else {
			textareaContainer.classList.add('hidden-container');
			commentsContainer.classList.remove('hidden-container');
			toggleState = 0;
		}
	});
});




/*
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
if (hour == 16 && minute == 22) { // 24시 정각일때
	axios.delete('/sub_boardDelete')
		.then(function(response) {
			// handle success
			console.log(response.data);
			console.log('pass');
			let data = response.data;
			$("#main_board").html("");
			div = $("<div id='storyTrainContainer'></div>")
			for (d of data) {
				div2 = $("<div class='blackShadow thisWeekStory' onclick='boardClick(" + d.idx + ");'></div>");
				p = $("<p id='board_content" + d.idx + "' cols='100' rows='10' style='cursor:pointer;'>" + d.content + "</p>");
				$(p).appendTo(div2);
				//$("#main_board").html(div);
			}
			$(div2).appendTo(div);
			$(div).appendTo($("#main_board"))
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
}
function boardClick(idx) {
	x = Math.ceil((window.screen.width - 550) / 2);
	y = Math.ceil((window.screen.height - 700) / 2);
	win = window.open('selectBoardByIdx/' + idx, '내용', 'width=700,height=700,left=' + x + ', top=' + y);
}
$(function() {
	$("#login").click(function() {
		location.href = "/login";
	});
	$("#logout").click(function() {
		location.href = "/logout";
	})
	$("#prevBoard").click(function(){
		if($('#login_id').val().length==0){
			alert("로그인후 이용해 주세요.");
			location.href='/login';
			return false;
		}
		location.href="/prevBoard";
	});
	$("#add").click(function() { // 글쓰기
		if ($("#login_id").val().length == 0) {
			alert("로그인후 이용해 주세요.");
			location.href = "/login";
		} else {
			form = $("<form action='/noteAdd' method='post'></form>");
			input = $("<input type='hidden' name='content' value='" + $("#sub_board").val() + "'>");
			if ($("#sub_board").val().length == 0) {
				alert("내용을 입력해주세요.");
				return false;
			}
			$(input).appendTo(form);
			$("#result2").html(form);
			$(form).submit();
		}
	});
	getSubBoard();
	axios.get('/selectMainBoard')
		.then(function(response) {
			// handle success
			console.log(response.data);
			let data = response.data;
			console.log("data : ",data.length);
			let boardTitle = response.data[0];
			dateString=boardTitle.title;
			dateFormat = new Date(dateString);
			console.log(dateFormat.getFullYear());
			console.log("날짜 : ",dateFormat);
			date=$("<span>"+dateFormat.getFullYear()+"년 "+(Number)(dateFormat.getMonth()+1)+"월 "+dateFormat.getDate()+"일</span>");
			$(date).appendTo($("#boardDate"));
			$("#main_board").html("");

			div = $("<div id='storyTrainContainer'></div>")
			for (d of data) {
				div2 = $("<div class='blackShadow thisWeekStory' onclick='boardClick(" + d.idx + ");'></div>");
				p = $("<p id='board_content" + d.idx + "' cols='100' rows='10' style='cursor:pointer;'>" + d.content + "</p>");
				$(p).appendTo(div2);
				//$("#main_board").html(div);
			}
			$(div2).appendTo(div);
			$(div).appendTo($("#main_board"))
		})
		.catch(function(error) {
			// handle error
			console.log(error);
			console.log("?");
		})
		.then(function() {
			// always executed
		});
	$("#select").change(function() {//추천순, 날짜순
		axios.get('/selectBoard?option=' + $("#select").val())
			.then(function(response) {
				// handle success
				let data = response.data;
				$("#result").html("");
				for (d of data) {
					// div = $("<div style='width:800px;margin-left:35%;'></div>");
					// textarea = $("<textarea id='sub_content" + d.idx + "' cols='70' rows='10'>" + d.content + "</textarea>");
					// span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
					// button = $("<button onclick='del(" + d.idx + ");'  class='btn btn-outline-secondary btn-sm' >삭제</button>");
					// img = $("<img style='margin-bottom:70px;cursor:pointer;width:50px;height:50px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
					// $(textarea).appendTo(div);
					// $(span).appendTo(div);
					// $(button).appendTo(div);
					// $(img).appendTo(div);
					div = $("<div class = 'blackShadow mention'></div>");
					div2 = $("<div></div>")
					p = $("<p id='sub_content" + d.idx + "' cols='70' rows='10'>" + d.content + "</p>");//이거 왜 textarea일 때는 되고 p일때는 안됨?
					span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
					img = $("<img style='cursor:pointer;width:25px;height:25px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
					$(p).appendTo(div);
					$(span).appendTo(div2);
					$(img).appendTo(div2);
					$(div2).appendTo(div);
					$(div).appendTo($("#result"));
				}
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	})
})
function getSubBoard() {
	axios.get('/selectBoard?option=' + $("#select ").val())
		.then(function(response) {
			// handle success
			console.log("qwer : ",response.data);
			let data = response.data;
			$("#result").html("");
			for (d of data) {
				// div = $("<div style='width:800px;margin-left:35%;'></div>");
				// textarea = $("<textarea id='sub_content" + d.idx + "' cols='70' rows='10'>" + d.content + "</textarea>");
				// button = $("<button onclick='del(" + d.idx + ");' class='btn btn-outline-secondary btn-sm'>삭제</button>");
				// span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
				// img = $("<img style='margin-bottom:70px;cursor:pointer;width:50px;height:50px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
				// $(textarea).appendTo(div);
				// $(span).appendTo(div);
				// $(button).appendTo(div);
				// $(img).appendTo(div);
				div = $("<div class = 'blackShadow mention'></div>");
				div2 = $("<div></div>")
				p = $("<p id='sub_content" + d.idx + "' cols='70' rows='10' style='font-size: 30px'>" + d.content + "</p>");//이거 왜 textarea일 때는 되고 p일때는 안됨?
				span = $("<span id='likey" + d.idx + "'>" + d.likey + "</span>");
				img = $("<img style='cursor:pointer;width:25px;height:25px;' class='check" + d.idx + "' onclick='likey(" + d.idx + ")' src='/img/like1.png' alt='0'>");
				$(p).appendTo(div);
				$(span).appendTo(div2);
				$(img).appendTo(div2);
				$(div2).appendTo(div);
				$(div).appendTo($("#result"));
			}
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
}
function del(idx) {// 댓글삭제
	if (confirm("해당글을 삭제하겠습니까?")) {
		axios.delete('/sub_boardDeleteIdx/' + idx)
			.then(function(response) {
				// handle success
				console.log(response.data);
				getSubBoard();
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}
}
async function likey(idx) { // 좋아요 누를시
	if ($("#login_id").val().length == 0) {
		alert("로그인후 이용해 주세요.");
		location.href = '/login';
		return false;
	}
	if ($(".check" + idx).attr('alt') == 0) {
		$(".check" + idx).attr("src", "/img/like2.png");
		$(".check" + idx).attr("alt", 1);
		axios.post('/likePlus', {
			content: $("#sub_content" + idx).val(),
			idx: 1
		})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	else {
		$(".check" + idx).attr("src", "/img/like1.png");
		$(".check" + idx).attr("alt", 0);
		axios.post('/likePlus', {
			content: $("#sub_content" + idx).val(),
			idx: 0
		})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	await axios.get('/selectLikey/' + idx) // 좋아요 순
		.then(function(response) {
			// handle success
			console.log(response);
			let data = response.data;
			$("#likey" + idx).html(data.likey);
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});

}

document.addEventListener('DOMContentLoaded', function () {
	const changeButton = document.getElementById('change_div');
	const textareaContainer = document.getElementById('textarea-container');
	const commentsContainer = document.getElementById('comments-container');
	let toggleState = 0;

	changeButton.addEventListener('click', function () {
		if (toggleState === 0) {
			textareaContainer.classList.remove('hidden-container');
			commentsContainer.classList.add('hidden-container');
			toggleState = 1;
		} else {
			textareaContainer.classList.add('hidden-container');
			commentsContainer.classList.remove('hidden-container');
			toggleState = 0;
		}
	});
});
*/
