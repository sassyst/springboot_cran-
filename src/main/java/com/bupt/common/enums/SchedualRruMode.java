package com.bupt.common.enums;

import java.util.HashMap;
import java.util.Map;

public enum SchedualRruMode {
  CIS(1, "CIS"),
  PFS(2, "PFS");

  private int value;
  private String displayName;

  static Map<Integer, SchedualRruMode> enumMap = new HashMap<Integer, SchedualRruMode>();

  static {
    for (SchedualRruMode type : SchedualRruMode.values()) {
      enumMap.put(type.getValue(), type);
    }
  }

  SchedualRruMode(int value, String displayName) {
    this.value = value;
    this.displayName = displayName;
  }

  public int getValue() {
    return value;
  }

  public void setValue(int value) {
    this.value = value;
  }

  public String getDisplayName() {
    return displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }

  public static Map<Integer, SchedualRruMode> getEnumMap() {
    return enumMap;
  }

  public static void setEnumMap(Map<Integer, SchedualRruMode> enumMap) {
    SchedualRruMode.enumMap = enumMap;
  }

}
