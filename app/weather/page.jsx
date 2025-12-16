'use client';
import React, { useState } from 'react';
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Eye,
  AlertTriangle,
  TrendingUp,
  Calendar,
  MapPin,
  Search,
  Thermometer,
  Cloudy,
  Sprout,
  Tractor,
  Umbrella,
  Shield,
  Info,
  CheckCircle,
  XCircle,
  CloudDrizzle
} from 'lucide-react';

export default function WeatherUpdates() {
  const [location, setLocation] = useState('Lagos, Nigeria');
  const [language, setLanguage] = useState('en'); // 'en' or 'yo' for Yoruba

  const translations = {
    en: {
      header: 'Weather & Farm Advisory',
      location: 'Lagos, Nigeria',
      farmSummary: "Today's Farm Summary",
      farmSummaryText: 'Good conditions for planting and harvesting. Avoid pesticide spraying due to wind and upcoming rain.',
      humidity: 'Humidity',
      humidityDesc: 'Moderate - Good for crops',
      windSpeed: 'Wind Speed',
      windDesc: 'Too high for spraying',
      soilMoisture: 'Soil Moisture',
      soilDesc: 'Optimal level',
      uvIndex: 'UV Index',
      uvDesc: 'Wear protection',
      todayActivities: "Today's Farm Activities",
      todayActivitiesDesc: "What you should and shouldn't do on your farm today based on weather conditions",
      weekInsights: "This Week's Insights",
      weekInsightsDesc: 'Detailed analysis of how weather will affect your farming operations',
      forecast7Day: '7-Day Forecast',
      forecast7DayDesc: 'Plan your week with detailed weather predictions and farming advice',
      weatherAlerts: 'Active Weather Alerts',
      proTip: 'Pro Tip',
      farmAdvice: 'Farm Activity Advice',
      rainChance: 'rain chance',
      highPriority: 'High Priority',
      whatToExpect: 'What to expect',
      protectFarm: 'Protect Your Farm',
      validPeriod: 'Valid Period'
    },
    yo: {
      header: 'Ìròyìn Ojú Ọjọ́ àti Ìmọ̀ràn Ọkọ̀',
      location: 'Èkó, Nàìjíríà',
      farmSummary: 'Àkójọpọ̀ Ọkọ̀ Òní',
      farmSummaryText: 'Ojú ọjọ́ dára fún gbígbin àti ìkórè. Má ṣe wọ́n ẹ̀rọ ìpakúpa torí afẹ́fẹ́ àti òjò tó ńbọ̀.',
      humidity: 'Ọ̀rinrin',
      humidityDesc: 'Ìwọ̀ntúnwọ̀nsì - Dára fún àwọn ọ̀gbìn',
      windSpeed: 'Iyara Afẹ́fẹ́',
      windDesc: 'Pọ̀jù fún wíwọ́n',
      soilMoisture: 'Tutu Ilẹ̀',
      soilDesc: 'Ipele tó dára jù',
      uvIndex: 'Àlàfo UV',
      uvDesc: 'Wọ aṣọ ìdáàbòbò',
      todayActivities: 'Iṣẹ́ Ọkọ̀ Òní',
      todayActivitiesDesc: 'Ohun tí o yẹ kí o ṣe àti èyí tí o kò yẹ kí o ṣe ní ọkọ̀ rẹ lónìí',
      weekInsights: 'Ìmọ̀ràn Ọ̀sẹ̀ Yìí',
      weekInsightsDesc: 'Ìtúpalẹ̌ bí ojú ọjọ́ ṣe máa kan iṣẹ́ ọkọ̀ rẹ',
      forecast7Day: 'Àsọtẹ́lẹ̀ Ọjọ́ Méje',
      forecast7DayDesc: 'Gbèrò ọ̀sẹ̀ rẹ pẹ̀lú àsọtẹ́lẹ̀ ojú ọjọ́ àti ìmọ̀ràn ọkọ̀',
      weatherAlerts: 'Ìkìlọ̀ Ojú Ọjọ́',
      proTip: 'Ìmọ̀ràn Pàtàkì',
      farmAdvice: 'Ìmọ̀ràn Iṣẹ́ Ọkọ̀',
      rainChance: 'ànfààní òjò',
      highPriority: 'Pàtàkì Púpọ̀',
      whatToExpect: 'Ohun tó ní láti ṣẹlẹ̀',
      protectFarm: 'Dáàbò bo Ọkọ̀ Rẹ',
      validPeriod: 'Àkókò Tó Wúlò'
    }
  };

  const activitiesTranslations = {
    en: [
      { 
        activity: 'Planting & Sowing', 
        status: 'recommended', 
        icon: <Sprout className="w-5 h-5" />,
        reason: 'Soil temperature is optimal (24-28°C) and moisture levels are perfect for seed germination',
        tip: 'Best time: Early morning (6-9 AM) when soil is cool'
      },
      { 
        activity: 'Irrigation', 
        status: 'wait', 
        icon: <Droplets className="w-5 h-5" />,
        reason: 'Rain expected this afternoon. Your crops will receive natural watering, saving water and costs',
        tip: 'Skip watering today and tomorrow morning'
      },
      { 
        activity: 'Harvesting', 
        status: 'recommended', 
        icon: <Tractor className="w-5 h-5" />,
        reason: 'Low humidity (75%) and good visibility makes today ideal for harvesting. Rain starting tomorrow',
        tip: 'Focus on harvesting today before rain arrives'
      },
      { 
        activity: 'Pesticide Application', 
        status: 'avoid', 
        icon: <Shield className="w-5 h-5" />,
        reason: 'Wind speed is too high (12 km/h) - pesticides may drift. Rain expected later will wash away chemicals',
        tip: 'Wait until Saturday when conditions are calm and dry'
      },
    ],
    yo: [
      { 
        activity: 'Gbígbin Irúgbìn', 
        status: 'recommended', 
        icon: <Sprout className="w-5 h-5" />,
        reason: 'Ìgbónátútù ilẹ̀ dára (24-28°C) àti ipele omi tó pé fún ìdàgbàsókè irúgbìn',
        tip: 'Àkókò tó dára jù: Òwúrọ̀ kùtùkùtù (6-9 AM) nígbà tí ilẹ̀ bá tutù'
      },
      { 
        activity: 'Fífọ́n Omi', 
        status: 'wait', 
        icon: <Droplets className="w-5 h-5" />,
        reason: 'Òjò ń bọ̀ lọ́sàn-án yìí. Àwọn ọ̀gbìn rẹ yóò gba omi adayeba, èyí yóò pa owó àti omi mọ́',
        tip: 'Má fọ́n omi lónìí àti òwúrọ̀ ọ̀la'
      },
      { 
        activity: 'Ìkórè Èso', 
        status: 'recommended', 
        icon: <Tractor className="w-5 h-5" />,
        reason: 'Ọ̀rinrin kò pọ̀ (75%) àti ríran dára jẹ́ kí òní dára fún ìkórè. Òjò bẹ̀rẹ̀ lọ́la',
        tip: 'Dojúkọ ìkórè lónìí kí òjò tó dé'
      },
      { 
        activity: 'Lílọ Ẹ̀rọ Ìpakúpa', 
        status: 'avoid', 
        icon: <Shield className="w-5 h-5" />,
        reason: 'Iyara afẹ́fẹ́ ga púpọ̀ (12 km/h) - ẹ̀rọ ìpakúpa lè fò lọ. Òjò tó ńbọ̀ yóò fọ àwọn kẹ́míkà náà',
        tip: 'Dúró títí di Saturday nígbà tí ojú ọjọ́ yóò balẹ̀ àti gbígbẹ'
      },
    ]
  };

  const insightsTranslations = {
    en: [
      {
        title: 'Rainfall Analysis',
        icon: <CloudRain className="w-6 h-6 text-blue-500" />,
        data: '85mm expected',
        description: 'Heavy rainfall on Wednesday & Thursday. This is 40% above normal for this period. Fields may get waterlogged - ensure proper drainage systems are clear.',
        impact: 'high'
      },
      {
        title: 'Temperature Trend',
        icon: <Thermometer className="w-6 h-6 text-orange-500" />,
        data: '27-32°C range',
        description: 'Temperatures remain ideal for most crops. Heat stress is unlikely. Perfect conditions for vegetable growth and fruit development.',
        impact: 'positive'
      },
      {
        title: 'Soil Moisture Forecast',
        icon: <Droplets className="w-6 h-6 text-green-500" />,
        data: 'Optimal until Thursday',
        description: 'Current soil moisture at 65% will increase to 90% after Wednesday\'s rain. No irrigation needed for the next 5 days after the rain.',
        impact: 'positive'
      },
      {
        title: 'Pest & Disease Risk',
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
        data: 'Moderate to High',
        description: 'High humidity + warm temps after rain create ideal conditions for fungal diseases and pests. Monitor your crops closely from Thursday onwards.',
        impact: 'warning'
      },
    ],
    yo: [
      {
        title: 'Ìtúpalẹ̌ Òjò',
        icon: <CloudRain className="w-6 h-6 text-blue-500" />,
        data: '85mm ni a retí',
        description: 'Òjò gidi ní Ọjọ́rú àti Ọjọ́bọ̀. Èyí jẹ́ 40% ju bí ó ti wà lásìkò yìí lọ. Ilẹ̀ lè kún fún omi - rí i dájú pé àwọn ọ̀nà ìṣàn omi kò dí.',
        impact: 'high'
      },
      {
        title: 'Ìtẹ̀síwájú Ìgbónátútù',
        icon: <Thermometer className="w-6 h-6 text-orange-500" />,
        data: 'Láàárín 27-32°C',
        description: 'Ìgbónátútù wà ní ipele tó dára fún ọ̀pọ̀ àwọn ọ̀gbìn. Ooru kò ní jẹ́ wàhálà. Ojú ọjọ́ tó pé fún ẹ̀fọ́ àti èso.',
        impact: 'positive'
      },
      {
        title: 'Àsọtẹ́lẹ̀ Tutu Ilẹ̀',
        icon: <Droplets className="w-6 h-6 text-green-500" />,
        data: 'Ó dára títí di Ọjọ́bọ̀',
        description: 'Tutu ilẹ̀ lọ́wọ́lọ́wọ́ jẹ́ 65% yóò pọ̀ sí 90% lẹ́yìn òjò Ọjọ́rú. A kò nílo fífọ́n omi fún ọjọ́ márùn-ún lẹ́yìn òjò.',
        impact: 'positive'
      },
      {
        title: 'Ewu Kòkòrò àti Àrùn',
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
        data: 'Ìwọ̀ntúnwọ̀nsì sí Gíga',
        description: 'Ọ̀rinrin púpọ̀ àti ooru lẹ́yìn òjò ń pèsè ipele tó dára fún àrùn ẹ̀lẹ́ àti kòkòrò. Ṣọ́ àwọn ọ̀gbìn rẹ dáadáa láti Ọjọ́bọ̀ lọ.',
        impact: 'warning'
      },
    ]
  };

  const t = translations[language];


  const currentWeather = {
    temp: 28,
    feelsLike: 31,
    condition: 'Partly Cloudy',
    humidity: 75,
    windSpeed: 12,
    uvIndex: 6,
    visibility: 10,
    rainChance: 40,
    soilMoisture: 65,
    pestRisk: 'moderate'
  };

  const weeklyForecast = language === 'en' ? [
    { day: 'Today', date: 'Nov 11', high: 30, low: 23, condition: 'sunny', rain: 10, advice: 'Perfect for fieldwork' },
    { day: 'Tue', date: 'Nov 12', high: 29, low: 24, condition: 'cloudy', rain: 30, advice: 'Good for harvesting' },
    { day: 'Wed', date: 'Nov 13', high: 27, low: 22, condition: 'rainy', rain: 80, advice: 'Avoid field activities' },
    { day: 'Thu', date: 'Nov 14', high: 28, low: 23, condition: 'rainy', rain: 70, advice: 'Indoor work only' },
    { day: 'Fri', date: 'Nov 15', high: 29, low: 24, condition: 'cloudy', rain: 40, advice: 'Limited outdoor work' },
    { day: 'Sat', date: 'Nov 16', high: 31, low: 25, condition: 'sunny', rain: 20, advice: 'Excellent for planting' },
    { day: 'Sun', date: 'Nov 17', high: 32, low: 26, condition: 'sunny', rain: 10, advice: 'Great for spraying' },
  ] : [
    { day: 'Òní', date: 'Oṣù 11 Ọjọ́ 11', high: 30, low: 23, condition: 'sunny', rain: 10, advice: 'Ó dára púpọ̀ fún iṣẹ́ oko' },
    { day: 'Ìṣẹ́gun', date: 'Oṣù 11 Ọjọ́ 12', high: 29, low: 24, condition: 'cloudy', rain: 30, advice: 'Ó dára fún ìkórè' },
    { day: 'Ọjọ́rú', date: 'Oṣù 11 Ọjọ́ 13', high: 27, low: 22, condition: 'rainy', rain: 80, advice: 'Yẹra fún iṣẹ́ oko' },
    { day: 'Ọjọ́bọ̀', date: 'Oṣù 11 Ọjọ́ 14', high: 28, low: 23, condition: 'rainy', rain: 70, advice: 'Iṣẹ́ inú ilé nìkan' },
    { day: 'Ẹtì', date: 'Oṣù 11 Ọjọ́ 15', high: 29, low: 24, condition: 'cloudy', rain: 40, advice: 'Iṣẹ́ òde díẹ̀' },
    { day: 'Àbámẹ́ta', date: 'Oṣù 11 Ọjọ́ 16', high: 31, low: 25, condition: 'sunny', rain: 20, advice: 'Ó yẹ púpọ̀ fún gbígbin' },
    { day: 'Àìkú', date: 'Oṣù 11 Ọjọ́ 17', high: 32, low: 26, condition: 'sunny', rain: 10, advice: 'Ó dára fún wíwọ́n' },
  ];

  const todayActivities = [
    { 
      activity: 'Planting & Sowing', 
      status: 'recommended', 
      icon: <Sprout className="w-5 h-5" />,
      reason: 'Soil temperature is optimal (24-28°C) and moisture levels are perfect for seed germination',
      tip: 'Best time: Early morning (6-9 AM) when soil is cool'
    },
    { 
      activity: 'Irrigation', 
      status: 'wait', 
      icon: <Droplets className="w-5 h-5" />,
      reason: 'Rain expected this afternoon. Your crops will receive natural watering, saving water and costs',
      tip: 'Skip watering today and tomorrow morning'
    },
    { 
      activity: 'Harvesting', 
      status: 'recommended', 
      icon: <Tractor className="w-5 h-5" />,
      reason: 'Low humidity (75%) and good visibility makes today ideal for harvesting. Rain starting tomorrow',
      tip: 'Focus on harvesting today before rain arrives'
    },
    { 
      activity: 'Pesticide Application', 
      status: 'avoid', 
      icon: <Shield className="w-5 h-5" />,
      reason: 'Wind speed is too high (12 km/h) - pesticides may drift. Rain expected later will wash away chemicals',
      tip: 'Wait until Saturday when conditions are calm and dry'
    },
  ];

  const weekInsights = [
    {
      title: 'Rainfall Analysis',
      icon: <CloudRain className="w-6 h-6 text-blue-500" />,
      data: '85mm expected',
      description: 'Heavy rainfall on Wednesday & Thursday. This is 40% above normal for this period. Fields may get waterlogged - ensure proper drainage systems are clear.',
      impact: 'high'
    },
    {
      title: 'Temperature Trend',
      icon: <Thermometer className="w-6 h-6 text-orange-500" />,
      data: '27-32°C range',
      description: 'Temperatures remain ideal for most crops. Heat stress is unlikely. Perfect conditions for vegetable growth and fruit development.',
      impact: 'positive'
    },
    {
      title: 'Soil Moisture Forecast',
      icon: <Droplets className="w-6 h-6 text-green-500" />,
      data: 'Optimal until Thursday',
      description: 'Current soil moisture at 65% will increase to 90% after Wednesday\'s rain. No irrigation needed for the next 5 days after the rain.',
      impact: 'positive'
    },
    {
      title: 'Pest & Disease Risk',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      data: 'Moderate to High',
      description: 'High humidity + warm temps after rain create ideal conditions for fungal diseases and pests. Monitor your crops closely from Thursday onwards.',
      impact: 'warning'
    },
  ];

  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'sunny': return <Sun className="w-10 h-10 text-yellow-500" />;
      case 'cloudy': return <Cloudy className="w-10 h-10 text-gray-400" />;
      case 'rainy': return <CloudRain className="w-10 h-10 text-blue-500" />;
      default: return <Cloud className="w-10 h-10 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'recommended': return 'border-green-300 bg-green-50';
      case 'wait': return 'border-yellow-300 bg-yellow-50';
      case 'avoid': return 'border-red-300 bg-red-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'recommended': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'wait': return <Info className="w-5 h-5 text-yellow-600" />;
      case 'avoid': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AgroStack</h1>
                <p className="text-xs text-gray-500">{t.header}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'yo' : 'en')}
                className="hidden sm:flex items-center gap-2 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-xl transition font-medium text-green-700 text-sm"
              >
                <span>🌍</span>
                <span>{language === 'en' ? 'Yorùbá' : 'English'}</span>
              </button>
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{language === 'en' ? location : 'Èkó, Nàìjíríà'}</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Current Weather Hero */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl p-8 mb-8 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" />
                <p className="text-green-100">{language === 'en' ? location : 'Èkó, Nàìjíríà'}</p>
              </div>
              <h2 className="text-6xl font-bold mb-2">{currentWeather.temp}°C</h2>
              <p className="text-2xl text-green-100 mb-1">{currentWeather.condition}</p>
              <p className="text-sm text-green-100 mb-6">{language === 'en' ? 'Feels like' : 'Ó dà bí'} {currentWeather.feelsLike}°C</p>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <p className="text-sm text-green-100 mb-1">{t.farmSummary}</p>
                <p className="text-white font-medium">{t.farmSummaryText}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-green-100">{t.humidity}</p>
                      <p className="font-semibold">{currentWeather.humidity}%</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-100">{t.humidityDesc}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-green-100">{t.windSpeed}</p>
                      <p className="font-semibold">{currentWeather.windSpeed} km/h</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-100">{t.windDesc}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sprout className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-green-100">{t.soilMoisture}</p>
                      <p className="font-semibold">{currentWeather.soilMoisture}%</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-100">{t.soilDesc}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-green-100">{t.uvIndex}</p>
                      <p className="font-semibold">{currentWeather.uvIndex} - {language === 'en' ? 'High' : 'Gíga'}</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-100">{t.uvDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Activities */}
        <section className="mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.todayActivities}</h3>
            <p className="text-gray-600">{t.todayActivitiesDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {todayActivities.map((item, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl p-6 border-2 ${getStatusColor(item.status)} transition hover:shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.status === 'recommended' ? 'bg-green-100 text-green-600' :
                      item.status === 'wait' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.activity}</h4>
                    </div>
                  </div>
                  {getStatusIcon(item.status)}
                </div>
                
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{item.reason}</p>
                
                <div className="bg-white/60 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-700 mb-1">💡 {t.proTip}:</p>
                  <p className="text-xs text-gray-600">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Insights */}
        <section className="mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.weekInsights}</h3>
            <p className="text-gray-600">{t.weekInsightsDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weekInsights.map((insight, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                    {insight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{insight.title}</h4>
                    <p className="text-2xl font-bold text-green-600">{insight.data}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7-Day Forecast */}
        <section className="mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.forecast7Day}</h3>
            <p className="text-gray-600">{t.forecast7DayDesc}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {weeklyForecast.map((day, idx) => (
              <div 
                key={idx}
                className={`p-6 hover:bg-gray-50 transition ${
                  idx !== weeklyForecast.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-center min-w-[80px]">
                      <p className="font-bold text-gray-900 text-lg">{day.day}</p>
                      <p className="text-xs text-gray-500">{day.date}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {getWeatherIcon(day.condition)}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl font-bold text-gray-900">{day.high}°</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-lg text-gray-500">{day.low}°</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <Droplets className="w-4 h-4" />
                          <span className="font-medium">{day.rain}% {t.rainChance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">{t.farmAdvice}</p>
                    <p className="text-sm font-semibold text-gray-900">{day.advice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weather Alert */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.weatherAlerts}</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-7 h-7 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {language === 'en' ? 'Heavy Rainfall Warning' : 'Ìkìlọ̀ Òjò Líle'}
                  </h4>
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">{t.highPriority}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>{t.whatToExpect}:</strong> {language === 'en' 
                    ? 'Intense rainfall of 50-70mm expected on Wednesday, November 13. This is heavy rain that could cause waterlogging and soil erosion.'
                    : 'Òjò líle 50-70mm ni a retí ní Ọjọ́rú, Oṣù Kọ́kànlá ọjọ́ 13. Èyí jẹ́ òjò líle tó lè fa kíkún omi àti ìparẹ́ ilẹ̀.'}
                </p>
                <div className="bg-white rounded-xl p-4 border border-yellow-200 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">🛡️ {t.protectFarm}:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {language === 'en' ? (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Clear all drainage channels and gutters today and tomorrow</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Harvest any ready crops before Wednesday morning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Cover young seedlings and sensitive crops with tarps or shade nets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Secure farm equipment and tools in sheltered areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Check livestock shelter and ensure proper drainage</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Ṣí gbogbo ọ̀nà ìṣàn omi àti òfìfo lónìí àti ọ̀la</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Kórè èyíkéyìí tó ti pé kí Ọjọ́rú òwúrọ̀ tó dé</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Bo àwọn irúgbìn tuntun àti èyí tó ṣòro pẹ̀lú aṣọ tàbí àwọ̀n òjìji</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Tò àwọn ẹ̀rọ oko àti irinṣẹ́ sí àyè tó ní ààbò</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Ṣàyẹ̀wò ilé ẹran-ọ̀sìn kí o sì rí dájú pé ìṣàn omi dára</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>{t.validPeriod}:</strong> {language === 'en' 
                    ? 'Wednesday, Nov 13, 6:00 AM - Thursday, Nov 14, 6:00 PM'
                    : 'Ọjọ́rú, Oṣù 11 Ọjọ́ 13, 6:00 Òwúrọ̀ - Ọjọ́bọ̀, Oṣù 11 Ọjọ́ 14, 6:00 Àṣálẹ́'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}