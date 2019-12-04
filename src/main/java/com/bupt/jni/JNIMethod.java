package com.bupt.jni;

public class JNIMethod {
    static {
        System.loadLibrary("meccran");  //链接库的名字
    }
    private native void run();

  public static void main(String[] args) {
      new JNIMethod().run();
  }
}
