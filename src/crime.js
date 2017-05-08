function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function pronoun( gender )
{
    if(gender == 'male')
    {
        return "he";
    }
    else
    {
        return "she";
    }
}

function pronounOwnership( gender )
{
    if(gender == 'male')
    {
        return "his";
    }
    else
    {
        return "her";
    }
}

function contPronoun( gender )
{
    if(gender == 'male')
    {
        return "he's";
    }
    else
    {
        return "she's";
    }
}


function pronounThird( gender )
{
    if(gender == 'male')
    {
        return "man";
    }
    else
    {
        return "woman";
    }
}

//People attributes
var gender = ['male', 'female', 'male', 'female', 'male', 'female', 'transgender'];
var hairLength = ['long', 'short', 'medium', 'bald', 'curly', 'wavy', 'silky', 'frizzy', 'straight',];
var hairColor = ['black', 'brown', 'blond', 'red', 'silver', 'gray', 'dark', 'white', 'auburn', 'jet black', 'light brown', 'platinum blond', 'medium brown', 'ash brown', 'dark brown'];
var eyeSize = ['small', 'large', 'round', 'almond', 'hooded', 'droopy', 'beady', 'downturned', 'upturned', 'monolid'];
var eyeColor = ['black', 'dark brown', 'blue', 'green', 'hazel', 'amber', 'grey', 'red and violet', 'light blue', 'light brown', 'light green'];
var body = ['heavy-set', 'thin', 'average', 'slender', 'big', 'pear shaped', 'banana shaped','apple shaped', 'spoon shaped', 'oval shaped', 'hourglass shaped', 'slim', 'athletic', 'cornet shaped',];
var height = ['petite', 'average', 'tall', 'short', 'gigantic', 'dwarf', 'midget', 'average', 'tall', 'short', 'average', 'tall', 'short'];
var special = ['missing hand', 'cane', 'eye patch', 'glasses', 'shades', 'beanie'];
var p_special = ['headphones', 'bathing suit', 'bag', 'satchel'];
var greetings = ['hey', "what's up'", 'hi'];
var bystanderAction = ['running', 'walking', 'standing', 'heading', 'slowly walking', 'walking fast', 'walking slow', 'briskly walking', 'pacing'];
var bystanderApproachingDirection = ['behind us', 'to our front', 'to the right', 'to the left', 'towards us'];
var bystanderAlerted = ['stopped for us', 'said yes', 'said how can I help you', 'said ya', 'asked what they can do', 'said hi', 'said whats up', 'asked whats wrong', 'said hey'];

//temp vars that can be spliced in case game gets restarted
//temp vars that can be spliced in case game gets restarted
//var t_height = height.slice(0);
//var t_body = body.slice(0);
//var t_eyeSize = eyeSize.slice(0);
//var t_eyeColor = eyeColor.slice(0);
//var t_hairLength = hairLength.slice(0);
//var t_hairColor = hairColor.slice(0);
//var t_special = p_special.slice(0);

//Middle East
var Egypt  = {
    countryName: 'Egypt',

	intro: 'Welcome to Egypt, an ancient civilization dating back to 3200 BC. Egypt is part of the fertile crescent because of the Nile River. ',
    facts:  ['Where the worlds oldest dress was found over 5,000 years ago.', 
'Where they are known as the nation of the steppe eagle.', 
'Where the statue of liberty was originally intended at the suez canal lighting the way to asia.', 
'Where the first sailing boats were invented.',
'Where the tradition of exchanging wedding rings started.',
'Near the Great Pyramid of Giza.',
'In the country with the worlds largest arab population.',
'Where Beer was once considered a national currency,',
'Where the circumference of the Earth was calculated 2200 years ago,',
'Headed to the land of Pharaohs.'
],
    m_names: ['Aaheru', 'Abuskhau', 'Acheri', 'Aches', 'Am', 'Akhekh', 'Amenamen'],
    f_names: ['Cleopatra', 'Amisi', 'Bast', 'Ebio', 'Emu', 'Isis'],
    region: 'Middle East'
}
var Iran = {
    countryName: 'Iran',
    intro: 'Welcome to Iran, known as the Islamic Republic of Iran since 1979. Iran has the largest natural gas supply in the world. ',
    facts: ['Where the capital is Tehran, which means warm slope',

'Where their flag has three equal horizontal bands of green, white, and red.',
'Headed towards Persia.',
'Where the worlds oldest continuous civilizations dating back 4000 BC.',
'In the country known for inventing a water supply system called qanat, which collects underground water and moves it through tunnels.',
'Where you can find the best rugs and tapestry.',
'In The country that produces the most caviar, pistachios, and saffron.',
'Where the sport Polo was played as early as 6th century B.C.',
'Where they speak farsi.',
'Where Islam became the state religion in 637.'
],

    m_names: ['Mohammad', 'Amir', 'Yosef', 'Mehran', 'Faraz', 'Hooman'],
    f_names: ['Ada', 'Saye', 'Nooshin', 'Sajedeh', 'Niyusha', 'Fatima'],
    region: 'Middle East'
}
var Algeria = {
    countryName: 'Algeria',

	intro: 'Welcome to Algeria, a nation with over 2 million square kilometers of land, only 12% of which is inhabited. 98% of Algerias exports consist of petroleum and gas. ',

    facts: ['Where the capital city is Algiers.',
        'Where the Sahara Desert covers 80% of the country.',
        'Where they gained independence from France in 1962.',
        'In the country home to St Augustine of Hippo, an early christian theologian.',
        'In The largest country in Africa.',
        'Where they love to eat couscous.',
        'Where singer Cheb Mami joined Sting on his song Desert Rose.',
        'In the country where the national animal is a fennec fox, native to North Africa.',
        'Where Most of the population lives on the mediterranean sea leaving 80% of the country uninhabited.',
        'In a country known for delicious dates.',
        'In a country just a skip away from Italy and Spain.'
    ],
    m_names: ['Mohammad', 'Amine', 'Anis', 'Brahim', 'Zaki', 'Mounir'],
    f_names: ['Meriem', 'Sabrina', 'Safia', 'Yasmine', 'Chiraz', 'Aya'],
    region: 'Middle East'
}
var Tunisia = {
    countryName: 'Tunisia',
    intro: 'Welcome to Tunisia, formerly part of the Ottoman Empire, and later a French protectorate. It achieved full independence in 1956. Arabic, French, and Italian are all commonly spoken in Tunisia. ',
    facts: ['In a country where the national flag is Red with a crescent moon in the middle.',
        'In a country that shares borders with Algeria and libya.',
        'Where the capital city is tunis.',
        'In the smallest country in Africa.',
        'Where all but one Star Wars Movies were filmed here.',
        'Where you can find a 6,000 year old amphitheatre.',
        'In a country famous for its fish souks or markets.',
        'In the country playing pass with Italy on a map.',
        'Where the country was known as the center of power for the city of Carthage in 6th BC.',
        'Where the Arab spring revolution via social media originated.'
    ],
    m_names: ['Ahmed', 'Hazim', 'Slim', 'Aziz', 'Mehdi', 'Raouf'],
    f_names: ['Fatma', 'Eya', 'Hiba', 'Sarah', 'Farah', 'Rim'],
    region: 'Middle East'
}
var Oman = {
    countryName: 'Oman',
    intro: 'Welcome to Oman. Opened to tourism in the late 1980s, this coastal nation located on the tip of  the Arabian Peninsula now hosts several million foreign visitors a year. The soft drink Mountain Dew is jokingly referred to as Omani alcohol due to its high level of popularity among Omanis. ',
    facts: ['In a country located on the southeastern coast of the Arabian Peninsula.',
        'Where Humans have been living here for at least 107,000 years.',
        'In a country known for birdwatching during migration season.',
        'Where the national symbol has a pair of crossed Khanjars or daggers.',
        'In a country credited with being the greatest ship builders in the world.',
        'Where you can find The finest breeders of the beautiful arabian horse.',
        'Where you are greeted with dates, qahwa, and fruit as a houseguest.',
        'In the capital of Muscat.',
        'In a country that was once occupied by the Portuguese for 150 years.',
        'In a location that has The mutrah souk, the oldest marketplaces in the world.'],
    m_names: ['Jassim', 'Omar', 'Walood', 'Abbadi', 'Augusto', 'Raghav'],
    f_names: ['Khulood', 'Tanvi', 'Nassra', 'Leizl', 'Esraa', 'Adi'],
    region: 'Middle East'
}
var Morocco = {
    countryName: 'Morocco',
    intro: 'Welcome to Morocco, the first country to recognize the United States as an independent nation, and home to the famous city of Casablanca. ',
    facts: ['Where the country flag is maroon with a green star in the middle.',
        'In a country Called Al-Magrib, meaning the extreme west in Arabic.',
        'In the historic capital city of Rabbat.',
        'Where the capity city is called the Red City due to the original red walls of the city.',
        'In a African country only 8-miles from Europe.',
        'Where it is possible to see the Atlantic and Mediterranean at the same time.',
        'Where you can find The Alaouites, the Marekesh royal family.',
        'In the country home to the world’s first university.',
        'Where the liver is considered to be the symbol of love.',
        'In the Only African country that is not part of the African union.'
    ],
    m_names: ['Abdou', 'Ahmen', 'Karim', 'Ali', 'Rasheed', 'Braheem'],
    f_names: ['Zayneb', 'Ghita', 'Marwa', 'Alia', 'Lina', 'Raniya'],
    region: 'Middle East'
}
var Syria = {
    countryName: 'Syria',
    intro: 'Welcome to Syria, whose largest lake is man made, created in 1968. New Years is traditionally celebrate on April first in Syria. ',
    facts: ['In a country Formerly known as Ash-Sham and synonymous with the Levant.',
        'Where the capital is Damascus known as Jasmine City.',
        'Where the national flag has two green stars that represent the previous union with Egypt.',
        'In a country Suffering the worst humanitarian crisis since World War 2 impacting 13 million people.',
        'Headed to the oldest continuously inhabited city in the world.',
        'In a country situated as a Major point on the silk road from Asia.',
        'Where the biggest city is Haleb or Aleppo meaning iron due to its source of metals.',
        'Where you can Enjoy some toasted freekeh wheat with chicken and fatoush.',
        'In a country that Shares a Northern Border with Turkey.',
        'Where The Euphrates river is the lifeline for this mostly arid country.'
    ],
    m_names: ['Adnan', 'Elias', 'Nizar', 'Sayid', 'Yaman', 'Rifat'],
    f_names: ['Zeinah', 'Uri', 'Amena', 'Shayma', 'Nooda', 'Aisl'],
    region: 'Middle East'
}
var Iraq = {
    countryName: 'Iraq',
    intro: 'Welcome to Iraq, origin of the oldest known writing system, dating from 3200 B.C. ',
    facts: ['In a place known as the The land of the two rivers.',
'Where civilization began in Mesopotamia.',
'In a country Known for its rich oil reserves.',
'In The country, which name translates to deeply rooted and fertile.',
'Where the national flag contains green script writing that says Allahu Akbar, meaning God is the Great.',
'In the capital of Baghdad, formerly known as the world center for math, science, and astronomy.',
'Where the tower of babel happened representing the start of different languages.',
'Where The capital city translates to Gods Gift.',
'Where poetry and literature thrived with tales such as A thousand and One Nights.',
'Headed to enjoy the famous Tigris fish roasted over an open fire.'
],

    m_names: ['Zamanlabib', 'Mustafa', 'Barhoomee', 'Baravan', 'Jahmir', 'Fadhil'],
    f_names: ['Zainab', 'Noora', 'Sham', 'Telenaz', 'Rukia', 'Kayoosh'],
    region: 'Middle East'
}
var SaudiArabia = {
    countryName: 'Saudi Arabia',

	intro: 'Welcome to Saudi Arabia, where around 100 camels are sold every day in its capital city. A very high 60% of Saudi Arabias workforce is foreign ',

    facts: ['Where muslims Go to Mecca for hajj pilgrimage.',
        'Headed to the empty quarter, the largest sand desert in the world.',
        'Where The capital city is Riyadh.',
        'Where Islam was founded by prophet Muhammad.',
        'In The largest country in the world with no river.',
        'In a country that Borders the Red Sea and the Arabian gulf.',
        'Where you can watch sidewalk skiing, but I would advise against trying it.',
        'Where you can find the worlds tallest skyscraper.',
        'Where the camel market is thriving.',
        'In The largest country in the Arab region and 13th largest in the world.'
    ],
    m_names: ['Kahaled', 'Mahamat', 'Inam', 'Taha', 'Hossien', 'Zishan'],
    f_names: ['Faten', 'Habiba', 'Reema', 'Nadia', 'Bushra', 'Salsabyl'],
    region: 'Middle East'
}
var Lebanon = {
    countryName: 'Lebanon',
    intro: 'Welcome to Lebanon, home to 4.5 million Lebanese. Compared to 20-30 million who live outside of Lebanon. ',
    facts: ['Headed to a place Known as the paris of the middle east due to its renaissance after world war 2',

'Headed to the besutiful Capital City of Beirut.',
'In the only Arab country without a desert.',
'In a country Home to the first ever law school in the world.',
'Where tourist flock to for skiing, night life, shopping, and swimming.',
'Where The countrys name has been unchanged for over 4000 years.',
'Where the first alphabet was created.',
'Where the first sailors called phoenicians built the first ever boat from cedar trees.',
'In The country known as Gods Country on Earth.',
'In the country where The creators of Tom & Jerry and other cartoons such as Scooby-Doo, The Jetsons, and The smurfs call motherland.'
],

    m_names: ['Mahmous', 'Nader', 'Ayman', 'Wehbe', 'Rami', 'Moukhtar'],
    f_names: ['Nour', 'Alaa', 'Souad', 'Sousou', 'Yasmine', 'Fatme'],
    region: 'Middle East'
}

