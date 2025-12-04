import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function SocialCustomsScreen() {
  const rules = [
    {
      id: 1,
      title: 'Maintain Distance from Wildlife',
      description: 'Stay at least 2 meters (6 feet) away from all animals. This protects both you and the fragile ecosystem.',
      icon: '🦎',
    },
    {
      id: 2,
      title: 'No Flash Photography',
      description: 'Flash photography can disturb and harm wildlife. Use natural light for photos.',
      icon: '📷',
    },
    {
      id: 3,
      title: 'Stay on Marked Trails',
      description: 'Never leave designated paths. This protects fragile vegetation and prevents soil erosion.',
      icon: '🛤️',
    },
    {
      id: 4,
      title: 'No Food in Protected Areas',
      description: 'Don\'t bring food, drinks, or snacks to protected areas. This prevents introducing foreign species.',
      icon: '🚫',
    },
    {
      id: 5,
      title: 'Don\'t Touch Anything',
      description: 'Never touch, feed, or disturb wildlife. This includes animals, plants, and marine life.',
      icon: '✋',
    },
    {
      id: 6,
      title: 'No Smoking',
      description: 'Smoking is prohibited in protected areas. Fire risk is extremely high in this dry environment.',
      icon: '🚭',
    },
    {
      id: 7,
    title: 'Respect Local Communities',
      description: 'Be respectful of local residents. Learn basic Spanish phrases and be patient with language barriers.',
      icon: '👥',
    },
    {
      id: 8,
      title: 'Support Local Guides',
      description: 'Always follow your guide\'s instructions. They are trained to protect the ecosystem and ensure your safety.',
      icon: '👨‍🏫',
    },
  ];

  const customs = [
    {
      id: 1,
      title: 'Greetings',
      description: 'A simple "Buenos días" (good morning) or "Buenas tardes" (good afternoon) goes a long way. Locals appreciate visitors who make an effort.',
    },
    {
      id: 2,
      title: 'Tipping',
      description: 'Tipping is appreciated for guides, restaurant staff, and service workers. This directly supports local families.',
    },
    {
      id: 3,
      title: 'Bargaining',
      description: 'Bargaining is not common in restaurants or hotels. However, you can negotiate prices for tours and souvenirs at local markets.',
    },
    {
      id: 4,
      title: 'Time',
      description: 'Island time is more relaxed. Be patient and flexible with schedules. Things may move slower than you\'re used to.',
    },
    {
      id: 5,
      title: 'Local Businesses',
      description: 'Support local shops, restaurants, and services. Ask locals for recommendations - they know the best places!',
    },
  ];

  const importantInfo = [
    'The Galapagos National Park has strict rules to protect the ecosystem',
    'Violations can result in fines and expulsion from the islands',
    'Always travel with a licensed guide in protected areas',
    'The ecosystem is extremely fragile - every action matters',
    'Your cooperation helps preserve this unique paradise for future generations',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Know Before You Go</Text>
        <Text style={styles.headerSubtitle}>Rules, customs, and local etiquette</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Park Rules & Regulations</Text>
        <Text style={styles.sectionDescription}>
          The Galapagos Islands are a protected UNESCO World Heritage Site with an extremely 
          fragile ecosystem. These rules are not suggestions - they are essential for protecting 
          this unique environment. Violations can result in serious fines.
        </Text>
      </View>

      {rules.map((rule) => (
        <View key={rule.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{rule.icon}</Text>
            <Text style={styles.cardTitle}>{rule.title}</Text>
          </View>
          <Text style={styles.cardDescription}>{rule.description}</Text>
        </View>
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🤝 Local Customs & Etiquette</Text>
        <Text style={styles.sectionDescription}>
          Understanding local customs helps you have a more authentic and respectful experience. 
          The Galapagos community is welcoming, and showing respect goes a long way.
        </Text>
      </View>

      {customs.map((custom) => (
        <View key={custom.id} style={styles.customCard}>
          <Text style={styles.customTitle}>{custom.title}</Text>
          <Text style={styles.customDescription}>{custom.description}</Text>
        </View>
      ))}

      <View style={styles.importantSection}>
        <Text style={styles.importantTitle}>⚠️ Important Information</Text>
        {importantInfo.map((info, index) => (
          <View key={index} style={styles.importantItem}>
            <Text style={styles.importantBullet}>⚠️</Text>
            <Text style={styles.importantText}>{info}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Remember</Text>
        <Text style={styles.footerText}>
          The Galapagos Islands are a living laboratory. Every rule exists to protect this 
          unique ecosystem. By following these guidelines and respecting local customs, you 
          help ensure that future generations can experience this incredible place.
        </Text>
        <Text style={styles.footerSubtext}>
          💚 Supporting local businesses and respecting the environment go hand in hand.
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
    borderLeftWidth: 4,
    borderLeftColor: '#d32f2f',
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
  customCard: {
    backgroundColor: '#e8f5e9',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  customTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  customDescription: {
    fontSize: 15,
    color: '#616161',
    lineHeight: 22,
  },
  importantSection: {
    backgroundColor: '#fff3cd',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ffc107',
  },
  importantTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 15,
  },
  importantItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  importantBullet: {
    fontSize: 16,
    marginRight: 10,
  },
  importantText: {
    fontSize: 15,
    color: '#856404',
    flex: 1,
    lineHeight: 22,
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#2E7D32',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
    marginBottom: 10,
  },
  footerSubtext: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
    fontStyle: 'italic',
  },
});

