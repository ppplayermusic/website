const fs = require('fs');
const path = require('path');

const ru = {
  "metadata": {
    "homeTitle": "PPPlayer: Бесплатный музыкальный плеер для iOS, Android и Windows | Без регистрации",
    "homeDesc": "PPPlayer — это бесплатное музыкальное приложение для iPhone, Android и Windows. Открывайте артистов, жанры и слушайте мгновенно: без аккаунта, без подписки, бесплатно.",
    "downloadTitle": "Скачать PPPlayer бесплатно",
    "downloadDesc": "Скачайте PPPlayer для iOS, Android или Windows. Бесплатное музыкальное приложение: регистрация не требуется. Начните слушать уже через пару минут.",
    "privacyTitle": "Политика конфиденциальности",
    "privacyDesc": "Политика конфиденциальности PPPlayer: бесплатное музыкальное приложение для iOS, Android и Windows.",
    "termsTitle": "Условия использования",
    "termsDesc": "Условия использования PPPlayer: бесплатное музыкальное приложение для iOS, Android и Windows."
  },
  "nav": {
    "features": "Функции",
    "download": "Скачать бесплатно"
  },
  "footer": {
    "desc": "Музыка, без преград. Бесплатно для iOS, Android и Windows.",
    "product": "Продукт",
    "features": "Функции",
    "download": "Скачать",
    "platforms": "Платформы",
    "ios": "iOS",
    "android": "Android",
    "windows": "Windows",
    "social": "Соцсети",
    "instagram": "Instagram",
    "linkedin": "LinkedIn",
    "facebook": "Facebook",
    "github": "GitHub",
    "legal": "Правовая информация",
    "privacy": "Конфиденциальность",
    "terms": "Условия",
    "copyright": "© {year} PPPlayer. Все права защищены."
  },
  "cookie": {
    "title": "Мы ценим вашу конфиденциальность",
    "desc": "Мы используем файлы cookie для анализа трафика и улучшения вашего опыта. Нажимая «Принять», вы соглашаетесь с использованием нами файлов cookie.",
    "decline": "Отклонить",
    "accept": "Принять все"
  },
  "hero": {
    "title1": "Музыка.",
    "title2": "Без преград.",
    "desc": "Никаких аккаунтов. Никаких подписок. Просто слушай.",
    "getIos": "Скачать для iOS",
    "getAndroid": "Скачать для Android",
    "getMac": "Скачать для Mac",
    "getWindows": "Скачать для Windows"
  },
  "discover": {
    "title": "Найди<br></br>то, что<br></br>стоит послушать."
  },
  "artistRadio": {
    "title": "Бесконечная музыка."
  },
  "goDeeper": {
    "bgText": "FOLLOW",
    "title": "Следуй за музыкой."
  },
  "pressPlay": {
    "title": "Затем, просто слушай."
  },
  "featureGallery": {
    "title": "Всё, что вам нужно.",
    "subtitle": "Красивый, нативный опыт, созданный для производительности.",
    "searchTitle": "Находите именно то, что хотите.",
    "searchDesc": "Мгновенный глобальный поиск по трекам, исполнителям и альбомам.",
    "queueTitle": "Идеальная очередь.",
    "queueDesc": "Управляйте тем, что будет играть дальше, с красивой очередью.",
    "favTitle": "Ваша музыка, ваши правила.",
    "favDesc": "Создайте свою личную медиатеку в один клик. Всегда под рукой.",
    "contextTitle": "Нативный дизайн.",
    "contextDesc": "Нажмите правой кнопкой мыши. Красивые, нативные контекстные меню."
  },
  "noAccount": {
    "title": "Без аккаунта.",
    "subtitle": "Музыка не должна требовать разрешений."
  },
  "platforms": {
    "title": "Ваша музыка. Ваши устройства.",
    "subtitle": "Прекрасно и нативно на Windows, Android и iOS."
  },
  "downloadCTA": {
    "title": "Просто слушай.",
    "getIos": "Скачать для iOS",
    "getAndroid": "Скачать для Android",
    "getMac": "Скачать для Mac",
    "getWindows": "Скачать для Windows"
  },
  "downloadPage": {
    "badge": "100% Бесплатно · Без регистрации",
    "title": "Скачайте <gradient>PPPlayer бесплатно</gradient>",
    "subtitle": "Выберите вашу платформу. Начните слушать через несколько минут.",
    "desc": "Не нужен аккаунт. Не нужен email. Никакой регистрации. Только музыка.",
    "windowsReqLabel": "Системные требования для Windows:",
    "windowsReqDesc": "Windows 10 или новее (64-бит). ~50 МБ. Не требует Microsoft Store."
  },
  "faq": {
    "badge": "FAQ",
    "title": "Частые <gradient>вопросы</gradient>",
    "subtitle": "Всё, что вам нужно знать о PPPlayer."
  },
  "privacy": {
    "title": "Политика конфиденциальности",
    "lastUpdated": "Последнее обновление: Апрель 2025",
    "sections": {
      "s1": {
        "title": "1. Обзор",
        "p": "PPPlayer («мы», «наш», «приложение») обязуется защищать вашу конфиденциальность. Эта политика объясняет, какие данные мы собираем, почему и как они используются, когда вы используете PPPlayer на iOS, Android или Windows."
      },
      "s2": {
        "title": "2. Без регистрации",
        "p": "PPPlayer не требует создания учетной записи. Мы не собираем ваше имя, адрес электронной почты или любую лично идентифицируемую информацию для использования приложения."
      },
      "s3": {
        "title": "3. Данные, которые мы собираем",
        "p1": "Мы можем собирать следующие анонимные данные:",
        "li1": "Отчеты о сбоях и журналы ошибок (для улучшения стабильности)",
        "li2": "Анонимная аналитика использования (длительность сеанса)",
        "li3": "Тип устройства и версия операционной системы",
        "p2": "Мы не собираем: имена, электронные письма, информацию об оплате или точные данные о местоположении."
      },
      "s4": {
        "title": "4. Сторонние сервисы",
        "p": "PPPlayer может использовать сторонние службы для метаданных музыки и аналитики. Эти службы имеют собственные политики конфиденциальности. Мы рекомендуем вам с ними ознакомиться."
      },
      "s5": {
        "title": "5. Хранение данных",
        "p": "Анонимные аналитические данные хранятся не более 12 месяцев. Журналы сбоев удаляются через 90 дней."
      },
      "s6": {
        "title": "6. Ваши права",
        "p": "Поскольку мы не собираем личные данные, у нас нет личной информации для доступа, экспорта или удаления. Если у вас есть вопросы, свяжитесь с нами по указанному ниже адресу."
      },
      "s7": {
        "title": "7. Дети",
        "p": "PPPlayer не предназначен для детей младше 13 лет. Мы намеренно не собираем данные детей."
      },
      "s8": {
        "title": "8. Изменения",
        "p": "Мы можем время от времени обновлять эту политику. Мы укажем дату последнего обновления в верхней части этой страницы."
      },
      "s9": {
        "title": "9. Контакты",
        "p": "Вопросы о политике? Свяжитесь с нами по адресу "
      }
    },
    "back": "← Назад к PPPlayer"
  },
  "terms": {
    "title": "Условия использования",
    "lastUpdated": "Последнее обновление: Апрель 2025",
    "sections": {
      "s1": {
        "title": "1. Принятие условий",
        "p": "Скачивая или используя PPPlayer, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны, пожалуйста, не используйте приложение."
      },
      "s2": {
        "title": "2. Использование приложения",
        "p": "PPPlayer предоставляется бесплатно для личного, некоммерческого использования. Вы соглашаетесь не:",
        "li1": "Декомпилировать или изменять приложение",
        "li2": "Использовать приложение для распространения вредоносного ПО",
        "li3": "Нарушать любые применимые законы во время использования приложения"
      },
      "s3": {
        "title": "3. Без аккаунта",
        "p": "PPPlayer не требует создания учетной записи. Вы можете использовать все функции сразу после скачивания."
      },
      "s4": {
        "title": "4. Интеллектуальная собственность",
        "p": "PPPlayer и его содержимое принадлежат PPPlayer и защищены законами об интеллектуальной собственности. Музыкальный контент, отображаемый в приложении, получен от сторонних провайдеров и подчиняется их соответствующим правам."
      },
      "s5": {
        "title": "5. Отказ от гарантий",
        "p": "PPPlayer предоставляется «как есть» без каких-либо гарантий. Мы не гарантируем бесперебойную работу или отсутствие ошибок в приложении."
      },
      "s6": {
        "title": "6. Ограничение ответственности",
        "p": "В максимальной степени, разрешенной законом, PPPlayer не несет ответственности за любые косвенные, случайные убытки, возникшие в результате вашего использования или невозможности использования приложения."
      },
      "s7": {
        "title": "7. Изменения условий",
        "p": "Мы оставляем за собой право обновлять эти условия в любое время. Продолжение использования приложения после внесения изменений означает принятие новых условий."
      },
      "s8": {
        "title": "8. Контакты",
        "p": "Вопросы об этих условиях? Свяжитесь с нами по адресу "
      }
    },
    "back": "← Назад к PPPlayer"
  }
};

