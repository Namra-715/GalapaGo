import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { GOOGLE_MAPS_API_KEY } from '../config/api';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function MoreScreen() {
  const navigation = useNavigation();
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  // Galapagos Islands region coordinates
  const galapagosRegion = {
    latitude: -0.8,
    longitude: -90.3,
    latitudeDelta: 1.5,
    longitudeDelta: 2.0,
  };

  // Google Maps Static API URL for small map (returns an image)
  const getSmallMapImageUrl = () => {
    if (!GOOGLE_MAPS_API_KEY) return null;
    const center = `${galapagosRegion.latitude},${galapagosRegion.longitude}`;
    const zoom = 7;
    const size = `${Math.round(SCREEN_WIDTH)}x180`;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${size}&key=${GOOGLE_MAPS_API_KEY}&style=feature:water|color:0x4a90e2&style=feature:landscape|color:0xf5f5f5`;
  };

  // HTML content with iframe for expanded map
  const getExpandedMapHtml = () => {
    if (!GOOGLE_MAPS_API_KEY) return null;
    const center = `${galapagosRegion.latitude},${galapagosRegion.longitude}`;
    const zoom = 8;
    const embedUrl = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${center}&zoom=${zoom}`;
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { width: 100%; height: 100%; overflow: hidden; }
            iframe { width: 100%; height: 100%; border: 0; display: block; }
          </style>
        </head>
        <body>
          <iframe src="${embedUrl}" allowfullscreen></iframe>
        </body>
      </html>
    `;
  };

  const menuItems = [
    {
      id: 1,
      title: 'Culture & History',
      description: 'Discover the rich heritage of Galapagos',
      icon: require('../assets/icons/history.png'),
      screen: 'CultureHistory',
    },
    {
      id: 2,
      title: 'Sustainability',
      description: 'Learn how to be a responsible visitor',
      icon: require('../assets/icons/protect.png'),
      screen: 'Sustainability',
    },
    {
      id: 3,
      title: 'Transportation',
      description: 'Transportation options around the islands',
      icon: require('../assets/icons/bike.png'),
      screen: 'Transportation',
    },
    {
      id: 4,
      title: 'Know Before You Go',
      description: 'Rules, customs, and etiquette',
      icon: require('../assets/icons/rules.png'),
      screen: 'SocialCustoms',
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setIsMapExpanded(true)}
          style={styles.header}
        >
          {GOOGLE_MAPS_API_KEY && getSmallMapImageUrl() ? (
            <Image
              source={{ uri: getSmallMapImageUrl() }}
              style={styles.map}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapPlaceholderText}>
                Map unavailable{'\n'}Add GOOGLE_MAPS_API_KEY to .env
              </Text>
            </View>
          )}
        </TouchableOpacity>

      <View style={styles.content}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuCard, item.highlight && styles.highlightCard]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuCardContent}>
              <View style={styles.iconContainer}>
                <Image
                  source={item.icon}
                  style={[
                    styles.icon,
                    item.highlight && styles.highlightIcon,
                  ]}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.menuTitle, item.highlight && styles.highlightTitle]}>
                  {item.title}
                </Text>
                <Text style={styles.menuDescription}>{item.description}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💚 Responsible tourism helps protect the Galapagos ecosystem
        </Text>
      </View>
    </ScrollView>

    {/* Expanded Map Modal */}
    <Modal
      visible={isMapExpanded}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setIsMapExpanded(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Galapagos Islands Map</Text>
          <TouchableOpacity
            onPress={() => setIsMapExpanded(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        {GOOGLE_MAPS_API_KEY && getExpandedMapHtml() ? (
          <WebView
            source={{ html: getExpandedMapHtml() }}
            style={styles.expandedMap}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}
          />
        ) : (
          <View style={styles.mapPlaceholderExpanded}>
            <Text style={styles.mapPlaceholderText}>
              Map unavailable{'\n'}Add GOOGLE_MAPS_API_KEY to .env
            </Text>
          </View>
        )}
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 180,
    overflow: 'hidden',
    borderRadius: 0,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#2E7D32',
    borderBottomWidth: 1,
    borderBottomColor: '#1B5E20',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  expandedMap: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 120,
  },
  mapPlaceholderExpanded: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 15,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  highlightCard: {
    backgroundColor: '#e8f5e9',
    borderWidth: 2,
    borderColor: '#2E7D32',
  },
  menuCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#2E7D32',
  },
  highlightIcon: {
    tintColor: '#2E7D32',
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 5,
  },
  highlightTitle: {
    color: '#2E7D32',
  },
  menuDescription: {
    fontSize: 14,
    color: '#757575',
  },
  chevron: {
    fontSize: 24,
    color: '#757575',
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});