//East Asia
var Japan = {
    countryName: 'Japan',

	intro: 'Welcome to Japan, with its 108 active volcanoes, as part of the Pacific Oceans ring of fire. Japan consists of 47 prefectures, each lead by an elected governor. ',

    facts: ['Headed to Nihon or Nippon, which means the land of the rising sun.',
        'In a country that Consists of over 6,800 islands.',
        'Where you can find the largest populated metropolitan region in the world.',
        'In a country that is the largest importers of seafood in the world.',
        'Where ramen noodles were first made.',
        'Where you will find the best sushi in the world.',
        'Headed to eat the world renowned Kobe beef, which comes from cows treated like royalty.',
        'Where you can find suicide forest at the base of Mount Fuji.',
        'In a country that cherishes Cherry blossoms or sakura, also their national flower.',
        'Where Haiku poetry was invented.'
    ],
    m_names: ['Dorobo', 'Naruto', 'Ren', 'Tatsuya', 'Daisuke', 'Kazuki'],
    f_names: ['Yuri', 'Ayumi', 'Minami', 'Nana', 'Risa', 'Hana'],
    region: 'East Asia'
}
var China = {
    countryName: 'China',

	intro: 'Welcome to China, home to the worlds entire giant panda population.  ',
    facts: ['Headed to the country with the largest population in the world.',
'Where the Capital City is Beijing.',
'In a country Known for the great wall, which is the largest man made structure in the world soon to be trumped by President Trump ha ha.',
'Where you can find The worlds largest army.',
'In a country that is the worlds largest exporter of goods.',
'Where The national sport is table tennis.',
'In a country where half of the worlds pigs live in china.',
'Where it is common for rich people to hire a body double to serve their sentence.',
'In a country that has The worlds largest economy.',
'Headed to The largest palace in the world called the forbidden city, which used to be an imperial palace in the Ming dynasty.'
],
    m_names: ['Ching', 'Chong', 'Ting', 'Chow', 'Yang', 'Ming'],
    f_names: ['Ming Ming', 'Chi CHi', 'Jade', 'Ying', 'Fei Fei', 'Fai Di La'],
    region: 'East Asia'
}
var Mongolia = {
    countryName: 'Mongolia',

	intro: 'Welcome to Mongolia, with the worlds coldest national capital, Ulaan baatar, averaging -1 degrees celsius. ',

    facts: ['In a country known for creating ice cream.',
        'In a country Home to 13 times more horses than humans.',
        'In a place Known for its great ruler Genghis Khan stretching their empire from China to the Caspian Sea.',
        'Where you will find the Gobi desert, the largest in Asia.',
        'Where the country is Referred to as the land of the eternal blue sky.',
        'Headed to the country that comes from the word for mong or brave.',
        'Where you can trace back More than 17 million peoples blood line to Genghis Khan.',
        'Where wrestling is a tradition that goes back before recorded history.',
        'In a country that is The worlds second largest producer of Cashmere.',
        'Headed to the capital city Ulaan Baatar, meaning red hero.'
    ],
    m_names: ['Dana', 'Ankhbaatar', 'Davaa', 'Zev', 'Bat-Erdene', 'Altantsetseg'],
    f_names: ['Zaya', 'Sondor', 'Oyundelger', 'Aigerim', 'Delgermaa', 'Jabek'],
    region: 'East Asia'
}
var Nepal = {
    countryName: 'Nepal',
    intro: 'Welcome to Nepal, with a calendar 57.7 years ahead of the Gregorian calendar. It is currently 2075 based on the Nepalese calendar. ',
    facts: ['Where you can find the birthplace of buddha.',
        'Where you find Mt. Everest the highest mountain in the world.',
        'In a country where The cow is the national animal preventing them from eating any beef products.',
        'In The only country that doesnt have a square or rectangle flag.',
        'Where you can find the worlds shortest person.',
        'Where you can enjoy the delicious dish, momo, which is a type of dumpling.',
        'In a country that is The largest producers of mustard seed in the world.',
        'Where The left hand is forbidden from used when eating.',
        'Headed to The capital, Kathmandu.',
        'In a Landlocked country that borders China and india.'
    ],
    m_names: ['Krishna', 'Bishal', 'Bibek', 'Kiran', 'Bikash', 'Yash'],
    f_names: ['Shirisha', 'Shristi', 'Swornima', 'Tsamchou', 'Simixya', 'Palisha'],
    region: 'East Asia'
}

var Taiwan = {
    countryName: 'Taiwan',

	intro: 'Welcome to Taiwan, a country whose aboriginal people are attributed to have spread their culture as far as Madagascar to the west and Hawaii to the east. Taiwans national father, Sun Yat Sen, was actually American. ',

    facts: ['In a Island nation off the coast of Mainland China.',
        'Where Walking in the rain goes against cultural norms.',
        'Where 7-11 convenience stores are everywhere offering more than snacks and drinks.',
        'Where The capital city is taipei.',
        'In a country Home to the bamboo-shaped skyscraper.',
        'Where The official language is mandarin.',
        'In a country where The national flag has a white sun in the top left corner.',
        'In a country Known for their famous night markets.',
        'Where you find a temple established for worshipping the spirit of a dog.',
        'Headed to a country known as the gay capital of Asia.'
    ],
    m_names: ['Pai-han', 'Cheng-han', 'Kuan-ting', 'Kuan-yu', 'Chun-chieh', 'Yu-hsuan'],
    f_names: ['Hui-ju', 'Chia-hua', 'Shu-fen', 'Wei-ting', 'Ya-fand', 'Hsin-yi'],
    region: 'East Asia'
}
var Philippines = {
    countryName: 'Philippines',
    intro: 'Welcome to the Philippines, comprised of over 7000 islands. 175 different languages are spoken in the Philippines. ',
    facts: ['In the first Asian country to gain independence after world war 2.',
        'In a country named after a spanish king.',
        'In a country Known for large shopping malls.',
        'Where the largest pearl was discovered known as Pearl of Allah.',
        'Where you can find The largest exporter of coconuts and tropical fruits.',
        'In The only majority christian nation in asia.',
        'Where the country national symbol is a monkey-eating eagle.',
        'In a country that Invented the modern yoyo meaning come back.',
        'Where you can celebrate the longest Christmas season.',
        'Headed to The capital city of Manila.'
    ],
    m_names: ['Ian', 'Mark', 'Kyle', 'Jeff', 'Francis', 'Louis'],
    f_names: ['Nicole', 'Alyssa', 'Karen', 'Valerie', 'Mary', 'Trisha'],
    region: 'East Asia'
}
var Cambodia = {
    countryName: 'Cambodia',

	intro: 'Welcome to Cambodia, overcoming a tragic past that included the genocide of several million people, it is now one of Asias fastest growing economies, with a robust tourism industry revolving around its deep history and ancient architecture. ',

    facts: ['Headed to The land of a million mopeds.',
        'In a country that has a building on their national flag.',
        'In a country Known for their textile industry.',
        'Where it is disrespectful to let your feet or soles point at people or things.',
        'In a country Wedged between Thailand, Laos, and Vietnam.',
        'Where you can find Angkor Wat, a massive stone temple complex.',
        'Headed to The capital of Phnom Penh.',
        'In a country that Was a colony of France for 90 years.',
        'In a country that was Occupied by japan during world war 2.',
        'Where you can enjoy Tarantulas, as they are eaten as a snack.'
    ],
    m_names: ['Bora', 'Chakara', 'Chann', 'Borey', 'Mao', 'Meaker'],
    f_names: ['Akara', 'Chariya', 'Jorani', 'Davi', 'Kiri', 'Kesor'],
    region: 'East Asia'
}
var Vietnam = {
    countryName: 'Vietnam',

	intro: 'Welcome to Vietnam, home of the worlds largest cave, and the regions highest mountain, known as the roof of indochina. ',

    facts: ['Where the country national flag is red with a large yellow star in the middle.',
        'Headed to The capital city of Hanoi.',
        'In a country that looks like an S shape on the map.',
        'Where Gongs are used to call children to school.',
        'In a country Known for the dish called ruou ran.',
        'In a country that is the second largest coffee producer.',
        'In a country Sometimes called cashew nut heaven.',
        'Headed to the country that has a kitchen god, called Ong Tao.',
        'Where The local currency is dong. Get your mind out of the gutter!',
        'In a country where Legend has it that the people of this land originated from a union between an immoral chinese princess and the Dragon lord of the seas.'
    ],
    m_names: ['Dinh', 'Thuan', 'Trai', 'Trang', 'Khan', 'Hung'],
    f_names: ['Chau', 'Bian', 'Tien', 'Hue', 'Mai', 'Huong'],
    region: 'East Asia'
}
var NorthKorea = {
    countryName: 'North Korea',

	intro: 'Welcome to North Korea, founded in 1948 and officially name Democratic Peoples Republic of Korea. Despite its name, it is considered the most authoritarian regime in the world, with all elections having only one candidate. ',
    facts: ['Where the calendar is based on Kim II-Sungs date of birth.',
'In a country Home to the worlds largest stadium.',
'Where The national instrument is the accordion.',
'Where godzilla is known as Pulgasari.',
'Where you can score 4-points in a basketball game and lose points for missed free throws.',
'Headed to The capital city of Pyongyang.',
'Where They live by the principle of juche, or self reliance.',
'Where they have their own time zone.',
'In country known as the Land of the morning Calm.',
'Where you find the DMZ, which is the most heavily guarded border in the world.'
],

    m_names: ['Kim', 'Ban Ki-Moon', 'Chul', 'Hwan', 'Haneul', 'Suk'],
    f_names: ['Areum', 'Eun', 'Sung', 'Yeong', 'Wook', 'Uk'],
    region: 'East Asia'
}
var Malaysia = {
    countryName: 'Malaysia',
    intro: 'Welcome to Malaysia. As one of Asias predominately muslim nations, Islam is the official state religion. Over 60% of the population practices Islam. ',
    facts: ['Headed to The capital city of Kuala Lumpur.',
        'Where The flag looks similar to the US flag except it has a crescent moon and sun in the top left.',
        'In a country Historically called the peninsula of gold.',
        'Headed to The only country that includes territory both on mainland and in the islands.',
        'In a country Home to the biggest roundabout in the world.',
        'Where The Japanese invaded this country the same day they bombed pearl harbor.',
        'Where you can enjoy The national dish, Nasi Lemak, which is a rice dish cooked in coconut milk served in a banana leaf.',
        'Where you can find the largest and longest caves in the world.',
        'In a country where The state religion is Islam but they consider themselves very secular.',
        'In a place Home to the Petronas Towers which are the tallest twin skyscrapers.'],
    m_names: ['Ahmad', 'Ryan', 'Jack', 'Adam', 'Richard', 'Harris'],
    f_names: ['Mira', 'Sarah', 'Lisa', 'Wani', 'Irdina', 'Nisa'],
    region: 'East Asia'
}

