package com.bupt.common.fake;

import com.bupt.model.MecServer;
import com.bupt.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

public class MecUtils {
  @Autowired
  public static ArrayList<MecServer> fakeservers(int length) {
    User tan = new User();
    tan.setUserName("tanjin");
    tan.setAvatar("https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg");
    ArrayList<MecServer> arrayList = new ArrayList<>();
    for (int i = 0; i < length; i++) {
      int vms = 5 + (int) (Math.random() * 20);
      int memo = 100 + (int) (Math.random() * 100);
      int bandwidth = 50 + (int) (Math.random() * 100);
      double cost = 20 + (int) (Math.random() * 80);
      arrayList.add(new MecServer(i, vms, bandwidth, cost, memo, tan));
    }
    return arrayList;
  }
}
