package com.sts.register.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sts.register.service.UserService;
import com.sts.register.userregister.User;
import com.sts.register.userregister.UserRequest;
import com.sts.register.entity.*;

@RestController
@RequestMapping("/user/form")
@CrossOrigin(origins = "http://localhost:3000")
public class UserControl {
	
	@Autowired
	UserService userservice;
	
	@PostMapping("/register")
	public String UserRegistration(@RequestBody UserRequest users ) {
		
		String msg=userservice.registeruser(users);
		return msg;	
		
	}
	@GetMapping("/alluser")
	public List<UserEntity> alldata()
	{
		return userservice.findalluser();
	}

	

}
