package com.example.demo.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ImageVO {
	private int idx;
	private Date start_date;
	private Date end_date;
	private String image;
}
