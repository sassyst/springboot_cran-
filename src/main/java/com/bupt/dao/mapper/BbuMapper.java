package com.bupt.dao.mapper;

import com.bupt.dao.handler.SchedualRruModelHandler;
import com.bupt.model.Bbu;
import org.apache.ibatis.annotations.*;
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

  @Select("SELECT * FROM Bbu Where network_id = #{network_id}")
  List<Bbu> getAllbyNetworkId(@Param("network_id") int network_id);

  @Select("SELECT * FROM Bbu Where BbuId = #{id}")
  Bbu getOne(@Param("id") int id);
}
