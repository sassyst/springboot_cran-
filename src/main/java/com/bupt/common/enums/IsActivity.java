package com.bupt.common.enums;

import java.util.HashMap;
import java.util.Map;

public enum IsActivity {
  IS_ACTIVITY(1, "活跃"),
  NO_ACTIVITY(0, "不活跃");
  private int value;
  private String displayName;

  IsActivity(int value, String displayName) {
    this.value = value;
    this.displayName = displayName;
  }

  static Map<Integer, IsActivity> enumMap = new HashMap<Integer, IsActivity>();

  static {
    for (IsActivity type : IsActivity.values()) {
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

  public static Map<Integer, IsActivity> getEnumMap() {
    return enumMap;
  }
}