//Africa
var SouthAfrica = {
    countryName: 'South Africa',
    intro: 'Welcome to South Africa, most famous for Nelson Mandela, Kruger National Park, and a variety of gem stones and minerals',
    facts: ['In a place Located at the cape of good hope.',
        'Headed to The capital city of Pretoria.',
        'Where you can find The only country to host world cup for soccer, rugby, and cricket.',
        'Where table mountain considered the oldest mountain and one of the 12 main energy centers.',
        'In a country Home to the largest brewing company in the world.',
        'Where the Local currency is the rand.',
        'Where you can find two nobel peace prize winners that lived on the same street.',
        'Where Nelson Mandela led the anti-apartheid movement to end racial segregation.',
        'In a country Home to the oldest remains of humans from over 160,000 years ago.',
        'Headed to a country that has three capital cities for each branch: executive, judicial, and legislative.'
    ],
    m_names: ['Junior', 'Bandile', 'Thato', 'Siyabonga', 'Lethabo', 'Kungawo'],
    f_names: ['Minenhle', 'Amahle', 'Karabou', 'Iminathi', 'Lesedi', 'Amogelang'],
    region: 'Africa'
}
var Uganda = {
    countryName: 'Uganda',
    intro: 'Welcome to Uganda referred to as the Pearl of Africa. Most famous for being the source of the Nile River',
    facts: ['In a country that is Located in eastern africa.',
        'Headed to the Home of gorillas.',
        'In a country Called the Pearl of Africa by Winston Churchill.',
        'Headed to The capital city of Kampala.',
        'Where you can enjoy pan fried grasshoppers.',
        'In a Landlocked country sharing borders with Sudan, Kenya, and Tanzania.',
        'Where most of the population lives near Lake Victoria.',
        'Where The nile river starts here before flowing through 9 other countries and ending into the mediterranean sea in egypt.',
        'Where The national symbol is a grey crowned crane which is on its flag.',
        'In a country Known as Africa’s Banana Republic.'
    ],
    m_names: ['Dembe', 'Majani', 'Amare', 'Mukisa', 'Ebo', 'Kojo'],
    f_names: ['Amaka', 'Kia', 'Kamali', 'ife', 'Asha', 'Eshe'],
    region: 'Africa'
}
var Kenya = {
    countryName: 'Kenya',
    intro: 'Welcome to Kenya known as the cradel of mankind and home to the Big 5; Lions, Elephants, Buffalo, Rhinos and Leopards',
    facts: ['Headed to an East African country with coastline on the Indian Ocean.',
        'Headed to The capital city of Nairobi.',
        'Where the national Flag has two crossed white spears behind a rea, white, and black Maasai shield.',
        'In a Country that means God’s resting place.',
        'Where they make most of their money on exporting coffee but do not drink it themselves.',
        'Headed to an African country where the Majority are christian protestant.',
        'In a country Home to the fastest distance runners.',
        'In a country Shares borders with 5 countries such as somalia and tanzania.',
        'Where The official languages spoken is English and Swahili.',
        'Headed to Take a safari at the stunning Maasai Mara savannah reserve.'
    ],
    m_names: ['Abdullah', 'Hanif', 'Muraty', 'Musa', 'Safiri', 'Shani'],
    f_names: ['Abbo', 'Asya', 'Himaya', 'Hasanati', 'Sanura', 'Aisha'],
    region: 'Africa'
}
var Somalia = {
    countryName: 'Somalia',
    intro: 'Welcome to Somalia known as the Land of Punt. Punt was famous for frankincense and myrrh.',
    facts: ['In a country whose national flag is all blue with a large white star in the middle.',
        'In a country Located in the horn of Africa.',
        'In a country Known for piracy off the coast.',
        'Headed to The capital city of Mogadishu.',
        'Headed to The first African nation used for flying British warplanes.',
        'Headed to The only country in the world that does not possess a central form of government.',
        'Where you can find ancient rock paintings that date back 5000 years.',
        'In a country that has two main rivers that originate from Kenya: Shebelle and Juba.',
        'Where The majority of this African nation are muslims.',
        'In a country that Lies along the gulf of Aden and the Indian Ocean.'
    ],
    m_names: ['Aynab', 'Muhammad', 'Jawahir', 'Ladan', 'Braheem', 'Nadeem'],
    f_names: ['Jameelah', 'Aamina', 'Khadija', 'Uba', 'Ugbad', 'Filsan'],
    region: 'Africa'
}
var Sudan = {
    countryName: 'Sudan',
    intro: 'Welcome to Sudan, the biggest country in Africa, but it receives the least number of international visitors among African countries due to the ongoing conflict in several parts of Sudan.',
    facts: ['Headed to The capital city of Khartoum, where the White Nile Meets.',
        'Where The official language is Arabic and english with the country name meaning The land of the Blacks.',
        'Headed to the previous largest country in Africa before being split into north and south in 2011.',
        'Where you can see the red sea to the east.',
        'In a country Just a hop and skip away from Saudi Arabia.',
        'Headed to The capital city, which means elephant trunk, because the resemblance to the bend in the nile river there.',
        'Where The northern and western part of the country contain remnants of old volcanoes.',
        'Where there are more pyramids than in egypt.',
        'In a country Home to the first women movement in Africa and Middle East during the 60s.',
        'Headed to an African country that had the first female parliamentarian in 1965 and the first female minister of health in 1974.'
    ],
    m_names: ['Suleyman', 'malce', 'Ibraheem', 'Shakir', 'Kareem', 'Patrick'],
    f_names: ['Yaya', 'Nadia', 'Anita', 'Hiba', 'joyce', 'Racehl'],
    region: 'Africa'
}
var Nigeria = {
    countryName: 'Nigeria',
    intro: 'Welcome to Nigeria. When you think oil, you think Nigeria. Nigeria remains Africas largest oil producer ',
    facts: ['In a country Located near the ivory coast.',
        'Where you can find the infamous prince that can make you rich over email if you use your account to transfer the funds.',
        'Headed to the Giant of Africa due to its large population and economy.',
        'Headed to The capital city of Abuja.',
        'In a country that borders the Gulf of Guinea, which leads to the Atlantic ocean.',
        'Where you can find Zuma Rock, the gateway to the capital.',
        'Where the national flag is 2 green vertical stripes with one white stripe in the middle.',
        'In a country Most famous for petroleum.',
        'Headed to the city of Lagos, which is known as Africas big apple.',
        'In a place Known for hollywood type scene called Nollywood.'
    ],
    m_names: ['Simon', 'Akoni', 'Kalu', 'Kelechi', 'Kwento', 'Oba'],
    f_names: ['Alkana', 'Iyawa', 'Juba', 'Kokumu', 'Lewa', 'Obi'],
    region: 'Africa'
}
var Cameroon = {
    countryName: 'Cameroon',
    intro: 'Welcome to Cameroon known as All of Africa in one country due to its geography and lively culture of music, particularly makossa and bikutsi, and for its successful national football team. ',
    facts: ['Headed to a central African country just north of Gabon.',
        'Where 230 other languages are spoken, with French and English as the official languages.',
        'In a country Known as the hinge of africa and Africa in miniature.',
        'Headed to The first African country to reach the quarter-finals in the world cup.',
        'In a place Famous for coffee, cocoa, and cotton.',
        'Where The name of the country means River of Pawn in portuguese.',
        'Headed to The capital city of Yaounde.',
        'Where the national flag has 3 vertical stripes: green, red, and yellow with a gold star in the middle.',
        'Where Ginger beer is consumed frequently by kids and adults and is non-alcoholic.',
        'Where you can find the only active volcano in western africa.'],
    m_names: ['Mamado', 'Alfa', 'Joseph', 'Demba', 'Samba', 'Alex'],
    f_names: ['Amy', 'Ouria', 'Seynabou', 'Pauline', 'Angel', 'Cynthia'],
    region: 'Africa'
}
var Senegal = {
    countryName: 'Senegal',
    intro: 'Welcome to Senegal known as the vibrant pulse of West Africa due to its tradition of storytelling, which is done by griots, who have kept West African history alive for thousands of years through words and music',
    facts: ['Headed to the capital city of Dakar.',
        'In a country Named by Portuguese fisherman which means these are our boats.',
        'In a country that used to be the hub for the international slave trade.',
        'Where you can find the Best ivory, fish, and gold.',
        'In a country Home to the first ever movie made in Africa.',
        'In a country Located on the western coast of Africa just south of the sahara desert.',
        'Where you can enjoy teh dish, shep-boo-jan, meaning rice with fish.',
        'In a country where The economy is largely based on agriculture.',
        'Headed to a country that is Predominantly muslim with large ties to French and Lebanese culture.',
        'Where you can see The Sene gambian Stone Circles.'
    ],
    m_names: ['Yves', 'Romeo', 'Frank', 'Oliver', 'Nelson', 'Wilson'],
    f_names: ['Cynthia', 'Stephanie', ' Marie', 'Laura', 'Hillary', 'Diana'],
    region: 'Africa'
}
var Ghana = {
    countryName: 'Ghana',
    intro: 'Welcome to Ghana historically famous for its gold. It was previously called the Gold Coast. Now, Chocolate has probably taken over, with it being one of the key suppliers of Cocoa to the likes of Cadburys',
    facts: ['In a country Sandwhiched between Cote d’ivoire and Togo.',
        'Headed to the capital city of Accra.',
        'Where The local currency is cedi meaning sea shells.',
        'Where The entire southern border of the country sits on the Gulf of Guinea.',
        'Headed to the most peaceful African country.',
        'In a country Home to Lake Volta, the largest man-made lake.',
        'Where The country name means warrior king.',
        'In a country Known as the gold coast for its gold and salt trade.',
        'Headed to the First sub-saharan nation to gain independance post-colonialism.',
        'In a country Home to the largest market in West Africa called Kejetia Market.'
    ],
    m_names: ['Abdul-Samad', 'Atsu', 'Muhsin', 'Nsoah', 'Qamar', 'Sabir'],
    f_names: ['Mawusi', 'Najla', 'Nana', 'Rihana', 'Tawbah', 'Thema'],
    region: 'Africa'
}
//SouthAmerica
var Brazil = {
    countryName: 'Brazil',
    intro: 'Welcome to Brazil, the only country in South America that speaks Portuguese. Known for soccer and coffee',
    facts: ['Headed to the largest country in South America.',
        'In a country where The macaw is the national animal.',
        'Where you can find the worlds largest producer of coffee.',
        'Headed to the The capital city of Bracilia, which was purposely modeled after an airplane.',
        'The official language is portuguese.',
        'In a country Home to the Amazon River which is the 2nd largest in the world.',
        'In a country Known for their soccer skills winning the World cup the most times.',
        'Headed to the worlds best beach.',
        'Where the motto on their national flag means order and progress.',
        'Where you see the statue of Christ the Redeemer looking down on you.'
    ],
    m_names: ['Gabriel', 'Arthur', 'Luis', 'Lucas', 'Pedro', 'Bruno'],
    f_names: ['Gabriella', 'Amanda', 'Beatriz', 'Victoria', 'Raquel', 'Sabrina'],
    region: 'South America'
}
var Argentina = {
    countryName: 'Argentina',
    intro: 'Welcome to Argentina known for its elite national soccer team, the famed revolutionary Che Guevara and such beautiful landforms as the Iguazu Falls. One of the most striking countries in South America, Argentina is a popular tourist destination and features a dense heritage.',
    facts: ['Where The country name comes from the latin word for silver.',
'In a country Home to Pope Francis, the first non-european pontiff of the Roman Catholic Church.',
'Where the first animated film was created in 1917.',
'Where The first South American country to legalize same-sex marriage.',
'In a country Known for soccer greats diego maradona and lionel messi.',
'In a country Home to Mt. Aconcagua, the highest point in the Western Hemisphere.',
'Where you can find world-famous tango dancing.',
'In the capital city of Buenos Aires, meaning good airs or fair winds in spanish.',
'Where you must try Yerba Mate. It is their national drink.',
'In a country Home to the worlds widest avenue spanning 14 lanes and 4 lanes of parallel streets.'
],

    m_names: ['Marcos', 'Juan', 'Agustine', 'Pablo', 'Fernando', 'Armando'],
    f_names: ['Agustina', 'Camila', 'Paula', 'Sara', 'Julia', ''],
    region: 'South America'
}
var Venezuela = {
    countryName: 'Venezuela',
    intro: 'Welcome to Venezuela known widely for its petroleum industry, the environmental diversity of its territory, and its natural features. Home to a huge diversity of wildlife in a variety of protected habitats, Venezuela is considered to be among the 17 most megadiverse countries in the world',
    facts: ['In a country that means little venice, named after by an Italian explorer.',
        'In a country Home to the largest lake in South America and one of the oldest on earth.',
        'In a country where you can see magical lightning called Catatumbo, which means continuous high frequency in Spanish.',
        'Where you can find the world’s tallest waterfall about 15 times taller than Niagra Falls.',
        'Headed to the highest statue of Virgin Mary, which is taller than the Statue of Liberty.',
        'In the country known for their large proven oil reserves.',
        'In a country where baseball is their favorite sport.',
        'In a country Known for winning the most beauty pageant titles in the world.',
        'In the country Home to the famous breakfast dish Arepas.',
        'In the largest city and capital city of Caracas.'
    ],
    m_names: ['Sebastian', 'Mateo', 'Nicholas', 'Alehandro', 'Diego', 'Tomas'],
    f_names: ['Alehandra', 'Marian', 'Lucero', 'Michele', 'Diyan', 'Juliana'],
    region: 'South America'
}
var Colombia = {
    countryName: 'Colombia',
    intro: 'Welcome to Colombia known for its emeralds, the myth of El dorado, and its tropical landscapes nettled in the Andean peaks',
    facts: ['Headed to the only country in South America that has a coastline on both the pacific ocean and the Caribbean Sea',
        'In the beautiful capital city of Bogota',
        'Where drug lord Pablo Escobar offered to pay the country’s debt to improve his reputation and escape justice',
        'In the country that is part of the ring of fire making it vulnerable to earthquakes and volcanic eruptions',
        'In a country situated on the equator, so expect much heat and sun',
        'Where breakfast consists of Changua milk soup with undercooked egg and salty blocks of cheese in your coffee',
        'Where Futbol or soccer is the national sport boasting the most unique goal dance',
        'In the country Home to world renowned singer and dancer, Shakira',
        'In the country Home to the largest theater festival called the Iberoamericana',
        'In the country Home to one out of every five butterfly species.'
    ],
    m_names: ['Andres', 'Camillo', 'Diego', 'Ricardo', 'Luis', 'Juan Diego'],
    f_names: ['Diana', 'Paula', 'Erica', 'Susana', 'Leidi', 'Vanessa'],
    region: 'South America'
}
var Peru = {
    countryName: 'Peru',
    intro: 'Welcome to Peru most famous for Machu Picchu and the Incan Trail. Amongst certain people it is famous for its Ayahuasca ceremonies and Shamans in the Amazon',
    facts: ['Where you can find the incan citadale, Machu Picchu, and the Incan Trail.',
        'In the country Home to the traditional dish of Cuy or Guinea Pig.',
        'Where the potato originated from here and corn is grown in almost any color you can think of.',
        'Where you can find the oldest university in the Western Hemisphere.',
        'Where you can find the world’s deepest canyon almost twice as deep as the grand canyon.',
        'Where it is a tradition to give friends and family yellow underpants to ring in the new year.',
        'In the country Home to the highest sand dune in the world, Cerro Blanco.',
        'In the capital city of Lima, which is also the largest city in the country.',
        'In the third largest country in South America.',
        'Where you can find both Pima and Tanguis cotton.'
    ],
    m_names: ['Stefano', 'John', 'Carlos', 'Hayzus', 'Victor', 'paulo'],
    f_names: ['Andrea', 'Daniella', 'Carlita', 'Marissa', 'Myra', 'Ruth'],
    region: 'South America'
}
var Ecuador = {
    countryName: 'Ecuador',
    intro: 'Welcome to Ecuador named after the equator that runs through the country. Also known as the closest country to space because of the earths rotation and shape',
    facts: ['Where the country is named after the equator that runs through the country.',
'In the closest country to space.',
'In the country Home to the #1 world heritage site Galapagos Islands.',
'Where Charles Darwin studied resulting in his theory on evolution.',
'In the country Home to the worlds largest exporter of bananas.',
'In one of two south american countries that do not share a border with Brazil.',
'Where you can find the most biodiverse country in the world.',
'Headed to the capital city of Quito.',
'In the country that shares a border with Peru, Colombia, and the pacific ocean.',
'Where you can enjoy famous dishes such as Fanesca, cerviche, and hornado.'],

    m_names: ['Ivan', 'Danny', 'Anthony', 'Jeremy', 'Evelyn', 'Santiago'],
    f_names: ['Grace', 'Ariana', 'Ginger', 'Mishel', 'Maylin', 'Magaly'],
    region: 'South America'
}
var Uruguay = {
    countryName: 'Uruguay',
    intro: 'Welcome to Uruguay meaning the river of birds also known as the Eastern side of that river.',
    facts: ['Where the country name means river of the painted birds in the Guarani language.',
        'In the country Home to the least corrupt country in South America.',
        'In the smallest country in South America behind Suriname.',
        'Where more than half the population live in the capital city of Montevideo.',
        'Where Crows known locally as Quebrada de los Cuervos outnumber people 4 to 1.',
        'In the country Home to the world’s largest national anthem Orientales la Patria o la Tumba.',
        'In the country Home to the Least religious country in South America leading to renaming of many catholic holidays.',
        'In the first country in the world to legalize the production and sale of marijuana.',
        'Where the first-ever FIFA world cup was hosted and won by the host nation.',
        'In the only country whose name has the same three letters in its first five.'
    ],
    m_names: ['Juan', 'Santiago', 'Kevin', 'Felipe', 'Bruno', 'Mateo'],
    f_names: ['Maria', 'Sofia', 'Lara', 'Pricila', 'Camila', 'Luana'],
    region: 'South America'
}
var Paraguay = {
    countryName: 'Paraguay',
    intro: 'Welcome to Paraguay. Paraguay is famous for being the first south american country to gain independence from Spain rule in 1811.',
    facts: ['Headed to One of the few countries in south america that still speak their native language called Guarani with Spanish as second.',
        'In a place often referred to as the heart of south America.',
        'In the country Home to the first railway line in South America.',
        'Known as One of two landlocked countries in South America.',
        'In the country Home to the largest navy of any landlocked country.',
        'In the country Home to the second largest hydroelectric-power plant called Itaipu Dam on the Parana River.',
        'In the capital city called Asuncion, referring to the ascension of mary.',
        'Where its Name means crowned river after the Guarani words for water and palm crown.',
        'In the country Home to South Americas second largest river after Amazon.',
        'Where The national drink is mahtay often served hot.'
    ],
    m_names: ['Daveed', 'Alba', 'Alin', 'Carlos', 'Elian', 'Enrique'],
    f_names: ['Liz', 'Larisa', 'Saskia', 'Dara', 'Judith', 'Lilian'],
    region: 'South America'
}
var Bolivia = {
    countryName: 'Bolivia',
    intro: 'Welcome to Bolivia named after independence fighter Simon Bolivar. He helped them gain independence from spain in 1825',
    facts: ['In a country Known as One of two landlocked South American Countries.',
        'Where it is named after the Venezuelan military and political leader who led 4 south american countries to independence from Spain.',
        'In La Paz, the highest capital city in the world.',
        'In the country Home to worlds most dangerous road the camino de las yungas.',
        'Where you offer dried llama to Pachamama or mother nature in return for blessings.',
        'In the country Home to the largest mirror on Earth called Salar de Uyuni which is a large salt flat.',
        'Where the main languages spoken are Spanish, Quechua, Aymara and Guarani with an additional 33 other recognized languages.',
        'Where you can find the largest butterfly sanctuary.',
        'In the country that used to be called upper peru before gaining independence in 1825 from spain.',
        'Where you can find pink dolphins in the amazon.'
    ],
    m_names: ['Eric', 'Flore', 'Rolando', 'Ricky', 'Luis', 'Arturo'],
    f_names: ['Camilia', 'Monica', 'Jennifer', 'Adriana', 'Olive', 'Belen'],
    region: 'South America'
}
var Chile = {
    countryName: 'Chile',
    intro: 'Welcome to Chile known for Easter Island. Easter Island is home to the large statues of heads called moai.',
    facts: ['In the world’s largest swimming pool filled with seawater from the pacific.',
        'Where you can find the driest place on earth called the Atacama Desert running between the Andes Mountains and the Pacific.',
        'Heading to the statues on Easter island called Moai.',
        'Where the capital is Santiago founded by a spanish explorer in 1541.',
        'Where the country derives its name meaning where the land ends.',
        'Where the national flag is similar to the state flag of texas.',
        'In the longest country in the world from north to south.',
        'Where Pisco is the national drink which is a clear liquid similar to brandy.',
        'In the country thats Famous for the Alerce tree with some older than 4,000 years.',
        'In the Home to the largest reserve of cooper.'
    ],
    m_names: ['Agustin', 'Vicente', 'Matias', 'Mateo', 'Tomas', 'Alonzo'],
    f_names: ['Josefa', 'Amanda', 'Martina', 'Sofia', 'Emilia', 'Florencia'],
    region: 'South America'
}

