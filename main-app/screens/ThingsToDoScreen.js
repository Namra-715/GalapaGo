import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { thingsToDo } from '../data/placeholderData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ThingsToDoScreen() {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  
  console.log('ThingsToDoScreen - Data loaded:', thingsToDo?.length || 0);
  
  if (!thingsToDo || thingsToDo.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No activities found</Text>
      </View>
    );
  }

  const handleScroll = (activityId, event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const imageWidth = SCREEN_WIDTH - 30;
    const currentIndex = Math.round(contentOffsetX / imageWidth);
    setActiveImageIndex(prev => ({ ...prev, [activityId]: currentIndex }));
  };

  const renderImageGallery = (activity) => {
    const images = activity.images || [activity.image];
    const currentIndex = activeImageIndex[activity.id] || 0;
    
    if (!images || images.length === 0) {
      return (
        <View style={[styles.cardImage, styles.placeholderImage]}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      );
    }
    
    return (
      <View style={styles.imageGalleryContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          style={styles.imageGallery}
          onScroll={(e) => handleScroll(activity.id, e)}
          scrollEventThrottle={16}
        >
          {images.map((img, index) => (
            <Image 
              key={index}
              source={img} 
              style={styles.cardImage}
              onError={(error) => {
                console.log('Image load error for', activity.title, error);
              }}
            />
          ))}
        </ScrollView>
        {images.length > 1 && (
          <View style={styles.imageIndicators}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentIndex && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Have some fun! 🎉</Text>
        <Text style={styles.headerSubtitle}>Explore the wonders of Galapagos</Text>
      </View>
      {thingsToDo.map((activity) => (
        <View key={activity.id} style={styles.card}>
          {renderImageGallery(activity)}
          <TouchableOpacity style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{activity.title}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{activity.category}</Text>
              </View>
            </View>
            <Text style={styles.cardDescription}>{activity.description}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.locationText}>📍 {activity.location}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#757575',
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageGalleryContainer: {
    position: 'relative',
  },
  imageGallery: {
    height: 200,
  },
  cardImage: {
    width: SCREEN_WIDTH - 30, // Account for card margin (15 on each side)
    height: 200,
    resizeMode: 'cover',
  },
  imageIndicators: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
    marginRight: 10,
  },
  badge: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    color: '#616161',
    lineHeight: 20,
    marginBottom: 10,
  },
  cardFooter: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  locationText: {
    fontSize: 14,
    color: '#757575',
  },
  errorText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginTop: 50,
  },
  placeholderImage: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#757575',
    fontSize: 14,
  },
});

