package com.example.demo.service;

import com.example.demo.vo.LoginVO;

public interface LoginService {
	LoginVO selectById(String id);
	void insert(LoginVO vo);
}