var MiddleEast = [Egypt, Iran, Algeria, Tunisia, Oman, Morocco, Syria, Iraq, SaudiArabia, Lebanon];
var EastAsia = [Japan, China, Mongolia, Nepal, Taiwan, Philippines, Cambodia, Vietnam, NorthKorea, Malaysia];
var Africa = [SouthAfrica, Uganda, Kenya, Somalia, Sudan, Nigeria, Cameroon, Senegal, Ghana];
var SouthAmerica = [Brazil, Argentina, Venezuela, Colombia, Peru, Ecuador, Uruguay, Paraguay, Bolivia, Chile];
var Region = [MiddleEast, Africa, EastAsia, SouthAmerica];
//criminal and people methods

var crimes = ["arson", "property", "human trafficking", "burglary", "drug-related", "robbery", "embezzlement", "grand-larceny", "forgery", "fraud", "white-collar", "kidnapping", "conspiracy"];


var crimeBackground = ['Man, I saw all of it on snapchat. Crazyness at its finest.', 
'I heard about it on social media, but didnt see it personally.', 
'Ya dude. They went live on facebook but the recording was taken down shortly after.', 
'I saw some photos on whatsapp, forwarded from mutual friends.', 
'I wouldnt mess with them. They are wild.',
' They went wild on twitter before there account was taken down.', 
 'Good luck stopping them. I saw it on the news last night. What is wrong with them.', 
 'My friend was there and saw the criminal in action.', 
 'Social media is ruining our world. theyre all over instagram.',
 'Did you see the photos on Instagram? They were taken down but are replicated all over the internet.', 
 'Heard there were millions in damages. What is wrong with people?', 
 'What is this world coming to? Please bring that criminal to justice.', 
 'Read about this on my newsfeed. Great thing I wasnt there and no one got hurt.', 
 'Checkout twitter. The criminal is trending with multiple people tweeting screenshots of taken down posts.', 
 'Wish I was there to do something about it. Just disgusting what people are doing today in our society.', 
 'I was there that night. I saw everything and let authorities know what the criminal looked like and where I thought they went.', 
 'Whatsapp is becoming the go to choice for communication between these criminals. I saw a couple messages shared on my group and I was flabbergasted', 
 'Dude is out of control and must be stopped. I hope authorities do something soon to bring the criminal responsible to justice.'];


