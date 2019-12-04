package com.bupt.dao.mapper;

import com.bupt.model.BbuPool;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface BbuPoolMapper {
  @Select("SELECT * FROM BbuPool")
  @Results({
    @Result(property = "id", column = "BbuPoolId"),
    @Result(property = "lat", column = "X"),
    @Result(property = "lng", column = "Y"),
  })
  List<BbuPool> getAll();
}
