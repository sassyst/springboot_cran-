package com.bupt.model;

import java.io.Serializable;

public class Config implements Serializable {
  Integer id;
  Integer network_id;
  //  用户移动模型id
  Integer ue_move_id;
  // 业务量模型id
  Integer ue_traffic_id;

  // 系统频带资源划分
  //  Integer system_band_res_id;

  // 无线链路模型
  Integer wireless_link_id;
  // 资源调度模型
  Integer res_schedual_id;
  Boolean support_mec;
  Boolean ue_activity;

  public Config(
      Integer id,
      Integer network_id,
      Integer ue_move_id,
      Integer ue_traffic_id,
      Integer wireless_link_id,
      Integer res_schedual_id,
      Boolean support_mec,
      Boolean ue_activity) {
    this.id = id;
    this.network_id = network_id;
    this.ue_move_id = ue_move_id;
    this.ue_traffic_id = ue_traffic_id;
    this.wireless_link_id = wireless_link_id;
    this.res_schedual_id = res_schedual_id;
    this.support_mec = support_mec;
    this.ue_activity = ue_activity;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getNetwork_id() {
    return network_id;
  }

  public void setNetwork_id(Integer network_id) {
    this.network_id = network_id;
  }

  public Integer getUe_move_id() {
    return ue_move_id;
  }

  public void setUe_move_id(Integer ue_move_id) {
    this.ue_move_id = ue_move_id;
  }

  public Integer getUe_traffic_id() {
    return ue_traffic_id;
  }

  public void setUe_traffic_id(Integer ue_traffic_id) {
    this.ue_traffic_id = ue_traffic_id;
  }

  public Integer getWireless_link_id() {
    return wireless_link_id;
  }

  public void setWireless_link_id(Integer wireless_link_id) {
    this.wireless_link_id = wireless_link_id;
  }

  public Integer getRes_schedual_id() {
    return res_schedual_id;
  }

  public void setRes_schedual_id(Integer res_schedual_id) {
    this.res_schedual_id = res_schedual_id;
  }

  public Boolean getSupport_mec() {
    return support_mec;
  }

  public void setSupport_mec(Boolean support_mec) {
    this.support_mec = support_mec;
  }

  public Boolean getUe_activity() {
    return ue_activity;
  }

  public void setUe_activity(Boolean ue_activity) {
    this.ue_activity = ue_activity;
  }
}
