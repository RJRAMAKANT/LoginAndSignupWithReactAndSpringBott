package com.sts.register.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.register.entity.UserEntity;
import com.sts.register.userregister.User;
@Repository
public interface UserRepository extends JpaRepository<UserEntity,String>{

	

	

}
