package com.example.demo.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dao.SubBoardDAO;
import com.example.demo.vo.SubBoardVO;

import lombok.RequiredArgsConstructor;

@Service("exService")
@RequiredArgsConstructor
public class SubBoardServiceImpl implements SubBoardService{
	private final SubBoardDAO dao;

	@Override
	public List<SubBoardVO> select(String option) {
		List<SubBoardVO> vo = null;
		try {
			vo = dao.select(option);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public void insert(SubBoardVO vo) {
		try {
			dao.insert(vo);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void updateLikePlus(HashMap<String, Object> map) {
		try {
			dao.updateLikePlus(map);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public SubBoardVO selectLikey(int idx) {
		SubBoardVO vo = null;
		try {
			vo = dao.selectLikey(idx);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public SubBoardVO selectMaxLikey() {
		SubBoardVO vo = null;
		try {
			vo = dao.selectMaxLikey();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public void deleteUpdate() {
		try {
			dao.deleteUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void deleteIdx(int idx) {
		try {
			dao.deleteIdx(idx);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
