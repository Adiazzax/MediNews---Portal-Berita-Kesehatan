import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import NavigationBar from '../Nav/Navigation';
// import Navigation from "../Nav/Navigation";

const Home = () => {
  const [showAllNews, setShowAllNews] = useState(false);

  const data1 = [
    {
      id: 1,
      title: '8 Macam Efek Samping Obat Antibiotik yang Perlu Diketahui',
      category: 'Info Kesehatan',
      releaseDate: '5 jam yang lalu',
      thumbnail: require('../../Aset/Berita1.jpg'),
    },
    {
      id: 2,
      title: 'Jemaah Haji Makin Dipermudah Mendapatkan Obat dengan Sistem Pendistribusian Baru',
      category: 'Info Kesehatan',
      releaseDate: '5 jam yang lalu',
      thumbnail: require('../../Aset/Berita2.jpg'),
    },
    {
      id: 3,
      title: 'Tahun 2023, Seluruh Daerah Ditargetkan Miliki Kawasan Tanpa Rokok',
      category: 'Info Kesehatan',
      releaseDate: '14 menit yang lalu',
      thumbnail: require('../../Aset/Berita3.jpeg'),
    },
    {
      id: 4,
      title: 'Waspadai Dua Penyakit Yang Sering Menyerang Jemaah Haji Lansia di Tanah Suci',
  category: 'Info Kesehatan',
      releaseDate: '4 jam yang lalu',
      thumbnail: require('../../Aset/Berita4.jpg'),
    },
    {
      id: 5,
      title: '4 Cara Mengobati Thalasemia, Ada Transfusi Darah dan Obat',
      category: 'Terapi Pengobatan',
      releaseDate: '2 jam yang lalu',
      thumbnail: require('../../Aset/Berita11.jpg'),
    },
    {
      id: 6,
      title: '5 Obat Herbal Ini Ampuh Turunkan Kadar Gula Darah',
      category: 'Gaya Hidup',
      releaseDate: '5 jam yang lalu',
      thumbnail: require('../../Aset/Berita22.jpeg'),
    },
    {
      id: 7,
      title: 'Hati-hati, Makanan Ini Seharusnya Tidak Dimakan Bersama Telur',
      category: 'Gaya Hidup',
      releaseDate: '1 menit yang lalu',
      thumbnail: require('../../Aset/Berita33.jpeg'),
    },
    {
      id: 8,
      title: 'Satgas COVID-19 Rilis Prokes Terbaru, Masih Wajib Masker di Angkutan Umum?',
      category: 'Info Kesehatan',
      releaseDate: '2 jam yang lalu',
      thumbnail: require('../../Aset/Berita44.jpeg'),
    },
    
    // Tambahkan berita lainnya di sini
  ];
  const data2 = [
    {
      id: 1,
      title: '4 Cara Mengobati Thalasemia, Ada Transfusi Darah dan Obat',
      category: 'Terapi Pengobatan',
      releaseDate: '2 jam yang lalu',
      thumbnail: require('../../Aset/Berita11.jpg'),
    },
    {
      id: 2,
      title: '5 Obat Herbal Ini Ampuh Turunkan Kadar Gula Darah',
      category: 'Gaya Hidup',
      releaseDate: '5 jam yang lalu',
      thumbnail: require('../../Aset/Berita22.jpeg'),
    },
    {
      id: 3,
      title: 'Hati-hati, Makanan Ini Seharusnya Tidak Dimakan Bersama Telur',
      category: 'Gaya Hidup',
      releaseDate: '1 hari yang lalu',
      thumbnail: require('../../Aset/Berita33.jpeg'),
    },
    {
      id: 4,
      title: 'Satgas COVID-19 Rilis Prokes Terbaru, Masih Wajib Masker di Angkutan Umum?',
      category: 'Info Kesehatan',
      releaseDate: '2 hari yang lalu',
      thumbnail: require('../../Aset/Berita44.jpeg'),
    },
    {
      id: 5,
      title: '8 Macam Efek Samping Obat Antibiotik yang Perlu Diketahui',
      category: 'Info Kesehatan',
      releaseDate: '5 hari yang lalu',
      thumbnail: require('../../Aset/Berita1.jpg'),
    },
    {
      id: 6,
      title: 'Jemaah Haji Makin Dipermudah Mendapatkan Obat dengan Sistem Pendistribusian Baru',
      category: 'Info Kesehatan',
      releaseDate: '5 jam yang lalu',
      thumbnail: require('../../Aset/Berita2.jpg'),
    },
    {
      id: 7,
      title: 'Tahun 2023, Seluruh Daerah Ditargetkan Miliki Kawasan Tanpa Rokok',
      category: 'Info Kesehatan',
      releaseDate: '14 menit yang lalu',
      thumbnail: require('../../Aset/Berita3.jpeg'),
    },
    {
      id: 8,
      title: 'Waspadai Dua Penyakit Yang Sering Menyerang Jemaah Haji Lansia di Tanah Suci',
  category: 'Info Kesehatan',
      releaseDate: '4 jam yang lalu',
      thumbnail: require('../../Aset/Berita4.jpg'),
    },
    // Tambahkan berita lainnya di sini
  ];

  const renderCompact1Item = ({ item }) => (
    <TouchableOpacity style={styles.newsCardCompact}>
      <Image source={item.thumbnail} style={styles.newsThumbnailCompact} />
      <View style={styles.newsInfoContainer}>
        <Text style={styles.newsTitleCompact} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.releaseDateText}>{item.releaseDate}</Text>
      </View>
    </TouchableOpacity>
    
  );

  const renderCompact2Item = ({ item }) => (
    <TouchableOpacity style={styles.newsCardCompact}>
      <Image source={item.thumbnail} style={styles.newsThumbnailCompact} />
      <View style={styles.newsInfoContainer}>
        <Text style={styles.newsTitleCompact} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.releaseDateText}>{item.releaseDate}</Text>
      </View>
    </TouchableOpacity>
  );
  

  const handleToggleNews = () => {
    setShowAllNews(!showAllNews);
  };

  return (
    <>
      <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require('../../Aset/search.png')} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      <View style={styles.newsContainer}>
        <Text style={styles.sectionTitle}>Berita Hari Ini</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data1.map(item => (
            <TouchableOpacity key={item.id} style={[styles.newsCard, { marginRight: 16 }]}>
              <Image source={item.thumbnail} style={styles.newsThumbnail} />
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.categoryText}>{item.category}</Text>
              <Text style={styles.releaseDateText}>{item.releaseDate}</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Detail Selengkapnya</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Hanya Untuk Anda</Text>
        <TouchableOpacity style={styles.categoryIconContainer} onPress={handleToggleNews}>
          <Image source={require('../../Aset/right.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.newsContainerCompact}>
        {showAllNews ? (
          <FlatList
            data={data2}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCompact2Item}
            contentContainerStyle={styles.flatListContent}
          />
          
        ) : (
          <FlatList
            data={data2.slice(0, 1)}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCompact1Item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          
        )}
      </View>
    </ScrollView>

        <View>
          <NavigationBar/>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 45,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#68B984',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 16,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryIconContainer: {
    marginLeft: 8,
  },
  categoryIcon: {
    width: 20,
    height: 20,
  },
  newsContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 29,
    width: 250,
    marginBottom: 6, // Atur lebar berita utama
  },
  newsThumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    marginBottom: 4,
  },
  releaseDateText: {
    fontSize: 12,
    color: '#999',
  },
  readMoreButton: {
    backgroundColor: '#68B984',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  readMoreButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  newsContainerCompact: {
    marginBottom: 16,
  },
  newsCardCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#F5F5F5',
    // borderRadius: 8,
    // marginBottom: 16,
    // padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    width: 355,
    marginBottom: 6,
  },
  newsThumbnailCompact: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  newsInfoContainer: {
    flex: 1,
  },
  newsTitleCompact: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  // readMoreButtonCompact: {
  //   backgroundColor: '#FFC200',
  //   paddingHorizontal: 12,
  //   paddingVertical: 8,
  //   borderRadius: 4,
  //   alignSelf: 'flex-start',
  // },
});

export default Home;