function name(country, gender)
{
    if(gender == 'male')
    {
        return country.m_names[rand(0, country.m_names.length -1)];
    }
    else
    {
        return country.f_names[rand(0, country.f_names.length -1)];
    }
}

//randomly picks 3 attributes that for the response person to describe
function seenAttributes ()
{
    var crimAttArr = ["body", "height", "eye", "hair", "nextCountry"];
    var crimSeenArr = [];

    for( var s = 0; s < 3; s++)
    {
        shuffleArray(crimAttArr);
        crimSeenArr.push(crimAttArr.pop());
    }
    return crimSeenArr;

}
function PopulateCriminal()  {
    this.gender =  gender[rand(0, gender.length -1)];
    this.region = Region[rand(0, Region.length -1)];
    this.country = this.region[rand(0, this.region.length -1)];
    this.nextCountry = null; //should exempt current country, write a new method for this.
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairColor.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length -1)];
    this.height = height[rand(0, height.length -1)];
    this.special = special[rand(0, special.length -1)];
    this.name = name(this.country, this.gender);
    this.crime = crimes[rand(0, crimes.length -1)];
}

function PopulateResponsePerson() {
    //may not need all these attributes, can pick what we want to output
    this.seenValue = rand(0, 3);
    this.gender =  gender[rand(0, gender.length -1)];
    this.height = height[rand(0, height.length -1)];
    this.hairLength = hairLength[rand(0, hairLength.length -1)];
    this.hairColor = hairColor[rand(0, hairColor.length -1)];
    this.eyeSize = eyeSize[rand(0, eyeSize.length -1)];
    this.eyeColor = eyeColor[rand(0, eyeColor.length -1)];
    this.body = body[rand(0, body.length -1)];
    this.p_special = p_special[rand(0, p_special.length -1)];
    this.seenArr = seenAttributes();
    this.bystanderAction = bystanderAction[(rand(0, bystanderAction.length - 1))];
    this.bystanderApproachingDirection = bystanderApproachingDirection[(rand(0, bystanderApproachingDirection.length - 1))];
    this.bystanderAlerted = bystanderAlerted[(rand(0, bystanderAlerted.length - 1))];
}

//flags and methods to handle number of people talked to and countries visited
var criminal = null;
var r_person = null;
var talkedToCount = 0;
var stage = 0;
var countryVisited = 0; //count of times try
var crimCountryVisitedArr = []; //array of countries criminal has been to, used to match against
var countryOutputList = []; //Need to fill with 1 correct country and rest random. Splice the wrong country chosen when picked in checkCountry
var countryChoice = null;
var criminalArr = [0, 1, 2];
var talkingFlag = 0;
var criminalFlag = 0;
var questionedCount = 0;

// TODO, seeing duplicate countries sometimes
function generateCountryList()
{
    var tempArr = [];
    var tempCountryArr = [];
    //empty the output list
    countryOutputList = [];
    if(stage == 0)
    {
        //push correct country
        countryOutputList.push(criminal.country);
        tempArr = [MiddleEast, EastAsia, Africa, SouthAmerica];
        //remove the region where country is
        tempArr.splice(tempArr.indexOf(criminal.region), 1);
        //add 3 random country from ANY region (except criminal's region) since this is first stage. right?
        //if we're just sticking to it having to be in the same region then just remove this if block.
        for(var i = 0; i < 3; i++)
        {
            //random region assigned to temp
            tempCountryArr = tempArr[rand(0, tempArr.length - 1)];
            //random country assigned to output
            countryOutputList.push(tempCountryArr[rand(0, tempCountryArr.length - 1)]);
        }

    }
    else
    {
        //one correct country
        countryOutputList.push(criminal.country);
        //Assigning all countries in region to tempArr
        var tempArr = criminal.region.slice(0);
        for(var i = 0; i < criminal.region.length; i++)
        {
            tempArr[i] = criminal.region[i];
        }

        console.log("temp array from generateCountryList else: ");
        console.log(tempArr);
        //removing criminal.country from that list
        tempArr.splice(tempArr.indexOf(criminal.country), 1);
        //add 3 random country objects from criminal's region
        for(i = 0; i < 3; i++)
        {
            shuffleArray(tempArr);
            countryOutputList.push(tempArr.pop());
        }
    }
    //shuffles the array.
    shuffleArray(countryOutputList);
}


var country; // trying this as global since it keeps repeating the intitial country choice when using an echo.
//function checkCountry(country)
function checkCountry()
{
    if(talkedToCount != 0 || questionedCount != 0 || stage >= 3)
    {
        var speechOutput = this.t("NOT_COUNTRY_PICK");
		var repromptOutput = this.t("NOT_COUNTRY_REPROMPT");
        this.emit(":ask", speechOutput, representing);
    }
    {
        country = this.event.request.intent.slots.country_item.value;

        console.log(country);

        //assign choice of country and count for validation checking in other methods
        countryVisited++;

        if (stage == 0) {
            console.log("in stage 0 for checkCountry");
            for (i = 0; i < Region.length; i++) {
                for (j = 0; j < Region[i].length; j++) {
                    if (Region[i][j].countryName == country) {
                        //assign countryChoice if said country is a valid choice
                        countryChoice = Region[i][j];
                    }
                }
            }

            try {
                //if country doesn't register then they gave a country name we don't have, error output
                if (countryChoice.countryName != country) {
                    //error response, prompt for a valid country choice.
                    console.log("given country string did not match");
                    //fix counter
                    countryVisited--;
                }

                //if correct country chosen then reset count, go to next stage, assign next country
                if (criminal.country.countryName == country) {
                    console.log("correct country given");
                    countryVisited = 0;
                    stage++;
					if(stage < 3)
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.body, r_person.height, r_person.gender, r_person.bystanderAction, r_person.bystanderApproachingDirection);
						var repromptOutput = this.t("PLEASE_GREET");

						//var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
						this.emit(":ask", speechOutput, repromptOutput);
					}


                }
                else if ((criminal.country.countryName != country) && countryVisited >= 2) {
                    //you lose.
                    console.log("you lose");
                    //TODO ask if they want to play again
                    var speechOutput = this.t("LOSE_GOT_AWAY") + "<audio src='https://s3.amazonaws.com/sleuthhound/CoolBreezeIntro.mp3'/>";
                    this.emit(":tell", speechOutput);
                }
                else {
                    //picked wrong country but only on first try

                    var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
                        + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.body, r_person.height, r_person.gender, r_person.bystanderAction, r_person.bystanderApproachingDirection);
                    var repromptOutput = this.t("PLEASE_GREET");
                    this.emit(":ask", speechOutput, repromptOutput);
                }
            } catch (error) {
                console.log("CountryChoice incorrect handling");
            }
        }
        else {
            console.log("in else stage for checkCountry");
            for (i = 0; i < criminal.region.length; i++) {
                if (criminal.region[i].countryName == country) {
                    countryChoice = criminal.region[i];
                }
            }

            try {
                //if country chosen doesn't exist
                if (countryChoice.countryName != country) {
                    //error response, prompt for a valid country choice.
                    console.log("given country string did not match");
                    //fix counter
                    countryVisited--;
                }

                //if correct country chosen then reset count, go to next stage, assign next country
                if (criminal.country.countryName == country) {
                    console.log("correct country given");
                    countryVisited = 0;
                    stage++;
                    crimCountryVisitedArr.push(countryChoice);
                    //assignNextCountry();

                   if(stage < 3)
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.body, r_person.height, r_person.gender, r_person.bystanderAction, r_person.bystanderApproachingDirection);
						var repromptOutput = this.t("PLEASE_GREET");

						//var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
						this.emit(":ask", speechOutput, repromptOutput);
					}
					else
					{
						// audio clips must be 48kbps 16000hz mpeg 2
						
						speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName)
							+ "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
							+ this.t("LAST_ARRIVAL_MESSAGE", countryChoice.intro, criminal.name, criminal.name);
							repromptOutput = this.t("LAST_STAGE_READY_REPROMPT");
							this.emit(":ask", speechOutput, repromptOutput);
						
							
							//lastStage();
					}
                }
                else if (criminal.country.countryName != country && countryVisited >= 2) {
                    //you lose.
                    console.log("you lose");
                    //TODO ask if they want to play again
                    var speechOutput = this.t("LOSE");
                    this.emit(":ask", speechOutput);
                }
                else {
                    //picked wrong country

                    var speechOutput = this.t("DEPARTURE_MESSAGE", countryChoice.countryName) + "<audio src='https://s3.amazonaws.com/sleuthhound/Airplane.mp3'/>"
                        + this.t("ARRIVAL_MESSAGE", countryChoice.intro, criminal.name) + this.t("PERSON_APPROACHING", r_person.body, r_person.height, r_person.gender, r_person.bystanderAction, r_person.bystanderApproachingDirection);
                    var repromptOutput = this.t("PLEASE_GREET");
                    this.emit(":ask", speechOutput, repromptOutput);
                }
            } catch (error) {
                console.log("error in countryChecked()");
            }
        }

    }
}

