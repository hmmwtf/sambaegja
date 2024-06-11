package com.example.demo.dao;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.SubBoardVO;

@Mapper
public interface SubBoardDAO {
	List<SubBoardVO> select(String option)throws SQLException;
	SubBoardVO selectLikey(int idx)throws SQLException;
	SubBoardVO selectMaxLikey()throws SQLException;
	void insert(SubBoardVO vo)throws SQLException;
	void updateLikePlus(HashMap<String, Object> map)throws SQLException;
	void deleteUpdate()throws SQLException;
	void deleteIdx(int idx)throws SQLException;
}
