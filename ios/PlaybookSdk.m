#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(PlaybookSdk, NSObject)

RCT_EXTERN_METHOD(set: (NSString *)
                  token userID: (NSString *) userID
                  userGroups:(NSArray<NSString *> *) userGroups
                  companyName:(NSString *) companyName
                  sandbox: (BOOL) sandbox)

RCT_EXTERN_METHOD(extraSettings: (id) settings)
RCT_EXTERN_METHOD(showAcademyView: (BOOL) animated)
RCT_EXTERN_METHOD(showListView: (BOOL) animated)
RCT_EXTERN_METHOD(showUpdatesList: (BOOL) animated)

@end
