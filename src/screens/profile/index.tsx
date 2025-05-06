/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageStyle,
} from 'react-native';
import {useAuthStore} from '@/stores/auth-store';
import {useGetDetailUser} from '@/hooks/users/use-get-detail-user';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProfileScreen = () => {
  const {signOut} = useAuthStore();
  const {data} = useGetDetailUser(1);

  const dot = (color: string) => ({
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: color,
    marginRight: 6,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Account</Text>

      <Image
        source={{uri: 'https://i.pravatar.cc/150?img=3'}}
        style={styles.avatar}
      />
      <Text style={styles.username}>{data?.username}</Text>

      <View style={styles.card}>
        <Text style={styles.overviewLabel}>Spending Overview</Text>
        <Text style={styles.spent}>$12,521.10</Text>
        <Text style={styles.totalBudget}>From $20,000.00</Text>

        <View style={styles.barContainer}>
          <View style={[styles.bar, {width: '40%', backgroundColor: '#000'}]} />
          <View
            style={[styles.bar, {width: '20%', backgroundColor: '#2ECC71'}]}
          />
          <View style={[styles.bar, {flex: 1, backgroundColor: '#D6EAF8'}]} />
        </View>

        <View style={styles.row}>
          <View style={dot('#000')} />
          <Text>Subscription</Text>
          <Text style={styles.rightText}>$8,221.00</Text>
        </View>

        <View style={styles.row}>
          <View style={dot('#2ECC71')} />
          <Text>Friend & Family</Text>
          <Text style={styles.rightText}>$4,300.10</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.inviteCard}>
        <View>
          <Text style={styles.inviteTitle}>Invite Friends</Text>
          <Text style={styles.inviteDesc}>
            Get <Text style={styles.bold}>$100</Text> each
          </Text>
        </View>
        <Icon name="person-add" size={28} color="#fff" />
      </TouchableOpacity>

      {[
        {label: 'My Account', icon: 'person-circle-outline'},
        {label: 'Transaction History', icon: 'time-outline'},
        {label: 'Security Settings', icon: 'shield-checkmark-outline'},
        {label: 'General Settings', icon: 'settings-outline'},
      ].map((item, i) => (
        <TouchableOpacity key={i} style={styles.option}>
          <View style={styles.optionRow}>
            <Icon name={item.icon} size={20} color="#444" />
            <Text style={styles.optionLabel}>{item.label}</Text>
          </View>
          <Icon name="chevron-forward" size={16} color="#888" />
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#fff', height: '100%'},
  heading: {fontSize: 22, fontWeight: 'bold', marginBottom: 20},
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  } as ImageStyle,
  username: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },

  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 1,
  },
  overviewLabel: {fontSize: 14, color: '#888'},
  spent: {fontSize: 22, fontWeight: 'bold', marginVertical: 4},
  totalBudget: {fontSize: 14, color: '#aaa', marginBottom: 10},
  barContainer: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 16,
  },
  bar: {height: '100%'},

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  rightText: {fontWeight: '600'},
  inviteCard: {
    backgroundColor: '#1F618D',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inviteTitle: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  inviteDesc: {color: '#ddd'},
  bold: {fontWeight: 'bold', color: '#fff'},

  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionRow: {flexDirection: 'row', alignItems: 'center', gap: 10},
  optionLabel: {fontSize: 16, color: '#333'},

  logoutButton: {
    marginTop: 32,
    alignItems: 'center',
  },
  logoutText: {
    color: '#E74C3C',
    fontWeight: 'bold',
  },
});
