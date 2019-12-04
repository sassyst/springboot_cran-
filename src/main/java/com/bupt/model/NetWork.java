package com.bupt.model;

import java.io.Serializable;
import java.util.Date;

public class NetWork implements Serializable {
  private int id;
  private int BbuPoolNum;
  private int BbuNum;
  private int RruNum;
  private int UeNum;
  private int MecServerNum;
  private String des;
  private User create_by;
  private Date create_date =
      new Date((long) (System.currentTimeMillis() - 86400000 * Math.random() * 5));
  private Date last_edit =
      new Date((long) (System.currentTimeMillis() - 86400000 * Math.random() * 2));

  public NetWork(
      int id,
      int bbuPoolNum,
      int bbuNum,
      int rruNum,
      int ueNum,
      int mecServerNum,
      String des,
      User create_by) {
    this.id = id;
    BbuPoolNum = bbuPoolNum;
    BbuNum = bbuNum;
    RruNum = rruNum;
    UeNum = ueNum;
    MecServerNum = mecServerNum;
    this.des = des;
    this.create_by = create_by;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getBbuPoolNum() {
    return BbuPoolNum;
  }

  public void setBbuPoolNum(int bbuPoolNum) {
    BbuPoolNum = bbuPoolNum;
  }

  public int getBbuNum() {
    return BbuNum;
  }

  public void setBbuNum(int bbuNum) {
    BbuNum = bbuNum;
  }

  public int getRruNum() {
    return RruNum;
  }

  public void setRruNum(int rruNum) {
    RruNum = rruNum;
  }

  public int getUeNum() {
    return UeNum;
  }

  public void setUeNum(int ueNum) {
    UeNum = ueNum;
  }

  public int getMecServerNum() {
    return MecServerNum;
  }

  public void setMecServerNum(int mecServerNum) {
    MecServerNum = mecServerNum;
  }

  public String getDes() {
    return des;
  }

  public void setDes(String des) {
    this.des = des;
  }

  public User getCreate_by() {
    return create_by;
  }

  public void setCreate_by(User create_by) {
    this.create_by = create_by;
  }

  public Date getCreate_date() {
    return create_date;
  }

  public void setCreate_date(Date create_date) {
    this.create_date = create_date;
  }

  public Date getLast_edit() {
    return last_edit;
  }

  public void setLast_edit(Date last_edit) {
    this.last_edit = last_edit;
  }
}
