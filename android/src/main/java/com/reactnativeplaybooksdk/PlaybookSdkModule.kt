package com.reactnativeplaybooksdk

import android.graphics.Color
import android.graphics.Typeface
import com.facebook.react.bridge.*
import io.getplaybook.SDK.PlaybookSDK
import io.getplaybook.SDK.PBExtraSettings

class PlaybookSdkModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
      return "PlaybookSdk"
  }

  @ReactMethod
  fun set(token: String, userID: String, userGroups: ReadableArray, companyName: String, sandbox: Boolean) {
    val userGroupIDS = mutableListOf<String>()

    userGroups.toArrayList().forEach { item ->
      (item as? String)?.let {
        userGroupIDS.add(it)
      }
    }
    PlaybookSDK.set(reactApplicationContext, token, companyName, userID, userGroupIDS, sandbox )
  }

  @ReactMethod
  fun extraSettings(settings: ReadableMap) {
    val _settings = PBExtraSettings()

    if (settings.hasKey("spinnerColor"))
      settings.getString("spinnerColor")?.let {
        _settings.spinnerColor = Color.parseColor(it)
      }

    if (settings.hasKey("fontFamily"))
      settings.getString("fontFamily")?.let {
        _settings.fontFamily = Typeface.create(it, Typeface.NORMAL)
      }

    if (settings.hasKey("mainColor"))
      settings.getString("mainColor")?.let {
        _settings.mainColor = Color.parseColor(it)
      }

    if (settings.hasKey("mainTitle"))
      settings.getMap("mainTitle")?.let { it ->
        _settings.mainTitle = it.toHashMap().map { it.key to it.value as String }.toMap()
      }

    if (settings.hasKey("categoryDescriptionText"))
      settings.getMap("categoryDescriptionText")?.let {
        _settings.mainDescriptionText = it.toHashMap().map { it.key to it.value as String }.toMap()
      }

    if (settings.hasKey("categoryDescriptionText"))
      settings.getMap("categoryDescriptionText")?.let {
        _settings.categoryDescriptionText = it.toHashMap().map { it.key to it.value as String }.toMap()
      }

    if (settings.hasKey("QRModule"))
      settings.getBoolean("QRModule").let {
        _settings.QRModule = it
      }

    if (settings.hasKey("updatesModule"))
      settings.getBoolean("updatesModule").let {
        _settings.updatesModule = it
      }
  }

  @ReactMethod
  fun showListView(animated:Boolean=true) {
    currentActivity?.let {
      PlaybookSDK.startMainActivity(it)
    }
  }

  @ReactMethod
  fun showAcademyView(animated:Boolean=true) {
    currentActivity?.let {
      PlaybookSDK.startAcademyActivity(it)
    }
  }

  @ReactMethod
  fun showUpdatesList(animated:Boolean=true) {
    currentActivity?.let {
      PlaybookSDK.startUpdatesListActivity(it)
    }
  }

}
