package com.bupt.common.enums;

import java.util.HashMap;
import java.util.Map;

public enum WirelessLinkModelType {
  FREE(0, "自由空间模型"),
  FREE_DOWN(1, "自由+衰落"),
  HATA231(2, "Hata231"),
  HATA231_FIX(3, "Hata231修正");
  private int value;
  private String displayName;

  WirelessLinkModelType(int value, String displayName) {
    this.value = value;
    this.displayName = displayName;
  }

  static Map<Integer, WirelessLinkModelType> enumMap =
      new HashMap<Integer, WirelessLinkModelType>();

  static {
    for (WirelessLinkModelType type : WirelessLinkModelType.values()) {
      enumMap.put(type.getValue(), type);
    }
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

  public static Map<Integer, WirelessLinkModelType> getEnumMap() {
    return enumMap;
  }

  public static void setEnumMap(Map<Integer, WirelessLinkModelType> enumMap) {
    WirelessLinkModelType.enumMap = enumMap;
  }
}
