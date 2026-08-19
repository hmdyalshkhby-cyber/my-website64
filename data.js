// ==========================================================================
// data.js
// Central data file for Educational Academy platform
// Edit lecture content, important points, vocabulary, quiz questions,
// PDF paths, and Google Docs translation links directly in this file.
// NO HTML EDITING REQUIRED. Just edit the objects below and refresh.
//
// Structure per lecture:
// {
//   id, title, content, importantPoints[], vocabulary[{word,translation}],
//   pdf, translationUrl, quiz[{question, options[4], correct(0-3)}]
// }
//
// To ADD a question: push a new {question, options, correct} object into
// a lecture's quiz array.
// To REMOVE a question: delete its object from the quiz array.
// To EDIT a question: change its question/options/correct fields.
// The quiz engine supports ANY number of questions automatically.
// ==========================================================================

const courses = [

    // ========================================================================
    // SECTION 1: Introduction to Tourism
    // ========================================================================
    {
        section: 1,
        title: "محاضرات فخوري",
        lectures: [

            // ---------- LECTURE 1: What is Tourism? ----------
            {
                id: 1,
                title: "ما هي السياحة",

                content: "المحاضرة الاولي",

                // importantPoints: [
                //     "The Grand Tour was popular among European aristocrats.",
                //     "The invention of the railway expanded travel access.",
                //     "Air travel in the 20th century created mass tourism.",
                //     "The internet transformed how people plan and book trips.",
                // ], 

                // vocabulary: [
                //     { word: "Tourism", translation: "السياحة" },
                //     { word: "Traveller", translation: "المسافر" },
                //     { word: "Leisure", translation: "وقت الفراغ" },
                //     { word: "Journey", translation: "الرحلة" },
                //     { word: "Destination", translation: "الوجهة السياحية" },
                // ],

                pdf: "https://drive.google.com/file/d/1nmM8wjklOEkjEQnR8O01pAd0Gft0wRb0/view?usp=drive_link",
                translationUrl: "https://drive.google.com/file/d/1nmM8wjklOEkjEQnR8O01pAd0Gft0wRb0/view?usp=drive_link",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"What is Tourism?\"?",
                //         options: ["What is Tourism?", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Tourism\"?",
                //         options: ["السياحة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Traveller\"?",
                //         options: ["المسافر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Leisure\"?",
                //         options: ["وقت الفراغ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Journey\"?",
                //         options: ["الرحلة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 2: History of Tourism ----------
            {
                id: 2,
                title: "History of Tourism",

                content: "Tourism has evolved from the Grand Tours of wealthy Europeans in the 17th century to a mass global industry enabled by affordable transportation and technology.",

                importantPoints: [
                    "The Grand Tour was popular among European aristocrats.",
                    "The invention of the railway expanded travel access.",
                    "Air travel in the 20th century created mass tourism.",
                    "The internet transformed how people plan and book trips.",
                ],

                vocabulary: [
                    { word: "Heritage", translation: "التراث" },
                    { word: "Pilgrimage", translation: "الحج/الرحلة الدينية" },
                    { word: "Exploration", translation: "الاستكشاف" },
                    { word: "Century", translation: "القرن" },
                    { word: "Voyage", translation: "الرحلة البحرية" },
                ],

                pdf: "pdfs/section1/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"History of Tourism\"?",
                //         options: ["History of Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Heritage\"?",
                //         options: ["التراث", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Pilgrimage\"?",
                //         options: ["الحج/الرحلة الدينية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Exploration\"?",
                //         options: ["الاستكشاف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Century\"?",
                //         options: ["القرن", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 3: The Tourism Industry Structure ----------
            {
                id: 3,
                title: "The Tourism Industry Structure",

                content: "The tourism industry is made up of interconnected sectors including transportation, accommodation, food and beverage, attractions, and travel intermediaries such as agencies.",

                importantPoints: [
                    "The industry includes accommodation, transport, and attractions.",
                    "Travel agencies act as intermediaries between suppliers and tourists.",
                    "Tour operators package multiple services into one product.",
                    "Government tourism boards promote destinations internationally.",
                ],

                vocabulary: [
                    { word: "Industry", translation: "الصناعة" },
                    { word: "Accommodation", translation: "الإقامة" },
                    { word: "Intermediary", translation: "الوسيط" },
                    { word: "Tour Operator", translation: "منظم الرحلات" },
                    { word: "Supplier", translation: "المورّد" },
                ],

                pdf: "pdfs/section1/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"The Tourism Industry Structure\"?",
                //         options: ["The Tourism Industry Structure", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Industry\"?",
                //         options: ["الصناعة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Accommodation\"?",
                //         options: ["الإقامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Intermediary\"?",
                //         options: ["الوسيط", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Tour Operator\"?",
                //         options: ["منظم الرحلات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 4: Tourism Demand and Motivation ----------
            {
                id: 4,
                title: "Tourism Demand and Motivation",

                content: "Tourism demand is driven by factors such as disposable income, leisure time, personal motivation, and the accessibility of a destination.",

                importantPoints: [
                    "Disposable income directly affects travel demand.",
                    "Motivation can be push factors or pull factors.",
                    "Push factors come from the traveller's own needs.",
                    "Pull factors relate to the attractiveness of a destination.",
                ],

                vocabulary: [
                    { word: "Demand", translation: "الطلب" },
                    { word: "Motivation", translation: "الدافع" },
                    { word: "Push Factor", translation: "عامل الدفع" },
                    { word: "Pull Factor", translation: "عامل الجذب" },
                    { word: "Disposable Income", translation: "الدخل المتاح" },
                ],

                pdf: "pdfs/section1/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"Tourism Demand and Motivation\"?",
                //         options: ["Tourism Demand and Motivation", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Demand\"?",
                //         options: ["الطلب", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Motivation\"?",
                //         options: ["الدافع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Push Factor\"?",
                //         options: ["عامل الدفع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Pull Factor\"?",
                //         options: ["عامل الجذب", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 5: Economic Impact of Tourism ----------
            {
                id: 5,
                title: "Economic Impact of Tourism",

                content: "Tourism generates income, creates jobs, and stimulates infrastructure development, but it can also cause inflation and dependency in local economies.",

                importantPoints: [
                    "Tourism creates direct and indirect employment.",
                    "Foreign exchange earnings boost the national economy.",
                    "Over-reliance on tourism can create economic vulnerability.",
                    "Infrastructure often improves to support tourist demand.",
                ],

                vocabulary: [
                    { word: "Revenue", translation: "الإيرادات" },
                    { word: "Employment", translation: "التوظيف" },
                    { word: "Investment", translation: "الاستثمار" },
                    { word: "Infrastructure", translation: "البنية التحتية" },
                    { word: "Foreign Exchange", translation: "العملة الأجنبية" },
                ],

                pdf: "pdfs/section1/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"Economic Impact of Tourism\"?",
                //         options: ["Economic Impact of Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Revenue\"?",
                //         options: ["الإيرادات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Employment\"?",
                //         options: ["التوظيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Investment\"?",
                //         options: ["الاستثمار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Infrastructure\"?",
                //         options: ["البنية التحتية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 6: Social and Cultural Impact of Tourism ----------
            {
                id: 6,
                title: "Social and Cultural Impact of Tourism",

                content: "Tourism can promote cultural exchange and understanding, but it may also lead to overcrowding, loss of authenticity, and cultural commodification.",

                importantPoints: [
                    "Tourism encourages cross-cultural understanding.",
                    "Overtourism can strain local communities and resources.",
                    "Cultural commodification changes traditions for tourist consumption.",
                    "Community-based tourism helps preserve local heritage.",
                ],

                vocabulary: [
                    { word: "Culture", translation: "الثقافة" },
                    { word: "Authenticity", translation: "الأصالة" },
                    { word: "Overtourism", translation: "السياحة المفرطة" },
                    { word: "Heritage Site", translation: "الموقع التراثي" },
                    { word: "Community", translation: "المجتمع المحلي" },
                ],

                pdf: "pdfs/section1/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"Social and Cultural Impact of Tourism\"?",
                //         options: ["Social and Cultural Impact of Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Culture\"?",
                //         options: ["الثقافة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Authenticity\"?",
                //         options: ["الأصالة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Overtourism\"?",
                //         options: ["السياحة المفرطة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Heritage Site\"?",
                //         options: ["الموقع التراثي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 7: Environmental Impact of Tourism ----------
            {
                id: 7,
                title: "Environmental Impact of Tourism",

                content: "Tourism affects the environment through resource consumption, pollution, and habitat disruption, making sustainable practices essential for long-term viability.",

                importantPoints: [
                    "Tourism can strain water and energy resources.",
                    "Transportation contributes to carbon emissions.",
                    "Protected areas require careful visitor management.",
                    "Eco-certifications encourage environmentally responsible tourism.",
                ],

                vocabulary: [
                    { word: "Environment", translation: "البيئة" },
                    { word: "Pollution", translation: "التلوث" },
                    { word: "Conservation", translation: "الحفاظ على البيئة" },
                    { word: "Carbon Footprint", translation: "البصمة الكربونية" },
                    { word: "Ecosystem", translation: "النظام البيئي" },
                ],

                pdf: "pdfs/section1/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                // quiz: [
                //     {
                //         question: "What is the main topic of this lecture, \"Environmental Impact of Tourism\"?",
                //         options: ["Environmental Impact of Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Environment\"?",
                //         options: ["البيئة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Pollution\"?",
                //         options: ["التلوث", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Conservation\"?",
                //         options: ["الحفاظ على البيئة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                //     {
                //         question: "What is the Arabic translation of \"Carbon Footprint\"?",
                //         options: ["البصمة الكربونية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                //         correct: 0
                //     },
                // ]
            },

            // ---------- LECTURE 8: Future Trends in Tourism ----------
            {
                id: 8,
                title: "Future Trends in Tourism",

                content: "Emerging trends include digital transformation, personalized experiences, sustainable travel, and the rise of remote-work-driven long-stay tourism.",

                importantPoints: [
                    "Technology enables personalized travel recommendations.",
                    "Sustainable and responsible travel is gaining popularity.",
                    "Remote work has fuelled long-stay 'workation' trends.",
                    "Virtual reality is beginning to influence destination marketing.",
                ],

                vocabulary: [
                    { word: "Innovation", translation: "الابتكار" },
                    { word: "Digitalization", translation: "الرقمنة" },
                    { word: "Workation", translation: "العمل أثناء السفر" },
                    { word: "Trend", translation: "الاتجاه" },
                    { word: "Experience Economy", translation: "اقتصاد التجربة" },
                ],

                pdf: "pdfs/section1/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Future Trends in Tourism\"?",
                        options: ["Future Trends in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Innovation\"?",
                        options: ["الابتكار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Digitalization\"?",
                        options: ["الرقمنة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Workation\"?",
                        options: ["العمل أثناء السفر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Trend\"?",
                        options: ["الاتجاه", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 2: Types of Tourism
    // ========================================================================
    {
        section: 2,
        title: "محضرات مصطفي فرغلي",
        lectures: [

            // ---------- LECTURE 1: Leisure Tourism ----------
            {
                id: 1,
                title: "Leisure Tourism",

                content: "Leisure tourism involves travel undertaken primarily for relaxation, enjoyment, and recreation, such as beach holidays or theme park visits.",

                importantPoints: [
                    "Leisure tourism is the most common form of travel.",
                    "Beach resorts are popular leisure destinations.",
                    "Leisure travellers often seek relaxation and entertainment.",
                    "Seasonality strongly affects leisure tourism demand.",
                ],

                vocabulary: [
                    { word: "Leisure Tourism", translation: "السياحة الترفيهية" },
                    { word: "Resort", translation: "المنتجع" },
                    { word: "Relaxation", translation: "الاسترخاء" },
                    { word: "Recreation", translation: "الترفيه" },
                    { word: "Seasonality", translation: "الموسمية" },
                ],

                pdf: "pdfs/section2/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Leisure Tourism\"?",
                        options: ["Leisure Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Leisure Tourism\"?",
                        options: ["السياحة الترفيهية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Resort\"?",
                        options: ["المنتجع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Relaxation\"?",
                        options: ["الاسترخاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Recreation\"?",
                        options: ["الترفيه", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: Business Tourism (MICE) ----------
            {
                id: 2,
                title: "Business Tourism (MICE)",

                content: "Business tourism, often called MICE, covers Meetings, Incentives, Conferences, and Exhibitions organized for corporate and professional purposes.",

                importantPoints: [
                    "MICE stands for Meetings, Incentives, Conferences, Exhibitions.",
                    "Business travellers often have higher spending power.",
                    "Convention centres are built to host large MICE events.",
                    "Corporate incentive trips reward top-performing employees.",
                ],

                vocabulary: [
                    { word: "Conference", translation: "المؤتمر" },
                    { word: "Exhibition", translation: "المعرض" },
                    { word: "Incentive Trip", translation: "رحلة تحفيزية" },
                    { word: "Delegate", translation: "المندوب" },
                    { word: "Convention Centre", translation: "مركز المؤتمرات" },
                ],

                pdf: "pdfs/section2/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Business Tourism (MICE)\"?",
                        options: ["Business Tourism (MICE)", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Conference\"?",
                        options: ["المؤتمر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Exhibition\"?",
                        options: ["المعرض", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Incentive Trip\"?",
                        options: ["رحلة تحفيزية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Delegate\"?",
                        options: ["المندوب", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Cultural and Heritage Tourism ----------
            {
                id: 3,
                title: "Cultural and Heritage Tourism",

                content: "Cultural tourism focuses on experiencing the history, art, architecture, and traditions of a destination, including museums and historical sites.",

                importantPoints: [
                    "Cultural tourists seek authentic historical experiences.",
                    "UNESCO World Heritage Sites attract cultural travellers.",
                    "Museums and galleries are key cultural attractions.",
                    "Local festivals showcase living cultural traditions.",
                ],

                vocabulary: [
                    { word: "Cultural Tourism", translation: "السياحة الثقافية" },
                    { word: "Heritage", translation: "التراث" },
                    { word: "Museum", translation: "المتحف" },
                    { word: "Artifact", translation: "القطعة الأثرية" },
                    { word: "Tradition", translation: "التقاليد" },
                ],

                pdf: "pdfs/section2/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Cultural and Heritage Tourism\"?",
                        options: ["Cultural and Heritage Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Cultural Tourism\"?",
                        options: ["السياحة الثقافية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Heritage\"?",
                        options: ["التراث", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Museum\"?",
                        options: ["المتحف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Artifact\"?",
                        options: ["القطعة الأثرية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Adventure Tourism ----------
            {
                id: 4,
                title: "Adventure Tourism",

                content: "Adventure tourism involves travel to remote or challenging environments for activities such as hiking, diving, and mountain climbing.",

                importantPoints: [
                    "Adventure tourism combines exploration with physical challenge.",
                    "Soft adventure includes low-risk activities like zip-lining.",
                    "Hard adventure includes high-risk activities like mountaineering.",
                    "Safety training is essential for adventure tour operators.",
                ],

                vocabulary: [
                    { word: "Adventure Tourism", translation: "سياحة المغامرات" },
                    { word: "Hiking", translation: "المشي لمسافات طويلة" },
                    { word: "Expedition", translation: "البعثة الاستكشافية" },
                    { word: "Trekking", translation: "رحلات التخييم" },
                    { word: "Risk Management", translation: "إدارة المخاطر" },
                ],

                pdf: "pdfs/section2/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Adventure Tourism\"?",
                        options: ["Adventure Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Adventure Tourism\"?",
                        options: ["سياحة المغامرات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Hiking\"?",
                        options: ["المشي لمسافات طويلة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Expedition\"?",
                        options: ["البعثة الاستكشافية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Trekking\"?",
                        options: ["رحلات التخييم", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Medical and Wellness Tourism ----------
            {
                id: 5,
                title: "Medical and Wellness Tourism",

                content: "Medical tourism refers to travel for healthcare treatment, while wellness tourism focuses on improving personal wellbeing through spas and retreats.",

                importantPoints: [
                    "Medical tourists travel abroad for affordable treatment.",
                    "Wellness tourism includes spas, yoga, and detox retreats.",
                    "Quality of healthcare facilities is critical for medical tourism.",
                    "Wellness tourism has grown rapidly in recent years.",
                ],

                vocabulary: [
                    { word: "Wellness", translation: "الرفاهية الصحية" },
                    { word: "Spa", translation: "المنتجع الصحي" },
                    { word: "Treatment", translation: "العلاج" },
                    { word: "Retreat", translation: "رحلة استجمام" },
                    { word: "Rehabilitation", translation: "إعادة التأهيل" },
                ],

                pdf: "pdfs/section2/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Medical and Wellness Tourism\"?",
                        options: ["Medical and Wellness Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Wellness\"?",
                        options: ["الرفاهية الصحية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Spa\"?",
                        options: ["المنتجع الصحي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Treatment\"?",
                        options: ["العلاج", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Retreat\"?",
                        options: ["رحلة استجمام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Ecotourism ----------
            {
                id: 6,
                title: "Ecotourism",

                content: "Ecotourism is responsible travel to natural areas that conserves the environment, sustains local wellbeing, and involves interpretation and education.",

                importantPoints: [
                    "Ecotourism prioritizes environmental conservation.",
                    "Local communities benefit economically from ecotourism.",
                    "Guided nature interpretation is a key ecotourism feature.",
                    "National parks are common ecotourism destinations.",
                ],

                vocabulary: [
                    { word: "Ecotourism", translation: "السياحة البيئية" },
                    { word: "Conservation", translation: "الحفاظ على الطبيعة" },
                    { word: "Biodiversity", translation: "التنوع البيولوجي" },
                    { word: "National Park", translation: "المتنزه الوطني" },
                    { word: "Wildlife", translation: "الحياة البرية" },
                ],

                pdf: "pdfs/section2/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Ecotourism\"?",
                        options: ["Ecotourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Ecotourism\"?",
                        options: ["السياحة البيئية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Conservation\"?",
                        options: ["الحفاظ على الطبيعة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Biodiversity\"?",
                        options: ["التنوع البيولوجي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"National Park\"?",
                        options: ["المتنزه الوطني", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Religious Tourism ----------
            {
                id: 7,
                title: "Religious Tourism",

                content: "Religious tourism involves travel motivated by faith, including pilgrimages to sacred sites and participation in religious festivals.",

                importantPoints: [
                    "Pilgrimage is one of the oldest forms of travel.",
                    "Religious tourism generates significant seasonal demand.",
                    "Sacred sites require careful visitor management.",
                    "Faith-based travel often combines spiritual and cultural elements.",
                ],

                vocabulary: [
                    { word: "Pilgrimage", translation: "الحج" },
                    { word: "Sacred Site", translation: "الموقع المقدس" },
                    { word: "Faith", translation: "الإيمان" },
                    { word: "Shrine", translation: "الضريح" },
                    { word: "Festival", translation: "المهرجان الديني" },
                ],

                pdf: "pdfs/section2/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Religious Tourism\"?",
                        options: ["Religious Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Pilgrimage\"?",
                        options: ["الحج", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Sacred Site\"?",
                        options: ["الموقع المقدس", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Faith\"?",
                        options: ["الإيمان", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Shrine\"?",
                        options: ["الضريح", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Domestic vs International Tourism ----------
            {
                id: 8,
                title: "Domestic vs International Tourism",

                content: "Domestic tourism occurs within a traveller's own country, while international tourism involves crossing national borders, each with distinct economic and regulatory implications.",

                importantPoints: [
                    "Domestic tourism supports local economies year-round.",
                    "International tourism requires passports and visas.",
                    "Exchange rates influence international travel demand.",
                    "Domestic tourism often recovers faster after crises.",
                ],

                vocabulary: [
                    { word: "Domestic Tourism", translation: "السياحة الداخلية" },
                    { word: "International Tourism", translation: "السياحة الدولية" },
                    { word: "Visa", translation: "التأشيرة" },
                    { word: "Border", translation: "الحدود" },
                    { word: "Passport", translation: "جواز السفر" },
                ],

                pdf: "pdfs/section2/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Domestic vs International Tourism\"?",
                        options: ["Domestic vs International Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Domestic Tourism\"?",
                        options: ["السياحة الداخلية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"International Tourism\"?",
                        options: ["السياحة الدولية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Visa\"?",
                        options: ["التأشيرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Border\"?",
                        options: ["الحدود", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 3: The Hospitality Industry
    // ========================================================================
    {
        section: 3,
        title: "محضرات مراد الوزه",
        lectures: [

            // ---------- LECTURE 1: Overview of Hospitality ----------
            {
                id: 1,
                title: "Overview of Hospitality",

                content: "The hospitality industry encompasses businesses that provide accommodation, food, and related services to guests away from home.",

                importantPoints: [
                    "Hospitality includes lodging, food service, and events.",
                    "Guest satisfaction is the industry's central goal.",
                    "The industry is highly labour-intensive.",
                    "Hospitality and tourism are closely interdependent.",
                ],

                vocabulary: [
                    { word: "Hospitality", translation: "الضيافة" },
                    { word: "Guest", translation: "الضيف" },
                    { word: "Lodging", translation: "الإقامة" },
                    { word: "Service Industry", translation: "صناعة الخدمات" },
                    { word: "Amenity", translation: "المرفق" },
                ],

                pdf: "pdfs/section3/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Overview of Hospitality\"?",
                        options: ["Overview of Hospitality", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Hospitality\"?",
                        options: ["الضيافة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Guest\"?",
                        options: ["الضيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Lodging\"?",
                        options: ["الإقامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Service Industry\"?",
                        options: ["صناعة الخدمات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: Types of Accommodation ----------
            {
                id: 2,
                title: "Types of Accommodation",

                content: "Accommodation options range from budget hostels and mid-range hotels to luxury resorts, boutique properties, and vacation rentals.",

                importantPoints: [
                    "Hotels are classified by star ratings.",
                    "Boutique hotels offer unique, personalized experiences.",
                    "Vacation rentals have grown through online platforms.",
                    "Hostels appeal to budget-conscious travellers.",
                ],

                vocabulary: [
                    { word: "Hotel", translation: "الفندق" },
                    { word: "Hostel", translation: "بيت الشباب" },
                    { word: "Boutique Hotel", translation: "فندق بوتيك" },
                    { word: "Vacation Rental", translation: "إيجار العطلات" },
                    { word: "Star Rating", translation: "تصنيف النجوم" },
                ],

                pdf: "pdfs/section3/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Types of Accommodation\"?",
                        options: ["Types of Accommodation", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Hotel\"?",
                        options: ["الفندق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Hostel\"?",
                        options: ["بيت الشباب", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Boutique Hotel\"?",
                        options: ["فندق بوتيك", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Vacation Rental\"?",
                        options: ["إيجار العطلات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Hotel Classification and Star Rating ----------
            {
                id: 3,
                title: "Hotel Classification and Star Rating",

                content: "Hotels are classified using star rating systems that reflect the quality of facilities, services, and amenities offered to guests.",

                importantPoints: [
                    "Star ratings range typically from one to five stars.",
                    "Higher ratings indicate more amenities and services.",
                    "Rating systems vary by country and organization.",
                    "Guest reviews increasingly complement official star ratings.",
                ],

                vocabulary: [
                    { word: "Classification", translation: "التصنيف" },
                    { word: "Star Rating", translation: "تصنيف النجوم" },
                    { word: "Luxury", translation: "الفخامة" },
                    { word: "Facility", translation: "المرفق" },
                    { word: "Standard", translation: "المعيار" },
                ],

                pdf: "pdfs/section3/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Hotel Classification and Star Rating\"?",
                        options: ["Hotel Classification and Star Rating", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Classification\"?",
                        options: ["التصنيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Star Rating\"?",
                        options: ["تصنيف النجوم", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Luxury\"?",
                        options: ["الفخامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Facility\"?",
                        options: ["المرفق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Front Office Operations ----------
            {
                id: 4,
                title: "Front Office Operations",

                content: "The front office is the first point of contact for guests, handling reservations, check-in, check-out, and guest inquiries.",

                importantPoints: [
                    "The front desk manages guest check-in and check-out.",
                    "Reservation systems track room availability in real time.",
                    "Concierge services assist guests with special requests.",
                    "Front office staff represent the hotel's first impression.",
                ],

                vocabulary: [
                    { word: "Front Office", translation: "مكتب الاستقبال" },
                    { word: "Reservation", translation: "الحجز" },
                    { word: "Check-in", translation: "تسجيل الوصول" },
                    { word: "Check-out", translation: "تسجيل المغادرة" },
                    { word: "Concierge", translation: "موظف الاستقبال المتخصص" },
                ],

                pdf: "pdfs/section3/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Front Office Operations\"?",
                        options: ["Front Office Operations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Front Office\"?",
                        options: ["مكتب الاستقبال", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Reservation\"?",
                        options: ["الحجز", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Check-in\"?",
                        options: ["تسجيل الوصول", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Check-out\"?",
                        options: ["تسجيل المغادرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Housekeeping Operations ----------
            {
                id: 5,
                title: "Housekeeping Operations",

                content: "Housekeeping ensures cleanliness, maintenance, and overall presentation of guest rooms and public areas within a hospitality property.",

                importantPoints: [
                    "Housekeeping directly affects guest satisfaction scores.",
                    "Standard operating procedures ensure consistent room quality.",
                    "Linen and inventory management is a key housekeeping task.",
                    "Housekeeping coordinates closely with maintenance teams.",
                ],

                vocabulary: [
                    { word: "Housekeeping", translation: "الخدمات المنزلية" },
                    { word: "Linen", translation: "الملاءات" },
                    { word: "Maintenance", translation: "الصيانة" },
                    { word: "Inventory", translation: "الجرد" },
                    { word: "Standard Operating Procedure", translation: "إجراء العمل القياسي" },
                ],

                pdf: "pdfs/section3/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Housekeeping Operations\"?",
                        options: ["Housekeeping Operations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Housekeeping\"?",
                        options: ["الخدمات المنزلية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Linen\"?",
                        options: ["الملاءات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Maintenance\"?",
                        options: ["الصيانة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Inventory\"?",
                        options: ["الجرد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Food and Beverage Service ----------
            {
                id: 6,
                title: "Food and Beverage Service",

                content: "Food and beverage operations include restaurants, bars, banquets, and room service, requiring coordination between kitchen and service staff.",

                importantPoints: [
                    "F&B service blends culinary skill with guest service.",
                    "Banquet operations require detailed event planning.",
                    "Room service extends dining convenience to guest rooms.",
                    "Menu design balances cost, quality, and guest preference.",
                ],

                vocabulary: [
                    { word: "Banquet", translation: "حفل استقبال" },
                    { word: "Menu", translation: "قائمة الطعام" },
                    { word: "Room Service", translation: "خدمة الغرف" },
                    { word: "Cuisine", translation: "المطبخ" },
                    { word: "Catering", translation: "تقديم الطعام" },
                ],

                pdf: "pdfs/section3/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Food and Beverage Service\"?",
                        options: ["Food and Beverage Service", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Banquet\"?",
                        options: ["حفل استقبال", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Menu\"?",
                        options: ["قائمة الطعام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Room Service\"?",
                        options: ["خدمة الغرف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Cuisine\"?",
                        options: ["المطبخ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Hospitality Management Structure ----------
            {
                id: 7,
                title: "Hospitality Management Structure",

                content: "Hospitality organizations are typically structured into departments such as front office, housekeeping, food and beverage, sales, and human resources.",

                importantPoints: [
                    "Departments must coordinate to deliver seamless guest service.",
                    "General managers oversee overall property operations.",
                    "Sales and marketing drive occupancy and revenue.",
                    "Human resources manages staffing and training programs.",
                ],

                vocabulary: [
                    { word: "Department", translation: "القسم" },
                    { word: "General Manager", translation: "المدير العام" },
                    { word: "Occupancy", translation: "نسبة الإشغال" },
                    { word: "Human Resources", translation: "الموارد البشرية" },
                    { word: "Organizational Chart", translation: "الهيكل التنظيمي" },
                ],

                pdf: "pdfs/section3/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Hospitality Management Structure\"?",
                        options: ["Hospitality Management Structure", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Department\"?",
                        options: ["القسم", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"General Manager\"?",
                        options: ["المدير العام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Occupancy\"?",
                        options: ["نسبة الإشغال", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Human Resources\"?",
                        options: ["الموارد البشرية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Quality Standards in Hospitality ----------
            {
                id: 8,
                title: "Quality Standards in Hospitality",

                content: "Consistent quality standards, guest feedback systems, and staff training are essential to maintaining a competitive hospitality operation.",

                importantPoints: [
                    "Quality standards ensure a consistent guest experience.",
                    "Guest feedback helps identify service improvement areas.",
                    "Regular staff training maintains service consistency.",
                    "Mystery guest audits assess service quality objectively.",
                ],

                vocabulary: [
                    { word: "Quality Standard", translation: "معيار الجودة" },
                    { word: "Feedback", translation: "الملاحظات" },
                    { word: "Training", translation: "التدريب" },
                    { word: "Consistency", translation: "الاتساق" },
                    { word: "Audit", translation: "التدقيق" },
                ],

                pdf: "pdfs/section3/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Quality Standards in Hospitality\"?",
                        options: ["Quality Standards in Hospitality", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Quality Standard\"?",
                        options: ["معيار الجودة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Feedback\"?",
                        options: ["الملاحظات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Training\"?",
                        options: ["التدريب", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Consistency\"?",
                        options: ["الاتساق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 4: Hotel Operations
    // ========================================================================
    {
        section: 4,
        title: "محضرات نهي",
        lectures: [

            // ---------- LECTURE 1: The Guest Cycle ----------
            {
                id: 1,
                title: "The Guest Cycle",

                content: "The guest cycle describes the stages a guest experiences with a hotel: pre-arrival, arrival, occupancy, and departure.",

                importantPoints: [
                    "The guest cycle has four main stages.",
                    "Pre-arrival includes reservation and confirmation.",
                    "Occupancy covers the guest's stay and service delivery.",
                    "Departure includes check-out and billing settlement.",
                ],

                vocabulary: [
                    { word: "Guest Cycle", translation: "دورة الضيف" },
                    { word: "Pre-arrival", translation: "ما قبل الوصول" },
                    { word: "Occupancy", translation: "فترة الإقامة" },
                    { word: "Departure", translation: "المغادرة" },
                    { word: "Billing", translation: "الفوترة" },
                ],

                pdf: "pdfs/section4/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"The Guest Cycle\"?",
                        options: ["The Guest Cycle", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Guest Cycle\"?",
                        options: ["دورة الضيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Pre-arrival\"?",
                        options: ["ما قبل الوصول", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Occupancy\"?",
                        options: ["فترة الإقامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Departure\"?",
                        options: ["المغادرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: Reservation Systems ----------
            {
                id: 2,
                title: "Reservation Systems",

                content: "Reservation systems allow hotels to manage bookings through direct channels, online travel agencies, and global distribution systems.",

                importantPoints: [
                    "Online travel agencies expand a hotel's booking reach.",
                    "Global distribution systems connect hotels with travel agents.",
                    "Direct bookings often carry lower commission costs.",
                    "Overbooking strategies help manage cancellations and no-shows.",
                ],

                vocabulary: [
                    { word: "Reservation System", translation: "نظام الحجز" },
                    { word: "Online Travel Agency", translation: "وكالة السفر الإلكترونية" },
                    { word: "Overbooking", translation: "الحجز الزائد" },
                    { word: "No-show", translation: "عدم الحضور" },
                    { word: "Booking Channel", translation: "قناة الحجز" },
                ],

                pdf: "pdfs/section4/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Reservation Systems\"?",
                        options: ["Reservation Systems", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Reservation System\"?",
                        options: ["نظام الحجز", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Online Travel Agency\"?",
                        options: ["وكالة السفر الإلكترونية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Overbooking\"?",
                        options: ["الحجز الزائد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"No-show\"?",
                        options: ["عدم الحضور", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Revenue Management ----------
            {
                id: 3,
                title: "Revenue Management",

                content: "Revenue management uses data and pricing strategies to sell the right room to the right guest at the right price and time.",

                importantPoints: [
                    "Revenue management maximizes room revenue and occupancy.",
                    "Dynamic pricing adjusts rates based on demand.",
                    "Forecasting demand is central to revenue management.",
                    "RevPAR is a key performance metric in hotels.",
                ],

                vocabulary: [
                    { word: "Revenue Management", translation: "إدارة الإيرادات" },
                    { word: "Dynamic Pricing", translation: "التسعير الديناميكي" },
                    { word: "Forecasting", translation: "التنبؤ" },
                    { word: "RevPAR", translation: "الإيراد لكل غرفة متاحة" },
                    { word: "Occupancy Rate", translation: "معدل الإشغال" },
                ],

                pdf: "pdfs/section4/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Revenue Management\"?",
                        options: ["Revenue Management", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Revenue Management\"?",
                        options: ["إدارة الإيرادات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Dynamic Pricing\"?",
                        options: ["التسعير الديناميكي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Forecasting\"?",
                        options: ["التنبؤ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"RevPAR\"?",
                        options: ["الإيراد لكل غرفة متاحة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Hotel Safety and Security ----------
            {
                id: 4,
                title: "Hotel Safety and Security",

                content: "Hotels implement safety and security measures including surveillance, staff training, and emergency procedures to protect guests and property.",

                importantPoints: [
                    "Security systems protect both guests and hotel assets.",
                    "Emergency procedures must be practiced regularly by staff.",
                    "Fire safety compliance is legally mandatory for hotels.",
                    "Guest key card systems enhance room security.",
                ],

                vocabulary: [
                    { word: "Security", translation: "الأمن" },
                    { word: "Surveillance", translation: "المراقبة" },
                    { word: "Emergency Procedure", translation: "إجراء الطوارئ" },
                    { word: "Fire Safety", translation: "السلامة من الحرائق" },
                    { word: "Key Card", translation: "بطاقة المفتاح" },
                ],

                pdf: "pdfs/section4/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Hotel Safety and Security\"?",
                        options: ["Hotel Safety and Security", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Security\"?",
                        options: ["الأمن", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Surveillance\"?",
                        options: ["المراقبة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Emergency Procedure\"?",
                        options: ["إجراء الطوارئ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Fire Safety\"?",
                        options: ["السلامة من الحرائق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Hotel Technology Systems ----------
            {
                id: 5,
                title: "Hotel Technology Systems",

                content: "Modern hotels rely on property management systems, point-of-sale systems, and guest-facing apps to streamline operations and enhance experience.",

                importantPoints: [
                    "A property management system centralizes hotel operations.",
                    "Point-of-sale systems track restaurant and bar transactions.",
                    "Mobile check-in apps reduce front desk wait times.",
                    "Technology integration improves operational efficiency.",
                ],

                vocabulary: [
                    { word: "Property Management System", translation: "نظام إدارة الممتلكات" },
                    { word: "Point of Sale", translation: "نقطة البيع" },
                    { word: "Mobile Check-in", translation: "تسجيل الوصول عبر الهاتف" },
                    { word: "Automation", translation: "الأتمتة" },
                    { word: "Integration", translation: "التكامل" },
                ],

                pdf: "pdfs/section4/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Hotel Technology Systems\"?",
                        options: ["Hotel Technology Systems", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Property Management System\"?",
                        options: ["نظام إدارة الممتلكات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Point of Sale\"?",
                        options: ["نقطة البيع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Mobile Check-in\"?",
                        options: ["تسجيل الوصول عبر الهاتف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Automation\"?",
                        options: ["الأتمتة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Sustainability in Hotel Operations ----------
            {
                id: 6,
                title: "Sustainability in Hotel Operations",

                content: "Sustainable hotel operations reduce energy and water consumption, minimize waste, and adopt eco-friendly procurement practices.",

                importantPoints: [
                    "Energy-efficient lighting reduces a hotel's operating costs.",
                    "Water conservation programs are increasingly standard in hotels.",
                    "Waste reduction includes recycling and reducing single-use plastics.",
                    "Green certifications can attract environmentally conscious guests.",
                ],

                vocabulary: [
                    { word: "Sustainability", translation: "الاستدامة" },
                    { word: "Energy Efficiency", translation: "كفاءة الطاقة" },
                    { word: "Waste Reduction", translation: "تقليل النفايات" },
                    { word: "Green Certification", translation: "الشهادة الخضراء" },
                    { word: "Procurement", translation: "الشراء" },
                ],

                pdf: "pdfs/section4/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Sustainability in Hotel Operations\"?",
                        options: ["Sustainability in Hotel Operations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Sustainability\"?",
                        options: ["الاستدامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Energy Efficiency\"?",
                        options: ["كفاءة الطاقة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Waste Reduction\"?",
                        options: ["تقليل النفايات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Green Certification\"?",
                        options: ["الشهادة الخضراء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Hotel Financial Management ----------
            {
                id: 7,
                title: "Hotel Financial Management",

                content: "Financial management in hotels involves budgeting, cost control, and analyzing key performance indicators such as ADR and RevPAR.",

                importantPoints: [
                    "Budgeting guides departmental spending throughout the year.",
                    "Cost control balances quality with profitability.",
                    "ADR measures the average rate paid per occupied room.",
                    "Financial reports guide strategic hotel decision-making.",
                ],

                vocabulary: [
                    { word: "Budget", translation: "الميزانية" },
                    { word: "Cost Control", translation: "ضبط التكاليف" },
                    { word: "ADR", translation: "متوسط سعر الغرفة" },
                    { word: "Profitability", translation: "الربحية" },
                    { word: "Financial Report", translation: "التقرير المالي" },
                ],

                pdf: "pdfs/section4/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Hotel Financial Management\"?",
                        options: ["Hotel Financial Management", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Budget\"?",
                        options: ["الميزانية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Cost Control\"?",
                        options: ["ضبط التكاليف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"ADR\"?",
                        options: ["متوسط سعر الغرفة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Profitability\"?",
                        options: ["الربحية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Crisis Management in Hospitality ----------
            {
                id: 8,
                title: "Crisis Management in Hospitality",

                content: "Crisis management prepares hospitality businesses to respond effectively to emergencies such as natural disasters, health crises, or security incidents.",

                importantPoints: [
                    "Crisis plans outline clear roles and responsibilities.",
                    "Communication with guests is critical during a crisis.",
                    "Staff training improves readiness for emergency situations.",
                    "Post-crisis recovery planning helps restore normal operations.",
                ],

                vocabulary: [
                    { word: "Crisis Management", translation: "إدارة الأزمات" },
                    { word: "Emergency Response", translation: "الاستجابة للطوارئ" },
                    { word: "Recovery Plan", translation: "خطة التعافي" },
                    { word: "Risk Assessment", translation: "تقييم المخاطر" },
                    { word: "Business Continuity", translation: "استمرارية الأعمال" },
                ],

                pdf: "pdfs/section4/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Crisis Management in Hospitality\"?",
                        options: ["Crisis Management in Hospitality", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Crisis Management\"?",
                        options: ["إدارة الأزمات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Emergency Response\"?",
                        options: ["الاستجابة للطوارئ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Recovery Plan\"?",
                        options: ["خطة التعافي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Risk Assessment\"?",
                        options: ["تقييم المخاطر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 5: Customer Service Excellence
    // ========================================================================
    {
        section: 5,
        title: "محضرات خالد سليمان",
        lectures: [

            // ---------- LECTURE 1: Principles of Customer Service ----------
            {
                id: 1,
                title: "Principles of Customer Service",

                content: "Excellent customer service is built on empathy, responsiveness, reliability, and a genuine commitment to meeting guest needs.",

                importantPoints: [
                    "Empathy helps staff understand guest concerns.",
                    "Responsiveness reduces guest frustration and wait times.",
                    "Reliability builds long-term guest trust.",
                    "Consistent service quality encourages repeat business.",
                ],

                vocabulary: [
                    { word: "Customer Service", translation: "خدمة العملاء" },
                    { word: "Empathy", translation: "التعاطف" },
                    { word: "Responsiveness", translation: "الاستجابة" },
                    { word: "Reliability", translation: "الموثوقية" },
                    { word: "Guest Satisfaction", translation: "رضا الضيف" },
                ],

                pdf: "pdfs/section5/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Principles of Customer Service\"?",
                        options: ["Principles of Customer Service", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Customer Service\"?",
                        options: ["خدمة العملاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Empathy\"?",
                        options: ["التعاطف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Responsiveness\"?",
                        options: ["الاستجابة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Reliability\"?",
                        options: ["الموثوقية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: Communication Skills for Hospitality ----------
            {
                id: 2,
                title: "Communication Skills for Hospitality",

                content: "Effective communication in hospitality involves active listening, clear language, and appropriate non-verbal cues to build guest rapport.",

                importantPoints: [
                    "Active listening helps staff fully understand guest requests.",
                    "Clear language avoids misunderstandings with guests.",
                    "Body language strongly influences guest perception.",
                    "Tone of voice affects how messages are received.",
                ],

                vocabulary: [
                    { word: "Communication", translation: "التواصل" },
                    { word: "Active Listening", translation: "الاستماع الفعّال" },
                    { word: "Rapport", translation: "الألفة" },
                    { word: "Body Language", translation: "لغة الجسد" },
                    { word: "Tone", translation: "النبرة" },
                ],

                pdf: "pdfs/section5/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Communication Skills for Hospitality\"?",
                        options: ["Communication Skills for Hospitality", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Communication\"?",
                        options: ["التواصل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Active Listening\"?",
                        options: ["الاستماع الفعّال", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Rapport\"?",
                        options: ["الألفة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Body Language\"?",
                        options: ["لغة الجسد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Handling Guest Complaints ----------
            {
                id: 3,
                title: "Handling Guest Complaints",

                content: "Handling complaints effectively involves listening carefully, apologizing sincerely, resolving the issue promptly, and following up with the guest.",

                importantPoints: [
                    "Listening without interrupting shows respect for the guest.",
                    "A sincere apology helps de-escalate tension.",
                    "Prompt resolution prevents complaints from escalating further.",
                    "Following up shows genuine care for guest satisfaction.",
                ],

                vocabulary: [
                    { word: "Complaint", translation: "الشكوى" },
                    { word: "Resolution", translation: "الحل" },
                    { word: "Apology", translation: "الاعتذار" },
                    { word: "Follow-up", translation: "المتابعة" },
                    { word: "De-escalation", translation: "تهدئة الموقف" },
                ],

                pdf: "pdfs/section5/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Handling Guest Complaints\"?",
                        options: ["Handling Guest Complaints", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Complaint\"?",
                        options: ["الشكوى", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Resolution\"?",
                        options: ["الحل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Apology\"?",
                        options: ["الاعتذار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Follow-up\"?",
                        options: ["المتابعة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Cultural Sensitivity in Service ----------
            {
                id: 4,
                title: "Cultural Sensitivity in Service",

                content: "Providing service to guests from diverse backgrounds requires cultural awareness, adaptability, and respect for different customs and expectations.",

                importantPoints: [
                    "Cultural awareness reduces misunderstandings with international guests.",
                    "Dietary customs vary widely across cultures.",
                    "Greetings and gestures can carry different meanings.",
                    "Staff training on cultural sensitivity improves guest experience.",
                ],

                vocabulary: [
                    { word: "Cultural Sensitivity", translation: "الحساسية الثقافية" },
                    { word: "Diversity", translation: "التنوع" },
                    { word: "Custom", translation: "العادة" },
                    { word: "Etiquette", translation: "آداب السلوك" },
                    { word: "Adaptability", translation: "القدرة على التكيف" },
                ],

                pdf: "pdfs/section5/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Cultural Sensitivity in Service\"?",
                        options: ["Cultural Sensitivity in Service", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Cultural Sensitivity\"?",
                        options: ["الحساسية الثقافية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Diversity\"?",
                        options: ["التنوع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Custom\"?",
                        options: ["العادة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Etiquette\"?",
                        options: ["آداب السلوك", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Personalization and Guest Experience ----------
            {
                id: 5,
                title: "Personalization and Guest Experience",

                content: "Personalizing the guest experience through preferences, recognition, and tailored services increases satisfaction and loyalty.",

                importantPoints: [
                    "Guest history data enables personalized service.",
                    "Recognizing returning guests builds emotional connection.",
                    "Tailored recommendations enhance the guest's stay.",
                    "Personalization is a key driver of guest loyalty.",
                ],

                vocabulary: [
                    { word: "Personalization", translation: "التخصيص" },
                    { word: "Guest History", translation: "سجل الضيف" },
                    { word: "Loyalty", translation: "الولاء" },
                    { word: "Recognition", translation: "التقدير" },
                    { word: "Preference", translation: "التفضيل" },
                ],

                pdf: "pdfs/section5/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Personalization and Guest Experience\"?",
                        options: ["Personalization and Guest Experience", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Personalization\"?",
                        options: ["التخصيص", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Guest History\"?",
                        options: ["سجل الضيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Loyalty\"?",
                        options: ["الولاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Recognition\"?",
                        options: ["التقدير", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Service Recovery Strategies ----------
            {
                id: 6,
                title: "Service Recovery Strategies",

                content: "Service recovery involves turning a negative guest experience into a positive one through timely, fair, and thoughtful responses.",

                importantPoints: [
                    "Fast response times improve service recovery outcomes.",
                    "Fair compensation should match the severity of the issue.",
                    "Empowered staff can resolve issues without delay.",
                    "Effective recovery can strengthen guest loyalty.",
                ],

                vocabulary: [
                    { word: "Service Recovery", translation: "استرداد الخدمة" },
                    { word: "Compensation", translation: "التعويض" },
                    { word: "Empowerment", translation: "التمكين" },
                    { word: "Timeliness", translation: "حسن التوقيت" },
                    { word: "Guest Loyalty", translation: "ولاء الضيف" },
                ],

                pdf: "pdfs/section5/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Service Recovery Strategies\"?",
                        options: ["Service Recovery Strategies", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Service Recovery\"?",
                        options: ["استرداد الخدمة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Compensation\"?",
                        options: ["التعويض", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Empowerment\"?",
                        options: ["التمكين", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Timeliness\"?",
                        options: ["حسن التوقيت", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Teamwork in Hospitality ----------
            {
                id: 7,
                title: "Teamwork in Hospitality",

                content: "Delivering excellent service requires strong teamwork and coordination across departments such as front office, housekeeping, and F&B.",

                importantPoints: [
                    "Cross-department coordination ensures smooth guest experiences.",
                    "Clear communication channels prevent service breakdowns.",
                    "Shared goals align staff across different departments.",
                    "Team briefings improve daily operational coordination.",
                ],

                vocabulary: [
                    { word: "Teamwork", translation: "العمل الجماعي" },
                    { word: "Coordination", translation: "التنسيق" },
                    { word: "Collaboration", translation: "التعاون" },
                    { word: "Briefing", translation: "الإحاطة" },
                    { word: "Cross-department", translation: "بين الأقسام" },
                ],

                pdf: "pdfs/section5/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Teamwork in Hospitality\"?",
                        options: ["Teamwork in Hospitality", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Teamwork\"?",
                        options: ["العمل الجماعي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Coordination\"?",
                        options: ["التنسيق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Collaboration\"?",
                        options: ["التعاون", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Briefing\"?",
                        options: ["الإحاطة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Measuring Guest Satisfaction ----------
            {
                id: 8,
                title: "Measuring Guest Satisfaction",

                content: "Guest satisfaction is measured through surveys, online reviews, and key metrics such as Net Promoter Score to guide service improvements.",

                importantPoints: [
                    "Guest surveys collect direct feedback on service quality.",
                    "Online reviews strongly influence future bookings.",
                    "Net Promoter Score measures guest loyalty and satisfaction.",
                    "Data from feedback should inform staff training programs.",
                ],

                vocabulary: [
                    { word: "Satisfaction Survey", translation: "استبيان الرضا" },
                    { word: "Net Promoter Score", translation: "مؤشر الترويج الصافي" },
                    { word: "Online Review", translation: "التقييم الإلكتروني" },
                    { word: "Metric", translation: "المقياس" },
                    { word: "Benchmark", translation: "المعيار المرجعي" },
                ],

                pdf: "pdfs/section5/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Measuring Guest Satisfaction\"?",
                        options: ["Measuring Guest Satisfaction", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Satisfaction Survey\"?",
                        options: ["استبيان الرضا", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Net Promoter Score\"?",
                        options: ["مؤشر الترويج الصافي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Online Review\"?",
                        options: ["التقييم الإلكتروني", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Metric\"?",
                        options: ["المقياس", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 6: Travel and Transportation
    // ========================================================================
    {
        section: 6,
        title: "محضرات تيسير زقيم",
        lectures: [

            // ---------- LECTURE 1: Overview of Transportation in Tourism ----------
            {
                id: 1,
                title: "Overview of Transportation in Tourism",

                content: "Transportation connects tourists to destinations and includes air, land, and sea travel, each playing a distinct role in the tourism system.",

                importantPoints: [
                    "Transportation is essential infrastructure for tourism.",
                    "Air travel dominates long-haul international tourism.",
                    "Land transport supports short and regional trips.",
                    "Sea travel includes cruises and ferry services.",
                ],

                vocabulary: [
                    { word: "Transportation", translation: "النقل" },
                    { word: "Long-haul", translation: "الرحلات الطويلة" },
                    { word: "Regional", translation: "إقليمي" },
                    { word: "Cruise", translation: "الرحلة البحرية" },
                    { word: "Ferry", translation: "العبّارة" },
                ],

                pdf: "pdfs/section6/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Overview of Transportation in Tourism\"?",
                        options: ["Overview of Transportation in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Transportation\"?",
                        options: ["النقل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Long-haul\"?",
                        options: ["الرحلات الطويلة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Regional\"?",
                        options: ["إقليمي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Cruise\"?",
                        options: ["الرحلة البحرية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: The Airline Industry ----------
            {
                id: 2,
                title: "The Airline Industry",

                content: "The airline industry provides scheduled and charter flights, with pricing influenced by fuel costs, competition, and demand fluctuations.",

                importantPoints: [
                    "Scheduled airlines operate on fixed timetables.",
                    "Charter flights are booked for specific groups or events.",
                    "Low-cost carriers have expanded access to air travel.",
                    "Fuel prices significantly affect airline operating costs.",
                ],

                vocabulary: [
                    { word: "Airline", translation: "شركة الطيران" },
                    { word: "Charter Flight", translation: "الرحلة المستأجرة" },
                    { word: "Low-cost Carrier", translation: "الناقل منخفض التكلفة" },
                    { word: "Timetable", translation: "الجدول الزمني" },
                    { word: "Fare", translation: "الأجرة" },
                ],

                pdf: "pdfs/section6/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"The Airline Industry\"?",
                        options: ["The Airline Industry", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Airline\"?",
                        options: ["شركة الطيران", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Charter Flight\"?",
                        options: ["الرحلة المستأجرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Low-cost Carrier\"?",
                        options: ["الناقل منخفض التكلفة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Timetable\"?",
                        options: ["الجدول الزمني", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Airports and Ground Handling ----------
            {
                id: 3,
                title: "Airports and Ground Handling",

                content: "Airports facilitate passenger processing, baggage handling, and aircraft servicing, requiring coordination among many operational stakeholders.",

                importantPoints: [
                    "Airports manage check-in, security, and boarding processes.",
                    "Ground handling includes baggage and aircraft servicing.",
                    "Passenger flow design reduces congestion in terminals.",
                    "Airport efficiency directly affects traveller satisfaction.",
                ],

                vocabulary: [
                    { word: "Airport", translation: "المطار" },
                    { word: "Terminal", translation: "صالة المطار" },
                    { word: "Baggage Handling", translation: "مناولة الأمتعة" },
                    { word: "Boarding", translation: "الصعود للطائرة" },
                    { word: "Ground Handling", translation: "الخدمات الأرضية" },
                ],

                pdf: "pdfs/section6/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Airports and Ground Handling\"?",
                        options: ["Airports and Ground Handling", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Airport\"?",
                        options: ["المطار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Terminal\"?",
                        options: ["صالة المطار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Baggage Handling\"?",
                        options: ["مناولة الأمتعة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Boarding\"?",
                        options: ["الصعود للطائرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Cruise Tourism ----------
            {
                id: 4,
                title: "Cruise Tourism",

                content: "Cruise tourism offers travellers accommodation, dining, and entertainment aboard ships that visit multiple destinations during a single trip.",

                importantPoints: [
                    "Cruise ships combine transportation with accommodation and leisure.",
                    "Itineraries often include several ports of call.",
                    "Cruise tourism has grown significantly in recent decades.",
                    "Onboard entertainment is a major draw for cruise passengers.",
                ],

                vocabulary: [
                    { word: "Cruise", translation: "الرحلة البحرية" },
                    { word: "Port of Call", translation: "ميناء التوقف" },
                    { word: "Itinerary", translation: "خط سير الرحلة" },
                    { word: "Onboard", translation: "على متن السفينة" },
                    { word: "Embarkation", translation: "الصعود على متن السفينة" },
                ],

                pdf: "pdfs/section6/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Cruise Tourism\"?",
                        options: ["Cruise Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Cruise\"?",
                        options: ["الرحلة البحرية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Port of Call\"?",
                        options: ["ميناء التوقف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Itinerary\"?",
                        options: ["خط سير الرحلة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Onboard\"?",
                        options: ["على متن السفينة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Rail and Road Travel ----------
            {
                id: 5,
                title: "Rail and Road Travel",

                content: "Rail and road travel provide flexible options for domestic and regional tourism, including high-speed trains, coaches, and car rentals.",

                importantPoints: [
                    "High-speed rail reduces travel time between cities.",
                    "Coach tours offer guided group travel experiences.",
                    "Car rentals give travellers independence and flexibility.",
                    "Road infrastructure quality affects tourism accessibility.",
                ],

                vocabulary: [
                    { word: "Railway", translation: "السكك الحديدية" },
                    { word: "Coach", translation: "الحافلة السياحية" },
                    { word: "Car Rental", translation: "تأجير السيارات" },
                    { word: "High-speed Train", translation: "القطار فائق السرعة" },
                    { word: "Accessibility", translation: "إمكانية الوصول" },
                ],

                pdf: "pdfs/section6/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Rail and Road Travel\"?",
                        options: ["Rail and Road Travel", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Railway\"?",
                        options: ["السكك الحديدية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Coach\"?",
                        options: ["الحافلة السياحية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Car Rental\"?",
                        options: ["تأجير السيارات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"High-speed Train\"?",
                        options: ["القطار فائق السرعة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Travel Agencies and Tour Operators ----------
            {
                id: 6,
                title: "Travel Agencies and Tour Operators",

                content: "Travel agencies and tour operators design, package, and sell travel products, acting as intermediaries between suppliers and consumers.",

                importantPoints: [
                    "Travel agencies offer personalized trip planning advice.",
                    "Tour operators bundle transportation, lodging, and activities.",
                    "Online travel agencies have changed traditional distribution.",
                    "Commission structures vary across different booking channels.",
                ],

                vocabulary: [
                    { word: "Travel Agency", translation: "وكالة السفر" },
                    { word: "Tour Package", translation: "الباقة السياحية" },
                    { word: "Commission", translation: "العمولة" },
                    { word: "Distribution Channel", translation: "قناة التوزيع" },
                    { word: "Itinerary Planning", translation: "تخطيط خط السير" },
                ],

                pdf: "pdfs/section6/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Travel Agencies and Tour Operators\"?",
                        options: ["Travel Agencies and Tour Operators", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Travel Agency\"?",
                        options: ["وكالة السفر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Tour Package\"?",
                        options: ["الباقة السياحية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Commission\"?",
                        options: ["العمولة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Distribution Channel\"?",
                        options: ["قناة التوزيع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Transportation Pricing and Yield Management ----------
            {
                id: 7,
                title: "Transportation Pricing and Yield Management",

                content: "Transportation providers use yield management to adjust prices dynamically based on demand, booking time, and available capacity.",

                importantPoints: [
                    "Yield management maximizes revenue from limited capacity.",
                    "Early bookings often receive lower fares.",
                    "Demand forecasting supports pricing decisions.",
                    "Capacity constraints influence last-minute fare increases.",
                ],

                vocabulary: [
                    { word: "Yield Management", translation: "إدارة العائد" },
                    { word: "Capacity", translation: "السعة" },
                    { word: "Fare Class", translation: "فئة الأجرة" },
                    { word: "Demand Forecasting", translation: "توقع الطلب" },
                    { word: "Pricing Strategy", translation: "استراتيجية التسعير" },
                ],

                pdf: "pdfs/section6/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Transportation Pricing and Yield Management\"?",
                        options: ["Transportation Pricing and Yield Management", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Yield Management\"?",
                        options: ["إدارة العائد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Capacity\"?",
                        options: ["السعة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Fare Class\"?",
                        options: ["فئة الأجرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Demand Forecasting\"?",
                        options: ["توقع الطلب", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Sustainable Transportation in Tourism ----------
            {
                id: 8,
                title: "Sustainable Transportation in Tourism",

                content: "Sustainable transportation reduces the environmental impact of tourism through fuel-efficient vehicles, public transit use, and carbon offset programs.",

                importantPoints: [
                    "Public transit reduces per-traveller carbon emissions.",
                    "Electric vehicles are increasingly used in tourism transport.",
                    "Carbon offset programs compensate for travel emissions.",
                    "Sustainable transport policies support long-term tourism growth.",
                ],

                vocabulary: [
                    { word: "Sustainable Transport", translation: "النقل المستدام" },
                    { word: "Carbon Offset", translation: "تعويض الكربون" },
                    { word: "Emission", translation: "الانبعاث" },
                    { word: "Public Transit", translation: "النقل العام" },
                    { word: "Electric Vehicle", translation: "المركبة الكهربائية" },
                ],

                pdf: "pdfs/section6/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Sustainable Transportation in Tourism\"?",
                        options: ["Sustainable Transportation in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Sustainable Transport\"?",
                        options: ["النقل المستدام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Carbon Offset\"?",
                        options: ["تعويض الكربون", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Emission\"?",
                        options: ["الانبعاث", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Public Transit\"?",
                        options: ["النقل العام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 7: Tourism Destinations
    // ========================================================================
    {
        section: 7,
        title: "محضرات انجليزي",
        lectures: [

            // ---------- LECTURE 1: Destination Attributes ----------
            {
                id: 1,
                title: "Destination Attributes",

                content: "Successful destinations combine natural attractions, cultural assets, infrastructure, and accessibility to appeal to different traveller segments.",

                importantPoints: [
                    "Natural beauty is a primary draw for many destinations.",
                    "Infrastructure quality affects visitor comfort and safety.",
                    "Accessibility determines how easily tourists can reach a place.",
                    "Destination image influences traveller decision-making.",
                ],

                vocabulary: [
                    { word: "Destination", translation: "الوجهة السياحية" },
                    { word: "Attraction", translation: "المعلم السياحي" },
                    { word: "Accessibility", translation: "إمكانية الوصول" },
                    { word: "Infrastructure", translation: "البنية التحتية" },
                    { word: "Destination Image", translation: "صورة الوجهة" },
                ],

                pdf: "pdfs/section7/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Destination Attributes\"?",
                        options: ["Destination Attributes", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Destination\"?",
                        options: ["الوجهة السياحية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Attraction\"?",
                        options: ["المعلم السياحي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Accessibility\"?",
                        options: ["إمكانية الوصول", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Infrastructure\"?",
                        options: ["البنية التحتية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: Destination Life Cycle ----------
            {
                id: 2,
                title: "Destination Life Cycle",

                content: "The destination life cycle model describes stages a destination passes through: exploration, involvement, development, consolidation, and stagnation or renewal.",

                importantPoints: [
                    "Exploration marks a destination's early, low-visitor stage.",
                    "Development brings rapid infrastructure and visitor growth.",
                    "Stagnation occurs when a destination reaches capacity limits.",
                    "Renewal strategies can revive a declining destination.",
                ],

                vocabulary: [
                    { word: "Life Cycle", translation: "دورة الحياة" },
                    { word: "Development Stage", translation: "مرحلة التطوير" },
                    { word: "Stagnation", translation: "الركود" },
                    { word: "Renewal", translation: "التجديد" },
                    { word: "Carrying Capacity", translation: "الطاقة الاستيعابية" },
                ],

                pdf: "pdfs/section7/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Destination Life Cycle\"?",
                        options: ["Destination Life Cycle", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Life Cycle\"?",
                        options: ["دورة الحياة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Development Stage\"?",
                        options: ["مرحلة التطوير", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Stagnation\"?",
                        options: ["الركود", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Renewal\"?",
                        options: ["التجديد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Urban Tourism Destinations ----------
            {
                id: 3,
                title: "Urban Tourism Destinations",

                content: "Urban destinations attract tourists with cultural landmarks, shopping, nightlife, and business opportunities within a compact city setting.",

                importantPoints: [
                    "Cities often combine leisure and business tourism appeal.",
                    "Landmarks and museums are key urban attractions.",
                    "Urban tourism can strain local transport systems.",
                    "City marketing campaigns aim to boost visitor numbers.",
                ],

                vocabulary: [
                    { word: "Urban Tourism", translation: "السياحة الحضرية" },
                    { word: "Landmark", translation: "المعلم البارز" },
                    { word: "Nightlife", translation: "الحياة الليلية" },
                    { word: "City Branding", translation: "العلامة التجارية للمدينة" },
                    { word: "Congestion", translation: "الازدحام" },
                ],

                pdf: "pdfs/section7/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Urban Tourism Destinations\"?",
                        options: ["Urban Tourism Destinations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Urban Tourism\"?",
                        options: ["السياحة الحضرية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Landmark\"?",
                        options: ["المعلم البارز", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Nightlife\"?",
                        options: ["الحياة الليلية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"City Branding\"?",
                        options: ["العلامة التجارية للمدينة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Coastal and Island Destinations ----------
            {
                id: 4,
                title: "Coastal and Island Destinations",

                content: "Coastal and island destinations attract tourists with beaches, marine activities, and resort infrastructure, but face unique environmental pressures.",

                importantPoints: [
                    "Beaches are a primary attraction for coastal destinations.",
                    "Marine ecosystems require careful environmental management.",
                    "Island destinations often depend heavily on tourism income.",
                    "Coastal erosion is a growing concern for many resorts.",
                ],

                vocabulary: [
                    { word: "Coastal Tourism", translation: "السياحة الساحلية" },
                    { word: "Island", translation: "الجزيرة" },
                    { word: "Marine Life", translation: "الحياة البحرية" },
                    { word: "Erosion", translation: "التآكل" },
                    { word: "Beach Resort", translation: "المنتجع الشاطئي" },
                ],

                pdf: "pdfs/section7/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Coastal and Island Destinations\"?",
                        options: ["Coastal and Island Destinations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Coastal Tourism\"?",
                        options: ["السياحة الساحلية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Island\"?",
                        options: ["الجزيرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Marine Life\"?",
                        options: ["الحياة البحرية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Erosion\"?",
                        options: ["التآكل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Rural and Mountain Destinations ----------
            {
                id: 5,
                title: "Rural and Mountain Destinations",

                content: "Rural and mountain destinations offer nature-based tourism such as hiking, skiing, and agritourism, often supporting local farming communities.",

                importantPoints: [
                    "Agritourism connects visitors with local farming practices.",
                    "Mountain destinations attract hikers and winter sports enthusiasts.",
                    "Rural tourism can diversify local economic activity.",
                    "Seasonal weather strongly affects mountain tourism demand.",
                ],

                vocabulary: [
                    { word: "Rural Tourism", translation: "السياحة الريفية" },
                    { word: "Agritourism", translation: "السياحة الزراعية" },
                    { word: "Ski Resort", translation: "منتجع التزلج" },
                    { word: "Countryside", translation: "الريف" },
                    { word: "Farming Community", translation: "المجتمع الزراعي" },
                ],

                pdf: "pdfs/section7/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Rural and Mountain Destinations\"?",
                        options: ["Rural and Mountain Destinations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Rural Tourism\"?",
                        options: ["السياحة الريفية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Agritourism\"?",
                        options: ["السياحة الزراعية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Ski Resort\"?",
                        options: ["منتجع التزلج", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Countryside\"?",
                        options: ["الريف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Destination Marketing Organizations ----------
            {
                id: 6,
                title: "Destination Marketing Organizations",

                content: "Destination marketing organizations promote a location's tourism appeal through branding, advertising, and partnerships with industry stakeholders.",

                importantPoints: [
                    "DMOs coordinate destination branding and promotion.",
                    "Public-private partnerships strengthen destination marketing efforts.",
                    "Digital campaigns now play a major role in DMO strategy.",
                    "DMOs often manage visitor information centres.",
                ],

                vocabulary: [
                    { word: "Destination Marketing Organization", translation: "منظمة تسويق الوجهات" },
                    { word: "Branding", translation: "بناء العلامة التجارية" },
                    { word: "Advertising", translation: "الإعلان" },
                    { word: "Partnership", translation: "الشراكة" },
                    { word: "Visitor Centre", translation: "مركز الزوار" },
                ],

                pdf: "pdfs/section7/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Destination Marketing Organizations\"?",
                        options: ["Destination Marketing Organizations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Destination Marketing Organization\"?",
                        options: ["منظمة تسويق الوجهات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Branding\"?",
                        options: ["بناء العلامة التجارية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Advertising\"?",
                        options: ["الإعلان", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Partnership\"?",
                        options: ["الشراكة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Destination Competitiveness ----------
            {
                id: 7,
                title: "Destination Competitiveness",

                content: "Destination competitiveness depends on factors such as price, safety, quality of experience, and effective destination management.",

                importantPoints: [
                    "Safety perception strongly affects destination choice.",
                    "Price competitiveness attracts value-conscious travellers.",
                    "Quality of service differentiates competing destinations.",
                    "Strong destination management improves overall competitiveness.",
                ],

                vocabulary: [
                    { word: "Competitiveness", translation: "القدرة التنافسية" },
                    { word: "Value", translation: "القيمة" },
                    { word: "Safety Perception", translation: "تصور الأمان" },
                    { word: "Destination Management", translation: "إدارة الوجهة" },
                    { word: "Differentiation", translation: "التمايز" },
                ],

                pdf: "pdfs/section7/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Destination Competitiveness\"?",
                        options: ["Destination Competitiveness", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Competitiveness\"?",
                        options: ["القدرة التنافسية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Value\"?",
                        options: ["القيمة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Safety Perception\"?",
                        options: ["تصور الأمان", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Destination Management\"?",
                        options: ["إدارة الوجهة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Case Studies of Global Destinations ----------
            {
                id: 8,
                title: "Case Studies of Global Destinations",

                content: "Examining global destinations reveals diverse strategies for balancing tourism growth with sustainability, culture, and local community needs.",

                importantPoints: [
                    "Successful destinations balance growth with sustainability.",
                    "Local community involvement improves long-term outcomes.",
                    "Diversifying attractions reduces seasonal dependency.",
                    "Destination case studies reveal both risks and best practices.",
                ],

                vocabulary: [
                    { word: "Case Study", translation: "دراسة حالة" },
                    { word: "Best Practice", translation: "أفضل الممارسات" },
                    { word: "Community Involvement", translation: "مشاركة المجتمع" },
                    { word: "Diversification", translation: "التنويع" },
                    { word: "Strategy", translation: "الاستراتيجية" },
                ],

                pdf: "pdfs/section7/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Case Studies of Global Destinations\"?",
                        options: ["Case Studies of Global Destinations", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Case Study\"?",
                        options: ["دراسة حالة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Best Practice\"?",
                        options: ["أفضل الممارسات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Community Involvement\"?",
                        options: ["مشاركة المجتمع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Diversification\"?",
                        options: ["التنويع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 8: Sustainable Tourism
    // ========================================================================
    {
        section: 8,
        title: "محضرات ايطالي",
        lectures: [

            // ---------- LECTURE 1: Principles of Sustainable Tourism ----------
            {
                id: 1,
                title: "Principles of Sustainable Tourism",

                content: "Sustainable tourism seeks to balance economic, social, and environmental needs to ensure long-term viability for destinations and communities.",

                importantPoints: [
                    "Sustainability balances economic, social, and environmental goals.",
                    "Long-term thinking guides sustainable tourism planning.",
                    "Local communities should benefit directly from tourism.",
                    "Sustainable tourism protects resources for future generations.",
                ],

                vocabulary: [
                    { word: "Sustainable Tourism", translation: "السياحة المستدامة" },
                    { word: "Triple Bottom Line", translation: "الأبعاد الثلاثة للاستدامة" },
                    { word: "Viability", translation: "الاستمرارية" },
                    { word: "Resource Protection", translation: "حماية الموارد" },
                    { word: "Future Generations", translation: "الأجيال القادمة" },
                ],

                pdf: "pdfs/section8/lecture1.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Principles of Sustainable Tourism\"?",
                        options: ["Principles of Sustainable Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Sustainable Tourism\"?",
                        options: ["السياحة المستدامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Triple Bottom Line\"?",
                        options: ["الأبعاد الثلاثة للاستدامة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Viability\"?",
                        options: ["الاستمرارية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Resource Protection\"?",
                        options: ["حماية الموارد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 2: Responsible Travel Practices ----------
            {
                id: 2,
                title: "Responsible Travel Practices",

                content: "Responsible travel encourages tourists to minimize their negative impact through mindful consumption, respect for local customs, and support for local businesses.",

                importantPoints: [
                    "Responsible travellers minimize waste and resource use.",
                    "Respecting local customs shows cultural responsibility.",
                    "Supporting local businesses keeps tourism revenue in the community.",
                    "Responsible travel choices can reduce environmental harm.",
                ],

                vocabulary: [
                    { word: "Responsible Travel", translation: "السفر المسؤول" },
                    { word: "Mindful Consumption", translation: "الاستهلاك الواعي" },
                    { word: "Local Business", translation: "الأعمال المحلية" },
                    { word: "Respect", translation: "الاحترام" },
                    { word: "Impact", translation: "الأثر" },
                ],

                pdf: "pdfs/section8/lecture2.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Responsible Travel Practices\"?",
                        options: ["Responsible Travel Practices", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Responsible Travel\"?",
                        options: ["السفر المسؤول", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Mindful Consumption\"?",
                        options: ["الاستهلاك الواعي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Local Business\"?",
                        options: ["الأعمال المحلية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Respect\"?",
                        options: ["الاحترام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 3: Carrying Capacity and Overtourism ----------
            {
                id: 3,
                title: "Carrying Capacity and Overtourism",

                content: "Carrying capacity refers to the maximum number of visitors a destination can sustain without degrading the experience or environment.",

                importantPoints: [
                    "Exceeding carrying capacity harms both environment and experience.",
                    "Overtourism can lead to local resident dissatisfaction.",
                    "Visitor caps help manage sensitive destinations.",
                    "Monitoring visitor numbers supports sustainable planning.",
                ],

                vocabulary: [
                    { word: "Carrying Capacity", translation: "الطاقة الاستيعابية" },
                    { word: "Overtourism", translation: "السياحة المفرطة" },
                    { word: "Visitor Cap", translation: "الحد الأقصى للزوار" },
                    { word: "Degradation", translation: "التدهور" },
                    { word: "Monitoring", translation: "المراقبة" },
                ],

                pdf: "pdfs/section8/lecture3.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Carrying Capacity and Overtourism\"?",
                        options: ["Carrying Capacity and Overtourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Carrying Capacity\"?",
                        options: ["الطاقة الاستيعابية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Overtourism\"?",
                        options: ["السياحة المفرطة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Visitor Cap\"?",
                        options: ["الحد الأقصى للزوار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Degradation\"?",
                        options: ["التدهور", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 4: Community-Based Tourism ----------
            {
                id: 4,
                title: "Community-Based Tourism",

                content: "Community-based tourism empowers local residents to manage tourism activities directly, ensuring benefits remain within the community.",

                importantPoints: [
                    "Community-based tourism gives locals direct control over activities.",
                    "Revenue from CBT projects supports local development.",
                    "Cultural authenticity is often preserved through CBT.",
                    "Capacity building helps communities manage tourism sustainably.",
                ],

                vocabulary: [
                    { word: "Community-Based Tourism", translation: "السياحة المجتمعية" },
                    { word: "Empowerment", translation: "التمكين" },
                    { word: "Local Ownership", translation: "الملكية المحلية" },
                    { word: "Capacity Building", translation: "بناء القدرات" },
                    { word: "Benefit Sharing", translation: "تقاسم المنافع" },
                ],

                pdf: "pdfs/section8/lecture4.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Community-Based Tourism\"?",
                        options: ["Community-Based Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Community-Based Tourism\"?",
                        options: ["السياحة المجتمعية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Empowerment\"?",
                        options: ["التمكين", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Local Ownership\"?",
                        options: ["الملكية المحلية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Capacity Building\"?",
                        options: ["بناء القدرات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 5: Eco-Certification and Standards ----------
            {
                id: 5,
                title: "Eco-Certification and Standards",

                content: "Eco-certification schemes verify that tourism businesses meet defined environmental and social sustainability standards.",

                importantPoints: [
                    "Eco-labels help travellers identify responsible businesses.",
                    "Certification requires meeting specific sustainability criteria.",
                    "Third-party audits verify compliance with standards.",
                    "Certified businesses often gain a competitive marketing advantage.",
                ],

                vocabulary: [
                    { word: "Eco-Certification", translation: "الشهادة البيئية" },
                    { word: "Standard", translation: "المعيار" },
                    { word: "Compliance", translation: "الامتثال" },
                    { word: "Audit", translation: "التدقيق" },
                    { word: "Eco-label", translation: "الملصق البيئي" },
                ],

                pdf: "pdfs/section8/lecture5.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Eco-Certification and Standards\"?",
                        options: ["Eco-Certification and Standards", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Eco-Certification\"?",
                        options: ["الشهادة البيئية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Standard\"?",
                        options: ["المعيار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Compliance\"?",
                        options: ["الامتثال", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Audit\"?",
                        options: ["التدقيق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 6: Climate Change and Tourism ----------
            {
                id: 6,
                title: "Climate Change and Tourism",

                content: "Climate change affects tourism through rising sea levels, extreme weather, and shifting seasonal patterns, requiring adaptation strategies.",

                importantPoints: [
                    "Rising sea levels threaten many coastal destinations.",
                    "Extreme weather events disrupt travel patterns.",
                    "Adaptation strategies help destinations manage climate risks.",
                    "Tourism itself contributes to global carbon emissions.",
                ],

                vocabulary: [
                    { word: "Climate Change", translation: "تغير المناخ" },
                    { word: "Adaptation", translation: "التكيف" },
                    { word: "Sea Level Rise", translation: "ارتفاع مستوى سطح البحر" },
                    { word: "Extreme Weather", translation: "الطقس المتطرف" },
                    { word: "Emissions", translation: "الانبعاثات" },
                ],

                pdf: "pdfs/section8/lecture6.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Climate Change and Tourism\"?",
                        options: ["Climate Change and Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Climate Change\"?",
                        options: ["تغير المناخ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Adaptation\"?",
                        options: ["التكيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Sea Level Rise\"?",
                        options: ["ارتفاع مستوى سطح البحر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Extreme Weather\"?",
                        options: ["الطقس المتطرف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 7: Sustainable Tourism Policy ----------
            {
                id: 7,
                title: "Sustainable Tourism Policy",

                content: "Governments and organizations develop policies and regulations to encourage sustainable practices across the tourism value chain.",

                importantPoints: [
                    "Policy frameworks set sustainability requirements for operators.",
                    "Regulations can limit development in sensitive areas.",
                    "Incentives encourage businesses to adopt greener practices.",
                    "International cooperation supports global sustainability goals.",
                ],

                vocabulary: [
                    { word: "Policy", translation: "السياسة" },
                    { word: "Regulation", translation: "التنظيم" },
                    { word: "Incentive", translation: "الحافز" },
                    { word: "Value Chain", translation: "سلسلة القيمة" },
                    { word: "Governance", translation: "الحوكمة" },
                ],

                pdf: "pdfs/section8/lecture7.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Sustainable Tourism Policy\"?",
                        options: ["Sustainable Tourism Policy", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Policy\"?",
                        options: ["السياسة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Regulation\"?",
                        options: ["التنظيم", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Incentive\"?",
                        options: ["الحافز", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Value Chain\"?",
                        options: ["سلسلة القيمة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },

            // ---------- LECTURE 8: Measuring Sustainability Performance ----------
            {
                id: 8,
                title: "Measuring Sustainability Performance",

                content: "Sustainability performance is measured using indicators such as resource consumption, waste generation, and community wellbeing metrics.",

                importantPoints: [
                    "Key indicators track environmental and social performance.",
                    "Data collection supports evidence-based sustainability decisions.",
                    "Benchmarking allows comparison across similar destinations.",
                    "Transparent reporting builds stakeholder trust.",
                ],

                vocabulary: [
                    { word: "Indicator", translation: "المؤشر" },
                    { word: "Benchmarking", translation: "المقارنة المرجعية" },
                    { word: "Reporting", translation: "إعداد التقارير" },
                    { word: "Stakeholder", translation: "صاحب المصلحة" },
                    { word: "Performance Metric", translation: "مقياس الأداء" },
                ],

                pdf: "pdfs/section8/lecture8.pdf",
                translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

                quiz: [
                    {
                        question: "What is the main topic of this lecture, \"Measuring Sustainability Performance\"?",
                        options: ["Measuring Sustainability Performance", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Indicator\"?",
                        options: ["المؤشر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Benchmarking\"?",
                        options: ["المقارنة المرجعية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Reporting\"?",
                        options: ["إعداد التقارير", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                    {
                        question: "What is the Arabic translation of \"Stakeholder\"?",
                        options: ["صاحب المصلحة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
                        correct: 0
                    },
                ]
            },
        ]
    },

    // ========================================================================
    // SECTION 9: Tourism Marketing
    // ========================================================================
    // {
    //     section: 9,
    //     title: "Section 9: Tourism Marketing",
    //     lectures: [

    //         // ---------- LECTURE 1: Fundamentals of Tourism Marketing ----------
    //         {
    //             id: 1,
    //             title: "Fundamentals of Tourism Marketing",

    //             content: "Tourism marketing applies core marketing principles to promote destinations and services, focusing on the intangible nature of travel experiences.",

    //             importantPoints: [
    //                 "Tourism products are largely intangible experiences.",
    //                 "Marketing must convey emotion and expectation effectively.",
    //                 "Word-of-mouth strongly influences tourism purchase decisions.",
    //                 "Seasonality requires flexible marketing strategies.",
    //             ],

    //             vocabulary: [
    //                 { word: "Marketing", translation: "التسويق" },
    //                 { word: "Intangibility", translation: "اللاملموسية" },
    //                 { word: "Word-of-mouth", translation: "التسويق الشفهي" },
    //                 { word: "Expectation", translation: "التوقع" },
    //                 { word: "Promotion", translation: "الترويج" },
    //             ],

    //             pdf: "pdfs/section9/lecture1.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Fundamentals of Tourism Marketing\"?",
    //                     options: ["Fundamentals of Tourism Marketing", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Marketing\"?",
    //                     options: ["التسويق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Intangibility\"?",
    //                     options: ["اللاملموسية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Word-of-mouth\"?",
    //                     options: ["التسويق الشفهي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Expectation\"?",
    //                     options: ["التوقع", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 2: Market Segmentation in Tourism ----------
    //         {
    //             id: 2,
    //             title: "Market Segmentation in Tourism",

    //             content: "Market segmentation divides tourists into groups based on demographics, psychographics, and travel behaviour to target marketing efforts effectively.",

    //             importantPoints: [
    //                 "Demographic segmentation groups tourists by age or income.",
    //                 "Psychographic segmentation considers lifestyle and values.",
    //                 "Behavioural segmentation looks at booking and travel patterns.",
    //                 "Effective segmentation improves marketing campaign efficiency.",
    //             ],

    //             vocabulary: [
    //                 { word: "Segmentation", translation: "التجزئة السوقية" },
    //                 { word: "Demographics", translation: "الخصائص الديموغرافية" },
    //                 { word: "Psychographics", translation: "الخصائص النفسية" },
    //                 { word: "Target Market", translation: "السوق المستهدف" },
    //                 { word: "Behaviour", translation: "السلوك" },
    //             ],

    //             pdf: "pdfs/section9/lecture2.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Market Segmentation in Tourism\"?",
    //                     options: ["Market Segmentation in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Segmentation\"?",
    //                     options: ["التجزئة السوقية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Demographics\"?",
    //                     options: ["الخصائص الديموغرافية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Psychographics\"?",
    //                     options: ["الخصائص النفسية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Target Market\"?",
    //                     options: ["السوق المستهدف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 3: Branding Destinations and Businesses ----------
    //         {
    //             id: 3,
    //             title: "Branding Destinations and Businesses",

    //             content: "Branding creates a distinct identity and emotional connection for a destination or hospitality business in a competitive market.",

    //             importantPoints: [
    //                 "A strong brand differentiates a destination from competitors.",
    //                 "Brand identity includes logos, slogans, and visual style.",
    //                 "Emotional connection increases brand loyalty among travellers.",
    //                 "Consistent branding builds long-term trust and recognition.",
    //             ],

    //             vocabulary: [
    //                 { word: "Branding", translation: "بناء العلامة التجارية" },
    //                 { word: "Brand Identity", translation: "هوية العلامة التجارية" },
    //                 { word: "Slogan", translation: "الشعار" },
    //                 { word: "Loyalty", translation: "الولاء" },
    //                 { word: "Recognition", translation: "التمييز" },
    //             ],

    //             pdf: "pdfs/section9/lecture3.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Branding Destinations and Businesses\"?",
    //                     options: ["Branding Destinations and Businesses", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Branding\"?",
    //                     options: ["بناء العلامة التجارية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Brand Identity\"?",
    //                     options: ["هوية العلامة التجارية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Slogan\"?",
    //                     options: ["الشعار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Loyalty\"?",
    //                     options: ["الولاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 4: Digital Marketing in Tourism ----------
    //         {
    //             id: 4,
    //             title: "Digital Marketing in Tourism",

    //             content: "Digital marketing uses websites, social media, and search engines to reach and engage potential travellers throughout the customer journey.",

    //             importantPoints: [
    //                 "Social media shapes traveller inspiration and decision-making.",
    //                 "Search engine optimization increases destination website visibility.",
    //                 "Influencer marketing has become a major promotional tool.",
    //                 "Email marketing nurtures leads through the booking journey.",
    //             ],

    //             vocabulary: [
    //                 { word: "Digital Marketing", translation: "التسويق الرقمي" },
    //                 { word: "Social Media", translation: "وسائل التواصل الاجتماعي" },
    //                 { word: "SEO", translation: "تحسين محركات البحث" },
    //                 { word: "Influencer", translation: "المؤثر" },
    //                 { word: "Customer Journey", translation: "رحلة العميل" },
    //             ],

    //             pdf: "pdfs/section9/lecture4.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Digital Marketing in Tourism\"?",
    //                     options: ["Digital Marketing in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Digital Marketing\"?",
    //                     options: ["التسويق الرقمي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Social Media\"?",
    //                     options: ["وسائل التواصل الاجتماعي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"SEO\"?",
    //                     options: ["تحسين محركات البحث", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Influencer\"?",
    //                     options: ["المؤثر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 5: Content Marketing and Storytelling ----------
    //         {
    //             id: 5,
    //             title: "Content Marketing and Storytelling",

    //             content: "Content marketing uses stories, images, and videos to inspire potential travellers and build a compelling destination narrative.",

    //             importantPoints: [
    //                 "Storytelling creates emotional engagement with a destination.",
    //                 "High-quality visuals significantly increase content engagement.",
    //                 "Blogs and videos help travellers imagine their trip.",
    //                 "Authentic content builds greater traveller trust.",
    //             ],

    //             vocabulary: [
    //                 { word: "Content Marketing", translation: "التسويق بالمحتوى" },
    //                 { word: "Storytelling", translation: "سرد القصص" },
    //                 { word: "Narrative", translation: "السرد" },
    //                 { word: "Engagement", translation: "التفاعل" },
    //                 { word: "Authenticity", translation: "الأصالة" },
    //             ],

    //             pdf: "pdfs/section9/lecture5.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Content Marketing and Storytelling\"?",
    //                     options: ["Content Marketing and Storytelling", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Content Marketing\"?",
    //                     options: ["التسويق بالمحتوى", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Storytelling\"?",
    //                     options: ["سرد القصص", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Narrative\"?",
    //                     options: ["السرد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Engagement\"?",
    //                     options: ["التفاعل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 6: Pricing Strategies in Tourism ----------
    //         {
    //             id: 6,
    //             title: "Pricing Strategies in Tourism",

    //             content: "Tourism pricing strategies include seasonal pricing, bundling, and dynamic pricing to match demand fluctuations and maximize revenue.",

    //             importantPoints: [
    //                 "Seasonal pricing reflects fluctuating demand throughout the year.",
    //                 "Bundling combines multiple services into a single price.",
    //                 "Dynamic pricing adjusts rates in real time based on demand.",
    //                 "Discount strategies can stimulate off-peak demand.",
    //             ],

    //             vocabulary: [
    //                 { word: "Pricing Strategy", translation: "استراتيجية التسعير" },
    //                 { word: "Bundling", translation: "تجميع الخدمات" },
    //                 { word: "Dynamic Pricing", translation: "التسعير الديناميكي" },
    //                 { word: "Discount", translation: "الخصم" },
    //                 { word: "Off-peak", translation: "خارج أوقات الذروة" },
    //             ],

    //             pdf: "pdfs/section9/lecture6.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Pricing Strategies in Tourism\"?",
    //                     options: ["Pricing Strategies in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Pricing Strategy\"?",
    //                     options: ["استراتيجية التسعير", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Bundling\"?",
    //                     options: ["تجميع الخدمات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Dynamic Pricing\"?",
    //                     options: ["التسعير الديناميكي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Discount\"?",
    //                     options: ["الخصم", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 7: Customer Relationship Management ----------
    //         {
    //             id: 7,
    //             title: "Customer Relationship Management",

    //             content: "CRM systems help tourism businesses track guest preferences, communication history, and loyalty to build lasting customer relationships.",

    //             importantPoints: [
    //                 "CRM systems store detailed guest preference data.",
    //                 "Loyalty programs encourage repeat bookings.",
    //                 "Personalized communication strengthens customer relationships.",
    //                 "CRM data supports targeted marketing campaigns.",
    //             ],

    //             vocabulary: [
    //                 { word: "CRM", translation: "إدارة علاقات العملاء" },
    //                 { word: "Loyalty Program", translation: "برنامج الولاء" },
    //                 { word: "Guest Preference", translation: "تفضيلات الضيف" },
    //                 { word: "Retention", translation: "الاحتفاظ بالعملاء" },
    //                 { word: "Communication History", translation: "سجل التواصل" },
    //             ],

    //             pdf: "pdfs/section9/lecture7.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Customer Relationship Management\"?",
    //                     options: ["Customer Relationship Management", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"CRM\"?",
    //                     options: ["إدارة علاقات العملاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Loyalty Program\"?",
    //                     options: ["برنامج الولاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Guest Preference\"?",
    //                     options: ["تفضيلات الضيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Retention\"?",
    //                     options: ["الاحتفاظ بالعملاء", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 8: Measuring Marketing Effectiveness ----------
    //         {
    //             id: 8,
    //             title: "Measuring Marketing Effectiveness",

    //             content: "Marketing effectiveness in tourism is measured through metrics such as conversion rate, return on investment, and brand awareness.",

    //             importantPoints: [
    //                 "Conversion rate tracks how inquiries become bookings.",
    //                 "Return on investment evaluates marketing campaign profitability.",
    //                 "Brand awareness surveys measure destination recognition.",
    //                 "Analytics tools track digital marketing performance in real time.",
    //             ],

    //             vocabulary: [
    //                 { word: "Conversion Rate", translation: "معدل التحويل" },
    //                 { word: "Return on Investment", translation: "العائد على الاستثمار" },
    //                 { word: "Brand Awareness", translation: "الوعي بالعلامة التجارية" },
    //                 { word: "Analytics", translation: "التحليلات" },
    //                 { word: "Key Performance Indicator", translation: "مؤشر الأداء الرئيسي" },
    //             ],

    //             pdf: "pdfs/section9/lecture8.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Measuring Marketing Effectiveness\"?",
    //                     options: ["Measuring Marketing Effectiveness", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Conversion Rate\"?",
    //                     options: ["معدل التحويل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Return on Investment\"?",
    //                     options: ["العائد على الاستثمار", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Brand Awareness\"?",
    //                     options: ["الوعي بالعلامة التجارية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Analytics\"?",
    //                     options: ["التحليلات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },
    //     ]
    // },

    // // ========================================================================
    // // SECTION 10: Careers in Tourism and Hospitality
    // // ========================================================================
    // {
    //     section: 10,
    //     title: "Section 10: Careers in Tourism and Hospitality",
    //     lectures: [

    //         // ---------- LECTURE 1: Career Paths Overview ----------
    //         {
    //             id: 1,
    //             title: "Career Paths Overview",

    //             content: "The tourism and hospitality industry offers diverse career paths across hotels, airlines, travel agencies, event management, and government tourism boards.",

    //             importantPoints: [
    //                 "The industry offers careers across many different sectors.",
    //                 "Entry-level roles often provide clear paths for advancement.",
    //                 "Cross-training builds versatile hospitality professionals.",
    //                 "Global mobility is common in international hospitality careers.",
    //             ],

    //             vocabulary: [
    //                 { word: "Career Path", translation: "المسار الوظيفي" },
    //                 { word: "Entry-level", translation: "المستوى المبتدئ" },
    //                 { word: "Advancement", translation: "الترقية" },
    //                 { word: "Cross-training", translation: "التدريب المتعدد" },
    //                 { word: "Global Mobility", translation: "التنقل العالمي" },
    //             ],

    //             pdf: "pdfs/section10/lecture1.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Career Paths Overview\"?",
    //                     options: ["Career Paths Overview", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Career Path\"?",
    //                     options: ["المسار الوظيفي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Entry-level\"?",
    //                     options: ["المستوى المبتدئ", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Advancement\"?",
    //                     options: ["الترقية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Cross-training\"?",
    //                     options: ["التدريب المتعدد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 2: Hotel Management Careers ----------
    //         {
    //             id: 2,
    //             title: "Hotel Management Careers",

    //             content: "Hotel management careers range from front office and food and beverage roles to executive positions such as general manager.",

    //             importantPoints: [
    //                 "Front office roles offer strong entry points into hotel management.",
    //                 "F&B management combines operational and financial skills.",
    //                 "General managers oversee all aspects of hotel performance.",
    //                 "Rotational programs help develop future hotel leaders.",
    //             ],

    //             vocabulary: [
    //                 { word: "General Manager", translation: "المدير العام" },
    //                 { word: "Rotational Program", translation: "برنامج التدريب الدوراني" },
    //                 { word: "Operations", translation: "العمليات" },
    //                 { word: "Executive", translation: "التنفيذي" },
    //                 { word: "Leadership", translation: "القيادة" },
    //             ],

    //             pdf: "pdfs/section10/lecture2.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Hotel Management Careers\"?",
    //                     options: ["Hotel Management Careers", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"General Manager\"?",
    //                     options: ["المدير العام", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Rotational Program\"?",
    //                     options: ["برنامج التدريب الدوراني", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Operations\"?",
    //                     options: ["العمليات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Executive\"?",
    //                     options: ["التنفيذي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 3: Travel and Tour Operator Careers ----------
    //         {
    //             id: 3,
    //             title: "Travel and Tour Operator Careers",

    //             content: "Careers in travel agencies and tour operations include travel consultants, itinerary planners, and destination specialists.",

    //             importantPoints: [
    //                 "Travel consultants advise clients on trip planning.",
    //                 "Itinerary planners design detailed multi-day travel packages.",
    //                 "Destination specialists develop deep regional expertise.",
    //                 "Strong communication skills are essential in these roles.",
    //             ],

    //             vocabulary: [
    //                 { word: "Travel Consultant", translation: "مستشار السفر" },
    //                 { word: "Itinerary Planner", translation: "مخطط خط السير" },
    //                 { word: "Destination Specialist", translation: "أخصائي الوجهات" },
    //                 { word: "Client", translation: "العميل" },
    //                 { word: "Expertise", translation: "الخبرة" },
    //             ],

    //             pdf: "pdfs/section10/lecture3.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Travel and Tour Operator Careers\"?",
    //                     options: ["Travel and Tour Operator Careers", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Travel Consultant\"?",
    //                     options: ["مستشار السفر", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Itinerary Planner\"?",
    //                     options: ["مخطط خط السير", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Destination Specialist\"?",
    //                     options: ["أخصائي الوجهات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Client\"?",
    //                     options: ["العميل", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 4: Event and Conference Management ----------
    //         {
    //             id: 4,
    //             title: "Event and Conference Management",

    //             content: "Event and conference management careers involve planning, coordinating, and executing meetings, conferences, and large-scale events.",

    //             importantPoints: [
    //                 "Event planners coordinate logistics for large gatherings.",
    //                 "Budget management is critical in event planning careers.",
    //                 "Vendor coordination ensures smooth event execution.",
    //                 "Attention to detail is essential for successful events.",
    //             ],

    //             vocabulary: [
    //                 { word: "Event Planner", translation: "منظم الفعاليات" },
    //                 { word: "Logistics", translation: "اللوجستيات" },
    //                 { word: "Vendor", translation: "المورّد" },
    //                 { word: "Coordination", translation: "التنسيق" },
    //                 { word: "Execution", translation: "التنفيذ" },
    //             ],

    //             pdf: "pdfs/section10/lecture4.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Event and Conference Management\"?",
    //                     options: ["Event and Conference Management", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Event Planner\"?",
    //                     options: ["منظم الفعاليات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Logistics\"?",
    //                     options: ["اللوجستيات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Vendor\"?",
    //                     options: ["المورّد", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Coordination\"?",
    //                     options: ["التنسيق", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 5: Airline and Airport Careers ----------
    //         {
    //             id: 5,
    //             title: "Airline and Airport Careers",

    //             content: "Careers in aviation include cabin crew, ground operations, airport management, and airline customer service roles.",

    //             importantPoints: [
    //                 "Cabin crew ensure passenger safety and comfort.",
    //                 "Ground operations staff manage aircraft turnaround.",
    //                 "Airport management oversees terminal operations and services.",
    //                 "Aviation careers often require specific safety certifications.",
    //             ],

    //             vocabulary: [
    //                 { word: "Cabin Crew", translation: "طاقم الضيافة الجوية" },
    //                 { word: "Ground Operations", translation: "العمليات الأرضية" },
    //                 { word: "Certification", translation: "الشهادة" },
    //                 { word: "Turnaround", translation: "إعداد الطائرة" },
    //                 { word: "Aviation", translation: "الطيران" },
    //             ],

    //             pdf: "pdfs/section10/lecture5.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Airline and Airport Careers\"?",
    //                     options: ["Airline and Airport Careers", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Cabin Crew\"?",
    //                     options: ["طاقم الضيافة الجوية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Ground Operations\"?",
    //                     options: ["العمليات الأرضية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Certification\"?",
    //                     options: ["الشهادة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Turnaround\"?",
    //                     options: ["إعداد الطائرة", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 6: Tourism Marketing and Digital Careers ----------
    //         {
    //             id: 6,
    //             title: "Tourism Marketing and Digital Careers",

    //             content: "Careers in tourism marketing include digital marketers, content creators, brand managers, and destination marketing specialists.",

    //             importantPoints: [
    //                 "Digital marketers manage online destination campaigns.",
    //                 "Content creators produce engaging travel-related media.",
    //                 "Brand managers maintain consistent destination identity.",
    //                 "Data analysis skills are increasingly valuable in marketing careers.",
    //             ],

    //             vocabulary: [
    //                 { word: "Digital Marketer", translation: "المسوق الرقمي" },
    //                 { word: "Content Creator", translation: "منشئ المحتوى" },
    //                 { word: "Brand Manager", translation: "مدير العلامة التجارية" },
    //                 { word: "Campaign", translation: "الحملة الإعلانية" },
    //                 { word: "Data Analysis", translation: "تحليل البيانات" },
    //             ],

    //             pdf: "pdfs/section10/lecture6.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Tourism Marketing and Digital Careers\"?",
    //                     options: ["Tourism Marketing and Digital Careers", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Digital Marketer\"?",
    //                     options: ["المسوق الرقمي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Content Creator\"?",
    //                     options: ["منشئ المحتوى", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Brand Manager\"?",
    //                     options: ["مدير العلامة التجارية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Campaign\"?",
    //                     options: ["الحملة الإعلانية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 7: Skills for Success in Hospitality ----------
    //         {
    //             id: 7,
    //             title: "Skills for Success in Hospitality",

    //             content: "Success in hospitality careers requires strong communication, adaptability, problem-solving, and genuine passion for guest service.",

    //             importantPoints: [
    //                 "Communication skills are essential across all hospitality roles.",
    //                 "Adaptability helps professionals handle unpredictable situations.",
    //                 "Problem-solving skills improve guest satisfaction outcomes.",
    //                 "Passion for service distinguishes outstanding hospitality professionals.",
    //             ],

    //             vocabulary: [
    //                 { word: "Adaptability", translation: "القدرة على التكيف" },
    //                 { word: "Problem-solving", translation: "حل المشكلات" },
    //                 { word: "Passion", translation: "الشغف" },
    //                 { word: "Interpersonal Skills", translation: "المهارات الشخصية" },
    //                 { word: "Professionalism", translation: "الاحترافية" },
    //             ],

    //             pdf: "pdfs/section10/lecture7.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Skills for Success in Hospitality\"?",
    //                     options: ["Skills for Success in Hospitality", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Adaptability\"?",
    //                     options: ["القدرة على التكيف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Problem-solving\"?",
    //                     options: ["حل المشكلات", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Passion\"?",
    //                     options: ["الشغف", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Interpersonal Skills\"?",
    //                     options: ["المهارات الشخصية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },

    //         // ---------- LECTURE 8: Building a Career in Tourism ----------
    //         {
    //             id: 8,
    //             title: "Building a Career in Tourism",

    //             content: "Building a successful tourism career involves gaining practical experience, pursuing certifications, networking, and continuous professional development.",

    //             importantPoints: [
    //                 "Internships provide valuable practical industry experience.",
    //                 "Professional certifications can enhance career opportunities.",
    //                 "Networking helps build industry connections and mentorships.",
    //                 "Continuous learning keeps professionals current with trends.",
    //             ],

    //             vocabulary: [
    //                 { word: "Internship", translation: "التدريب العملي" },
    //                 { word: "Certification", translation: "الشهادة المهنية" },
    //                 { word: "Networking", translation: "بناء العلاقات المهنية" },
    //                 { word: "Mentorship", translation: "الإرشاد المهني" },
    //                 { word: "Professional Development", translation: "التطوير المهني" },
    //             ],

    //             pdf: "pdfs/section10/lecture8.pdf",
    //             translationUrl: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID",

    //             quiz: [
    //                 {
    //                     question: "What is the main topic of this lecture, \"Building a Career in Tourism\"?",
    //                     options: ["Building a Career in Tourism", "Unrelated topic A", "Unrelated topic B", "Unrelated topic C"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Internship\"?",
    //                     options: ["التدريب العملي", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Certification\"?",
    //                     options: ["الشهادة المهنية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Networking\"?",
    //                     options: ["بناء العلاقات المهنية", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //                 {
    //                     question: "What is the Arabic translation of \"Mentorship\"?",
    //                     options: ["الإرشاد المهني", "غير ذلك 1", "غير ذلك 2", "غير ذلك 3"],
    //                     correct: 0
    //                 },
    //             ]
    //         },
    //     ]
    // },

];

// ==========================================================================
// Helper functions used across the app (app.js, quiz.js, progress.js)
// ==========================================================================


/**
 * Get a section object by its number (1-10).
 */
function getSection(sectionId) {
    return courses.find(function (s) { return s.section === Number(sectionId); });
}

/**
 * Get a specific lecture object by section number and lecture id.
 */
function getLecture(sectionId, lectureId) {
    const section = getSection(sectionId);
    if (!section) return null;
    return section.lectures.find(function (l) { return l.id === Number(lectureId); });
}

/**
 * Total number of lectures across all sections.
 */
function getTotalLectureCount() {
    return courses.reduce(function (sum, s) { return sum + s.lectures.length; }, 0);
}

/**
 * Validate the quiz data for a lecture. Logs clear errors to the console
 * and returns an array of valid questions (invalid ones are skipped so a
 * bad question never crashes the whole quiz).
 */
function validateQuiz(sectionId, lectureId, quiz) {
    const valid = [];
    if (!Array.isArray(quiz)) return valid;

    quiz.forEach(function (q, index) {
        const errors = [];
        if (!q.question || typeof q.question !== "string" || q.question.trim() === "") {
            errors.push("Question text is empty.");
        }
        if (!Array.isArray(q.options) || q.options.length !== 4) {
            errors.push("Question must have exactly 4 options (found " + (q.options ? q.options.length : 0) + ").");
        }
        if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3) {
            errors.push("Invalid correct answer index.");
        }

        if (errors.length > 0) {
            console.error(
                "Quiz Error:\n" +
                "Section " + sectionId + "\n" +
                "Lecture " + lectureId + "\n" +
                "Question " + (index + 1) + "\n" +
                errors.join("\n")
            );
        } else {
            valid.push(q);
        }
    });

    return valid;
}
