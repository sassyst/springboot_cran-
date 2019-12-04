package com.bupt.dao.mapper;

import com.bupt.model.Ue;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface UeMapper {
    @Select("SELECT * FROM Ue")
    @Results({
            @Result(property = "id", column = "UeId"),
            @Result(property = "lat", column = "X"),
            @Result(property = "lng", column = "Y"),
    })
    List<Ue> getAll();
}