const tr = {
  "metadata": {
    "homeTitle": "PPPlayer: iOS, Android & Windows İçin Ücretsiz Müzik | Hesap Gerekmez",
    "homeDesc": "PPPlayer, iPhone, Android ve Windows için ücretsiz bir müzik uygulamasıdır. Sanatçıları ve türleri keşfedin: hesap yok, kayıt yok, ücretsiz.",
    "downloadTitle": "PPPlayer'ı Ücretsiz İndir",
    "downloadDesc": "PPPlayer'ı iOS, Android veya Windows için indirin. Hesap gerekmez. Dakikalar içinde dinlemeye başlayın.",
    "privacyTitle": "Gizlilik Politikası",
    "privacyDesc": "PPPlayer için Gizlilik Politikası: iOS, Android ve Windows için ücretsiz müzik uygulaması.",
    "termsTitle": "Hizmet Şartları",
    "termsDesc": "PPPlayer için Hizmet Şartları: iOS, Android ve Windows için ücretsiz müzik uygulaması."
  },
  "nav": {
    "features": "Özellikler",
    "download": "Ücretsiz İndir"
  },
  "footer": {
    "desc": "Zorluklar olmadan müzik. iOS, Android ve Windows için ücretsiz.",
    "product": "Ürün",
    "features": "Özellikler",
    "download": "İndir",
    "platforms": "Platformlar",
    "ios": "iOS",
    "android": "Android",
    "windows": "Windows",
    "social": "Sosyal Medya",
    "instagram": "Instagram",
    "linkedin": "LinkedIn",
    "facebook": "Facebook",
    "github": "GitHub",
    "legal": "Yasal",
    "privacy": "Gizlilik",
    "terms": "Şartlar",
    "copyright": "© {year} PPPlayer. Tüm hakları saklıdır."
  },
  "cookie": {
    "title": "Gizliliğinize değer veriyoruz",
    "desc": "Site trafiğini analiz etmek ve deneyiminizi geliştirmek için çerezler kullanıyoruz. \"Kabul Et\" seçeneğine tıklayarak çerez kullanımımızı kabul edersiniz.",
    "decline": "Tümünü Reddet",
    "accept": "Tümünü Kabul Et"
  },
  "hero": {
    "title1": "Müzik.",
    "title2": "Zorluklar olmadan.",
    "desc": "Hesap yok. Abonelik yok. Sadece dinle.",
    "getIos": "iOS İçin İndir",
    "getAndroid": "Android İçin İndir",
    "getMac": "Mac İçin İndir",
    "getWindows": "Windows İçin İndir"
  },
  "discover": {
    "title": "Dinlemeye<br></br>değer<br></br>bir şeyler bul."
  },
  "artistRadio": {
    "title": "Sonsuz dinleme."
  },
  "goDeeper": {
    "bgText": "TAKİP ET",
    "title": "Müziği takip et."
  },
  "pressPlay": {
    "title": "Sonra, sadece dinle."
  },
  "featureGallery": {
    "title": "İhtiyacın olan her şey.",
    "subtitle": "Performans için oluşturulmuş, güzel, yerel bir deneyim.",
    "searchTitle": "Tam olarak istediğini bul.",
    "searchDesc": "Şarkılar, sanatçılar ve albümler arasında anında global arama yap.",
    "queueTitle": "Kusursuz sıra.",
    "queueDesc": "Sıradaki parçaları güzel ve düzenlenebilir bir sırayla yönet.",
    "favTitle": "Senin müziğin, senin kuralların.",
    "favDesc": "Kişisel kitaplığını tek tıklamayla oluştur. Her zaman orada.",
    "contextTitle": "Tasarımla yerel.",
    "contextDesc": "Herhangi bir yere sağ tıkla. Güzel, bağlama duyarlı yerel menüler."
  },
  "noAccount": {
    "title": "Hesap yok.",
    "subtitle": "Müzik izin istememeli."
  },
  "platforms": {
    "title": "Senin müziğin. Cihazların.",
    "subtitle": "Windows, Android ve iOS'te muhteşem yerel görünüm."
  },
  "downloadCTA": {
    "title": "Sadece dinle.",
    "getIos": "iOS İçin İndir",
    "getAndroid": "Android İçin İndir",
    "getMac": "Mac İçin İndir",
    "getWindows": "Windows İçin İndir"
  },
  "downloadPage": {
    "badge": "%100 Ücretsiz · Hesap Gerekmez",
    "title": "<gradient>PPPlayer'ı Ücretsiz</gradient> İndir",
    "subtitle": "Platformunu seç. Dakikalar içinde dinlemeye başla.",
    "desc": "Hesap gerekmez. E-posta yok. Kayıt yok. Sadece müzik.",
    "windowsReqLabel": "Windows sistem gereksinimleri:",
    "windowsReqDesc": "Windows 10 veya üzeri (64-bit). ~50 MB. Microsoft Store gerekmez."
  },
  "faq": {
    "badge": "SSS",
    "title": "Sıkça sorulan <gradient>sorular</gradient>",
    "subtitle": "PPPlayer hakkında bilmen gereken her şey."
  },
  "privacy": {
    "title": "Gizlilik Politikası",
    "lastUpdated": "Son Güncelleme: Nisan 2025",
    "sections": {
      "s1": {
        "title": "1. Genel Bakış",
        "p": "PPPlayer (\"biz\", \"bizim\", \"uygulama\") gizliliğinizi korumaya kararlıdır. Bu politika, PPPlayer'ı kullanırken hangi verileri topladığımızı ve nasıl kullanıldığını açıklar."
      },
      "s2": {
        "title": "2. Hesap Gerekmez",
        "p": "PPPlayer hesap oluşturmanızı gerektirmez. İsminizi, e-posta adresinizi veya tanımlanabilir hiçbir bilgiyi toplamıyoruz."
      },
      "s3": {
        "title": "3. Topladığımız Veriler",
        "p1": "Aşağıdaki anonim ve kimliği belirsiz verileri toplayabiliriz:",
        "li1": "Çökme raporları ve hata kayıtları (uygulama kararlılığını artırmak için)",
        "li2": "Anonim kullanım analizleri (özellik kullanımı, oturum süresi)",
        "li3": "Cihaz türü ve işletim sistemi sürümü",
        "p2": "Toplamadıklarımız: İsimler, e-postalar, ödeme bilgileri veya konum verileri."
      },
      "s4": {
        "title": "4. Üçüncü Taraf Hizmetleri",
        "p": "PPPlayer, müzik meta verileri ve analizleri için üçüncü taraf hizmetleri kullanabilir. Bu hizmetlerin kendi gizlilik politikaları vardır."
      },
      "s5": {
        "title": "5. Veri Saklama",
        "p": "Anonim analiz verileri en fazla 12 ay saklanır. Çökme raporları 90 gün sonra silinir."
      },
      "s6": {
        "title": "6. Haklarınız",
        "p": "Kişisel veri toplamadığımız için erişilecek, dışa aktarılacak veya silinecek kişisel bir bilgi yoktur. Sorularınız varsa bize ulaşın."
      },
      "s7": {
        "title": "7. Çocuklar",
        "p": "PPPlayer 13 yaşından küçük çocuklara yönelik değildir. Bilerek çocuklardan veri toplamıyoruz."
      },
      "s8": {
        "title": "8. Değişiklikler",
        "p": "Bu politikayı zaman zaman güncelleyebiliriz. Son güncelleme tarihi bu sayfanın üst kısmında belirtilir."
      },
      "s9": {
        "title": "9. İletişim",
        "p": "Bu politika hakkında sorularınız mı var? Bize ulaşın: "
      }
    },
    "back": "← PPPlayer'a Dön"
  },
  "terms": {
    "title": "Hizmet Şartları",
    "lastUpdated": "Son Güncelleme: Nisan 2025",
    "sections": {
      "s1": {
        "title": "1. Şartların Kabulü",
        "p": "PPPlayer'ı indirerek veya kullanarak bu Hizmet Şartlarını kabul edersiniz. Kabul etmiyorsanız lütfen uygulamayı kullanmayın."
      },
      "s2": {
        "title": "2. Uygulamanın Kullanımı",
        "p": "PPPlayer kişisel kullanım için ücretsiz sağlanmaktadır. Şunları yapmamayı kabul edersiniz:",
        "li1": "Uygulamada tersine mühendislik yapmamak veya değiştirmemek",
        "li2": "Uygulamayı zararlı içerik dağıtmak için kullanmamak",
        "li3": "Yürürlükteki yasalara aykırı davranmamak"
      },
      "s3": {
        "title": "3. Hesap Gerekmez",
        "p": "PPPlayer hesap oluşturmayı gerektirmez. Tüm özellikleri hemen kullanabilirsiniz."
      },
      "s4": {
        "title": "4. Fikri Mülkiyet",
        "p": "PPPlayer'ın içeriği PPPlayer'a aittir. Uygulama içinde gösterilen müzik içeriği üçüncü taraf sağlayıcılardan alınmıştır ve lisanslarına tabidir."
      },
      "s5": {
        "title": "5. Garanti Reddi",
        "p": "PPPlayer \"olduğu gibi\" sağlanmaktadır. Uygulamanın kesintisiz çalışacağını veya hatasız olacağını garanti etmiyoruz."
      },
      "s6": {
        "title": "6. Sorumluluğun Sınırlandırılması",
        "p": "Yasaların izin verdiği ölçüde, PPPlayer uygulamanın kullanımından kaynaklanan dolaylı veya arızi hasarlardan sorumlu tutulamaz."
      },
      "s7": {
        "title": "7. Şartlardaki Değişiklikler",
        "p": "Bu şartları dilediğimiz zaman güncelleme hakkını saklı tutuyoruz. Değişikliklerden sonra kullanmaya devam etmeniz şartları kabul ettiğiniz anlamına gelir."
      },
      "s8": {
        "title": "8. İletişim",
        "p": "Bu şartlar hakkında sorularınız mı var? Bize ulaşın: "
      }
    },
    "back": "← PPPlayer'a Dön"
  }
};

