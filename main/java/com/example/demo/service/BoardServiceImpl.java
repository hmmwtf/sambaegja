package com.example.demo.service;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dao.BoardDAO;
import com.example.demo.vo.BoardVO;

import lombok.RequiredArgsConstructor;

@Service("boardService")
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{
	private final BoardDAO dao;
	@Override
	public List<BoardVO> select() {
		List<BoardVO> vo = null;
		try {
			vo = dao.select();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public void insert(BoardVO vo) {
		try {
			dao.insert(vo);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public BoardVO selectBoardByIdx(int idx) {
		BoardVO vo = null;
		try {
			vo = dao.selectBoardByIdx(idx);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public Date selectTitle() {
		Date vo = null;
		try {
			vo = dao.selectTitle();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public List<BoardVO> selectByTitle(Date title) {
		List<BoardVO> vo = null;
		try {
			vo = dao.selectByTitle(title);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}


}
