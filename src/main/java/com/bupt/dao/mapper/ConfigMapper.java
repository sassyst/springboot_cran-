package com.bupt.dao.mapper;

import com.bupt.model.Config;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface ConfigMapper {
  @Select("SELECT * FROM Config")
  @Results
  List<Config> getAll();

  @Select("SELECT * FROM Config Where network_id = #{network_id}")
  @Results
  List<Config> getAllbyNetworkId(@Param("network_id") int network_id);

  @Select("SELECT * FROM Config Where id = #{id}")
  @Results
  Config getOne(@Param("id") int id);
}
