package com.bupt.dao.mapper;

import com.bupt.dao.handler.SchedualRruModelHandler;
import com.bupt.model.Bbu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface BbuMapper {
  @Select("SELECT * FROM Bbu")
  @Results({
    @Result(property = "id", column = "BbuId"),
    @Result(property = "vBbuPoolId", column = "BbuPoolId"),
    @Result(property = "vlat", column = "X"),
    @Result(property = "vlng", column = "Y"),
    @Result(property = "vZ", column = "Z"),
    @Result(property = "vRruNum", column = "RruNum"),
    @Result(
        property = "vSchedualRruMode",
        column = "SchedualRruMode",
        typeHandler = SchedualRruModelHandler.class),
    @Result(property = "vTransPower", column = "TransPower"),
    @Result(property = "vEquipPower", column = "EquipPower"),
    @Result(property = "vIsActivity", column = "IsActivity"),
    @Result(property = "vRes", column = "Res"),
    @Result(property = "vLinkId", column = "LinkId"),
    @Result(property = "vOpTime", column = "OpTime"),
    @Result(property = "vEfficiency", column = "Efficiency"),
    @Result(property = "vResUtilizationRate", column = "ResUtilizationRate"),
    @Result(property = "vConsume", column = "Consume"),
    @Result(property = "vSupportMec", column = "SupportMec"),
  })
  List<Bbu> getAll();
}
