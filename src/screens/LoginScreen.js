import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

import Svg, {
  Path,
  Circle,
  Ellipse,
} from 'react-native-svg';

import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 600;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F4FF"
      />

      {/* Decorative Background */}
      <View
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
      >
        <Svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <Path
            d={`M 0 0 H ${width * 0.38}
              C ${width * 0.27} ${height * 0.07},
                ${width * 0.17} ${height * 0.02},
                0 ${height * 0.22} Z`}
            fill="#E9DFFF"
          />

          <Path
            d={`M 0 0 H ${width * 0.24}
              C ${width * 0.17} ${height * 0.08},
                ${width * 0.10} ${height * 0.07},
                0 ${height * 0.15} Z`}
            fill="#D5C0FF"
          />

          <Path
            d={`M ${width} ${height}
              H ${width * 0.62}
              C ${width * 0.74} ${height * 0.91},
                ${width * 0.84} ${height * 0.97},
                ${width} ${height * 0.78} Z`}
            fill="#E9DFFF"
          />

          <Path
            d={`M ${width} ${height}
              H ${width * 0.79}
              C ${width * 0.87} ${height * 0.94},
                ${width * 0.94} ${height * 0.90},
                ${width} ${height * 0.86} Z`}
            fill="#D5C0FF"
          />

          <Circle
            cx={width * 0.10}
            cy={height * 0.77}
            r={isMobile ? 5 : 8}
            fill="#DCCBFA"
            opacity={0.7}
          />

          <Circle
            cx={width * 0.87}
            cy={height * 0.17}
            r={isMobile ? 7 : 11}
            fill="#DCCBFA"
            opacity={0.65}
          />

          <Circle
            cx={width * 0.91}
            cy={height * 0.22}
            r={isMobile ? 3 : 5}
            fill="#B99AEF"
            opacity={0.7}
          />

          <Ellipse
            cx={width * 0.12}
            cy={height * 0.25}
            rx={width * 0.035}
            ry={height * 0.018}
            fill="#E4D5FF"
            opacity={0.8}
          />
        </Svg>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.card,
            isMobile && styles.mobileCard,
          ]}
        >
          {/* Department Logo */}
          <View style={styles.logo}>
            <Ionicons
              name="code-slash"
              size={31}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.departmentName}>
            Computer Science Department
          </Text>

          <Text style={styles.tagline}>
            Your Academic Journey, All in One Place
          </Text>

          <View style={styles.headingDivider} />

          <Text style={styles.title}>Login</Text>

          <Text style={styles.subtitle}>
            Welcome back! Please sign in to continue.
          </Text>

          {/* Email Field */}
          <Text style={styles.label}>University Email</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#9370C8"
              style={styles.inputIcon}
            />

            <TextInput style = {styles.input}
              placeholder="Enter your university email"
              placeholderTextColor="#A49BB8"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Field */}
          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#9370C8"
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A49BB8"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword ? 'Hide password' : 'Show password'
              }
              hitSlop={8}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#8D78AE"
              />
            </TouchableOpacity>
          </View>

          {/* Remember Me / Forgot Password */}
          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setRememberMe(!rememberMe)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: rememberMe }}
            >
              <View
                style={[
                  styles.checkbox,
                  rememberMe && styles.checkedBox,
                ]}
              >
                {rememberMe && (
                  <Ionicons
                    name="checkmark"
                    size={13}
                    color="#FFFFFF"
                  />
                )}
              </View>

              <Text style={styles.rememberText}>
                Remember me
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => {}}
            >
              <Text style={styles.forgotText}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.85}
            accessibilityRole="button"
            onPress={() => {}}
          >
            <Text style={styles.loginButtonText}>Login</Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
              style={styles.arrow}
            />
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.divider} />
          </View>

          {/* University Account */}
          <TouchableOpacity
            style={styles.universityButton}
            activeOpacity={0.8}
            accessibilityRole="button"
            onPress={() => {}}
          >
            <Ionicons
              name="school-outline"
              size={19}
              color="#6941A5"
              style={styles.universityIcon}
            />

            <Text style={styles.universityButtonText}>
              Login with University Account
            </Text>
          </TouchableOpacity>

          {/* Sign Up */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?{' '}
            </Text>

            <TouchableOpacity accessibilityRole="button" 
            onPress={() => {}}
            >
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F4FF',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 35,
  },

  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    paddingHorizontal: 40,
    paddingVertical: 36,
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#F0E8FF',
    shadowColor: '#8860C9',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.13,
    shadowRadius: 28,
    elevation: 7,
  },

  mobileCard: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    borderRadius: 22,
  },

  logo: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C3AED',
    borderRadius: 20,
    marginBottom: 18,
  },

  departmentName: {
    color: '#38235F',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

  tagline: {
    color: '#988BAF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 19,
  },

  headingDivider: {
    height: 1,
    backgroundColor: '#F0EAF8',
    marginTop: 27,
    marginBottom: 25,
  },

  title: {
    color: '#33204F',
    fontSize: 29,
    fontWeight: '800',
    textAlign: 'center',
  },

  subtitle: {
    color: '#9286A6',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 9,
    marginBottom: 24,
  },

  label: {
    color: '#403052',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 9,
    marginTop: 5,
  },

  inputContainer: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#E7E0F3',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#FFFEFF',
    marginBottom: 16,
  },

  inputIcon: {
    marginRight: 11,
  },

  input: {
    flex: 1,
    minWidth: 0,
    color: '#35234F',
    fontSize: 13,
    paddingVertical: 12,
    outlineStyle: 'none',
  },

  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 12,
    marginTop: 3,
    marginBottom: 24,
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: '#C9B9E6',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedBox: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },

  rememberText: {
    color: '#746A86',
    fontSize: 11,
  },

  forgotText: {
    color: '#7950C7',
    fontSize: 11,
    fontWeight: '600',
  },

  loginButton: {
    minHeight: 52,
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9,
    elevation: 4,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  arrow: {
    marginLeft: 12,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 23,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#EEE8F6',
  },

  orText: {
    color: '#A69BB7',
    fontSize: 12,
    marginHorizontal: 14,
  },

  universityButton: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#D9C9F4',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  universityIcon: {
    marginRight: 9,
  },

  universityButtonText: {color: '#6941A5',
    fontSize: 13,
    fontWeight: '600',
    flexShrink: 1,
    textAlign: 'center',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 25,
  },

  signupText: {
    color: '#9186A4',
    fontSize: 12,
  },

  signupLink: {
    color: '#7C3AED',
    fontSize: 12,
    fontWeight: '700',
  },
})
