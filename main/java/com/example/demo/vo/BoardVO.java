package com.example.demo.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int idx;
	private String title;
	private String content;
	private int likey;
	private int category;
	private Date regDate;
	private String id;
}
