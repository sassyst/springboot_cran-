package com.bupt.common.utils;

import com.bupt.model.Filter;

public class StringUtil {

  public static Filter getFilter(String filter) {
    if (filter.equals("") || filter.equals("{}")) {
      return null;
    }
    String[] content = filter.substring(1, filter.length() - 1).split(":");
    String left = content[0];
    String right = content[1];
    int value = Integer.parseInt(right);
    String key = left.substring(1, left.length() - 1);
    return new Filter(key, value);
  }
}
