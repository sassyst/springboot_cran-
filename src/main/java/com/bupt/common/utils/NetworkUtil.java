package com.bupt.common.utils;

import org.springframework.http.HttpHeaders;

public class NetworkUtil {
  public static HttpHeaders getHeaders(String range, int total) {
    HttpHeaders headers = new HttpHeaders();
    if (range != null && !range.equals("")) {
      String returnRange = "bbus" + range.charAt(1) + "-" + range.charAt(3) + "/" + total;
      headers.add("Content-Range", returnRange);
    }
    return headers;
  }
}
