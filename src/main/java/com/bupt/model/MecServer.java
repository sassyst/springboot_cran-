package com.bupt.model;

import java.io.Serializable;
import java.util.Date;

public class MecServer implements Serializable {
  private int id;
  private int vms;
  private int bandwidth;
  private double cost;
  private int memo;
  private User create_by;
  private Date create_date =
      new Date((long) (System.currentTimeMillis() - 86400000 * Math.random() * 5));
  private Date last_edit =
      new Date((long) (System.currentTimeMillis() - 86400000 * Math.random() * 2));

  public MecServer(int id, int vms, int bandwidth, double cost, int memo, User create_by) {
    this.id = id;
    this.vms = vms;
    this.bandwidth = bandwidth;
    this.cost = cost;
    this.memo = memo;
    this.create_by = create_by;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getVms() {
    return vms;
  }

  public void setVms(int vms) {
    this.vms = vms;
  }

  public int getBandwidth() {
    return bandwidth;
  }

  public void setBandwidth(int bandwidth) {
    this.bandwidth = bandwidth;
  }

  public double getCost() {
    return cost;
  }

  public void setCost(double cost) {
    this.cost = cost;
  }

  public int getMemo() {
    return memo;
  }

  public void setMemo(int memo) {
    this.memo = memo;
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
