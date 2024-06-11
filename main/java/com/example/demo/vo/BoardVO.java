package com.example.demo.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int idx;
	private Date title;
	private String content;
	private int likey;
	private Date regDate;
	private String id;
	private String start_date;
}
