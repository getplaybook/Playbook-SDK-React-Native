import PlaybookSDK


@objc(PlaybookSdk)
class PlaybookSdk: NSObject {

    @objc(set:userID:userGroups:companyName:sandbox:)
    func set(token:String, userID:String, userGroups: [String], companyName:String, sandBox: Bool) -> Void {
        PlaybookSDK.set(token: token, userID: userID, userGroups: userGroups, companyName: companyName, sandbox: sandBox)
    }
        
    @objc(extraSettings:)
    func extraSettings(settings:[String: Any]?) -> Void {
        if let _settings = settings {
            let extraSettings = PBExraSettingsData()
            _settings.keys.forEach({ (key) in
                if let value = _settings[key] {
                    extraSettings.set(value: value, key: key)
                }
            })
            
            
            PlaybookSDK.extraSettings(extraSettings)
        }
    }

    @objc(showListView:)
    func showListView(animated:Bool=true) -> Void {
        DispatchQueue.main.async {
            if let rootVC = UIApplication.shared.keyWindow?.rootViewController {
                PlaybookSDK.presentListViewFrom(rootVC, animated: animated)
            }
        }
    }
    
    @objc(showAcademyView:)
    func showAcademyView(animated:Bool=true) -> Void {
        DispatchQueue.main.async {
            if let rootVC = UIApplication.shared.keyWindow?.rootViewController {
                PlaybookSDK.presentAcademyViewFrom(rootVC, animated: animated)
            }
        }
    }

    @objc(showUpdatesList:)
    func showUpdatesList(animated:Bool=true) -> Void {
        DispatchQueue.main.async {
            if let rootVC = UIApplication.shared.keyWindow?.rootViewController {
                PlaybookSDK.presentUpdatesListViewFrom(rootVC, animated: animated)
            }
        }
    }
}
