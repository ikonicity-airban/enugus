import { StyleSheet, BackHandler, Platform } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
import { siteDetails } from "../lib/utils";
import React from "react";
import ErrorScreen from "./error";
import Animated, { EntryExitTransition, FadeOutLeft, FlipInEasyX, SlideInRight } from "react-native-reanimated";

const WebViewPage = ({ url = "" }: { url: string }) => {
  const webviewRef = React.useRef<WebView>(null);

  const handleNavigationStateChange = (event: WebViewNavigation) => {
    console.log("🚀 ~ WebViewPage ~ event:", event.url);
    if (event.url) {
      if (event.url.includes("properties")) {
        // webviewRef.current?.stopLoading();
        // router.push("/(tabs)/properties");
      }
    } else {
      if (Platform.OS === "android" && event.canGoBack) {
        BackHandler.addEventListener("hardwareBackPress", () => {
          webviewRef.current?.goBack();
          return true;
        });
      }
    }
  };

  React.useEffect(() => {
    if (Platform.OS === "android") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          if (webviewRef.current) {
            webviewRef.current.goBack();
            return true;
          }
          return false;
        }
      );

      return () => backHandler.remove();
    }
  }, []);

  const handleError = React.useCallback((event: any) => {
    console.log("Error", event);
  }, []);

  const injectedJavaScript = `
  (function() {
    function removeElements(selectors) {
      selectors.forEach(selector => {
        let elements = document.querySelectorAll(selector);
        elements.forEach(el => el.style.display = 'none');
      });
    }

    removeElements([
      '.top-header',
      '.main-header.fixed-header',
      'header',
      '.Modal.fade',
      '.ModalLogin',
      '.top-header-left',
      '.top-header-item',
      '.main-header.fixed-header',
      '.header-lower',
      '.header-account',
      '.modal-header.border-0',
      '.top-footer',
      '.content-footer-top',
      '.footer-logo',
      '.inner-footer',
      '.footer-cl-1',
      '.footer-cl-3',
      '.mt-10.navigation-menu-footer',
      '.footer-cl-4',
      '.footer',
      '.main-footer',
      '.bottom-footer',
      '.content-footer-bottom',
    ]);
  })();
`;

  return (
    <Animated.View
      style={{flex: 1}}
      layout={EntryExitTransition
        .delay(100)
        .duration(2000)
        .entering(SlideInRight)
        .exiting(FadeOutLeft)
        // .reduceMotion(ReduceMotion.Never)
        .withCallback((finished) => {
          console.log(`finished without interruptions: ${finished}`);
        })}
    >
      <WebView
        source={{ uri: siteDetails.siteUrl + url }}
        
        originWhitelist={[siteDetails.siteUrl]}
        ref={webviewRef}
        onNavigationStateChange={handleNavigationStateChange}
        renderError={(errD, errC, errDesc) => (
          <ErrorScreen domain={errD} code={errC} description={errDesc} />
        )}
        injectedJavaScriptBeforeContentLoaded={injectedJavaScript}
        injectedJavaScript={injectedJavaScript}
        pullToRefreshEnabled
        contentInset={{ bottom: 10 }}
        useWebView2
        onError={handleError}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewPage;
