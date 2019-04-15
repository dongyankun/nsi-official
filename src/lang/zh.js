module.exports = {
    //导航栏
    layoutNav: {
        index: "首  页",
        aboutus: "关于我们",
        information: "资讯中心",
        event: "会议活动",
        eventChild: {
            vis: "国际学校发展大会",
            lotus: "新荷学校大会",
            subject: "专题研讨会",
            apply: "参会报名"
        },
        // lotusContent: {
        //     lotusIntroTitle: '为什么创办新荷国际学校',
        //     lotusIntro01: '新荷评选的出现，在于通过向西方先进的国际学校认证评选标准借鉴经验，因地制宜，结合中国当下的教育环境与国情，形成一套专属于中国国际学校的认证标尺。通过评选新荷国际学校，达到竖立行业标杆的目的，形成良好的行业评价标准，助力中国的国际学校办学水平的整体提高。同时也起到引导市场的作用，向家长展示在选择学校时候应考虑的因素。',
        //     lotusIntro02: '新荷评选的专业性、学术性与中立性为市场传递着正能量，通过新荷这样一个公正的认证平台，将中国的国际学校聚集于此，用专业的评判流程划分国际学校的好与坏，为还处在新建期、迷茫中的国际学校或是发展上升期的国际学校树立一个真正意义上可以称之为优秀的国际学校的架构，作为行业标尺而存在，给予中国的国际学校以今后发展方向的参考，通过这样一个标尺约束自己，不断提高办学水平、办学质量，兼顾外部基础设施建设与内部教育软实力发展。此外，新荷评选也为给孩子择校而犯难的家长群体提供了更为直观的国际学校筛选平台，通过关注新荷评选的动态，可以更加方便的浏览到中国国际学校信息，由新荷来为家长们“层层把关”，将最优秀的国际学校清晰地呈现在家长面前，解决家长择校难题。',
        //     lotusIntro03: '新荷是一个公益性的评选平台，新学说创办新荷的目的在于为中国教育事业树立标杆的促进行业整体品质提升的同时，也希望为学校发展起到正面促进作用，提高优质学校整体曝光率和行业知名度。',
        //     lotusProcess: '新荷学校评选时间',
        //     lotusTime: '时间：',
        //     lotusTime01: '广东地区 3 - 5 月',
        //     lotusTime02: '上海地区 7 - 9 月',
        //     lotusTime03: '北京地区 8 - 10 月',
        //     lotusActivetyProcess: '活动流程',
        //     lotusActPro01: ' 报名',
        //     lotusActPro01Time: '时间：为期45天左右',
        //     lotusActPro01Con: '报名“新荷学校”评选，需填写新学说考核标准报名表，并提交相关佐证；',
        //     lotusActPro02: '认证',
        //     lotusActPro02Time: '时间：为期2周',
        //     lotusActPro02Cona: 'a. 根据新学说与行业专家一同研发的国际化学校认证标准，初步审核报名学校是否符合“新荷学校”评选标准；',
        //     lotusActPro02Conb: 'b. 专家评审会对初步参与评选的学校进行入校评估，同时，审核所提交资料的真实性；',
        //     lotusActPro03: '公布“新荷学校”名单',
        //     lotusActPro03Con: '符合评选标准的学校将授予“新荷学校”荣誉称号并公示学校名单；',
        //     lotusActPro04: '网络人气：开通网络投票',
        //     lotusActPro04Time: '时间：为期3天左右',
        //     lotusActPro04Cona: '本次除了选出符合标准的“新荷学校”外，还设立“最受欢迎学校”的奖项。网络人气分数与现场人气分数之和，较高者则被授予“最受欢迎学校”的奖项。',
        //     lotusActPro04Conb: '网络人气投票满分100分，票数最高者获100分，第二名95分，第三名90分……以此类推。',
        //     lotusActPro05: '新荷学校大会（现场展示）',
        //     lotusActPro05Cona: '通过评选标准的学校，将现场授予“新荷学校”奖杯，同时将在现场进行陈述与展示。（学校相关领导对学校进行简要陈述，学生进行才艺展示，专家评审将对此进行点评。）',
        //     lotusActPro05Conb: '大会现场还设有现场人气投票环节，根据学校的陈述与才艺展示，专业评审与观众团现场投票。专业评审每人有3票，每票10分，观众团100人，每人2票，每票1分。现场人气分数与网络人气分数之和，较高者被授予“最受欢迎学校”的奖项。',
        //     lotusActPro06: '参与人员',
        //     lotusActPro06player: '选手：广东地区外籍人员子女学校、公立学校国际部（班）、民办国际化学校',
        //     lotusActPro06rater: '评委',
        //     lotusActPro06raterA: 'A. 专家评委：国际学校校长、国际教育协会负责人',
        //     lotusActPro06raterB: 'B. 专业评委：国际教育行业媒体、为国际化学校提服务的相关机构负责人',
        //     lotusActPro06raterC: 'C. 家长评审团：子女就读于国际化学校的家长',
        //     lotusActPro06viewer: '观众：对国际教育有兴趣的人士',
        //     lotusVote: '新荷学校评选标准',
        //     lotusVote01: '新荷·评选七大维度',
        //     lotusVote02: '新学说曾研究了许多学校评估标准，基于长期积累的行业研究经验，新学说根据当前中国民办教育形势与发展，与行业内部多名行业泰斗、学术权威共同探讨出新学说国际学校评估准则。',
        //     lotusVote03: '新学说学校评估准则分为七个维度:',
        //     lotusVote001: '愿景使命文化',
        //     lotusVote002: '招生与生源',
        //     lotusVote003: '课程与教学',
        //     lotusVote004: '管理及运营',
        //     lotusVote005: '学生服务及家校关系',
        //     lotusVote006: '硬件设施及后勤服务保障',
        //     lotusVote007: '安全保障',


        // },
        lotus: "新荷学校",
        lotusChild: {
            gunagzhou: "广州新荷学校",
            shanghai: "上海新荷学校(9月)",
            beijing: "北京新荷学校(10月)"
        },
        research: "研究院",
        researchChild: {
            magazine: "国际学校内参",
            report: "研究报告",
            pisom: "国际学校高级管理研修班",
            classOnline: "国际学校职能岗位课程",
            apply: "课程报名",
            experts: "专家智库"
        },
        researchChild_Mob: {
            magazine: "国际学校内参",
            report: "研究报告",
            pisom: "必盛研修班",
            classOnline: "教育研究院",
            apply: "课程报名"
        },
        consult: "咨询服务",
        ges: "G E S",
        vip: "会 员"
    },
    // 底部
    layoutFooter: {
        tel: "联系电话：010-52468286",
        email: "邮箱：info@xinxueshuo.cn",
        phone: "手机：15010927730",
        
        address: "地址：北京市朝阳区曙光西里时间国际A座1501",
        weChat: "微信公众号",
        weibo: "国际教育研究院",
        database: "国际学校四库全书",
        classOnline: "在线课堂",
        databaseM: "四库全书"
    },
    layoutgesFooter: {
        tel01: "Tel：",
        tel02: "+1 (512) 203-3185",
        email01: "Email：",
        email02: "dbarrutia@xinxueshuo.cn",
        address01: "Address：",
        address02: "Global Education Solutions",
        address03: "1103 West 24th Street",
        address04: "Austin, TX 78705",
        address05: " USA",
        weChat: "微信公众号",
        weibo: "国际教育研究院",
        database: "国际学校在线四库全书",
        classOnline: "新学说国际教育研究院"
    },
    // 关于我们
    aboutus: {
        mission: "我们的使命和愿景",
        missionContent: "服务国际学校成长，助力行业健康发展。成为中国国际学校行业第一服务平台",
        aboutNSI: "关于 新学说",
        aboutNSIContent: "北京新学说文化传媒有限公司是由国际学校行业专家共同打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台。自成立以来一直致力于中国国际学校行业研究，对于中国国际学校有着深刻的了解。到目前为止，新学说已在自有媒体上发表了近千篇行业原创文章，十多本深度行业报告，并为多家学校提供了详细的市场、运营、建设方案，受到业内人士和单位的高度认可。",
        team: "团队介绍",
        teamContent: "新学说 团队由众多位独特且富有才华的成员组成，致力于为数所国际学校提供全方位服务。努力将研究成果转化为实际可操作方案，为国际学校提供各种咨询式服务，例如前期建校咨询，课程设计，市场策划。",
        partner: "合作伙伴",
        partnerContent: "新学说自创办以来，为数百个家喻户晓的品牌提供了深度定制的推广策略，始终专注于高质量的内容传播和创新的宣传服务。",
        connectUs: "联系我们"
    },
    // 资讯中心
    news: {
        newsOne: "新",
        newsTwo: "闻",
        newsThree: "头",
        newsFour: "条",
        overviewNews: "资讯全览",
        policyNews: "政策解读",
        schoolNews: "访校观察",
        tmtNews: "行业分析",
        personNews: "人物访谈",
        oldNews: "历史文章"
    },
    // 咨询服务
    service: {
        consult: "咨询服务",
        scheme: "解决方案",
        capacity: "核心能力",
        vision: "行业洞见",
        connectUs: "联系我们"
    },
    // 关于ges
    ges: {
        mission: "GES",
        missionContent: "We provide innovative solutions to challenging issues and get meaningful outcomes.",
        missionContent01: "We provide",
        missionContent02: "innovative solutions",
        missionContent03: "to challenging issues",
        missionContent04: "and get meaningful outcomes.",
        aboutNSI: "About GES",
        aboutNSIContent: "With the news of China becoming the nation with the most international schools in the world, Global Education Solutions Inc. (GES) was established in 2018 as the American operational arm of NewSchool Insight (NSI) to play a supporting role overseas in promoting and lifting up the Chinese international school industry on the global stage. Strategically based in Austin, Texas – the capital of the largest state in the contiguous United States and a major hub for the American education and technology industries – GES is uniquely positioned to innovate the bridges of Sino-American education and exchange. ",
        team: "Our Mission",
        teamContent: "GES is committed to fostering international friendship and cultural exchange with China by promoting institutional relationships and business exchange in the field of international education.",
        partner: "Your Solution Provider",
        partnerContent: "Multi-culturally oriented and fluent in English, Mandarin and Spanish, GES advises and represents both American and Chinese educational institutions and education businesses.Based on the latest market research, scientific analysis, industry experience and deep networks, GES is able to cultivate school-to-school partnerships, advise on cross-border education investments, and facilitate business opportunities with local and national entities in the Chinese international education sector, both public and private.GES offers a wide range of consulting and operational services with the necessary tools and expertise to help grow your school, and reach students and partners internationally. We cooperate closely with our clients from start to finish, focusing on their needs while producing new ideas and results, developing effective and efficient strategies, and designing rewarding and scalable solutions. ",
        connectUs: "Contact Us"
    },
}