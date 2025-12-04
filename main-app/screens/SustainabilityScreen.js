import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

export default function SustainabilityScreen() {
  const sustainabilityTips = [
    {
      id: 1,
      title: 'Support Local Businesses',
      description: 'Choose locally-owned hotels, restaurants, and tour operators. This keeps money in the local economy and supports families who depend on tourism.',
      icon: '💚',
    },
    {
      id: 2,
      title: 'Stay on Land',
      description: 'Consider staying at local hotels instead of cruise ships. Land-based tourism supports more local businesses and provides authentic experiences.',
      icon: '🏨',
    },
    {
      id: 3,
      title: 'Respect Wildlife',
      description: 'Maintain a 2-meter distance from all wildlife. Never touch, feed, or disturb animals. This protects both you and the fragile ecosystem.',
      icon: '🐢',
    },
    {
      id: 4,
      title: 'Follow Park Rules',
      description: 'Stay on marked trails, don\'t bring food to protected areas, and follow your guide\'s instructions. These rules protect the unique ecosystem.',
      icon: '📋',
    },
    {
      id: 5,
      title: 'Use Reef-Safe Products',
      description: 'Use biodegradable sunscreen and avoid products with harmful chemicals. The marine ecosystem is extremely sensitive.',
      icon: '🌊',
    },
    {
      id: 6,
      title: 'Conserve Water & Energy',
      description: 'The islands have limited resources. Take shorter showers, turn off lights, and be mindful of your consumption.',
      icon: '💡',
    },
    {
      id: 7,
      title: 'Support Conservation',
      description: 'Visit the Charles Darwin Research Station and support local conservation initiatives. Your visit fees help protect the islands.',
      icon: '🔬',
    },
    {
      id: 8,
      title: 'Buy Local Products',
      description: 'Purchase souvenirs from local artisans and shops. Avoid products made from endangered species or protected materials.',
      icon: '🛍️',
    },
  ];

  const localInitiatives = [
    {
      id: 1,
      title: 'Charles Darwin Research Station',
      description: 'Learn about ongoing conservation efforts and see giant tortoise breeding programs.',
      location: 'Santa Cruz Island',
    },
    {
      id: 2,
      title: 'Giant Tortoise Breeding Centers',
      description: 'Support programs that help restore tortoise populations across the islands.',
      location: 'Multiple Islands',
    },
    {
      id: 3,
      title: 'Marine Reserve Protection',
      description: 'The Galapagos Marine Reserve protects one of the world\'s most diverse marine ecosystems.',
      location: 'Marine Reserve',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sustainability & Conservation</Text>
        <Text style={styles.headerSubtitle}>Protecting the Galapagos for future generations</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌱 How to Be a Responsible Visitor</Text>
        <Text style={styles.sectionDescription}>
          The Galapagos Islands have an extremely fragile ecosystem. Every choice you make matters. 
          By supporting local businesses and following conservation guidelines, you help protect this 
          unique paradise while supporting the local community.
        </Text>
      </View>

      {sustainabilityTips.map((tip) => (
        <View key={tip.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{tip.icon}</Text>
            <Text style={styles.cardTitle}>{tip.title}</Text>
          </View>
          <Text style={styles.cardDescription}>{tip.description}</Text>
        </View>
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔬 Local Conservation Initiatives</Text>
        <Text style={styles.sectionDescription}>
          Support these important conservation efforts during your visit:
        </Text>
      </View>

      {localInitiatives.map((initiative) => (
        <View key={initiative.id} style={styles.initiativeCard}>
          <Text style={styles.initiativeTitle}>{initiative.title}</Text>
          <Text style={styles.initiativeDescription}>{initiative.description}</Text>
          <Text style={styles.initiativeLocation}>📍 {initiative.location}</Text>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💚 Remember: Supporting local businesses helps protect the Galapagos ecosystem 
          by ensuring the local community benefits from tourism and has incentives to 
          preserve this unique environment.
        </Text>
      </View>
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
    backgroundColor: '#2E7D32',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#616161',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    fontSize: 30,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
  },
  cardDescription: {
    fontSize: 15,
    color: '#616161',
    lineHeight: 22,
  },
  initiativeCard: {
    backgroundColor: '#e8f5e9',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  initiativeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  initiativeDescription: {
    fontSize: 15,
    color: '#616161',
    lineHeight: 22,
    marginBottom: 8,
  },
  initiativeLocation: {
    fontSize: 14,
    color: '#757575',
    fontStyle: 'italic',
  },
  footer: {
    backgroundColor: '#2E7D32',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
    textAlign: 'center',
  },
});

