import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MoreScreen() {
  const navigation = useNavigation();

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
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/galapagos-beach-at-tortuga.jpg')}
        style={styles.header}
        imageStyle={styles.headerImage}
      >
        <View style={styles.headerContent} />
      </ImageBackground>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 180,
    justifyContent: 'flex-end',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerImage: {
    resizeMode: 'cover',
  },
  headerContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
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

