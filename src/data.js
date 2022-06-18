const data = {
    products: [
        {
            id: '1',
            name: 'DMM Dragon Cam 00 (Blue)',
            price: 220.99,
            image: 'https://www.skubank.com/imagestore/product/11981/33/160789/c63_11981_A73500A-dragon-cam-00.jpg',
            details: 'Friend wspinaczkowy DMM Dragon Cam Size 00 posiada kuty na gorąco zacisk kciuka. Zapewnia on' +
                ' stabilną obsługę i redukuje przypadkowe ruchy rąk podczas zakładania. Jest on także niezwykle ' +
                'wygodny w użyciu z rękawicami. Friend wyposażony został w krzywki TripleGrid, które dzięki ' +
                'zwiększonej powierzchni styku pozwalają zwiększyć tarcie w frienda w skale. Oznaczenie odpowiednich' +
                ' rozmiarów friendów za pomocą różnych kolorów ułatwia ich szybką identyfikację podczas wspinaczki.',
        },
        {
            id: '2',
            name: 'DMM Dragon Cam 1 (Purple)',
            price: 235.79,
            image: 'https://www.skubank.com/imagestore/product/11981/33/160788/c63_11981_A7351A-dragon-cam1.jpg',
            details: 'Friend wspinaczkowy DMM Dragon Cam Size 1 posiada kuty na gorąco zacisk kciuka. Zapewnia ' +
                'on stabilną obsługę i redukuje przypadkowe ruchy rąk podczas zakładania. Jest on także niezwykle' +
                ' wygodny w użyciu z rękawicami. Friend wyposażony został w krzywki TripleGrid, które dzięki' +
                ' zwiększonej powierzchni styku pozwalają zwiększyć tarcie w frienda w skale. Oznaczenie' +
                ' odpowiednich rozmiarów friendów za pomocą różnych kolorów ułatwia ich szybką identyfikację podczas wspinaczki.',
        },
        {
            id: '3',
            name: 'DMM Dragon Cam 3 (Red)',
            price: 250.29,
            image: 'https://www.skubank.com/imagestore/product/11981/33/160784/c63_11981_A7353A-dragon-cam-3.jpg',
            details: 'Friend wspinaczkowy DMM Dragon Cam Size 3 posiada kuty na gorąco zacisk kciuka. Zapewnia ' +
                'on stabilną obsługę i redukuje przypadkowe ruchy rąk podczas zakładania. Jest on także niezwykle' +
                ' wygodny w użyciu z rękawicami. Friend wyposażony został w krzywki TripleGrid, które dzięki' +
                ' zwiększonej powierzchni styku pozwalają zwiększyć tarcie w frienda w skale. Oznaczenie odpowiednich' +
                ' rozmiarów friendów za pomocą różnych kolorów ułatwia ich szybką identyfikację podczas wspinaczki.',
        },
        {
            id: '4',
            name: 'Ekspres wspinaczkowy CT',
            price: 57.99,
            image: 'https://8a.pl/media/catalog/product/e/k/ekspres-wspinaczkowy-climbing-technology-aerial-pro-set-ny-12cm-blue-1653025693.jpg',
            details: 'Ekspres wspinaczkowy Climbing Technology Aerial PRO Set NY 12 cm to nowoczesny model,' +
                ' w którym ultralekkie, kute na gorąco karabinki połączono z poliamidową, poszerzaną taśmą.' +
                ' Całość gwarantuje fantastyczne właściwości podczas zmagań na typowo sportowych drogach.',
        },
        {
            id: '5',
            name: 'Ekspres wspinaczkowy CT Lime',
            price: 60.99,
            image: 'https://8a.pl/media/catalog/product/e/k/ekspres-wspinaczkowy-climbing-technology-lime-set-dy-12-cm-green-1652087922.jpg',
            details: 'Ekspres wspinaczkowy Climbing Technology Lime Set DY 12 cm to jeden z najpopularniejszych' +
                ' modeli w ofercie włoskiego producenta. Charakteryzuje się wysoką trwałością i poręcznością,' +
                ' wykorzystuje bezząbkowe zamki typu keylock, ultralekką taśmę dyneema i system Fixit. Do tego' +
                ' oferowany jest w wersji z kolorową, anodyzowaną powłoką.'
        },
        {
            id: '6',
            name: 'Lina Beal 9,1mm 50m',
            price: 500.99,
            image: 'https://8a.pl/media/catalog/product/l/i/lina-wspinaczkowa-beal-joker-9-1-mm-50m-unicore-dry-cover-orange-1653292780.jpg',
            details: 'Jako lina pojedyncza Beal Joker 9,1 mm to jeden z cieńszych modeli za którym stoi lekkość asekuracji i wpinek,' +
                ' ale wymagający od asekuranta naprawdę dużego doświadczenia i solidnej wprawy (szczególnie przy obsłudze' +
                ' w tradycyjnych przyrządach typu kubek). W niektórych klasycznych przyrządach asekuracyjnych, przewidzianych' +
                ' dla lin o większych średnicach, hamowanie może być zredukowane. Niektóre starsze przyrządy samoblokujące mogą' +
                ' po prostu nie zadziałać - stosowanie tego modelu zaleca się osobom z bardzo dużym doświadczeniem, po sprawdzeniu' +
                ' kompatybilności liny z posiadanym przyrządem.',
        },
        {
            id: '7',
            name: 'Lina Beal 8,5mm 50m',
            price: 512.99,
            image: 'https://8a.pl/media/catalog/product/l/i/lina-wspinaczkowa-beal-opera-8-5-mm-50m-unicore-dry-cover-green-1653291587.jpg',
            details: 'Tylko zaawansowane technologie sprawiają, że mimo zaledwie 8,5 mm model ten spełnia wszystkie normy dotyczące właśnie' +
                ' lin pojedynczych. Ultra niska waga (48g i pierwsza w historii francuskiej marki lina pojedyncza poniżej 50g/m!) oraz' +
                ' niesamowita szybkość w przyrządach Beal Opera zachwycą najbardziej wspinaczy sportowych, przymierzających się do trudnych' +
                ' prowadzeń na mocno przewieszonych i długich drogach. Docenią oni lekkość i płynność, z jaką wydawana jest z przyrządu, a' +
                ' także efektywność przy wpinkach w trudnych ustawieniach, gdzie nie ma siły na zmaganie się z liną. Lina o tej średnicy to' +
                ' dobry wybór na najdłuższe drogi (gdzie z każdą kolejną wpinką przybywa masy liny do wyciągania) i na mocno „wywalonych”' +
                ' ścianach czy w dachach, gdzie próżno szukać komfortowej pozycji do wpięcia się w przelot. Ale UWAGA: jako lina pojedyncza' +
                ' Beal Opera 8,5 mm to najcieńszy model w ofercie Beal. Stoi za nim lekkość asekuracji i wpinek, ale wymaga od asekuranta' +
                ' naprawdę dużego doświadczenia i wprawy. W niektórych klasycznych przyrządach asekuracyjnych, przewidzianych dla lin o' +
                ' większych średnicach, hamowanie może być zredukowane. Niektóre starsze przyrządy samoblokujące nie będą po prostu działać' +
                ' — stosowanie tego modelu zaleca się osobom z bardzo dużym doświadczeniem, po sprawdzeniu kompatybilności liny z posiadanym ' +
                'przyrządem.',
        },
        {
            id: '8',
            name: 'Lina Beal 9,8mm 70m',
            price: 566.99,
            image: 'https://8a.pl/media/catalog/product/l/i/lina-wspinaczkowa-beal-karma-9-8-mm-70m-yellow-1653291831.jpg',
            details: 'Model ten pozbawiony jest powłok impregnujących, dlatego najlepiej spisze się właśnie w skałach - latem.' +
                'Brak impregnacji znacząco wpływa na cenę, dlatego lina dynamiczna Beal Karma przypadnie do gustu osobom' +
                'wspinającym się raczej sporadycznie i wolącym nie wydawać zbyt dużo na linę. W kwestii bezpieczeństwa nie' +
                ' ma tu oczywiście mowy o żadnym kompromisie! Lina spełnia wymagania UIAA oraz europejskich norm. Elastyczny' +
                ' oplot jest przyjemny w dotyku, a w połączeniu z niską wagą i średnicą, wpływa na sprawne wydawanie liny z' +
                ' przyrządu czy szybkie wpinki w przeloty. Środek liny został oznaczony ciemniejszym kolorem (tak zwany BLACK LIMIT),' +
                ' który nie wpływa na strukturę włókien, ale w jasny sposób sygnalizuje osobie asekurującej wydanie 50% długości liny.' +
                ' Ten, zdawałoby się, detal podnosi bezpieczeństwo, albowiem ułatwia podjęcie poprawnej decyzji co do konieczności zjazdu,' +
                ' bez ryzyka, że liny do niego zwyczajnie zabraknie.\n' +
                '\n' +
                'Beal Karma 9,8 mm to lina dynamiczna z linii ACTIVE, zawierającej modele do początkujących i średniozaawansowanych wspinaczy ' +
                '- aktywnych, ale uprawiających sport raczej amatorski (lub sporadycznie). Modele ACTIVE LINE zbudowane są przy użyciu ' +
                'zaawansowanej technologii, która zapewnia doskonałe pochłanianie uderzeń dzięki niewielkim siłom uderzenia. Cechuje ' +
                'ją doskonały stosunek ceny do jakości oraz ekologiczna konstrukcja - bez obróbki chemicznej i stosowania dodatkowych powłok.',
        },
        {
            id: '9',
            name: 'Zestaw ekspresów CT',
            price: 350.99,
            image: 'https://8a.pl/media/catalog/product/z/e/zestaw-ekspresow-climbing-technology-aerial-pro-set-dy-12-cm-x6-1650530888.jpg',
            details: 'Zestaw ekspresów Climbing Technology Aerial PRO Set DY 12 cm x6 składa się kilku doskonale współpracujących' +
                ' ze sobą elementów. Pierwszy z nich to karabinek z prostym zamkiem Climbing Technology Aerial Pro S. Kuty na gorąco,' +
                ' wielopłaszczyznowy profil 3D, umożliwił znaczącą redukcję wagi. Ta nowa technologia kształtowania karabinków wydaje ' +
                'się być przyszłością w dążeniu do produkcji lżejszego sprzętu wspinaczkowego przy jednoczesnym podnoszeniu jego wytrzymałości.' +
                ' W klasycznym zamku zastosowano system Catch Free (bezząbkowy), który zapobiega przypadkowemu zaczepianiu się zamka o ' +
                'inny sprzęt wspinaczkowy (pętle, przyrządy, szpejarki) oraz ułatwia wpinanie się w plakietki. Lekkim modyfikacjom poddano ' +
                'kształt samego zamka, zmieniając ułożenie żłobień, co w konsekwencji umożliwia jego pewniejsze i łatwiejsze otwieranie w ' +
                'każdej sytuacji.',
        },
        {
            id: '10',
            name: 'Woreczek na magnezję',
            price: 54.99,
            image: 'https://8a.pl/media/catalog/product/w/o/woreczek-na-magnezje-e9-aglio-c-wine-1652775810.jpg',
            details: 'Woreczek na magnezję E9 Aglio C doskonale spisze się w najtrudniejszych warunkach. Dzięki niemu zyskasz szybki' +
                ' dostęp do magnezji, a jego niska waga ucieszy łojantów liczących każdy gram swojego szpeju.',
        },
        {
            id: '11',
            name: 'Czekan Grivel Ghost Evo',
            price: 386.99,
            image: 'https://8a.pl/media/catalog/product/c/z/czekan_grivel_ghost_evo_hammer_yellow_1631185462_d030.jpg',
            details: 'Czekan Grivel Ghost Evo Hammer spisze się zarówno w turystyce wysokogórskiej, wspinaczce' +
                ' jak i podczas narciarstwa alpejskiego. Dzięki niemu zmaksymalizujesz swoje bezpieczeństwo podczas' +
                ' każdej zimowej aktywności.\n' +
                '\n' +
                'Czekan Grivel Ghost Evo Hammer posiada konstrukcję, która cechuje się niesamowitym komfortem użytkowania.' +
                ' Specjalnie zaprojektowany trzonek G-Bone zapewnia doskonały chwyt. Czekan górski Grivel Ghost Evo' +
                ' posiada certyfikację CE EN 13089, typ 1, UIAA 152 i waży jedynie ok. 309 g.',
        },
        {
            id: '12',
            name: 'Czekan Grivel G Zero',
            price: 236.99,
            image: 'https://8a.pl/media/catalog/product/c/z/czekan_grivel_g_zero_pink_1631282594_0c52.jpg',
            details: 'Czekan Grivel G Zero posiada głowicę wykonaną ze stali węglowej, która cechuje się świetną' +
                ' wytrzymałością. Głowica czekana wyposażona została w łopatkę do wyrąbywania stopni oraz otwór na' +
                ' karabinek. Kąt natarcia dzioba pozwala na asekurację w śniegu. Zastosowano tu także stylisko typu B,' +
                ' charakterystyczne dla czekanów turystycznych. Czekan Grivel G Zero wyposażony został w pętlę nadgarstkową,' +
                ' dzięki której nie zgubimy czekana. Stylisko zakończone jest grotem, który pozwala na skuteczne wbijanie' +
                ' go w śnieg. Plastikowa osłona ostrza, pozwala ochronić dłonie przed bezpośrednim kontaktem z zimną stalą' +
                ' oraz ostrymi krawędziami dzioba. Dzięki temu wygodnie i pewnie będziemy trzymać w dłoni czekan podczas' +
                ' pokonywania górskich szlaków. Osłonę można wykorzystywać opcjonalnie, zależnie od preferencji. Grot świetnie' +
                ' wbija się nawet w zmrożony śnieg, przez co można skutecznie asekurować się czekanem podczas podchodzenia stromymi' +
                ' zboczami',
        },
        {
            id: '13',
            name: 'Raki automatyczne Grivel G12',
            price: 590.39,
            image: 'https://8a.pl/media/catalog/product/r/a/raki_automatyczne_grivel_g12_cramp_o_matic_evo_1637653664_ecf7.jpg',
            details: 'Raki automatyczne Grivel G22 Plus Cramp-O-Matic EVO posiadają dwa zęby atakujące wykonane z kutej na gorąco stali.' +
                ' Nie ma procesu obróbki stali, pozwalającego osiągnąć jej lepsze właściwości, niż właśnie kucie na gorąco, gdy materiał' +
                ' zostaje podgrzany do temperatury około 950 stopni i osiąga kolor "wiśniowej czerwieni". Poprzez uderzanie w tak' +
                ' nagrzaną stal i rozciąganie jej, włókna układają się tak, aby zapewnić maksymalną wytrzymałość wzdłuż wymaganego ' +
                'kierunku. Kucie pozwala też na modelowanie stali, by była grubsza tam, gdzie potrzebna jest ponadprzeciętna wytrzymałość ' +
                'i cieńsza w pozostałych miejscach. Dzięki temu raki te wyróżniają się doskonałą penetracją lodu oraz wysokim poziomem' +
                ' wsparcia. Zęby atakujące można ponadto łatwo wymienić w razie ich wysokiego zużycia.',
        },
        {
            id: '14',
            name: 'Sonda lawinowa BD Quickdraw',
            price: 359.99,
            image: 'https://8a.pl/media/catalog/product/s/o/sonda-lawinowa-black-diamond-quickdraw-pro-probe-320-green-1622551618.jpg',
            details: 'Sonda lawinowa Black Diamond Quickdraw Pro Probe 320 posiada konstrukcję składającą się z 8 elementów.' +
                ' Dzięki zastosowaniu aluminium i linki ze stali nierdzewnej model ten cechuje się wysoką wytrzymałością, oraz' +
                ' niską wagą. Sonda lawinowa Black Diamond Quickdraw Pro Probe 320 wyposażona została w szybkozłączki Quickdraw,' +
                ' oraz posiada specjalne oznaczenia zastosowane co 1 m.',
        },
        {
            id: '15',
            name: 'Detektor lawinowy Ortovox',
            price: 1183.99,
            image: 'https://8a.pl/media/catalog/product/d/e/detektor-lawinowy-ortovox-diract-voice-blue-ocean-1645169493.jpg',
            details: 'Detektor lawinowy Ortovox Diract Voice wyposażony został w technologię inteligentnych anten,' +
                ' co zapewnia mu optymalny zasięg. Dzięki jasnym komunikatom głosowym użytkownik dokładnie wie, w którym' +
                ' kierunku powinien się poruszać, oraz jaką metodę wyszukiwania zastosować. Urządzenie posiada pasmo' +
                ' wyszukiwania o szerokości 50 metrów zgodnie z pomiarem ICAR (Międzynarodowa Komisja Ratownictwa Alpejskiego' +
                ' (zalecenie: AVA REC 0007)), oraz czytelny ekran 360°C wyświetlający komunikaty w czasie rzeczywistym' +
                ' i zapewniający doskonałą widoczność nawet w ekstremalnie jasnych warunkach oświetleniowych. Detektor ' +
                'może pochwalić się także niską wagą wynoszącą jedynie ok. 210 g, oraz jedynie ok. 2,3 cm grubości. Dla' +
                ' zminimalizowania ryzyka popełnienia błędu w sytuacjach stresowych wyposażony został także w kontrastowy' +
                ' przełącznik trybów wyszukiwania/nadawania.',
        },
        {
            id: '16',
            name: 'Śruba lodowa Petzl Laser 13cm',
            price: 189.99,
            image: 'https://8a.pl/media/catalog/product/s/r/sruba-lodowa-petzl-laser-13cm-1646042577.jpg',
            details: 'Śruba lodowa Petzl Laser - 13 cm to lekki i wytrzymały model, który doskonale spisze się' +
                ' podczas zimowych aktywności górskich. Z powodzeniem wykorzystasz ją w najtrudniejszych warunkach, a jej' +
                ' wysoka jakość wykonania zadowoli najbardziej wymagających użytkowników.\n' +
                '\n' +
                'Śruba lodowa Petzl Laser - 13 cm posiada dopracowany kształt ostrzy, który ułatwia wkręcanie' +
                ' jej w dół. Stalowy korpus i specjalny gwint gwarantują jej wysoką trwałość, a ergonomiczny ' +
                'uchwyt dobrze leży w dłoni. Śruba wykonana została z połączenia stali i lekkiego aluminium,' +
                ' oraz posiada certyfikację CE EN 568, UIAA 151.',
        },
        {
            id: '17',
            name: 'Szabla śnieżna CT 50cm',
            price: 127.91,
            image: 'https://8a.pl/media/catalog/product/s/z/szabla_sniezna_climbing_technology_snow_anchor_50cm_1646210179_385d.jpg',
            details: 'Szabla śnieżna Climbing Technology Snow Anchor 50cm to niezawodna szabla śnieżna, która umożliwi założenie' +
                ' stanowiska w zmrożonym śniegu. Niezbędna część ekwipunku podczas zimowej eksploracji najwyższych szczytów.' +
                'Jednym z elementów zimowego wyposażenia wspinaczy jest szabla śnieżna Climbing Technology Snow Anchor 50cm.' +
                ' Pomoże ona w założeniu stanowiska w zmrożonym śniegu. Całość wykonano z wytrzymałego, a przy tym stosunkowo ' +
                'lekkiego stopu aluminium. W górnej części zainstalowano pętlę ze stalowej linki, natomiast sama szabla na całej' +
                ' długości posiada otwory. Dół został tak ukształtowany, aby maksymalnie ułatwić osadzanie szabli w śniegu.',
        },
        {
            id: '18',
            name: 'Lonża do czekana Grivel',
            price: 168.47,
            image: 'https://8a.pl/media/catalog/product/l/o/lonza_grivel_double_spring_screw_lock_1570447927_4c6c.jpg',
            details: 'Lonża do czekana Grivel Double Spring ma prostą konstrukcję. W pierwszej chwili sprawia wrażenie niepozornej,' +
                ' ale zapewnia szerokie możliwości użytkowe. Ten niewielki gadżet wiele zmieni. Model składa się z dwóch ramion ' +
                'taśm połączonych pętlą. Na końcu każdej z nich znalazł się karabinek z funkcjonalnym zamkiem. Taka budowa ' +
                'znacznie ułatwia użytkowanie czekanów w czasie wspinaczki lodowej. Taśma umożliwia bardzo proste zamocowanie' +
                ' do uprzęży, a elastyczność w znacznym stopniu poprawia komfort operowania sprzętem. Wpięcie czekanów nie ' +
                'będzie problematyczne, a zniweluje ryzyko przypadkowego zgubienia sprzętu. Dosięgnięcie do nich zarówno z prawej, ' +
                'jak i lewej strony nie sprawi trudności.'
        }

    ]
};
export default data;