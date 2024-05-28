package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.LoginService;
import com.example.demo.vo.LoginVO;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class LoginController {
	private final LoginService loginService;
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
		return "redirect:/";
	}
	@GetMapping(value = "/selectById")
	@ResponseBody
	public LoginVO selectById(@RequestParam(required = false) String id) {
		return loginService.selectById(id);
	}
}
