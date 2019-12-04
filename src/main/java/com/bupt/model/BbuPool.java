package com.bupt.model;

import java.io.Serializable;

public class BbuPool implements Serializable {
  private Integer id;
  private Double lat, lng, vZ;
  private Double vAllRes; // 总资源
  private Double vResLeft; // 剩余资源
  private Double vDynamicEnengy; // 动态能源
  private Double vStaticEnengy; // 静态能源
  private String BbuPoolInfo;
  private Integer network_id;

  public BbuPool(
      Integer id,
      Double lat,
      Double lng,
      Double vZ,
      Double vAllRes,
      Double vResLeft,
      Double vDynamicEnengy,
      Double vStaticEnengy,
      String bbuPoolInfo,
      Integer network_id) {
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.vZ = vZ;
    this.vAllRes = vAllRes;
    this.vResLeft = vResLeft;
    this.vDynamicEnengy = vDynamicEnengy;
    this.vStaticEnengy = vStaticEnengy;
    BbuPoolInfo = bbuPoolInfo;
    this.network_id = network_id;
  }

  public String getBbuPoolInfo() {
    return BbuPoolInfo;
  }

  public void setBbuPoolInfo(String bbuPoolInfo) {
    BbuPoolInfo = bbuPoolInfo;
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

  public Double getvAllRes() {
    return vAllRes;
  }

  public void setvAllRes(Double vAllRes) {
    this.vAllRes = vAllRes;
  }

  public Double getvResLeft() {
    return vResLeft;
  }

  public void setvResLeft(Double vResLeft) {
    this.vResLeft = vResLeft;
  }

  public Double getvDynamicEnengy() {
    return vDynamicEnengy;
  }

  public void setvDynamicEnengy(Double vDynamicEnengy) {
    this.vDynamicEnengy = vDynamicEnengy;
  }

  public Double getvStaticEnengy() {
    return vStaticEnengy;
  }

  public void setvStaticEnengy(Double vStaticEnengy) {
    this.vStaticEnengy = vStaticEnengy;
  }
}