//assign next country
function assignNextCountry()
{
    var found = 0;
    var temp = undefined;
    if(stage == 0)
    {
        console.log("in stage 0 of assign trying to push "+ criminal.country);
        console.log(criminal.country);
        crimCountryVisitedArr.push(criminal.country);
        found = 0;
        while(found == 0)
        {
            temp = criminal.region[rand(0, criminal.region.length -1)];
            if(crimCountryVisitedArr.indexOf(temp) == -1)
            {
                console.log("next countries before assigned:");
                console.log(criminal.nextCountry);
                criminal.nextCountry = temp;
                console.log("next countries after assigned:");
                console.log(criminal.nextCountry);

                //exit loop
                found++;
            }
        }
    }
    else
    {
        console.log("in stage else of assign");
        found = 0;
        while(found == 0)
        {
            temp = criminal.region[rand(0, criminal.region.length -1)];
            if(crimCountryVisitedArr.indexOf(temp) == -1)
            {
                console.log("next countries before assigned country:next:");
                console.log(criminal.country);
                criminal.country = criminal.nextCountry;
                console.log(temp);
                criminal.nextCountry = temp;
                console.log("next countries after assigned:");
                console.log(criminal.nextCountry);

                //exit loop
                found++;
            }
        }
    }
    generateCountryList();
}

function lastStage()
{
    if(stage < 3 )
    {
        var speechOutput = this.t("NOT_LAST_STAGE");
		var repromptOutput = this.t("NOT_COUNTRY_REPROMPT");
        this.emit(":ask", speechOutput, repromptOutput);

    }
    else {
        var speechOutput;
        shuffleArray(criminalArr);
        //removes index 0 from criminalArr
        var crimVar = criminalArr.splice(0, 1);
        criminalFlag = crimVar;

        var l_height = height.slice(0);
        var l_body = body.slice(0);
        var l_eyeSize = eyeSize.slice(0);
        var l_eyeColor = eyeColor.slice(0);
        var l_hairLength = hairLength.slice(0);
        var l_hairColor = hairColor.slice(0);
        var l_special = p_special.slice(0);
        //removing criminal traits from attribute arrays so randomizer doesn't pick them
        console.log("before splice t_heght size: " + l_height);
        console.log("before splice heght size: " + height);
        l_height.splice(l_height.indexOf(criminal.height), 1);
        l_body.splice(l_body.indexOf(criminal.body), 1);
        l_eyeSize.splice(l_eyeSize.indexOf(criminal.eyeSize), 1);
        l_eyeColor.splice(l_eyeColor.indexOf(criminal.eyeColor), 1);
        l_hairLength.splice(l_hairLength.indexOf(criminal.hairLength), 1);
        l_hairColor.splice(l_hairColor.indexOf(criminal.hairColor), 1);
        //might keep special, idk.
        l_special.splice(l_special.indexOf(criminal.special), 1);
        console.log("After splice t_heght size: " + l_height);
        console.log("After splice heght size: " + height);

        if (crimVar == 2) {
            console.log("A " + criminal.height + " " + criminal.body + " " + pronounThird(criminal.gender) + " with "
                + criminal.eyeSize + " " + criminal.eyeColor + " eyes, "
                + criminal.hairLength + " " + criminal.hairColor + " hair walks by. This is the Criminal.");

            //this.emit(":tell", speechOutput);

            speechOutput = this.t("ACCUSE", criminal.height, criminal.body, pronounThird(criminal.gender), criminal.eyeSize,
                criminal.eyeColor, criminal.hairLength, criminal.hairColor, bystanderAction[rand(0, bystanderAction.length - 1)], bystanderApproachingDirection[rand(0, bystanderApproachingDirection.length - 1)]);
			repromptOutput = this.t("ACCUSE_REPROMPT");
            this.emit(":ask", speechOutput, repromptOutput);


        }
        else {
            //randomly picks 1 or 2 attributes to change
            var criminalAtt = [criminal.height, criminal.body, criminal.eyeSize, criminal.eyeColor, criminal.hairLength,
                criminal.hairColor];
            var attributeInd = [0, 1, 2, 3, 4, 5];
            var randNum = rand(1, 2);
            shuffleArray(attributeInd);

            for (var r = 1; r <= randNum; r++) {
                switch (attributeInd[r]) {
                    case 0:
                        criminalAtt[attributeInd[r]] = l_height[rand(0, l_height.length) - 1];
                        break;
                    case 1:
                        criminalAtt[attributeInd[r]] = l_body[rand(0, l_body.length) - 1];
                        break;
                    case 2:
                        criminalAtt[attributeInd[r]] = l_eyeSize[rand(0, l_eyeSize.length - 1)];
                        break;
                    case 3:
                        criminalAtt[attributeInd[r]] = l_eyeColor[rand(0, l_eyeColor.length - 1)];
                        break;
                    case 4:
                        criminalAtt[attributeInd[r]] = l_hairLength[rand(0, l_hairLength.length - 1)];
                        break;
                    case 5:
                        criminalAtt[attributeInd[r]] = l_hairColor[rand(0, l_hairColor.length - 1)];
                        break;
                    default:
                        console.log("error populating final stage random person");
                        break;
                }
            }
            console.log("A " + criminalAtt[0] + " " + criminalAtt[1] + " " + pronounThird(criminal.gender) + " with "
                + criminalAtt[2] + " " + criminalAtt[3] + " eyes, "
                + criminalAtt[4] + " " + criminalAtt[5] + " hair, walks by. This is not the Criminal.");

						
            speechOutput = this.t("ACCUSE", criminalAtt[0], criminalAtt[1], pronounThird(criminal.gender), criminalAtt[2], criminalAtt[3],
                criminalAtt[4], criminalAtt[5], bystanderAction[rand(0, bystanderAction.length - 1)], bystanderApproachingDirection[rand(0, bystanderApproachingDirection.length - 1)]);
			repromptOutput = this.t("ACCUSE_REPROMPT");
            this.emit(":ask", speechOutput, repromptOutput);

        }
    }
}

function innocentFunction()
{
	if(criminalFlag == 2)
	{
		this.emit(":tell", this.t("LOSE_GOT_AWAY") + "<audio src='https://s3.amazonaws.com/sleuthhound/CoolBreezeIntro.mp3'/>");
	}
	else
	{
		lastStage();
	}
}

function nabThiefFunction()
{
	if(criminalFlag != 2)
	{
		this.emit(":tell", this.t("LOSE_WRONG") + "<audio src='https://s3.amazonaws.com/sleuthhound/CoolBreezeIntro.mp3'/>");
	}
	else
	{
		this.emit(":tell", this.t("WIN") + "<audio src='https://s3.amazonaws.com/sleuthhound/Applause.mp3'/>" + "<audio src='https://s3.amazonaws.com/sleuthhound/CoolBreezeIntro.mp3'/>");
	}
}

//called when 'TarryStopIntent is called. checks for number of people talked to is <= 5. If less,  then generates next person to talk to.
function talkedTo()
{
    if(questionedCount != 0)
    {
        var speechOutput = this.t("NOT_DONE_QUESTIONING");
		var repromptOutput = this.t("NOT_COUNTRY_REPROMPT");
        this.emit(":ask", speechOutput, repromptOutput);
    }
    else if (stage >= 3)
    {
        //shouldn't ever happen, maybe print error
        console.log("Some crasy ish went down, talkedTo got triggered in stage 3+");
    }
    else
    {
        // line below seemed to be needed to clear user spoken country for next round. Otherwise kept repeating first country choice regardless of what they said.
        country = null;

        var speechOutput;
        //final stage prompt.
        if (stage >= 3) {
            //stuff for populating possible criminals for player to stop.
            lastStage();
            //console.log("third stage people walk by");
        }
        else {

            //non-final stages
            talkedToCount++;
            //wrong country
            if (countryChoice != criminal.country) {
                talkedToCount += 3;
                //exit from country on 2nd talk in wrong country
                if (talkedToCount >= 6) {
                    talkedToCount = 0;

                    //talked to 2 people in the wrong country
                    console.log("wrong country response");
                    //TODO will need to relist the countries here
                    speechOutput = this.t("WRONG_COUNTRY") + this.t("CHOOSE_AGAIN") +
                        this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
                    repromptOutput = this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
                    this.emit(":ask", speechOutput, repromptOutput);
                }
                //persons just walk by or have nothing to say
                speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender)) + this.t("PASSEDBY_PROMPT"); // added continue searching prompt. need to handle their response somewhere
                repromptOutput = this.t("PASSEDBY_REPROMPT");
				this.emit(":ask", speechOutput, repromptOutput);
            }
            //right country
            else {

                //if the person has not seen anything or doesn't want to talk to you
                if (r_person.seenValue == 0) {

                    console.log("r_person seen value = 0 reponses");
                    //right country but person hasn't seen anything (20% chance)
                    speechOutput = this.t("PERSON_RESPONSE", pronoun(r_person.gender)) + this.t("PASSEDBY_PROMPT"); // added continue searching prompt. need to handle their response somewhere
                    repromptOutput = this.t("PASSEDBY_REPROMPT");
					this.emit(":ask", speechOutput, repromptOutput);
                }
                //if person has seen something
                else {

                    console.log("r_person seen value NOT 0 responses");
                    //TODO questioning responses here, just putting obvious country facts as clues here for testing
                    //0.00032 chance you won't see clues after talking to 5 people lol. Might need to fix that.
                    speechOutput = this.t("CORRECT_PERSON_RESPONSE", pronoun(r_person.gender), r_person.bystanderAlerted);
					repromptOutput = this.t("ASK_REPROMT");
                    this.emit(":ask", speechOutput, repromptOutput);
                }
            }
            //moved this block to doneQuestioning()

        }
    }
}

