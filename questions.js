const QUESTIONS = [
  {
    question: "TDT'nin açılımı nedir?",
    options: ["Türk Devletleri Teşkilatı", "Türk Dünyası Topluluğu", "Türk Devletleri Topluluğu"],
    answer: 0
  },
  {
    question: "TDT'nin amacı nedir?",
    options: ["Türk devletleri arasında iş birliği yapmak", "Sadece spor organizasyonu düzenlemek", "Yeni ülkeler kurmak"],
    answer: 0
  },
  {
    question: "TÜRKSOY hangi alanda faaliyet gösterir?",
    options: ["Kültür ve sanat", "Tarım", "Savunma"],
    answer: 0
  },
  {
    question: "TİKA'nın görevi nedir?",
    options: ["Kalkınma ve iş birliği projeleri yapmak", "Futbol turnuvası düzenlemek", "Vergi toplamak"],
    answer: 0
  },
  {
    question: "YTB hangi alanda çalışır?",
    options: ["Yurtdışındaki Türklerle ilişkiler", "Uzay araştırmaları", "Denizcilik"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü neyi tanıtır?",
    options: ["Türk dili ve kültürü", "Otomobil üretimi", "Madencilik"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi neden oluşturulmuştur?",
    options: ["İletişimi kolaylaştırmak için", "İngilizceyi kaldırmak için", "Matematik öğretmek için"],
    answer: 0
  },
  {
    question: "Türk Dünyası Kültür Başkentleri hangi amaçla seçilir?",
    options: ["Kültürel tanıtım yapmak için", "Başkent değiştirmek için", "Nüfusu artırmak için"],
    answer: 0
  },
  {
    question: "TDT üyeleri genellikle hangi ortak özelliğe sahiptir?",
    options: ["Türk dili konuşmaları", "Aynı para birimini kullanmaları", "Aynı bayrağa sahip olmaları"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un çalışmaları daha çok neyi korumayı amaçlar?",
    options: ["Kültürel mirası", "Petrol üretimini", "Hava yollarını"],
    answer: 0
  },
  {
    question: "TİKA'nın açılımı nedir?",
    options: ["Türk İşbirliği ve Koordinasyon Ajansı", "Türk İletişim Kurumu Ajansı", "Türkiye Kalkınma Ajansı"],
    answer: 0
  },
  {
    question: "YTB'nin açılımında yer alan 'Y' harfi neyi ifade eder?",
    options: ["Yurtdışı", "Yatırım", "Yüksek"],
    answer: 0
  },
  {
    question: "Yunus Emre kimdir?",
    options: ["Türk şairi ve düşünürü", "Futbolcu", "Bilim insanı"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi hangi alanla ilgilidir?",
    options: ["Yazı ve dil", "Spor", "Tarım"],
    answer: 0
  },
  {
    question: "TDT ülkeleri en çok hangi konuda birbirine yakındır?",
    options: ["Dil ve kültür", "İklim", "Nüfus"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un etkinliklerinde en çok ne görülür?",
    options: ["Kültürel faaliyetler", "Askeri tatbikatlar", "Fabrika açılışları"],
    answer: 0
  },
  {
    question: "TİKA projeleri genellikle ne sağlar?",
    options: ["Kalkınma desteği", "Vergi artışı", "Seçim düzenleme"],
    answer: 0
  },
  {
    question: "YTB'nin çalışmaları en çok kimlere yöneliktir?",
    options: ["Yurtdışındaki Türkler", "Astronotlar", "Çiftçiler"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü hangi ülkelerde faaliyet gösterebilir?",
    options: ["Birçok farklı ülkede", "Sadece Türkiye'de", "Sadece Avrupa'da"],
    answer: 0
  },
  {
    question: "Türk Dünyası Kültür Başkentleri neyi tanıtır?",
    options: ["Şehrin kültürünü", "Madenlerini", "Askeri gücünü"],
    answer: 0
  },
  {
    question: "TDT bir … kuruluşudur.",
    options: ["İş birliği", "Spor", "Eğlence"],
    answer: 0
  },
  {
    question: "TÜRKSOY hangi ülkeler arasında kültürel bağ kurar?",
    options: ["Türk dünyası ülkeleri arasında", "Sadece Avrupa ülkeleri arasında", "Sadece Amerika kıtasında"],
    answer: 0
  },
  {
    question: "TİKA'nın projeleri en çok hangi alana katkı sağlar?",
    options: ["Eğitim ve kalkınma", "Yarış otomobilleri", "Uzay turizmi"],
    answer: 0
  },
  {
    question: "YTB'nin amacı nedir?",
    options: ["Türklerle bağları güçlendirmek", "Futbolcu yetiştirmek", "Maden çıkarmak"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü adını kimden almıştır?",
    options: ["Yunus Emre'den", "Fatih Sultan Mehmet'ten", "Atatürk'ten"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi en çok neyi kolaylaştırır?",
    options: ["Yazılı iletişimi", "Deniz taşımacılığını", "Elektrik üretimini"],
    answer: 0
  },
  {
    question: "TDT'nin kısaltması kaç harften oluşur?",
    options: ["3", "4", "5"],
    answer: 0
  },
  {
    question: "TÜRKSOY daha çok hangi kavramla ilişkilidir?",
    options: ["Kültür", "Sanayi", "Tarım"],
    answer: 0
  },
  {
    question: "TİKA'nın çalışmaları hangi kavramla ilişkilidir?",
    options: ["Yardım ve iş birliği", "Yarış", "Reklam"],
    answer: 0
  },
  {
    question: "YTB'nin faaliyetleri hangi bağı güçlendirir?",
    options: ["Kültürel bağları", "Trafik bağlarını", "Ticari markaları"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü hangi değeri yaygınlaştırır?",
    options: ["Türkçe ve Türk kültürü", "Kimya eğitimi", "Denizcilik"],
    answer: 0
  },
  {
    question: "Türk Dünyası Kültür Başkenti seçilen şehir ne kazanır?",
    options: ["Kültürel tanıtım fırsatı", "Başkent olma hakkı", "Yeni para birimi"],
    answer: 0
  },
  {
    question: "TDT üyeleri arasındaki ilişkiler hangi kavrama örnektir?",
    options: ["İş birliği", "Rekabet", "Çatışma"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un düzenlediği etkinliklerde ne tanıtılır?",
    options: ["Türk kültürü", "Uzay teknolojileri", "Madenler"],
    answer: 0
  },
  {
    question: "TİKA hangi ülkenin kurumudur?",
    options: ["Türkiye'nin", "Almanya'nın", "Japonya'nın"],
    answer: 0
  },
  {
    question: "YTB'nin çalışmaları hangi topluluklarla ilgilidir?",
    options: ["Türkler ve akraba topluluklar", "Sadece sporcular", "Sadece öğrenciler"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü en çok hangi alanı destekler?",
    options: ["Dil ve kültür", "Askerlik", "Tarım"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi hangi alanın örneğidir?",
    options: ["Dil birliği çalışması", "Savunma projesi", "Spor organizasyonu"],
    answer: 0
  },
  {
    question: "Türk dünyası kavramı en çok neyi ifade eder?",
    options: ["Türk halklarının ortak kültürel bağlarını", "Tek bir ülkeyi", "Bir spor kulübünü"],
    answer: 0
  },
  {
    question: "Bu kurumların ortak amacı nedir?",
    options: ["Türk dünyası arasındaki bağları güçlendirmek", "Yeni devlet kurmak", "Aynı para birimine geçmek"],
    answer: 0
  },
  {
    question: "TDT'nin faaliyetleri en çok hangi alanda yoğunlaşır?",
    options: ["Siyasi ve kültürel iş birliği", "Eğlence sektörü", "Moda endüstrisi"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un çalışmaları hangi değeri korur?",
    options: ["Kültürel mirası", "Sanayi üretimini", "Spor tesislerini"],
    answer: 0
  },
  {
    question: "TİKA'nın yaptığı bir okul projesi hangi amaca hizmet eder?",
    options: ["Eğitime destek olmak", "Vergi toplamak", "Turizmi azaltmak"],
    answer: 0
  },
  {
    question: "YTB'nin burs programları en çok kimlere yöneliktir?",
    options: ["Öğrencilere", "Futbolculara", "Pilotlara"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü kurslarında en çok ne öğretilir?",
    options: ["Türkçe", "Matematik", "Fizik"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi hangi iletişim türünü kolaylaştırır?",
    options: ["Yazılı iletişimi", "Deniz ulaşımını", "Hava taşımacılığını"],
    answer: 0
  },
  {
    question: "Türk Dünyası Kültür Başkentleri hangi alanda önem taşır?",
    options: ["Kültür", "Askeriye", "Tarım"],
    answer: 0
  },
  {
    question: "TDT'nin üyeleri hangi özelliği paylaşır?",
    options: ["Ortak kültürel bağlar", "Aynı nüfus", "Aynı iklim"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un adındaki 'SOY' kelimesi en çok neyi çağrıştırır?",
    options: ["Ortak kökeni", "Para birimini", "Dağları"],
    answer: 0
  },
  {
    question: "TİKA projeleri genellikle hangi ülkelerde görülür?",
    options: ["İş birliği yapılan ülkelerde", "Sadece Türkiye'de", "Sadece Amerika'da"],
    answer: 0
  },
  {
    question: "YTB'nin çalışmaları hangi bağı güçlendirir?",
    options: ["Türk dünyası bağlarını", "Trafik ağlarını", "Elektrik şebekelerini"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü'nün adı hangi değerle ilişkilidir?",
    options: ["Kültür ve edebiyat", "Sanayi", "Spor"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi oluşturulurken temel amaç nedir?",
    options: ["Alfabeleri yakınlaştırmak", "Yeni dil oluşturmak", "İngilizceyi kaldırmak"],
    answer: 0
  },
  {
    question: "Türk Dünyası Kültür Başkenti seçilen şehir ne düzenleyebilir?",
    options: ["Kültürel etkinlikler", "Askeri tatbikatlar", "Seçimler"],
    answer: 0
  },
  {
    question: "TDT'nin çalışmaları hangi ilişkiyi geliştirir?",
    options: ["Dostluk ve iş birliği", "Rekabet", "Ambargo"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un etkinliklerinde aşağıdakilerden hangisi görülebilir?",
    options: ["Konserler ve sergiler", "Roket testleri", "Otomobil yarışları"],
    answer: 0
  },
  {
    question: "TİKA'nın destek verdiği projeler genellikle ne sağlar?",
    options: ["Fayda ve gelişim", "Nüfus azalması", "Yasaklar"],
    answer: 0
  },
  {
    question: "YTB'nin adında geçen 'Akraba Topluluklar' ifadesi neyi anlatır?",
    options: ["Kültürel yakınlığı olan toplulukları", "Aynı apartmanda yaşayanları", "Aynı okulda okuyanları"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü hangi alanda Türkiye'yi tanıtır?",
    options: ["Dil ve kültür", "Petrol üretimi", "Madencilik"],
    answer: 0
  },
  {
    question: "Türk dünyası kurumlarının ortak hedefi nedir?",
    options: ["Türk halkları arasındaki bağları güçlendirmek", "Tek devlet kurmak", "Tek para birimine geçmek"],
    answer: 0
  },
  // Ek 20 soru - daha detaylı ve zorlayıcı
  {
    question: "TDT'nin önceki adı neydi?",
    options: ["Türk Konseyi", "Türk Birliği", "Türk Federasyonu", "Türk İttifakı"],
    answer: 0
  },
  {
    question: "TÜRKSOY kaç yılında kurulmuştur?",
    options: ["1993", "2001", "1985", "2010"],
    answer: 0
  },
  {
    question: "TİKA kaç yılında kurulmuştur?",
    options: ["1992", "2000", "1980", "2005"],
    answer: 0
  },
  {
    question: "Yunus Emre Enstitüsü kaç yılında kurulmuştur?",
    options: ["2009", "2015", "1999", "2003"],
    answer: 0
  },
  {
    question: "YTB kaç yılında kurulmuştur?",
    options: ["2010", "2005", "2015", "2000"],
    answer: 0
  },
  {
    question: "Ortak Türk Alfabesi kaç harften oluşur?",
    options: ["34", "29", "26", "40"],
    answer: 0
  },
  {
    question: "TDT'nin bayrağında hangi renk hakimdir?",
    options: ["Mavi", "Kırmızı", "Yeşil", "Sarı"],
    answer: 0
  },
  {
    question: "Türk dünyasının ortak müzik aleti hangisidir?",
    options: ["Kopuz", "Piyano", "Gitar", "Keman"],
    answer: 0
  },
  {
    question: "TİKA en çok hangi bölgede aktiftir?",
    options: ["Orta Asya", "Güney Amerika", "Kuzey Avrupa", "Antarktika"],
    answer: 0
  },
  {
    question: "Nevruz Türk dünyasında hangi geleneği temsil eder?",
    options: ["Bahar bayramı", "Hasat festivali", "Kış şenliği", "Yaz kampı"],
    answer: 0
  },
  {
    question: "TDT üye ülkelerinden biri hangisidir?",
    options: ["Azerbaycan", "Almanya", "Fransa", "Japonya"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un çalışma alanı aşağıdakilerden hangisidir?",
    options: ["Sanat ve kültür", "Havacılık", "Madencilik", "Otomotiv"],
    answer: 0
  },
  {
    question: "Hangi kurum Türkçe öğretimi için yurt dışında merkezler açar?",
    options: ["Yunus Emre Enstitüsü", "TİKA", "TDT", "TÜRKSOY"],
    answer: 0
  },
  {
    question: "TDT'nin merkezi nerededir?",
    options: ["İstanbul", "Ankara", "Bakü", "Astana"],
    answer: 0
  },
  {
    question: "TÜRKSOY'un merkezi nerededir?",
    options: ["Ankara", "İstanbul", "Taşkent", "Bişkek"],
    answer: 0
  },
  {
    question: "YTB'nin açılımında 'B' harfi neyi ifade eder?",
    options: ["Başkanlığı", "Birliği", "Bakanlığı", "Bürosu"],
    answer: 0
  },
  {
    question: "TDT'nin kuruluş amacı hangi kavramla özetlenebilir?",
    options: ["Türk birliği ve dayanışma", "Askeri güç", "Ticari kazanç", "Sınır genişletme"],
    answer: 0
  },
  {
    question: "Türk Dünyası Kültür Başkenti uygulaması hangi kurumun girişimidir?",
    options: ["TÜRKSOY", "TİKA", "YTB", "NATO"],
    answer: 0
  },
  {
    question: "Aşağıdakilerden hangisi TDT gözlemci üyesidir?",
    options: ["Macaristan", "Almanya", "İtalya", "Kanada"],
    answer: 0
  },
  {
    question: "YTB'nin 'Türkiye Bursları' programı ne sağlar?",
    options: ["Uluslararası öğrencilere burs", "Sporculara maaş", "Çiftçilere kredi", "Askerlere prim"],
    answer: 0
  }
];
