package com.example.demo.dao;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.BoardVO;

@Mapper
public interface BoardDAO {
	List<BoardVO> select()throws SQLException;
	List<BoardVO> selectByTitle(Date title)throws SQLException;
	BoardVO selectBoardByIdx(int idx)throws SQLException;
	Date selectTitle()throws SQLException;
	void insert(BoardVO vo)throws SQLException;
}
