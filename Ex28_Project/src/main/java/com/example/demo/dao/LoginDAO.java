package com.example.demo.dao;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.LoginVO;

@Mapper
public interface LoginDAO {
	LoginVO selectById(String id)throws SQLException;
	void insert(LoginVO vo)throws SQLException;
}
