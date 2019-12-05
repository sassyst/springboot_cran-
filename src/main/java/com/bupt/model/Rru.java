package com.bupt.model;

import com.bupt.common.enums.IsActivity;

import java.io.Serializable;

public class Rru implements Serializable {
  Integer id; /*RRU的编号*/
  Integer vServiceBbuId; /*服务的BBU的ID*/
  Double vRadius; /*覆盖半径*/
  Double lat, lng, vZ; /*地理坐标*/
  Integer vRruTransPower; /*RRU 发射功率*/
  Integer vRruBandwidth; /*RRU的带宽资源*/
  Integer vUeNum; /*RRU覆盖范围内的用户数量*/
  IsActivity vIsActivity; /*表示RRU的状态*/
  Double vCarrierFrequent; /*载频*/
  Integer vRruAntennaId; /*天线Id*/
  Double vEquipPower; /*设备能耗*/
  Double vBusiness; /*既定业务量*/
  Double vOpTime; // 处理时延
  Integer network_id;

  public Rru(
      Integer id,
      Integer vServiceBbuId,
      Double vRadius,
      Double lat,
      Double lng,
      Double vZ,
      Integer vRruTransPower,
      Integer vRruBandwidth,
      Integer vUeNum,
      IsActivity vIsActivity,
      Double vCarrierFrequent,
      Integer vRruAntennaId,
      Double vEquipPower,
      Double vBusiness,
      Double vOpTime,
      Integer network_id) {
    this.id = id;
    this.vServiceBbuId = vServiceBbuId;
    this.vRadius = vRadius;
    this.lat = lat;
    this.lng = lng;
    this.vZ = vZ;
    this.vRruTransPower = vRruTransPower;
    this.vRruBandwidth = vRruBandwidth;
    this.vUeNum = vUeNum;
    this.vIsActivity = vIsActivity;
    this.vCarrierFrequent = vCarrierFrequent;
    this.vRruAntennaId = vRruAntennaId;
    this.vEquipPower = vEquipPower;
    this.vBusiness = vBusiness;
    this.vOpTime = vOpTime;
    this.network_id = network_id;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getvServiceBbuId() {
    return vServiceBbuId;
  }

  public void setvServiceBbuId(Integer vServiceBbuId) {
    this.vServiceBbuId = vServiceBbuId;
  }

  public Double getvRadius() {
    return vRadius;
  }

  public void setvRadius(Double vRadius) {
    this.vRadius = vRadius;
  }

  public Double getLat() {
    return lat;
  }

  public void setLat(Double lat) {
    this.lat = lat;
  }

  public Double getLng() {
    return lng;
  }

  public void setLng(Double lng) {
    this.lng = lng;
  }

  public Double getvZ() {
    return vZ;
  }

  public void setvZ(Double vZ) {
    this.vZ = vZ;
  }

  public Integer getvRruTransPower() {
    return vRruTransPower;
  }

  public void setvRruTransPower(Integer vRruTransPower) {
    this.vRruTransPower = vRruTransPower;
  }

  public Integer getvRruBandwidth() {
    return vRruBandwidth;
  }

  public void setvRruBandwidth(Integer vRruBandwidth) {
    this.vRruBandwidth = vRruBandwidth;
  }

  public Integer getvUeNum() {
    return vUeNum;
  }

  public void setvUeNum(Integer vUeNum) {
    this.vUeNum = vUeNum;
  }

  public IsActivity getvIsActivity() {
    return vIsActivity;
  }

  public void setvIsActivity(IsActivity vIsActivity) {
    this.vIsActivity = vIsActivity;
  }

  public Double getvCarrierFrequent() {
    return vCarrierFrequent;
  }

  public void setvCarrierFrequent(Double vCarrierFrequent) {
    this.vCarrierFrequent = vCarrierFrequent;
  }

  public Integer getvRruAntennaId() {
    return vRruAntennaId;
  }

  public void setvRruAntennaId(Integer vRruAntennaId) {
    this.vRruAntennaId = vRruAntennaId;
  }

  public Double getvEquipPower() {
    return vEquipPower;
  }

  public void setvEquipPower(Double vEquipPower) {
    this.vEquipPower = vEquipPower;
  }

  public Double getvBusiness() {
    return vBusiness;
  }

  public void setvBusiness(Double vBusiness) {
    this.vBusiness = vBusiness;
  }

  public Double getvOpTime() {
    return vOpTime;
  }

  public void setvOpTime(Double vOpTime) {
    this.vOpTime = vOpTime;
  }

  public Integer getNetwork_id() {
    return network_id;
  }

  public void setNetwork_id(Integer network_id) {
    this.network_id = network_id;
  }
}
