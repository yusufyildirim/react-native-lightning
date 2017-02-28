package com.coreproject;

import android.app.Application;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationApplication;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
            new ReactNativeI18n()
    );
  }
}
