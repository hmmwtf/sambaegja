package com.example.demo.service;

import java.util.List;

import com.example.demo.vo.BoardVO;

public interface BoardService {
	List<BoardVO> select();
	void insert(BoardVO vo);
}
