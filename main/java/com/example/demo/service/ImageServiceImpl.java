package com.example.demo.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dao.ImageDAO;
import com.example.demo.vo.ImageVO;

import lombok.RequiredArgsConstructor;

@Service("imageService")
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService{
	private final ImageDAO dao;

	@Override
	public List<ImageVO> select() {
		List<ImageVO> vo = null;
		try {
			vo = dao.select();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}
}
