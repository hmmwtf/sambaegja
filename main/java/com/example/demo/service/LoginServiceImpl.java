package com.example.demo.service;

import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.example.demo.dao.LoginDAO;
import com.example.demo.vo.LoginVO;

import lombok.RequiredArgsConstructor;

@Service("loginService")
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{
	private final LoginDAO dao;
	@Override
	public LoginVO selectByIdx(int idx) {
		LoginVO vo = null;
		try {
			vo = dao.selectByIdx(idx);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

	@Override
	public void insert(LoginVO vo) {
		try {
			dao.insert(vo);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
