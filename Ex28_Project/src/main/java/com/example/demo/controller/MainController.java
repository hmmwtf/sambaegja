package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.BoardService;
import com.example.demo.service.ImageService;
import com.example.demo.service.SubBoardService;
import com.example.demo.vo.BoardVO;
import com.example.demo.vo.SubBoardVO;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class MainController {
	private final SubBoardService subBoardService;
	private final BoardService boardService;
	private final ImageService imageService;
	
	
	@GetMapping(value = "/")// 메인화면
	public String index(Model model) {
		model.addAttribute("vo",subBoardService.select("regdate"));
		return "index";
	}
	@PostMapping(value = "/noteAdd")// 글쓰기
	public String noteAdd(HttpSession session,@RequestParam(required = false) String content) {
		SubBoardVO vo = new SubBoardVO();
		vo.setContent(content);
		vo.setId(session.getAttribute("id").toString());
		subBoardService.insert(vo);
		return "redirect:/";
	}
	@PostMapping(value = "/likePlus") // 좋아요 업데이트
	@ResponseBody
	public void likePlus(@RequestBody HashMap<String, Object> map) {
		subBoardService.updateLikePlus(map);
	}
	@GetMapping(value = "/selectLikey/{idx}")
	@ResponseBody
	public SubBoardVO selectLikey(@PathVariable int idx) {
		return subBoardService.selectLikey(idx);
	}
	@DeleteMapping(value = "/sub_boardDelete")// 24시 정각일때
	@ResponseBody
	public List<BoardVO> sub_boardDelete(HttpSession session) {
		//subBoardService.deleteUpdate();
		SubBoardVO sb = subBoardService.selectMaxLikey();
		BoardVO vo = new BoardVO();
		vo.setContent(sb.getContent());
		vo.setId(sb.getId());
		vo.setRegDate(sb.getRegDate());
		vo.setLikey(sb.getLikey());
		subBoardService.deleteUpdate();
		vo.setTitle(boardService.selectTitle());
		boardService.insert(vo);
		return boardService.select();
	}
	@GetMapping(value = "/selectBoard")// 추천순,날짜순
	@ResponseBody
	public List<SubBoardVO> selectBoard(@RequestParam(required = false) String option){
		return subBoardService.select(option);
	}
	@DeleteMapping(value = "/sub_boardDeleteIdx/{idx}")// 댓글삭제
	@ResponseBody
	public void sub_boardDeleteIdx(@PathVariable int idx) {
		subBoardService.deleteIdx(idx);
	}
	@GetMapping(value = "/selectBoardByIdx/{idx}")
	public String selectBoardByIdx(@PathVariable int idx,Model model) {
		model.addAttribute("vo",boardService.selectBoardByIdx(idx));
		return "selectBoardByIdx";
	}
	@GetMapping(value = "/selectMainBoard")
	@ResponseBody
	public List<BoardVO> selectMainBoard(){
		return boardService.select();
	}
	@GetMapping(value = "/prevBoard")
	public String prevBoard(Model model) {
		model.addAttribute("image",imageService.select());
		return "prevBoard";
	}
	@GetMapping(value = "/prevBoardSelectByTitle/{title}")
	public String prevBoardSelectByTitle(@PathVariable String title,Model model) {
		Date date;
		try {
			date = new SimpleDateFormat("yyyy-MM-dd",Locale.KOREA).parse(title);
			model.addAttribute("vo",boardService.selectByTitle(date));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "prevBoardSelectByTitle";
	}
}
