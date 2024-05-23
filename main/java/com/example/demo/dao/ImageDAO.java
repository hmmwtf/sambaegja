package com.example.demo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.ImageVO;

@Mapper
public interface ImageDAO {
	List<ImageVO> select()throws SQLException;
}
