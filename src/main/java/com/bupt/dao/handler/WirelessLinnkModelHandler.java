package com.bupt.dao.handler;

import com.bupt.common.enums.SchedualRruMode;
import com.bupt.common.enums.WirelessLinkModelType;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes({WirelessLinkModelType.class})
public class WirelessLinnkModelHandler extends BaseTypeHandler {
  private Class<WirelessLinkModelType> type;
  private Logger logger = LoggerFactory.getLogger(this.getClass());

  private WirelessLinkModelType[] enums;

  public WirelessLinnkModelHandler(Class<WirelessLinkModelType> type) {
    if (type == null) throw new IllegalArgumentException("Type argument cannot be null");
    this.type = type;
    this.enums = type.getEnumConstants();
    if (this.enums == null)
      throw new IllegalArgumentException(
          type.getSimpleName() + " does not represent an enum type.");
  }

  @Override
  public void setNonNullParameter(
      PreparedStatement preparedStatement, int i, Object o, JdbcType jdbcType) throws SQLException {
    preparedStatement.setInt(i, ((WirelessLinkModelType) o).getValue());
  }

  @Override
  public Object getNullableResult(ResultSet resultSet, String s) throws SQLException {
    int i = resultSet.getInt(s);
    if (resultSet.wasNull()) {
      return null;
    } else {
      // 根据数据库中的value值，定位PersonType子类
      return WirelessLinkModelType.getEnumMap().get(i);
    }
  }

  @Override
  public Object getNullableResult(ResultSet resultSet, int columnIndex) throws SQLException {
    int i = resultSet.getInt(columnIndex);
    if (resultSet.wasNull()) {
      return null;
    } else {
      // 根据数据库中的value值，定位PersonType子类
      return WirelessLinkModelType.getEnumMap().get(i);
    }
  }

  @Override
  public Object getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
    return null;
  }
}
