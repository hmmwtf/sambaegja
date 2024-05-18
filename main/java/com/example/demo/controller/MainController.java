package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;

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
	@GetMapping(value = "/")
	public String index(Model model) {
		model.addAttribute("vo",subBoardService.select("regdate"));
		return "index";
	}
	@PostMapping(value = "/noteAdd")
	public String noteAdd(HttpSession session,@RequestParam(required = false) String content) {
		SubBoardVO vo = new SubBoardVO();
		vo.setContent(content);
		vo.setId(session.getAttribute("id").toString());
		subBoardService.insert(vo);
		return "redirect:/";
	}
	@PostMapping(value = "/likePlus")
	public void likePlus(@RequestBody HashMap<String, Object> map) {
		subBoardService.updateLikePlus(map);
	}
	@GetMapping(value = "/selectLikey/{idx}")
	@ResponseBody
	public SubBoardVO selectLikey(@PathVariable int idx) {
		return subBoardService.selectLikey(idx);
	}
	@DeleteMapping(value = "/sub_boardDelete")
	@ResponseBody
	public List<BoardVO> sub_boardDelete() {
		subBoardService.deleteUpdate();
		SubBoardVO sb = subBoardService.selectMaxLikey();
		BoardVO vo = new BoardVO();
		vo.setContent(sb.getContent());
		vo.setId(vo.getId());
		vo.setRegDate(sb.getRegDate());
		vo.setLikey(sb.getLikey());
		boardService.insert(vo);
		return boardService.select();
	}
	@GetMapping(value = "/selectBoard")
	@ResponseBody
	public List<SubBoardVO> selectBoard(@RequestParam(required = false) String option){
		log.info("결과물 : {}",option);
		return subBoardService.select(option);
	}
	@DeleteMapping(value = "/sub_boardDeleteIdx/{idx}")
	@ResponseBody
	public void sub_boardDeleteIdx(@PathVariable int idx) {
		subBoardService.deleteIdx(idx);
	}
}
