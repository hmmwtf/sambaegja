package com.example.demo.service;

import com.example.demo.vo.LoginVO;

public interface LoginService {
	LoginVO selectByIdx(int idx);
	void insert(LoginVO vo);
}
