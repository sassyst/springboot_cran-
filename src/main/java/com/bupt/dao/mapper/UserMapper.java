package com.bupt.dao.mapper;

import com.bupt.model.Bbu;
import com.bupt.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
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

  @Select("SELECT * FROM Bbu Where userId = #{id}")
  List<Bbu> getOne(@Param("id") int id);
}
