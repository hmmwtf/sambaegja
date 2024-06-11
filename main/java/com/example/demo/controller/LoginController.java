package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.service.LoginService;
import com.example.demo.vo.LoginVO;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginController {
	//private final LoginService loginService;
	@GetMapping(value = "/login")
	public String login() {
		return "login";
	}
	@GetMapping(value = "/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("id");
		return "redirect:/";
	}
	@PostMapping(value = "/loginOk")
	public String loginOk(@ModelAttribute LoginVO vo,HttpSession session) {
		session.setAttribute("id", vo.getId());
		log.info("session_id : {}",vo.getId());
		log.info("결과값 : {}",vo);
		return "redirect:/";
	}
}