const fr = {
  "metadata": {
    "homeTitle": "PPPlayer: App Musique Gratuite iOS, Android, Windows | Sans Inscription",
    "homeDesc": "PPPlayer est une application musicale gratuite. Découvrez des artistes et genres sans créer de compte, sans abonnement, gratuitement.",
    "downloadTitle": "Télécharger PPPlayer Gratuitement",
    "downloadDesc": "Téléchargez PPPlayer pour iOS, Android ou Windows. Application de musique gratuite, aucun compte requis.",
    "privacyTitle": "Politique de Confidentialité",
    "privacyDesc": "Politique de confidentialité de PPPlayer: application musicale gratuite.",
    "termsTitle": "Conditions d'Utilisation",
    "termsDesc": "Conditions d'utilisation de PPPlayer: application musicale gratuite."
  },
  "nav": {
    "features": "Fonctionnalités",
    "download": "Télécharger"
  },
  "footer": {
    "desc": "La musique, sans friction. Gratuit pour iOS, Android et Windows.",
    "product": "Produit",
    "features": "Fonctionnalités",
    "download": "Télécharger",
    "platforms": "Plateformes",
    "ios": "iOS",
    "android": "Android",
    "windows": "Windows",
    "social": "Réseaux",
    "instagram": "Instagram",
    "linkedin": "LinkedIn",
    "facebook": "Facebook",
    "github": "GitHub",
    "legal": "Légal",
    "privacy": "Confidentialité",
    "terms": "Conditions",
    "copyright": "© {year} PPPlayer. Tous droits réservés."
  },
  "cookie": {
    "title": "Nous respectons votre vie privée",
    "desc": "Nous utilisons des cookies pour analyser le trafic du site et améliorer votre expérience. En cliquant sur \"Accepter\", vous consentez à notre utilisation des cookies.",
    "decline": "Tout refuser",
    "accept": "Tout accepter"
  },
  "hero": {
    "title1": "La musique.",
    "title2": "Sans friction.",
    "desc": "Pas de compte. Pas d'abonnement. Jouez simplement.",
    "getIos": "Obtenir pour iOS",
    "getAndroid": "Obtenir pour Android",
    "getMac": "Obtenir pour Mac",
    "getWindows": "Obtenir pour Windows"
  },
  "discover": {
    "title": "Trouvez<br></br>quelque chose<br></br>qui vaut le coup."
  },
  "artistRadio": {
    "title": "Écoute sans fin."
  },
  "goDeeper": {
    "bgText": "SUIVRE",
    "title": "Suivez la musique."
  },
  "pressPlay": {
    "title": "Ensuite, écoutez."
  },
  "featureGallery": {
    "title": "Tout ce dont vous avez besoin.",
    "subtitle": "Une expérience native magnifique, conçue pour la performance.",
    "searchTitle": "Trouvez exactement ce que vous voulez.",
    "searchDesc": "Recherchez globalement parmi les titres, artistes et albums instantanément.",
    "queueTitle": "Parfaitement mis en file d'attente.",
    "queueDesc": "Gérez ce qui suit avec une file d'attente magnifique et réorganisable.",
    "favTitle": "Votre musique, vos règles.",
    "favDesc": "Créez votre bibliothèque personnelle en un clic. Toujours là.",
    "contextTitle": "Natif par conception.",
    "contextDesc": "Faites un clic droit n'importe où. Menus contextuels natifs et magnifiques."
  },
  "noAccount": {
    "title": "Pas de compte.",
    "subtitle": "La musique ne devrait pas nécessiter de permission."
  },
  "platforms": {
    "title": "Votre musique. Vos appareils.",
    "subtitle": "Magnifiquement natif sur Windows, Android et iOS."
  },
  "downloadCTA": {
    "title": "Jouez simplement.",
    "getIos": "Obtenir pour iOS",
    "getAndroid": "Obtenir pour Android",
    "getMac": "Obtenir pour Mac",
    "getWindows": "Obtenir pour Windows"
  },
  "downloadPage": {
    "badge": "100% Gratuit · Aucun Compte Requis",
    "title": "Télécharger <gradient>PPPlayer Gratuitement</gradient>",
    "subtitle": "Choisissez votre plateforme. Écoutez en quelques minutes.",
    "desc": "Aucun compte requis. Pas d'e-mail. Pas d'inscription. Juste de la musique.",
    "windowsReqLabel": "Configuration Windows :",
    "windowsReqDesc": "Windows 10 ou ultérieur (64 bits). Téléchargement d'environ 50 Mo. Microsoft Store non requis."
  },
  "faq": {
    "badge": "FAQ",
    "title": "<gradient>Questions</gradient> courantes",
    "subtitle": "Tout ce que vous devez savoir sur PPPlayer."
  },
  "privacy": {
    "title": "Politique de Confidentialité",
    "lastUpdated": "Dernière mise à jour : Avril 2025",
    "sections": {
      "s1": {
        "title": "1. Aperçu",
        "p": "PPPlayer (« nous », « notre », « l'application ») s'engage à protéger votre vie privée. Cette politique explique quelles données nous collectons, pourquoi et comment elles sont utilisées lorsque vous utilisez PPPlayer."
      },
      "s2": {
        "title": "2. Aucun Compte Requis",
        "p": "PPPlayer ne vous oblige pas à créer un compte. Nous ne collectons ni votre nom, ni votre e-mail, ni aucune information personnellement identifiable."
      },
      "s3": {
        "title": "3. Données Collectées",
        "p1": "Nous pouvons collecter les données anonymes suivantes :",
        "li1": "Rapports de plantage et journaux d'erreurs (pour améliorer la stabilité)",
        "li2": "Analyses d'utilisation anonymes (utilisation des fonctionnalités, durée de session)",
        "li3": "Type d'appareil et version du système d'exploitation",
        "p2": "Nous ne collectons pas : noms, e-mails, informations de paiement ou de localisation précise."
      },
      "s4": {
        "title": "4. Services Tiers",
        "p": "PPPlayer peut utiliser des services tiers pour les métadonnées musicales. Ces services ont leurs propres politiques de confidentialité."
      },
      "s5": {
        "title": "5. Conservation des Données",
        "p": "Les données d'analyse anonymes sont conservées pendant un maximum de 12 mois. Les journaux de plantage sont supprimés après 90 jours."
      },
      "s6": {
        "title": "6. Vos Droits",
        "p": "Puisque nous ne collectons pas de données personnelles, il n'y a aucune information personnelle à accéder, exporter ou supprimer."
      },
      "s7": {
        "title": "7. Enfants",
        "p": "PPPlayer n'est pas destiné aux enfants de moins de 13 ans."
      },
      "s8": {
        "title": "8. Modifications",
        "p": "Nous pouvons mettre à jour cette politique de temps en temps. La date de la dernière mise à jour figurera en haut de la page."
      },
      "s9": {
        "title": "9. Contact",
        "p": "Des questions sur cette politique ? Contactez-nous à l'adresse suivante : "
      }
    },
    "back": "← Retour à PPPlayer"
  },
  "terms": {
    "title": "Conditions d'Utilisation",
    "lastUpdated": "Dernière mise à jour : Avril 2025",
    "sections": {
      "s1": {
        "title": "1. Acceptation des Conditions",
        "p": "En téléchargeant ou en utilisant PPPlayer, vous acceptez ces conditions d'utilisation."
      },
      "s2": {
        "title": "2. Utilisation de l'Application",
        "p": "PPPlayer est fourni gratuitement pour un usage personnel. Vous acceptez de ne pas :",
        "li1": "Décompiler, faire de l'ingénierie inverse ou modifier l'application",
        "li2": "Utiliser l'application pour distribuer des logiciels malveillants",
        "li3": "Violer les lois applicables lors de l'utilisation de l'application"
      },
      "s3": {
        "title": "3. Aucun Compte Requis",
        "p": "PPPlayer ne nécessite pas de création de compte."
      },
      "s4": {
        "title": "4. Propriété Intellectuelle",
        "p": "PPPlayer appartient à PPPlayer. Le contenu musical provient de fournisseurs tiers et est soumis à leurs licences respectives."
      },
      "s5": {
        "title": "5. Avis de Non-responsabilité",
        "p": "PPPlayer est fourni « tel quel », sans garantie. Nous ne garantissons pas un service ininterrompu."
      },
      "s6": {
        "title": "6. Limitation de Responsabilité",
        "p": "PPPlayer ne sera pas responsable des dommages indirects ou accessoires découlant de votre utilisation de l'application."
      },
      "s7": {
        "title": "7. Modifications",
        "p": "Nous nous réservons le droit de mettre à jour ces conditions. L'utilisation continue constitue l'acceptation."
      },
      "s8": {
        "title": "8. Contact",
        "p": "Des questions sur ces conditions ? Contactez-nous à l'adresse suivante : "
      }
    },
    "back": "← Retour à PPPlayer"
  }
};

