package com.example.demo.service;

import java.util.HashMap;
import java.util.List;

import com.example.demo.vo.SubBoardVO;

public interface SubBoardService {
	List<SubBoardVO> select(String option);
	SubBoardVO selectLikey(int idx);
	SubBoardVO selectMaxLikey();
	void insert(SubBoardVO vo);
	void deleteUpdate();
	void deleteIdx(int idx);
	void updateLikePlus(HashMap<String, Object> map);
}
