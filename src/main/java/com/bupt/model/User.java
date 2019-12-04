package com.bupt.model;

import java.io.Serializable;

public class User implements Serializable {
  private static final long serialVersionUID = 1L;
  private int userId;
  private String userName;
  private int authority;
  private String passWord;
  private String security1;
  private String security2;
  private String avatar;

  public User() {

  }

  public String getAvatar() {
    return avatar;
  }

  public void setAvatar(String avatar) {
    this.avatar = avatar;
  }

  public User(
      int userId,
      String userName,
      int authority,
      String passWord,
      String security1,
      String security2) {
    super();
    this.userId = userId;
    this.userName = userName;
    this.authority = authority;
    this.passWord = passWord;
    this.security1 = security1;
    this.security2 = security2;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public int getAuthority() {
    return authority;
  }

  public void setAuthority(int authority) {
    this.authority = authority;
  }

  public String getPassWord() {
    return passWord;
  }

  public void setPassWord(String passWord) {
    this.passWord = passWord;
  }

  public String getSecurity1() {
    return security1;
  }

  public void setSecurity1(String security1) {
    this.security1 = security1;
  }

  public String getSecurity2() {
    return security2;
  }

  public void setSecurity2(String security2) {
    this.security2 = security2;
  }

  @Override
  public String toString() {
    return "UserEntity{"
        + "userId="
        + userId
        + ", userName='"
        + userName
        + '\''
        + ", authority="
        + authority
        + ", passWord="
        + passWord
        + ", security1='"
        + security1
        + '\''
        + ", security2='"
        + security2
        + '\''
        + '}';
  }
}