const de = {
  "metadata": {
    "homeTitle": "PPPlayer: Kostenlose Musik-App für iOS, Android & Windows | Ohne Anmeldung",
    "homeDesc": "PPPlayer ist eine kostenlose Musik-App für iPhone, Android und Windows. Künstler und Genres entdecken: ohne Anmeldung, ohne Abonnement, kostenlos.",
    "downloadTitle": "PPPlayer Kostenlos Herunterladen",
    "downloadDesc": "Laden Sie PPPlayer für iOS, Android oder Windows herunter. Ohne Anmeldung. Sofort loshören.",
    "privacyTitle": "Datenschutzrichtlinie",
    "privacyDesc": "Datenschutzrichtlinie für PPPlayer: kostenlose Musik-App.",
    "termsTitle": "Nutzungsbedingungen",
    "termsDesc": "Nutzungsbedingungen für PPPlayer: kostenlose Musik-App."
  },
  "nav": {
    "features": "Funktionen",
    "download": "Kostenlos Laden"
  },
  "footer": {
    "desc": "Musik, ohne Hürden. Kostenlos für iOS, Android und Windows.",
    "product": "Produkt",
    "features": "Funktionen",
    "download": "Herunterladen",
    "platforms": "Plattformen",
    "ios": "iOS",
    "android": "Android",
    "windows": "Windows",
    "social": "Soziales",
    "instagram": "Instagram",
    "linkedin": "LinkedIn",
    "facebook": "Facebook",
    "github": "GitHub",
    "legal": "Rechtliches",
    "privacy": "Datenschutz",
    "terms": "Bedingungen",
    "copyright": "© {year} PPPlayer. Alle Rechte vorbehalten."
  },
  "cookie": {
    "title": "Wir respektieren Ihre Privatsphäre",
    "desc": "Wir verwenden Cookies, um den Datenverkehr zu analysieren. Mit Klick auf \"Akzeptieren\" stimmen Sie unserer Nutzung zu.",
    "decline": "Alle ablehnen",
    "accept": "Alle akzeptieren"
  },
  "hero": {
    "title1": "Musik.",
    "title2": "Ohne Hürden.",
    "desc": "Kein Account. Kein Abo. Einfach abspielen.",
    "getIos": "Für iOS laden",
    "getAndroid": "Für Android laden",
    "getMac": "Für Mac laden",
    "getWindows": "Für Windows laden"
  },
  "discover": {
    "title": "Finde<br></br>etwas,<br></br>das es wert ist."
  },
  "artistRadio": {
    "title": "Endlos zuhören."
  },
  "goDeeper": {
    "bgText": "FOLGEN",
    "title": "Folge der Musik."
  },
  "pressPlay": {
    "title": "Dann einfach zuhören."
  },
  "featureGallery": {
    "title": "Alles, was du brauchst.",
    "subtitle": "Ein natives Erlebnis, gebaut für Performance.",
    "searchTitle": "Finde genau, was du suchst.",
    "searchDesc": "Suche blitzschnell nach Titeln, Künstlern und Alben.",
    "queueTitle": "Perfekt in der Warteschlange.",
    "queueDesc": "Verwalte mit einer schönen Warteschlange, was als nächstes läuft.",
    "favTitle": "Deine Musik, deine Regeln.",
    "favDesc": "Erstelle deine eigene Mediathek mit nur einem Klick.",
    "contextTitle": "Natives Design.",
    "contextDesc": "Klicke einfach rechts. Wunderschöne, native Kontextmenüs."
  },
  "noAccount": {
    "title": "Kein Account.",
    "subtitle": "Musik sollte keine Erlaubnis erfordern."
  },
  "platforms": {
    "title": "Deine Musik. Deine Geräte.",
    "subtitle": "Wunderschön nativ auf Windows, Android und iOS."
  },
  "downloadCTA": {
    "title": "Einfach abspielen.",
    "getIos": "Für iOS laden",
    "getAndroid": "Für Android laden",
    "getMac": "Für Mac laden",
    "getWindows": "Für Windows laden"
  },
  "downloadPage": {
    "badge": "100% Kostenlos · Ohne Anmeldung",
    "title": "Lade <gradient>PPPlayer Kostenlos</gradient>",
    "subtitle": "Wähle deine Plattform. In wenigen Minuten loslegen.",
    "desc": "Keine Anmeldung. Keine E-Mail. Einfach Musik.",
    "windowsReqLabel": "Windows-Systemanforderungen:",
    "windowsReqDesc": "Windows 10 oder neuer (64-bit). ~50 MB. Kein Microsoft Store erforderlich."
  },
  "faq": {
    "badge": "FAQ",
    "title": "Häufige <gradient>Fragen</gradient>",
    "subtitle": "Alles, was du über PPPlayer wissen musst."
  },
  "privacy": {
    "title": "Datenschutzrichtlinie",
    "lastUpdated": "Zuletzt aktualisiert: April 2025",
    "sections": {
      "s1": {
        "title": "1. Übersicht",
        "p": "PPPlayer schützt Ihre Privatsphäre. Diese Richtlinie erklärt, welche Daten wir sammeln und wie sie verwendet werden."
      },
      "s2": {
        "title": "2. Ohne Anmeldung",
        "p": "PPPlayer erfordert keine Anmeldung. Wir sammeln keine Namen oder E-Mails."
      },
      "s3": {
        "title": "3. Von uns gesammelte Daten",
        "p1": "Wir können folgende anonyme Daten sammeln:",
        "li1": "Fehlerberichte (zur Verbesserung der Stabilität)",
        "li2": "Anonyme Nutzungsstatistiken (Sitzungsdauer)",
        "li3": "Gerätetyp und Betriebssystemversion",
        "p2": "Wir sammeln nicht: Namen, E-Mails, Zahlungsdaten oder genaue Standorte."
      },
      "s4": {
        "title": "4. Dienste von Drittanbietern",
        "p": "PPPlayer nutzt Drittanbieter für Musik-Metadaten. Diese haben eigene Datenschutzrichtlinien."
      },
      "s5": {
        "title": "5. Datenaufbewahrung",
        "p": "Anonyme Daten werden max. 12 Monate aufbewahrt, Absturzprotokolle nach 90 Tagen gelöscht."
      },
      "s6": {
        "title": "6. Ihre Rechte",
        "p": "Da wir keine personenbezogenen Daten erheben, gibt es nichts zu exportieren oder zu löschen."
      },
      "s7": {
        "title": "7. Kinder",
        "p": "PPPlayer richtet sich nicht an Kinder unter 13 Jahren."
      },
      "s8": {
        "title": "8. Änderungen",
        "p": "Wir können diese Richtlinie gelegentlich aktualisieren."
      },
      "s9": {
        "title": "9. Kontakt",
        "p": "Fragen zur Datenschutzrichtlinie? Kontaktieren Sie uns unter "
      }
    },
    "back": "← Zurück zu PPPlayer"
  },
  "terms": {
    "title": "Nutzungsbedingungen",
    "lastUpdated": "Zuletzt aktualisiert: April 2025",
    "sections": {
      "s1": {
        "title": "1. Annahme der Bedingungen",
        "p": "Durch die Nutzung von PPPlayer stimmen Sie diesen Bedingungen zu."
      },
      "s2": {
        "title": "2. Nutzung der App",
        "p": "PPPlayer ist für den persönlichen Gebrauch kostenlos. Sie dürfen nicht:",
        "li1": "Die App dekompilieren oder modifizieren",
        "li2": "Die App zur Verbreitung von Malware nutzen",
        "li3": "Gegen geltende Gesetze verstoßen"
      },
      "s3": {
        "title": "3. Ohne Anmeldung",
        "p": "PPPlayer erfordert keine Anmeldung. Alles ist sofort verfügbar."
      },
      "s4": {
        "title": "4. Geistiges Eigentum",
        "p": "PPPlayer ist unser Eigentum. Musikinhalte stammen von Drittanbietern und unterliegen deren Rechten."
      },
      "s5": {
        "title": "5. Haftungsausschluss",
        "p": "PPPlayer wird \"wie besehen\" bereitgestellt. Wir garantieren keinen fehlerfreien Betrieb."
      },
      "s6": {
        "title": "6. Haftungsbeschränkung",
        "p": "Wir haften nicht für indirekte Schäden durch die Nutzung der App."
      },
      "s7": {
        "title": "7. Änderungen",
        "p": "Wir behalten uns vor, diese Bedingungen zu ändern. Die weitere Nutzung gilt als Zustimmung."
      },
      "s8": {
        "title": "8. Kontakt",
        "p": "Fragen zu diesen Bedingungen? Kontaktieren Sie uns unter "
      }
    },
    "back": "← Zurück zu PPPlayer"
  }
};

fs.writeFileSync(path.join(__dirname, 'messages', 'ru.json'), JSON.stringify(ru, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages', 'tr.json'), JSON.stringify(tr, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages', 'fr.json'), JSON.stringify(fr, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages', 'de.json'), JSON.stringify(de, null, 2));

console.log('New translations created successfully.');
