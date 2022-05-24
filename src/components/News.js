import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsAction } from '../redux/Actions';
import NewsAPI from "../services/NewsAPI";
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";

const News=()=> {
  const { news } = useSelector((state)=> state.news);
  const dispatch = useDispatch();

  let params = useParams();
//   if(params.category ==='programming'||params.category ==='covid'){
//     console.log(`alinpar ${params.category}`);
//   }else{
//     console.log(`alinpar ${params.query}`);
//   }
  

  const fetchNews = async (query) => {
		try {
			// const data = await NewsAPI.getNews(query);
        const data = [
          {
              "source": {
                  "id": null,
                  "name": "Kompas.com"
              },
              "author": "Lulu Lukyani",
              "title": "Sistem Pernapasan Buaya - Kompas.com - KOMPAS.com",
              "description": "Seperti semua reptil, buaya bernapas dengan paru-paru bukan dengan insang.",
              "url": "https://www.kompas.com/sains/read/2022/05/19/133200623/sistem-pernapasan-buaya",
              "urlToImage": "https://asset.kompas.com/crops/CLET6UTMDHtmMZ3KjB8MO-MrW-0=/1x35:490x361/780x390/filters:watermark(data/photo/2020/03/10/5e6775c625c94.png,0,-0,1)/data/photo/2021/04/03/60685114f349c.jpeg",
              "publishedAt": "2022-05-19T06:32:00Z",
              "content": null
          },
          {
              "source": {
                  "id": null,
                  "name": "Ayobandung.com"
              },
              "author": "Eneng Reni Nuraisyah Jamil",
              "title": "Oppo Reno 7 dan Daftar Harga 13 HP Oppo Terbaru Periode Mei 2022 - Ayo Bandung - Ayo Bandung",
              "description": "Oppo Reno 7 serta harga Oppo reno 7 periode Mei 2022. Cek HP Oppo terbaru khusus Oppo terbaru 2022 kelas HP 5G.",
              "url": "https://www.ayobandung.com/bisnis/pr-793420043/oppo-reno-7-dan-daftar-harga-13-hp-oppo-terbaru-periode-mei-2022",
              "urlToImage": "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2022/04/04/735314472.jpg",
              "publishedAt": "2022-05-19T05:48:04Z",
              "content": "Oppo Reno 7 serta harga Oppo reno 7 periode Mei 2022. Cek HP Oppo terbaru khusus Oppo terbaru 2022 kelas HP 5G.\r\nLENGKONG, AYOBANDUNG.COM -- Sederet merek ponsel berlomba untuk merilis perangkat terb… [+1347 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "YouTube"
              },
              "author": null,
              "title": "Rusia Usir Militan Ukraina dengan Rudal, Sebagian Mencoba Lari Bahkan Merunduk - Tribun Timur",
              "description": "TRIBUN-TIMUR.COM- Komisaris militer Daniil Levin menunjukkan rekaman video posisi Angkatan Bersenjata Ukraina mencoba lari dari serangan rudal Rusia. Detik-d...",
              "url": "https://www.youtube.com/watch?v=wnSIS8McPU4",
              "urlToImage": "https://i.ytimg.com/vi/wnSIS8McPU4/hqdefault.jpg",
              "publishedAt": "2022-05-19T05:45:29Z",
              "content": null
          },
          {
              "source": {
                  "id": null,
                  "name": "Www.tek.id"
              },
              "author": "Dommara Hadi S",
              "title": "Xiaomi resmi luncurkan Redmi 10A ke Indonesia, ponsel satu jutaan dengan spek mumpuni - tek.id",
              "description": "Xiaomi resmi memperkenalkan Redmi 10A, anggota dari seri Redmi 10 ke Indonesia. Ponsel ini masuk dalam kategori entry-level yang akan dijual di harga satu jutaan.",
              "url": "https://www.tek.id/gadget/xiaomi-resmi-luncurkan-redmi-10a-ke-indonesia-b2fjV9nNP",
              "urlToImage": "https://img.tek.id/share/content/2022/05/19/51351/xiaomi-resmi-luncurkan-redmi-10a-ke-indonesia-ponsel-satu-jutaan-dengan-spek-mumpuni-YoOz2mBCY5.jpg",
              "publishedAt": "2022-05-19T05:22:06Z",
              "content": "Xiaomi kembali mengumumkan peluncuran ponsel entry-level terbarunya ke Indonesia yaitu Redmi 10A melalui konferensi pers virtual pada Kamis (19/5). Ponsel ini akan menjadi penerus seri Xiaomi sebelum… [+1777 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Kompas.com"
              },
              "author": "advertorial",
              "title": "TBC Bisa Disembuhkan, asalkan Orang dengan TBC Lakukan 6 Langkah Penting Ini - Kompas.com - Kompas.com",
              "description": "Hingga kini, masih banyak masyarakat yang percaya bahwa tuberkulosis atau TBC tidak bisa disembuhkan.",
              "url": "https://biz.kompas.com/read/2022/05/19/122006728/tbc-bisa-disembuhkan-asalkan-orang-dengan-tbc-lakukan-6-langkah-penting-ini",
              "urlToImage": "https://asset.kompas.com/crops/bmfwuYQjIFDgPc4zfQLwByFRVBA=/0x0:780x520/780x390/data/photo/2022/05/19/6285d36d33dd7.jpg",
              "publishedAt": "2022-05-19T05:20:00Z",
              "content": null
          },
          {
              "source": {
                  "id": null,
                  "name": "Detik.com"
              },
              "author": "Afif Farhan",
              "title": "Klasemen Medali SEA Games 2021: Indonesia Dipepet Singapura - detikSport",
              "description": "Persaingan di klasemen medali SEA Games 2021 terus panas. Filipina, Indonesia, dan Singapura bersaing ketat di bawah Thailand. Perolehan emasnya mepet-mepet!",
              "url": "https://sport.detik.com/sport-lain/d-6084802/klasemen-medali-sea-games-2021-indonesia-dipepet-singapura",
              "urlToImage": "https://awsimages.detik.net.id/api/wm/2022/05/18/indonesia-rebut-emas-panahan-recurve-beregu-putra-9_169.jpeg?wid=54&w=650&v=1&t=jpeg",
              "publishedAt": "2022-05-19T05:10:31Z",
              "content": "Jakarta - Persaingan di klasemen medali SEA Games 2021 terus panas. Thailand masih di atas, sedangkan Filipina, Indonesia, dan Singapura bersaing ketat di bawahnya. Perolehan medali emasnya mepet-mep… [+1113 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Okezone.com"
              },
              "author": "Ramdani Bur",
              "title": "3 Pemain Timnas Thailand U-23 di SEA Games 2021 Ini Pernah Bantai Timnas Indonesia 4-0 di Final Piala AFF 2020, Siapa Saja? - Bola Okezone",
              "description": "Berikut 3 pemain Timnas Thailand U-23 di SEA Games 2021 yang pernah bantai Timnas Indonesia 4-0 di final Piala AFF 2020.",
              "url": "https://bola.okezone.com/read/2022/05/19/51/2596628/3-pemain-timnas-thailand-u-23-di-sea-games-2021-ini-pernah-bantai-timnas-indonesia-4-0-di-final-piala-aff-2020-siapa-saja",
              "urlToImage": "https://img.okezone.com/content/2022/05/19/51/2596628/3-pemain-timnas-thailand-u-23-di-sea-games-2021-ini-pernah-bantai-timnas-indonesia-4-0-di-final-piala-aff-2020-siapa-saja-dICAfIkbV7.jpg",
              "publishedAt": "2022-05-19T05:00:09Z",
              "content": "SEBANYAK 3 pemain Timnas Thailand U-23 di SEA Games 2021 yang pernah bantai Timnas Indonesia 4-0 di leg I final Piala AFF 2020 akan dibahas dalam artikel ini. Sekadar diketahui, hari ini Kamis (19/5/… [+2606 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Pikiran-rakyat.com"
              },
              "author": "Damai Lestari",
              "title": "Dulu Dijual Mahal, HP Spek Dewa Xiaomi Redmi Note 10 5G Kini Cuma Dijual Segini oleh Pabrikan - Jakpus News - Jakpus News",
              "description": "Xiaomi tak henti-hentinya memberikan diskon kepada pecintanya di seluruh tanah air.\nJika saat ini kamu sedang mencari ponsel kelas baca ini.",
              "url": "https://jakpusnews.pikiran-rakyat.com/gaya-hidup/pr-444512459/dulu-dijual-mahal-hp-spek-dewa-xiaomi-redmi-note-10-5g-kini-cuma-dijual-segini-oleh-pabrikan",
              "urlToImage": "https://assets.pikiran-rakyat.com/crop/247x183:1339x669/750x500/photo/2021/09/08/924931322.jpg",
              "publishedAt": "2022-05-19T04:45:10Z",
              "content": "JakPusNews.com - Xiaomi tak henti-hentinya memberikan diskon kepada pecintanya di seluruh tanah air.\r\nJika saat ini kamu sedang mencari ponsel kelas atas dengan jaringan 5G berharga murah, maka kamu … [+774 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Cnnindonesia.com"
              },
              "author": "CNN Indonesia",
              "title": "Gelar RUPS Siang Ini, Allo Bank Tunjuk Aviliani Jadi Komisaris Utama - CNN Indonesia",
              "description": "Pemegang saham Allo Bank menunjuk Ekonom Senior Aviliani sebagai Komisaris Utama dan Indra Utoyo sebagai Direktur Utama perusahaan pada RUPS, Kamis (19/5).",
              "url": "https://www.cnnindonesia.com/ekonomi/20220519112424-78-798435/gelar-rups-siang-ini-allo-bank-tunjuk-aviliani-jadi-komisaris-utama",
              "urlToImage": "https://akcdn.detik.net.id/visual/2016/08/01/c9aea478-6a55-4357-8443-60a03e94f5ec_169.jpg?w=650",
              "publishedAt": "2022-05-19T04:35:12Z",
              "content": "Jakarta, CNN Indonesia -- Ultimate Shareholder Allo Bank Indonesia Chairul Tanjung akan menunjuk Ekonom Senior Aviliani sebagai Komisaris Utama Allo Bank, mendampingi Indra Utoyo selaku Direktur Utam… [+1872 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Pikiran-rakyat.com"
              },
              "author": "Babah Pram",
              "title": "Ricky Berjalan ke Makam Keisya Lalu Tusuk Nino dengan Sebilah Pisau, Sosok Ini Tolong Suami Elsa Ikatan Cinta - Potensi Bisnis - Potensi Bisnis",
              "description": "Sinetron Ikatan Cinta 19 Mei 2022, diprediksi akan mengisahkan tentang Ricky yang datang dan membuat kerusuhan di pemakaman Keisya.",
              "url": "https://potensibisnis.pikiran-rakyat.com/entertainment/pr-694512186/ricky-berjalan-ke-makam-keisya-lalu-tusuk-nino-dengan-sebilah-pisau-sosok-ini-tolong-suami-elsa-ikatan-cinta",
              "urlToImage": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/05/19/285866951.jpg",
              "publishedAt": "2022-05-19T04:17:00Z",
              "content": null
          },
          {
              "source": {
                  "id": null,
                  "name": "Ayobandung.com"
              },
              "author": "Eneng Reni Nuraisyah Jamil",
              "title": "Daftar Samsung Terbaru Mei 2022: Ada Harga Samsung A52 hingga Samsung A53 Periode Mei - Ayo Bandung - Ayo Bandung",
              "description": "Samsung terbaru 2022 dari Samsung Galaxy A52 hingga Samsung Galaxy M53 ada di sini. Cek HP Samsung terbaru periode Mei 2022.",
              "url": "https://www.ayobandung.com/bisnis/pr-793419449/daftar-samsung-terbaru-mei-2022-ada-harga-samsung-a52-hingga-samsung-a53-periode-mei",
              "urlToImage": "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2022/04/29/1140163264.jpg",
              "publishedAt": "2022-05-19T04:11:19Z",
              "content": "Samsung terbaru 2022 dari Samsung Galaxy A52 hingga Samsung Galaxy M53 ada di sini. Cek HP Samsung terbaru periode Mei 2022.\r\nLENGKONG, AYOBANDUNG.COM -- Samsung masih menjadi salah merek ponsel yang… [+1386 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Haibunda.com"
              },
              "author": "Tim Haibunda",
              "title": "Kenali 5 Gejala Awal Virus Hendra, 7 dari 10 Orang yang Terpapar Bisa Meninggal - HaiBunda",
              "description": "Virus hendra belakangan tengah bikin geger dunia lantaran varian barunya disebut bisa menular ke kuda dan manusia. Lalu, seperti apa gejala virus hendra?",
              "url": "https://www.haibunda.com/parenting/20220518202246-60-274143/kenali-5-gejala-awal-virus-hendra-7-dari-10-orang-yang-terpapar-bisa-meninggal",
              "urlToImage": "https://akcdn.detik.net.id/visual/2022/05/18/ilustrasi-virus-hendra_169.jpeg?w=650",
              "publishedAt": "2022-05-19T04:10:55Z",
              "content": "Jakarta -\r\n Munculnya varian virus hendra membuat masyarakat dunia waswas ya Bunda. Padahal kita baru saja melewati masa pandemi COVID-19 dan baru saja memasuki masa endemi.\r\nVirus hendra belakangan … [+2434 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Cnnindonesia.com"
              },
              "author": "CNN Indonesia",
              "title": "Pelat Nomor Putih Berlaku Juni 2022, Pemilik Mobil Harus Apa? - CNN Indonesia",
              "description": "Menurut kepolisian kamera ETLE bisa salah mengidentifikasi pelat nomor dengan dasar warna hitam, sebab dasar pelat diganti menjadi putih.",
              "url": "https://www.cnnindonesia.com/teknologi/20220519100141-384-798399/pelat-nomor-putih-berlaku-juni-2022-pemilik-mobil-harus-apa",
              "urlToImage": "https://akcdn.detik.net.id/visual/2021/09/22/ilustrasi-pelat-nomor-cantik_169.jpeg?w=650",
              "publishedAt": "2022-05-19T04:06:41Z",
              "content": "Jakarta, CNN Indonesia -- Pelat putih akan berlaku pada Juni 2022 alias bulan depan. Penggunaan pelat putih agar mempermudah sistem tilang elektronik atau Electronic Traffic Law Enforcement (ETLE) ya… [+2028 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Sindonews.com"
              },
              "author": "Muhaimin",
              "title": "Rusia Gunakan Senjata Laser di Ukraina, Zelensky Meledek: Senjata Ajaib - SINDOnews",
              "description": "Rusia sedang mencoba untuk menemukan senjata ajaibnya, ledek Zelensky. Rusia telah mengonfirmasi bahwa pasukannya mulai menggunakan generasi baru dari...",
              "url": "https://international.sindonews.com/read/773467/41/rusia-gunakan-senjata-laser-di-ukraina-zelensky-meledek-senjata-ajaib-1652933124",
              "urlToImage": "https://pict-b.sindonews.net/dyn/850/pena/news/2022/05/19/41/773467/rusia-gunakan-senjata-laser-di-ukraina-zelensky-meledek-senjata-ajaib-wbl.jpg",
              "publishedAt": "2022-05-19T04:03:28Z",
              "content": "KIEV - Rusia telah mengonfirmasi bahwa pasukannya mulai menggunakan generasi baru dari senjata laser dalam perangnya di Ukraina. Presiden Ukraina Volodymyr Zelensky meledek dengan menyebutnya sebagai… [+1522 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Tvonenews.com"
              },
              "author": "Bella Ayu Kurnia Putri, Tim TvOne",
              "title": "Versi Kepala Desa Rowo Bayu Banyuwangi, Begini Cerita Kematian 2 Mahasiswa KKN di Desa Penari - tvOneNews.com",
              "description": "Berita Versi Kepala Desa Rowo Bayu Banyuwangi, Begini Cerita Kematian 2 Mahasiswa KKN di Desa Penari terbaru hari ini 2022-05-19 10:57:53 dari sumber yang terpercaya",
              "url": "https://www.tvonenews.com/lifestyle/trend/41510-versi-kepala-desa-rowo-bayu-banyuwangi-begini-cerita-kematian-2-mahasiswa-kkn-di-desa-penari",
              "urlToImage": "https://thumb.tvonenews.com/thumbnail/2022/05/19/6285bf7f39ab3-karakter-badarawuhi-yang-ada-pada-film-kkn-di-desa-penari_665_374.jpg",
              "publishedAt": "2022-05-19T03:57:00Z",
              "content": "Rowo Bayu Banyuwangi mendadak menjadi perbincangan publik. Hal itu dikarenakan Desa tersebut diduga menjadi lokasi asli dari cerita horor terkenal KKN di Desa Penari.\r\nSebagaimana diketahui, film KKN… [+522 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Kontan.co.id"
              },
              "author": "Arif Budianto",
              "title": "Asteroid, Komet & Meteor Itu Berbeda, Berikut Pengertian Masing-Masing - Lifestyle Kontan",
              "description": "Jangan keliru, ya! Asteroid, komet dan meteori itu berbeda, berikut pengertian masing-masing.",
              "url": "https://lifestyle.kontan.co.id/news/asteroid-komet-meteor-itu-berbeda-berikut-pengertian-masing-masing",
              "urlToImage": "https://foto.kontan.co.id/Z0FJKxyhZkO0zz1E0bdWNbC0MNE=/smart/2022/02/09/1191008022p.jpg",
              "publishedAt": "2022-05-19T03:56:58Z",
              "content": "KONTAN.CO.ID - Asteroid, komet dan meteor itu berbeda, berikut pengertian masing-masing benda langit tersebut. Meteor dan komet umumnya dapat terlihat di atas langit dengan pemandangan yang menarik, … [+2004 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Detik.com"
              },
              "author": "Tim detikcom",
              "title": "Pertama Kali, Tentara Rusia Diadili Atas Kejahatan Perang di Ukraina - detikNews",
              "description": "Seorang tentara Rusia berusia 21 tahun mengaku bersalah membunuh seorang warga sipil tak bersenjata di Ukraina.",
              "url": "https://news.detik.com/internasional/d-6084644/pertama-kali-tentara-rusia-diadili-atas-kejahatan-perang-di-ukraina",
              "urlToImage": "https://awsimages.detik.net.id/api/wm/2022/05/19/momen-tentara-rusia-diadili-atas-kejahatan-perang-di-ukraina-3_169.jpeg?wid=54&w=650&v=1&t=jpeg",
              "publishedAt": "2022-05-19T03:56:25Z",
              "content": "Jakarta - Seorang tentara Rusia berusia 21 tahun mengaku bersalah membunuh seorang warga sipil tak bersenjata di Ukraina. Prajurit muda itu diadili pada Rabu (18/5) waktu setempat dalam pengadilan ke… [+1215 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Cnnindonesia.com"
              },
              "author": "CNN Indonesia",
              "title": "Presiden Anggota NATO Kroasia Ngotot Tolak Finlandia-Swedia Gabung - CNN Indonesia",
              "description": "Presiden Kroasia, Zoran Milanovic, menyatakan pada Rabu (18/5), akan menolak Finlandia dan Swedia gabung NATO.",
              "url": "https://www.cnnindonesia.com/internasional/20220519102515-134-798413/presiden-anggota-nato-kroasia-ngotot-tolak-finlandia-swedia-gabung",
              "urlToImage": "https://akcdn.detik.net.id/visual/2022/05/19/presiden-kroasia-zoran-milanovic_169.jpeg?w=650",
              "publishedAt": "2022-05-19T03:55:08Z",
              "content": "Jakarta, CNN Indonesia -- Presiden Kroasia, Zoran Milanovic, menyatakan pada Rabu (18/5), akan menginstruksikan Duta Besar Kroasia untuk NATO, Mario Nobilo, untuk mencegah keinginan Finlandia-Swedia … [+2008 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Suaramerdeka.com"
              },
              "author": "Wahyu Asyari Muntoha",
              "title": "Ramalan Zodiakmu Jumat 20 Mei 2022, Scorpio, Libra, Virgo Lengkap Karir, Keuangan, Asmara dan Kesehatan - Suara Merdeka - Suara Merdeka Network",
              "description": "Ramalan zodiak Scorpio, Libra, Virgo Jumat 20 Mei 2022 menyangkut sisi karir, keuangan, asmara, dan kesehatan.",
              "url": "https://www.suaramerdeka.com/gaya-hidup/pr-043417776/ramalan-zodiakmu-jumat-20-mei-2022-scorpio-libra-virgo-lengkap-karir-keuangan-asmara-dan-kesehatan",
              "urlToImage": "https://assets.promediateknologi.com/crop/0x0:700x407/750x500/photo/2022/04/24/1824203664.jpg",
              "publishedAt": "2022-05-19T03:48:00Z",
              "content": "Suaramerdeka.com - Kami sajikan khusus untuk Anda ramalan zodiakScorpio, Libra, Virgo untuk Jumat20 Mei 2022.\r\nRamalan zodiakScorpio, Libra, VirgoJumat20 Mei 2022 menyangkut sisi karir, keuangan, asm… [+598 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Cnnindonesia.com"
              },
              "author": "CNN Indonesia",
              "title": "Putri KW ke Perempat Final SEA Games 2021 - CNN Indonesia",
              "description": "Putri Kusuma Wardani lolos ke perempat final tunggal putri badminton SEA Games 2021 setelah mengalahkan wakil Vietnam Nguyen Thuy Linh.",
              "url": "https://www.cnnindonesia.com/olahraga/20220519102934-170-798416/putri-kw-ke-perempat-final-sea-games-2021",
              "urlToImage": "https://akcdn.detik.net.id/visual/2022/05/19/sea-games-2021-bulutangkis-beregu-putri-indonesia-lolos-ke-final_169.jpeg?w=650",
              "publishedAt": "2022-05-19T03:35:15Z",
              "content": "Jakarta, CNN Indonesia -- Putri Kusuma Wardani lolos ke perempat final tunggal putri badminton SEA Games 2021 setelah mengalahkan wakil Vietnam Nguyen Thuy Linh dua gim langsung.\r\nDalam pertandingan … [+1341 chars]"
          }
      ];
			dispatch(fetchNewsAction(data));
      
		} catch (error) {
			// console.log(error.message);
		}
	};

	useEffect(() => {
		fetchNews(params.query);
	});


  return (
    <div>
      <h1 className="head__text">D. News</h1>
      <div className="all__news">
        {news
          ? news.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;