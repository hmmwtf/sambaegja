package com.example.demo.service;

import java.util.Date;
import java.util.List;

import com.example.demo.vo.BoardVO;

public interface BoardService {
	List<BoardVO> select();
	List<BoardVO> selectByTitle(Date title);
	BoardVO selectBoardByIdx(int idx);
	Date selectTitle();
	void insert(BoardVO vo);
}
