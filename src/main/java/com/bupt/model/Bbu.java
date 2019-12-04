package com.bupt.model;

import java.io.Serializable;

public class Bbu implements Serializable {
  private Integer network_id = (int)Math.random()*20;
  private Integer id; /*BBU的编号*/
  private Integer vBbuPoolId; /*BBU Pool的Id*/
  private Double vlat, vlng, vZ; /*地理坐标*/
  private Integer vRruNum; /*服务的RRU数量*/
  private Integer vSchedualRruMode; /*RRU资源调度的方式*/
  private Double vTransPower; /*传输功率dbm形式*/
  private Double vEquipPower; /*设备能耗*/
  private Integer vIsActivity; /*状态*/
  private Double vRes; /*资源量*/
  private Integer vLinkId; /*链路Id*/
  private Double vOpTime; // 处理时延
  private Double vEfficiency; // 频谱效率
  private Double vResUtilizationRate; // 资源占比
  private Double vConsume; // 动态负载
  private Boolean vSupportMec; // 支持MEC

  public Integer getNetwork_id() {
    return network_id;
  }

  public void setNetwork_id(Integer network_id) {
    this.network_id = network_id;
  }

  public Bbu(
      Integer id,
      Integer network_id,
      Integer vBbuPoolId,
      Double vlat,
      Double vlng,
      Double vZ,
      Integer vRruNum,
      Integer vSchedualRruMode,
      Double vTransPower,
      Double vEquipPower,
      Integer vIsActivity,
      Double vRes,
      Integer vLinkId,
      Double vOpTime,
      Double vEfficiency,
      Double vResUtilizationRate,
      Double vConsume,
      Boolean vSupportMec) {
    this.id = id;
    this.vBbuPoolId = vBbuPoolId;
    this.vlat = vlat;
    this.vlng = vlng;
    this.vZ = vZ;
    this.vRruNum = vRruNum;
    this.vSchedualRruMode = vSchedualRruMode;
    this.vTransPower = vTransPower;
    this.vEquipPower = vEquipPower;
    this.vIsActivity = vIsActivity;
    this.vRes = vRes;
    this.vLinkId = vLinkId;
    this.vOpTime = vOpTime;
    this.vEfficiency = vEfficiency;
    this.vResUtilizationRate = vResUtilizationRate;
    this.vConsume = vConsume;
    this.vSupportMec = vSupportMec;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getvBbuPoolId() {
    return vBbuPoolId;
  }

  public void setvBbuPoolId(Integer vBbuPoolId) {
    this.vBbuPoolId = vBbuPoolId;
  }

  public Double getVlat() {
    return vlat;
  }

  public void setVlat(Double vlat) {
    this.vlat = vlat;
  }

  public Double getVlng() {
    return vlng;
  }

  public void setVlng(Double vlng) {
    this.vlng = vlng;
  }

  public Double getvZ() {
    return vZ;
  }

  public void setvZ(Double vZ) {
    this.vZ = vZ;
  }

  public Integer getvRruNum() {
    return vRruNum;
  }

  public void setvRruNum(Integer vRruNum) {
    this.vRruNum = vRruNum;
  }

  public Integer getvSchedualRruMode() {
    return vSchedualRruMode;
  }

  public void setvSchedualRruMode(Integer vSchedualRruMode) {
    this.vSchedualRruMode = vSchedualRruMode;
  }

  public Double getvTransPower() {
    return vTransPower;
  }

  public void setvTransPower(Double vTransPower) {
    this.vTransPower = vTransPower;
  }

  public Double getvEquipPower() {
    return vEquipPower;
  }

  public void setvEquipPower(Double vEquipPower) {
    this.vEquipPower = vEquipPower;
  }

  public Integer getvIsActivity() {
    return vIsActivity;
  }

  public void setvIsActivity(Integer vIsActivity) {
    this.vIsActivity = vIsActivity;
  }

  public Double getvRes() {
    return vRes;
  }

  public void setvRes(Double vRes) {
    this.vRes = vRes;
  }

  public Integer getvLinkId() {
    return vLinkId;
  }

  public void setvLinkId(Integer vLinkId) {
    this.vLinkId = vLinkId;
  }

  public Double getvOpTime() {
    return vOpTime;
  }

  public void setvOpTime(Double vOpTime) {
    this.vOpTime = vOpTime;
  }

  public Double getvEfficiency() {
    return vEfficiency;
  }

  public void setvEfficiency(Double vEfficiency) {
    this.vEfficiency = vEfficiency;
  }

  public Double getvResUtilizationRate() {
    return vResUtilizationRate;
  }

  public void setvResUtilizationRate(Double vResUtilizationRate) {
    this.vResUtilizationRate = vResUtilizationRate;
  }

  public Double getvConsume() {
    return vConsume;
  }

  public void setvConsume(Double vConsume) {
    this.vConsume = vConsume;
  }

  public Boolean getvSupportMec() {
    return vSupportMec;
  }

  public void setvSupportMec(Boolean vSupportMec) {
    this.vSupportMec = vSupportMec;
  }
}