function doneQuestioning()
{
    var speechOutput;
    questionedCount = 0;
    if (talkedToCount >= 5) {
        console.log("resetting counter, 5 people talked to, time to choose a country");
        talkedToCount = 0;
        //if they were in the correct country and finished talking to 5 people
        if (countryChoice == criminal.country) {
            assignNextCountry();
            console.log("reached final person to talk to in 0 response");

            speechOutput = this.t("LAST_PERSON") + this.t("CHOOSE_AGAIN") +
                this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
            repromptOutput = this.t("CHOOSE_AGAIN") +
                this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
			this.emit(":ask", speechOutput, repromptOutput);
        }

        // TODO need something here?
        //nope, don't think so since we can't question while in the wrong country.

    }
    else {
        console.log("populating new r_person from doneQuestioning");
        r_person = new PopulateResponsePerson();
        //build response for next person walking by.
        speechOutput = this.t("DONE_QUESTIONING", r_person.body, r_person.height, r_person.gender, r_person.bystanderAction, r_person.bystanderApproachingDirection);
		repromptOutput = this.t("PLEASE_GREET");

        this.emit(":ask", speechOutput, repromptOutput);
    }
}

//questionType:
//1 = background
//2 = looks
//3 = location
function generateQuestionResponse(questionType)
{
    questionedCount++;
    var responseString = pronoun(criminal.gender) + " ";
    var speechOutput;
	var repromptOutput;
    if(questionedCount > 3)
    {
        doneQuestioning.call(this);
    }
    else if(questionType == 1)
    {

        if(r_person.seenArr.indexOf("height") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.height + "figure ";
            }
            else
            {
                responseString += "a " + criminal.height + " figure ";
            }
        }
        if(r_person.seenArr.indexOf("body") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.body + " build ";
            }
            else
            {
                responseString += "a " + criminal.body + " build ";
            }

        }
        if(r_person.seenArr.indexOf("eye") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
            else
            {
                responseString += "and, " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
        }
        if(r_person.seenArr.indexOf("hair") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.hairLength +", " +criminal.hairColor+ " hair ";
            }
            else
            {
                responseString += "and, " + criminal.hairLength +", " +criminal.hairColor+ " hair";
            }
        }
        if(r_person.seenArr.indexOf("special") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.special +" ";
            }
            else
            {
                responseString += "and, " + criminal.special +" ";
            }
        }

        //These emits confirmed to work when .call is used, and "this" is explicitly passed
        var crimeF = crimeBackground[rand(0, crimeBackground.length -1)];
        speechOutput = this.t("CRIME_FACTS", crimeF) + this.t("CONTINUE_PROMPT"); // need prompt for user input to trigger next intent
		repromptOutput = this.t("CONTINUE_REPROMPT");
        this.emit(":ask", speechOutput, repromptOutput);
    }
    else if(questionType == 2)
    {
        if(r_person.seenArr.indexOf("height") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.height + "figure ";
            }
            else
            {
                responseString += "a " + criminal.height + " figure ";
            }
        }
        if(r_person.seenArr.indexOf("body") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has a " + criminal.body + " build ";
            }
            else
            {
                responseString += "a " + criminal.body + " build ";
            }

        }
        if(r_person.seenArr.indexOf("eye") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
            else
            {
                responseString += "and, " + criminal.eyeColor +", " +criminal.eyeSize+ " eyes ";
            }
        }
        if(r_person.seenArr.indexOf("hair") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.hairLength +", " +criminal.hairColor+ " hair ";
            }
            else
            {
                responseString += "and, " + criminal.hairLength +", " +criminal.hairColor+ " hair";
            }
        }
        if(r_person.seenArr.indexOf("special") != -1)
        {

            if (responseString.length < 5)
            {
                responseString += "has " + criminal.special +" ";
            }
            else
            {
                responseString += "and, " + criminal.special +" ";
            }
        }

        speechOutput = this.t(responseString) + this.t("CONTINUE_PROMPT"); // need prompt for user input to trigger next intent
		repromptOutput = this.t("CONTINUE_REPROMPT");
        this.emit(":ask", speechOutput, repromptOutput);
    }
    else if(questionType == 3)
    {
        //TODO can change this to >= 0 if you want to always have person give clues on next country.
        if(r_person.seenValue > 0)
        {

            speechOutput = this.t("COUNTRY_FACTS", pronoun(criminal.gender), criminal.nextCountry.facts[rand(0, criminal.nextCountry.facts.length -1)] ) + this.t("CONTINUE_PROMPT"); // need prompt for user input to trigger next intent
            repromptOutput = this.t("CONTINUE_REPROMPT");
			this.emit(":ask", speechOutput, repromptOutput);
        }
    }
    else
    {
        console.log("error question type was incorrect, expecting 1, 2, or 3");
    }
}


var Alexa = require("alexa-sdk");
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
var countryString = undefined;

function Countries(number){
    return "Test Country Name";
}

// example of pause, TODO add where needed
/*
 var speech = new Speech();

 speech.say('This is a test response & works great!');
 speech.pause('100ms');
 speech.say('How can I help you?');
 var speechOutput = speech.ssml(true);
 this.emit(':ask', speechOutput , speechOutput);
 */

var seenMix =['I heard %s was last seen %s', 'Word is %s was seen %s, Not sure', 'but someone said %s is %s', 'All I know is %s is %s', 'Gosh, what did they say, oh ya, %s is %s' ];
var languageString = {
    "en": {
        "translation": {
            //"QUESTIONS" : questions["QUESTIONS"],

            "GAME_NAME" : "Seuth Hound", 
            "HELP_MESSAGE": "Please ask questions like, how do I play, what is the concept of the game, what am I supposed to do? ",
			"REPEAT_MESSAGE": "Sorry I could not hear you. What did you say?. ",
			"HELP_RESPONSE": "You, with the guidance of Chief Alexa, track down criminals as they try to elude you. Collect clues from bystanders by asking them if they heard about the crime, where the criminal went, and what the criminal looked like. Say yes if you would like to keep playing the game. ",
            "HELP_REPROMPT": "Are you listening to me? ", 
            "STOP_MESSAGE": "Would you like to continue our search? Please say no if you'd like to quit",
            "CANCEL_MESSAGE": "Ok, see you next time Sleuth.", // if needed
            "NO_MESSAGE": "Ok, we\'ll resume our hunt for criminals when you get back from leave. Until next time Sleuth!", // if needed
            "HELP_UNHANDLED": "Say yes to continue our mission, or no to end the game. ",
            "START_UNHANDLED": "Say start to start a new mission. ",
			"GAME_UNHANDLED": "game unhandled error. ",
			"QUESTION_UNHANDLED": "I'm sorry. I didn't understand your choice. Please say it again. ",
			"TEST_OUTPUT": "Testing output only. ", // testing only
            "NEW_GAME_MESSAGE": "Welcome to %s. ",
			"GAME_START_MESSAGE": "Are you ready for a mission? ",
            "INTRO_MESSAGE": "Let's do it Sleuth! We are on the hunt for %s.  %s is wanted in connection with a recent string of %s crimes resulting in %s million in damages. We must help bring the criminal responsible for these crimes to justice before %s goes into hiding. It will not be an easy task to catch %s , so pay close attention to clues that we get from bystanders on %s looks and whereabouts. %s was last seen %s. Enough talking, let's do it! ",
			"LOCATION_TEST": "%s is in %s, %s. ", // testing only
			"CHOOSE_COUNTRY": "  Where do you think the crime happened? ",
			"CHOOSE_AGAIN": "Where did the criminal go? ",
			"COUNTRY_LIST": "%s, %s, %s, or %s? ",
			"DEPARTURE_MESSAGE": "%s it is. Talk to you when you land. Get going sleuth! ",
			"ARRIVAL_MESSAGE": "%s. Time to find info on %s. Get the attention of bystanders so you can ask them for clues on what happened, what the criminal looks like, and where the criminal went. ",
            "LAST_ARRIVAL_MESSAGE": "%s. %s is near. Pay close attention to the features of people around you, any of them could be %s. ",
            "PERSON_APPROACHING": "A %s, %s, %s, is %s %s",
			"PERSON_RESPONSE": "%s kept on walking by. ",
            "CORRECT_PERSON_RESPONSE": " %s %s.",
			"ASK_REPROMT": "Ask questions like, did you hear anything about the criminal, or what does the criminal look like. ",
			"PLEASE_GREET": "Get bystanders attention by saying something like hello or excuse me. ",
			"PASSEDBY_PROMPT": "Say Continue to look for others. ", 
			"PASSEDBY_REPROMPT": "Please say Continue to keep looking for clues. ",
			"CONTINUE_PROMPT": ". Get more clues, or say bye to talk to someone else. ", // can't figure out how to keep "yes" from triggering wrong intents
            "CONTINUE_REPROMPT": ". Please keep asking questions to find more clues, or say bye to talk to someone else. ",
			"LOSE_WRONG": "Oh no! this is not the criminal. We have to step up our game.",
			"CRIME_FACTS": "%s .",
            "LOSE_GOT_AWAY": "Oh no! we were so close but the criminal has slipped into hiding.",
            "WIN": "Great work Sleuth. You caught the criminal!",
            "WRONG_COUNTRY": "This doesn't seem to be the correct Country, try a different one. ",
            "LAST_PERSON": "Looks like we've talked to everyone, it's time to pick the next country. ",
            "DONE_QUESTIONING": "Alright, let's look for someone else. A %s, %s, %s, is %s %s",
            "COUNTRY_FACTS": seenMix[(rand(0, seenMix.length - 1))],
            "NOT_LAST_STAGE": "We aren't ready to capture the criminal yet, to finish talking, say I'm done questioning. ",
            "LAST_STAGE": "The Criminal is close, we should try to capture the criminal. ",
            "NOT_COUNTRY_PICK": "We aren't done talking to people yet. To finish talking, say I'm done questioning. ",
			"NOT_COUNTRY_REPROMPT": "Please say, I'm done questioning. ",
            "NOT_DONE_QUESTIONING": "If you're finished questioning and ready to move on , say I'm done questioning. ",
			"LAST_STAGE_READY": "Say Ready to be a Sleuth when youre ready to catch the criminal. ",
			"LAST_STAGE_READY_REPROMPT": "Please say ready to be a sleuth. ",
            "ACCUSE": "A %s %s %s with %s %s eyes, %s %s hair is %s %s. Is this the criminal? If so, say stop criminal or say innocent to keep looking. ",
			"ACCUSE_REPROMPT": "Please say something like stop thief, or gotcha, if this is the criminal. Otherwise say innocent to keep looking. "
        }
    },
    "en-US": {
        "translation": {
            //"QUESTIONS" : questions["QUESTIONS"],
            "GAME_NAME" : "Sleuth Hound"
        }
    }
};

