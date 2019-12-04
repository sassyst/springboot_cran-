package com.bupt.model;

import java.io.Serializable;

public class Ue implements Serializable {
  private Integer id; /*用户Id*/
  private Integer UeType; /*表示室内还是室外*/
  private Double lat, lng, Z; /*用户的绝对位置*/
  private Integer ServiceRruId; /*从属RRu的编号*/
  private Integer RbNum; /*分配的RB数目*/
  private Integer UeTransPower; /*发射功率*/
  private Integer UeAntennaId; /*用户的发射天线*/
  private Integer IsActivity; /*表示用户是否处于活跃状态*/
  private Integer UeGroupId; /*Ue组*/
  private Integer ModelType; /*用户选择的模型*/
  //  private Integer UeDistrict; /*区域类型*/
  private Double SNR; /*SNR*/
  private Double TotalBit; /*用户被传输的所有bit数，用户要求的速率*/
  private Integer TTISent; /*发送的TTI起始时刻*/
  private Double AverageRate; /*用户之前N个时刻的数据速率的平均值*/
  private Integer BbuId; /*所属BBuId*/
  private Integer TotalRb; /*定义已分配的Rb数量*/
  private Integer Priority; /*优先级*/
  private Double Dis; /*与基站距离*/
  //  private Double Rate; // 即时速率
  private Integer WorkType; // 区分既定业务量和非既定业务量
  private Integer network_id = (int) (Math.random() * 20); /*网络实例Id*/

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getUeType() {
    return UeType;
  }

  public void setUeType(Integer ueType) {
    UeType = ueType;
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

  public Double getZ() {
    return Z;
  }

  public void setZ(Double z) {
    Z = z;
  }

  public Integer getServiceRruId() {
    return ServiceRruId;
  }

  public void setServiceRruId(Integer serviceRruId) {
    ServiceRruId = serviceRruId;
  }

  public Integer getRbNum() {
    return RbNum;
  }

  public void setRbNum(Integer rbNum) {
    RbNum = rbNum;
  }

  public Integer getUeTransPower() {
    return UeTransPower;
  }

  public void setUeTransPower(Integer ueTransPower) {
    UeTransPower = ueTransPower;
  }

  public Integer getUeAntennaId() {
    return UeAntennaId;
  }

  public void setUeAntennaId(Integer ueAntennaId) {
    UeAntennaId = ueAntennaId;
  }

  public Integer getIsActivity() {
    return IsActivity;
  }

  public void setIsActivity(Integer isActivity) {
    IsActivity = isActivity;
  }

  public Integer getUeGroupId() {
    return UeGroupId;
  }

  public void setUeGroupId(Integer ueGroupId) {
    UeGroupId = ueGroupId;
  }

  public Integer getModelType() {
    return ModelType;
  }

  public void setModelType(Integer modelType) {
    ModelType = modelType;
  }

  public Double getSNR() {
    return SNR;
  }

  public void setSNR(Double SNR) {
    this.SNR = SNR;
  }

  public Double getTotalBit() {
    return TotalBit;
  }

  public void setTotalBit(Double totalBit) {
    TotalBit = totalBit;
  }

  public Integer getTTISent() {
    return TTISent;
  }

  public void setTTISent(Integer TTISent) {
    this.TTISent = TTISent;
  }

  public Double getAverageRate() {
    return AverageRate;
  }

  public void setAverageRate(Double averageRate) {
    AverageRate = averageRate;
  }

  public Integer getBbuId() {
    return BbuId;
  }

  public void setBbuId(Integer bbuId) {
    BbuId = bbuId;
  }

  public Integer getTotalRb() {
    return TotalRb;
  }

  public void setTotalRb(Integer totalRb) {
    TotalRb = totalRb;
  }

  public Integer getPriority() {
    return Priority;
  }

  public void setPriority(Integer priority) {
    Priority = priority;
  }

  public Double getDis() {
    return Dis;
  }

  public void setDis(Double dis) {
    Dis = dis;
  }

  public Integer getWorkType() {
    return WorkType;
  }

  public void setWorkType(Integer workType) {
    WorkType = workType;
  }

  public Integer getNetwork_id() {
    return network_id;
  }

  public void setNetwork_id(Integer network_id) {
    this.network_id = network_id;
  }

  @Override
  public String toString() {
    return "Ue{"
        + "id="
        + id
        + ", UeType="
        + UeType
        + ", lat="
        + lat
        + ", lng="
        + lng
        + ", Z="
        + Z
        + ", ServiceRruId="
        + ServiceRruId
        + ", RbNum="
        + RbNum
        + ", UeTransPower="
        + UeTransPower
        + ", UeAntennaId="
        + UeAntennaId
        + ", IsActivity="
        + IsActivity
        + ", UeGroupId="
        + UeGroupId
        + ", ModelType="
        + ModelType
        + ", SNR="
        + SNR
        + ", TotalBit="
        + TotalBit
        + ", TTISent="
        + TTISent
        + ", AverageRate="
        + AverageRate
        + ", BbuId="
        + BbuId
        + ", TotalRb="
        + TotalRb
        + ", Priority="
        + Priority
        + ", Dis="
        + Dis
        + ", WorkType="
        + WorkType
        + ", network_id="
        + (int) (Math.random() * 20)
        + '}';
  }
}
