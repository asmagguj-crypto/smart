import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [dbMessage, setDbMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.0.113:5000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setDbMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setDbMessage('فشل الاتصال بالسيرفر');
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>النموذج الفارغ</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.subtitle}>{dbMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 18,
    color: '#27ae60',
    textAlign: 'center',
    fontWeight: '600',
  },
});