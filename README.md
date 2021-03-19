# Installation

## Installation

```sh
npm install react-native-playbook-sdk
```

#### Initialize PlaybookSDK

Initialize Playbook SDK with your settings information and open the Playbook Modal from any component. Here you'll need 3 critical information - your **SDK Token**, an **ID for your user** (given by you) and **the user group(s)** the user belongs to. 

In your application main component `useEffect` hook you can setup playbook SDK with following code blocks:

```javaScript
import PlaybookSdk from 'react-native-playbook-sdk';

const Application = ()=>{
    ...
    useEffect(()=>{            
            /**
             Playbook Config
            */
            PlaybookSdk.set(
                "...", // Your SDK token from app.getplaybook.io -> Settings -> App Settings
                "...", // A unique user id of your user
                ["..."], // An array of user group ids from app.getplaybook.io -> User Groups -> External ID, External ID = 1 is for the Everyone User group
                "Acme Academy", // Your Company Name
                true // Sandbox
            )
            
            /* This method is optional */
            PlaybookSdk.extraSettings({
                spinnerColor: "#FF0000",
                mainColor: "#FF0000",
                mainTitle: {
                    "en": "Acme Academy",
                    "tr": "Acme Akademi"
                },
                mainDescriptionText: {
                    "en": "Supercharge your skills with these short guides in various categories.",
                    "tr": "Çeşitli konu ve kategorilerdeki kısa rehberler ile kendini geliştir."
                }
                QRModule: true, 
                updateModule: true
            ))
    }, [])
    ...
}
```

#### Posible properties of extra settings
Prop | Description | Type | default
------ | ------ | ------ | ------
`spinnerColor` | Color of main loading spinner (hex format)  | `String` | #333333
`fontFamily` | Family name of main font | `String` | null
`mainColor` | Application main color (hex format) | `String` | #333333
`mainTitle` | Title of main screen | `{[key:String]: String}` | null
`mainDescriptionText` | Description of main screen | `{[key:String]: String}` | null
`categoryDescriptionText` | Description of main screen | `{[key:String]: String}` | null
`QRModule` | State of QRModule | `boolean` | true
`updatesModule` | State of Update Module | `boolean` | true

#### Locale Your SDK

First of all you should set available languages as shown code block below for the SDK.

```javaScript
    PlaybookSDK.setAvailableLangs([
        "EN",
        "DE",
        "TR"
    ])
```

Current version of the SDK has localizations for only English, Turkish and Arabic. But developers can create their localization files from the current JSON template. The example template can be found the main dir of the repository.

Please follow the three basic step in native SDKs documentations to localize the sdk for a new language.

[iOS Playbook SDK](https://github.com/getplaybook/Playbook-iOS-SDK)

[Android Playbook SDK](https://github.com/getplaybook/Playbook-Android-SDK)

#### Presenting Academy, Updates or both

In Playbook you can choose to display the main modules (Academy & Updates) separately at different places, or together. In any UIViewController instance you can use methods listed below.

```javaScript
    // Presenting both academy and updates module
    PlaybookSDK.showListView(true)
    // Presenting only update module
    PlaybookSDK.showListView(true)
    // Presenting only academy module
    PlaybookSDK.showListView(true)
```

#### Remote notification for updates

Notifications to your app sent for the Playbook SDK should have an **pb_update_id** in the payload section.

```javaScript
  "data": {
    "pb_update_id": "PU69a1" // Update ID from app.getplaybook.io -> Updates -> Campaign ID
  }
```

You can find detailed notification setup from native documentation of SDKs.

[iOS Playbook SDK](https://github.com/getplaybook/Playbook-iOS-SDK)


[Android Playbook SDK](https://github.com/getplaybook/Playbook-Android-SDK)

## License

Commercial
