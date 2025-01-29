import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { siteDetails } from '../lib/utils';

const WebViewComponent = () => {
    return (
        <View style={styles.container}>
            <WebView source={{ uri: siteDetails.siteUrl }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default WebViewComponent;