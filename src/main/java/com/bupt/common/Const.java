package com.bupt.common;

public class Const {

  public static String getSchedualRruMode(int SchedualRruMode) {
    switch (SchedualRruMode) {
      case 0:
        return "RRS";
      case 1:
        return "CIS";
      case 2:
        return "PFS";
      default:
        throw new IllegalArgumentException();
    }
  }
}