var GAME_STATES = {
    PLAY: "_PLAYMODE", // Playing the game.
    START: "_STARTMODE", // Entry point, start the game.
    HELP: "_HELPMODE" // The user is asking for help.
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageString;
    alexa.registerHandlers(newSessionHandlers, startStateHandlers, gameStateHandlers, helpStateHandlers);
    alexa.execute();
};

var newSessionHandlers = {
    "LaunchRequest": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", true);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", true);
    },
    "AMAZON.HelpIntent": function() {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState("helpTheUser", true);
    },
    "Unhandled": function () {
        var speechOutput = this.t("START_UNHANDLED");
        this.emit(":ask", speechOutput, speechOutput);
    }
};

var startStateHandlers = Alexa.CreateStateHandler(GAME_STATES.START, {
    "StartGame": function (newGame) {
        // welcomes play and asks if they want to play
        var speechOutput = newGame ? this.t("NEW_GAME_MESSAGE", this.t("GAME_NAME")) + this.t("GAME_START_MESSAGE") : "";
        var repromptOutput = this.t("REPEAT_MESSAGE");
        // Set the current state to play mode. The skill will now use handlers defined in gameStateHandlers
        this.handler.state = GAME_STATES.PLAY;
        this.emit(":askWithCard", speechOutput, repromptOutput);
    },
	"AMAZON.HelpIntent": function () {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState("helpTheUser", false);
		//this.emitWithState("HELP_RESPONSE", false);
    }
});

var gameStateHandlers = Alexa.CreateStateHandler(GAME_STATES.PLAY, {
    "GameStart": function () {
        shuffleArray(Region);
        talkedToCount = 0;
        countryVisited = 0;
        criminalFlag = 0;
        questionedCount = 0;

        criminal = new PopulateCriminal();
        r_person = new PopulateResponsePerson();
        //criminal name already populated with above code.
        //criminal.name = name(criminal.country, criminal.gender);
        //assigns the country the criminal will be headed to next so we can give clues regarding that.
        assignNextCountry();
        //reassigns array since this is spliced in last stage.
        criminalArr = [0, 1, 2];

        // introduces criminal and crime, asks which country the user would like to visit, TODO prompt with country choices
        //Grab country name like this: countryOutputList[i].countryName, where i = 0 to 3.
        //countryOutputList is already shuffled so you can use any order of index you like.
        var speechOutput = "<audio src='https://s3.amazonaws.com/sleuthhound/CoolBreezeIntro.mp3'/>" + this.t("INTRO_MESSAGE", criminal.name, pronoun(criminal.gender), criminal.crime, rand(50, 800), criminal.name, criminal.name, pronounOwnership(criminal.gender), criminal.name, criminal.country.facts[0]) +
            this.t("CHOOSE_COUNTRY") +
            this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
        var repromptOutput = this.t("REPEAT_MESSAGE") + this.t("COUNTRY_LIST", countryOutputList[0].countryName, countryOutputList[1].countryName, countryOutputList[2].countryName, countryOutputList[3].countryName);
        this.emit(":ask", speechOutput, repromptOutput);
    },
    "CountryIntent": function () {
        checkCountry.call(this);
    },
    "TarryStopIntent": function () {
        //r_person = new PopulateResponsePerson();
        //this.handler.state = GAME_STATES.QUESTIONING;
        talkedTo.call(this);
    },
    "ContinueSearchIntent": function () {
        doneQuestioning.call(this);
        //Is this the same as DoneQuestioningIntent?
        //doneQuestioning intent is meant to be called when you no longer want to talk to someone and
        // would like to generate the next person or next stage if already talked to 5 people

        // could be treated the same maybe. This is more for when you need to prompt the user in cases like when the person walked by without taking, or finished and left.
        // could make an interupt version for breaking out of a current conversation.
        /**
         r_person = new PopulateResponsePerson();
         var speechOutput = this.t("PERSON_APPROACHING", r_person.hairColor, r_person.body, r_person.gender);
         var repromptOutput = this.t("REPEAT_MESSAGE");
         this.emit(":ask", speechOutput, repromptOutput);
         //this.handler.state = GAME_STATES.PLAY;
         talkedTo.call(this);
         **/
    },
    "CrimeBackgroundQuestionIntent": function () {
        generateQuestionResponse.call(this, 1);
    },
    "CriminalLooksQuestionIntent": function () {
        generateQuestionResponse.call(this, 2);
    },
    "CriminalLocationQuestionIntent": function () {
        generateQuestionResponse.call(this, 3);
    },
    "DoneQuestioningIntent": function () {
        doneQuestioning.call(this);

    },
	"LastStageIntent": function () {
        lastStage.call(this);

    },
    "NabThiefIntent": function () {
        nabThiefFunction.call(this);
    },
    "innocentIntent": function () {
		innocentFunction.call(this);
    },
    "Unhandled": function () {
        var speechOutput = this.t("QUESTION_UNHANDLED");
        this.emit(":ask", speechOutput, speechOutput);
    },
    "AMAZON.StartOverIntent": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", false);
    },
	"AMAZON.NoIntent": function() {
        var speechOutput = this.t("NO_MESSAGE");
        this.emit(":tell", speechOutput);
    },
    "AMAZON.RepeatIntent": function () {
        this.emit(":ask", this.attributes["speechOutput"], this.attributes["repromptText"]);
    },
    "AMAZON.HelpIntent": function () {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState("helpTheUser", false);
		//this.emitWithState("HELP_RESPONSE", false);
    },
    "AMAZON.StopIntent": function () {
        this.handler.state = GAME_STATES.HELP;
        var speechOutput = this.t("STOP_MESSAGE");
        this.emit(":ask", speechOutput, speechOutput);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("CANCEL_MESSAGE"));
    },
    "SessionEndedRequest": function () {
        console.log("Session ended in trivia state: " + this.event.request.reason);
    }
});

// TODO, these copied from example. Still need to be adapted
var helpStateHandlers = Alexa.CreateStateHandler(GAME_STATES.HELP, {
   /* "helpTheUser": function (newGame) {
        //var askMessage = newGame ? this.t("ASK_MESSAGE_START") : this.t("REPEAT_MESSAGE") + this.t("STOP_MESSAGE");
        var speechOutput = this.t("HELP_RESPONSE");
		this.handler.state = GAME_STATES.START;

		//this.emitWithState("StartGame", true);

        //var repromptText = this.t("HELP_RESPONSE");
        this.emit(":ask", speechOutput);
    }, */
    "AMAZON.StartOverIntent": function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", false);
    },
    "AMAZON.RepeatIntent": function () {
        var newGame = (this.attributes["speechOutput"] && this.attributes["repromptText"]) ? false : true;
        this.emitWithState("helpTheUser", newGame);
    },
    "AMAZON.HelpIntent": function() {
        //var newGame = (this.attributes["speechOutput"] && this.attributes["repromptText"]) ? false : true;
        //this.emitWithState("helpTheUser", newGame);
		this.handler.state = GAME_STATES.START;
		var speechOutput = this.t("HELP_RESPONSE");
        var repromptText = this.t("HELP_RESPONSE");
        this.emitWithState(":ask", speechOutput, repromptOutput);
    },
    "AMAZON.YesIntent": function() {
        if (this.attributes["speechOutput"] && this.attributes["repromptText"]) {
            this.handler.state = GAME_STATES.PLAY;
            this.emitWithState("AMAZON.RepeatIntent");
        } else {
            this.handler.state = GAME_STATES.START;
            this.emitWithState("StartGame", false);
        }
    },
    "AMAZON.NoIntent": function() {
        var speechOutput = this.t("NO_MESSAGE");
        this.emit(":tell", speechOutput);
    },
    "AMAZON.StopIntent": function () {
        var speechOutput = this.t("STOP_MESSAGE");
        this.emit(":ask", speechOutput, speechOutput);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("CANCEL_MESSAGE"));
    },
    "Unhandled": function () {
        //var speechOutput = this.t("HELP_UNHANDLED");
        //this.emit(":ask", speechOutput, speechOutput);
		var newGame = (this.attributes["speechOutput"] && this.attributes["repromptText"]) ? false : true;
        this.emitWithState("helpTheUser", newGame);
    },
    "SessionEndedRequest": function () {
        console.log("Session ended in help state: " + this.event.request.reason);
    }
});

// end test ******************************************************************************************

/*
 exports.handler = (event, context) => {
 // New session
 try{
 if(event.session.new)
 {
 console.log("NEW SESSION")

 }

 switch (event.request.type)
 {
 case "LaunchRequest":
 //var output = "Welcome to sleuth hound"
 context.succeed(generateResponse({}, buildSpeechletResponse("Welcome to sleuth hound Alan", false)));
 break;

 case "IntentRequest":
 //intent request
 //main stuff here
 switch(event.request.intent.name)
 {
 case "GameStart":
 //false start check. If games already in place ask if they want to start a new one.
 //populate criminal
 criminal = new PopulateCriminal();
 assignNextCountry();
 r_person = new PopulateResponsePerson();
 break;

 //build a response using criminal.country.facts, criminal.name, criminal.gender
 case "CountryIntent":
 //false country pick check. If TalkedToCount < 5 then tell the user they haven't finished talking to all NPC yet.
 //Chad TODO
 //Figure out how to grab the country slot value when this Country intent is triggered so it can be used in checkCountry(country)
 //grab country from intent first then call checkCountry(country) method
 checkCountry(country);
 //arrival jingle response

 //response from countryChoice.facts[rand(0, countryChoice.facts.length -1]

 //build-person walking-by response using r_person.gender, r_person.p_special

 break;

 case "TarryStopIntent":
 //false stop check. If not currently
 talkedTo();
 break;

 //case "CrimeBackgroundQuestionIntent":
 //    break;
 default:
 console.log("default")
 }
 console.log("INTENT REQUEST")
 break;

 case "SessionEndedRequest":
 console.log('SESSION ENDED REQUEST')
 break;

 default:
 context.fail('INVALID REQUEST TYPE: ${event.request.type}')
 }

 } catch(error) {context.fail("Exception: " + error);}

 } */

function printStuff()
{
    console.log(criminal)
    console.log(r_person)
    console.log(talkedToCount);
    console.log(stage);
    console.log(countryVisited);//count of times tried
    console.log(crimCountryVisitedArr);//array of countries criminal has been to, used to match against
    console.log(countryChoice);
}
