package com.sts.register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sts.register.entity.UserEntity;
import com.sts.register.repository.UserRepository;
import com.sts.register.userregister.User;
import com.sts.register.userregister.UserRequest;
@Service
public class UserService{
	@Autowired
	UserRepository repo;

	public String registeruser(UserRequest users) {
		
		UserEntity user=new UserEntity();
		user.setFirstName(users.getFirstName());
		user.setLastName(users.getLastName());
		user.setMailId(users.getMailId());
		user.setPassword(users.getPassword());
		user.setPhoneNumber(users.getPhoneNumber());
		user.setAddress(users.getAddress());
		user.setPincode(users.getPincode() );
		repo.save(user);
		
		
		return "Signup successfull";
	}

	public List<UserEntity> findalluser() {
		
		return repo.findAll();
	}
	
}