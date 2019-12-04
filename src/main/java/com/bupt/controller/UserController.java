package com.bupt.controller;

import com.bupt.dao.mapper.UserMapper;
import com.bupt.model.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserMapper userMapper;

    public UserController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @RequestMapping("api/users")
    public List<User> getUsers() {
        return userMapper.getAll();
    }

}
