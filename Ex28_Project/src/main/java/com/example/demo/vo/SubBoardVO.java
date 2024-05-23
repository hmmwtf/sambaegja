package com.example.demo.vo;

import java.util.Date;

import lombok.Data;

@Data
public class SubBoardVO {
	private int idx;
	private String content;
	private int likey;
	private Date regDate;
	private String id;
}
