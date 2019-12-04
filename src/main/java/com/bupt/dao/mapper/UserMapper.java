package com.bupt.dao.mapper;

import com.bupt.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface UserMapper {

  @Select("SELECT * FROM PUser")
  @Results
  List<User> getAll();
}
