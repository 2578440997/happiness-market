const characterStories = [
  {
    id: "working",
    name: "林禾",
    tier: "底层",
    role: "从被迫接单的零工青年，成长为社区里最可靠的照护与修复组织者。",
    color: "#7ad7ff",
    summary: "新市场先给她托底，再让她拥有尊严、技能与被需要的关系。",
    ending:
      "林禾晚年住在由自己也参与建设的长者共居社区。她年轻时累积的时间银行信用回流为照护支持，曾经的邻居、学徒和孩子们不断来探望。她不再被'穷'定义，而被视为一位把社区缝合起来的人。",
    stages: [
      {
        label: "青年起步",
        title: "第一次拥有说\u201C不\u201D的权利",
        scene: "基础保障与轮岗学习",
        image: "happiness-market-assets/working_youth.jpg",
        oldMarketNarrative:
          "在旧市场里，林禾会被迫在零工平台和短期合约间持续奔跑。她没有拒绝侮辱性工时的资本，也没有试错的空间，身体和尊严都在起跑线上被提前透支。",
        oldOutcomeTitle: "被价格最低的岗位定义",
        oldOutcome:
          "她会把最好的体力耗在争抢最差的工作上，任何一次生病或失业都足以让生活直接坠落。",
        narrative:
          "林禾从小在高压环境里长大，毕业后原本只能在平台零工、短期合约和低薪服务业之间来回奔跑。新市场落地后，她先拿到了基本收入与公共食宿支持，不必再为了下一顿饭接受侮辱性的工时。她第一次有余裕报名社区工坊的轮岗学习，尝试维修、陪护与厨房协作。",
        metrics: {
          body: 54,
          calm: 48,
          bond: 45,
          meaning: 50,
          autonomy: 68,
          ecology: 44,
        },
        system: {
          trust: 50,
          mobility: 62,
          exploitation: 38,
        },
        transactions: [
          {
            name: "基础收入托底",
            detail:
              "现金与基本服务一起到位，让林禾拒绝超时低尊严工作，把时间换成学习和休息。",
            immediateOutcome:
              "她停止在三份零工之间透支身体，开始挑选真正愿意投入的工作。",
            lifeOutcome:
              "这次托底改变了人生的起点：她不是被市场追赶，而是学会主动进入共同体。",
          },
          {
            name: "社区轮岗学徒",
            detail:
              "她在修缮工坊、共享厨房与陪护小组之间轮岗，发现自己在照护协调上极有天赋。",
            immediateOutcome:
              "一项项零散劳动开始连成可见的技能路径。",
            lifeOutcome:
              "她后来成为连接邻里、长者与年轻学徒的关键人物。",
          },
        ],
      },
      {
        label: "成家阶段",
        title: "照护不再意味着独自坠落",
        scene: "时间银行与协作住房",
        image: "happiness-market-assets/working_care.jpg",
        oldMarketNarrative:
          "如果规则没有改变，母亲生病会直接把林禾拖出劳动市场。照护会变成私人家庭的无底洞，她必须在工资、房租和病床之间做残酷切割。",
        oldOutcomeTitle: "照护把人压回孤岛",
        oldOutcome:
          "她会因为照护责任失去工作连续性，家庭关系也会在疲惫和账单中不断磨损。",
        narrative:
          "母亲生病后，林禾本以为自己会像旧时代那样被迫退出劳动市场。可在新市场里，社区护士、时间银行和协作住房同时接住了她。她为别家老人陪诊、帮孩子修自行车、维护公共厨房的时间，都被正式记录成未来可兑换的照护权利。",
        metrics: {
          body: 61,
          calm: 58,
          bond: 74,
          meaning: 76,
          autonomy: 71,
          ecology: 55,
        },
        system: {
          trust: 73,
          mobility: 68,
          exploitation: 29,
        },
        transactions: [
          {
            name: "时间银行",
            detail:
              "照护、维修、陪伴不再是无偿消耗，而是可累计、可回流的信用。",
            immediateOutcome:
              "林禾看到自己的劳动第一次被当成真正的社会资产。",
            lifeOutcome:
              "她晚年得到的温柔照护，正来自年轻时留下的时间信用与关系网络。",
          },
          {
            name: "协作住房",
            detail:
              "共享厨房、照护排班和租金调剂，让她不必在生病家人与房租之间二选一。",
            immediateOutcome:
              "家变得更像一个互相接住彼此的节点，而不是孤岛。",
            lifeOutcome:
              "她后来主动参与设计更多协作住房，把个人经验变成公共方案。",
          },
        ],
      },
      {
        label: "中年转折",
        title: "劳动者第一次进入决策室",
        scene: "企业共治与贡献可视化",
        image: "happiness-market-assets/working_midlife.jpg",
        oldMarketNarrative:
          "在旧市场里，林禾的劳动会继续被视为可替代的低端服务。她可能更熟练，却仍然没有资格定义工作如何分配、利润流向何处、哪些付出值得被看见。",
        oldOutcomeTitle: "经验增加，权力仍然缺席",
        oldOutcome:
          "她会在岗位上越来越能干，却始终只是被管理和被压价的人。",
        narrative:
          "林禾所在的社区维护合作社扩大后，不再由单一出资人决定方向，而由工人、社区代表与公共信托共同治理。她坐进会议室，看见清洁、修缮和照护如何直接减少疾病、降低事故、稳住邻里关系。那些过去被视为'低端服务'的劳动，终于拥有了清晰可见的社会回响。",
        metrics: {
          body: 67,
          calm: 66,
          bond: 81,
          meaning: 86,
          autonomy: 80,
          ecology: 68,
        },
        system: {
          trust: 82,
          mobility: 78,
          exploitation: 18,
        },
        transactions: [
          {
            name: "企业共治",
            detail:
              "利润和决策权不再被抽走，而是由劳动者与社区共同决定用途。",
            immediateOutcome:
              "林禾第一次不只是完成任务，而是在定义什么工作值得被做。",
            lifeOutcome:
              "她从被管理者成长为规则的共同塑造者。",
          },
          {
            name: "贡献可视化",
            detail:
              "系统把她参与的维护和照护工作转化成真实可见的社会影响。",
            immediateOutcome:
              "那些细小的付出不再沉没，工作因此具备了持久的意义感。",
            lifeOutcome:
              "她的一生不以收入高低收束，而以被多少人真切需要来定义。",
          },
        ],
      },
      {
        label: "老年回响",
        title: "被共同体温柔接住的晚年",
        scene: "长者共居与记忆回流",
        image: "happiness-market-assets/working_elder.jpg",
        oldMarketNarrative:
          "若旧市场延续，林禾晚年大概率会在低配照护、子女负担和被动等待中慢慢变得沉默。她年轻时付出的爱之劳动不会回流，只会在体制外消散。",
        oldOutcomeTitle: "晚年被迫缩成成本",
        oldOutcome:
          "她的一生贡献很多，却在终局里被当成需要压缩和安排的支出。",
        narrative:
          "晚年的林禾住进长者共居社区。年轻时积累的时间信用换回了稳定照护，过去受她帮助的人又带着新的技能回来陪伴她。她口述的维修故事与社区档案一起被保存，成为下一代学习公共互助史的一部分。",
        metrics: {
          body: 70,
          calm: 82,
          bond: 88,
          meaning: 90,
          autonomy: 78,
          ecology: 74,
        },
        system: {
          trust: 90,
          mobility: 80,
          exploitation: 11,
        },
        transactions: [
          {
            name: "长者共居",
            detail:
              "晚年不再被封闭照护，而是继续嵌在朋友、学徒与邻里构成的日常里。",
            immediateOutcome:
              "她不是被安放，而是仍在参与。",
            lifeOutcome:
              "她的人生最终收束为一张会继续生长的关系网。",
          },
          {
            name: "口述档案计划",
            detail:
              "个人经历进入公共记忆系统，成为幸福生态的经验资产。",
            immediateOutcome:
              "她意识到自己的一生值得被记录，而不是被遗忘。",
            lifeOutcome:
              "她为后来者留下的，不是财产，而是一套活过的尊严范本。",
          },
        ],
      },
    ],
  },
  {
    id: "middle",
    name: "周岚",
    tier: "中层",
    role: "从绩效驱动的白领与照护夹心层，成长为跨职业轮作的公共协作者。",
    color: "#ffd88c",
    summary: "新市场把她从连续焦虑中释放出来，让她重新分配时间、职业与亲密关系。",
    ending:
      "周岚晚年仍在不同社区间短期驻留，既做职业导师，也参加共育和城市农园项目。她不再需要把一生压缩成单一职业晋升曲线，而是以多重身份生活，始终保有流动与安定的平衡。",
    stages: [
      {
        label: "青年职场",
        title: "离开永无止境的绩效跑道",
        scene: "再学习账户与职业缓冲",
        image: "happiness-market-assets/middle_youth.jpg",
        oldMarketNarrative:
          "在旧市场里，周岚会继续留在高压白领轨道上，为了房租和简历不敢停下。她看似体面，却时时担心一步掉队就跌出中层生活。",
        oldOutcomeTitle: "被焦虑维持的体面",
        oldOutcome:
          "她会越来越擅长忍耐，却越来越难回答自己究竟想成为什么样的人。",
        narrative:
          "周岚曾是典型的中层青年：有学历、有工作，却被房租、KPI和随时失去位置的焦虑压得喘不过气。新市场把公共教育额度、职业缓冲金和基础服务打包开放给所有人，她第一次敢从不适合自己的岗位上暂停，去学习社区规划与儿童陪伴。",
        metrics: {
          body: 58,
          calm: 55,
          bond: 52,
          meaning: 61,
          autonomy: 70,
          ecology: 49,
        },
        system: {
          trust: 56,
          mobility: 71,
          exploitation: 33,
        },
        transactions: [
          {
            name: "再学习账户",
            detail:
              "学习不再依赖自费赌博，而是被视为所有人都可重复使用的人生基础设施。",
            immediateOutcome:
              "周岚不再把转行想象成坠落，而视作合理的人生轮作。",
            lifeOutcome:
              "她后来可以在不同角色间切换，而不再被单一身份困住。",
          },
          {
            name: "职业缓冲金",
            detail:
              "暂停期的生活被公共系统稳定承接，避免中层跌落恐惧。",
            immediateOutcome:
              "她开始根据价值而非恐惧做选择。",
            lifeOutcome:
              "这让她的人生弧线从焦虑保位，转向主动塑形。",
          },
        ],
      },
      {
        label: "育儿时期",
        title: "孩子不再只属于一个家庭的孤军奋战",
        scene: "共育网络与共享厨房",
        image: "happiness-market-assets/middle_parenting.jpg",
        oldMarketNarrative:
          "如果仍在旧市场，孩子出生会把周岚与伴侣重新推回最传统、最疲惫的分工。托育稀缺、晚餐失控、家务积压，爱会一点点被耗成琐碎争执。",
        oldOutcomeTitle: "家庭被私有化压力挤压",
        oldOutcome:
          "育儿会让他们更爱孩子，却也更难保住彼此的时间、精力和人格边界。",
        narrative:
          "当孩子出生，周岚最害怕的不是辛苦，而是被锁死在旧式家庭分工里。社区共育网络出现后，教师、长者、轮休者和家长共同构成托育与教育场域。共享厨房让晚餐不再是压垮每个家庭的最后一环，她与伴侣终于能在育儿中保留彼此的人格与事业节奏。",
        metrics: {
          body: 64,
          calm: 63,
          bond: 79,
          meaning: 74,
          autonomy: 72,
          ecology: 58,
        },
        system: {
          trust: 81,
          mobility: 74,
          exploitation: 24,
        },
        transactions: [
          {
            name: "共育网络",
            detail:
              "照护由多位成人共同承担，孩子成长也因此拥有更多代际与技能连接。",
            immediateOutcome:
              "周岚第一次感觉，育儿可以是一种扩展关系而不是封闭消耗。",
            lifeOutcome:
              "她的孩子后来也自然进入互助型共同体，而非竞争型孤岛。",
          },
          {
            name: "共享厨房",
            detail:
              "做饭从私域重复劳动转化为有组织的公共协作。",
            immediateOutcome:
              "她的晚上不再总被家务吞没，可以腾出时间陪伴与学习。",
            lifeOutcome:
              "家庭关系因此少了很多怨怼，多了可持续的亲密。",
          },
        ],
      },
      {
        label: "中年转换",
        title: "经验不再随着行业收缩被抛弃",
        scene: "跨代导师与身份轮作",
        image: "happiness-market-assets/middle_midlife.jpg",
        oldMarketNarrative:
          "旧市场里的中年转折往往意味着降薪、被替代和重新证明自己。周岚会发现经验并不自动带来尊重，反而可能在更年轻的竞争标准前被折旧。",
        oldOutcomeTitle: "中年成为被压价时刻",
        oldOutcome:
          "她要么勉强留在旧行业透支自己，要么带着羞耻感重新开始。",
        narrative:
          "行业变化来临时，周岚没有像旧时代那样被年龄和履历卡死。她在跨代导师机制下，一边教年轻人项目协作，一边进入城市农园和社区设计项目学习新的劳动方式。中年不再是被迫降级，而是带着经验进入新的社会角色。",
        metrics: {
          body: 70,
          calm: 72,
          bond: 83,
          meaning: 84,
          autonomy: 81,
          ecology: 76,
        },
        system: {
          trust: 85,
          mobility: 82,
          exploitation: 16,
        },
        transactions: [
          {
            name: "跨代导师机制",
            detail:
              "经验不被浪费，而在代际协作里转化成新能力。",
            immediateOutcome:
              "她意识到自己不是过时，而是正站在传递与更新的交汇点。",
            lifeOutcome:
              "中年因此成为她人生最有能量的阶段之一。",
          },
          {
            name: "身份轮作假期",
            detail:
              "公共制度支持人们周期性切换工作、学习与服务身份。",
            immediateOutcome:
              "周岚从办公室走入土地与社区，重新理解生活的节奏。",
            lifeOutcome:
              "她晚年的稳定，来自一生积累的多重角色与关系。",
          },
        ],
      },
      {
        label: "老年流动",
        title: "把一生活成可流动的光谱",
        scene: "社区驻留与终身服务假期",
        image: "happiness-market-assets/middle_elder.jpg",
        oldMarketNarrative:
          "若一切照旧，周岚的老年会更像突然停机：职业身份结束后，生活秩序一下子变窄，社交和意义感也可能跟着急剧收缩。",
        oldOutcomeTitle: "退休后被迫缩回单一身份",
        oldOutcome:
          "她会拥有更多空白时间，却未必拥有更多被需要和被连接的时刻。",
        narrative:
          "进入老年后，周岚没有退回单一的退休身份。她在不同社区短期驻留，组织故事课、带年轻父母做公共餐桌，也去乡村共作农园。她的晚年不是退出社会，而是在更慢的节奏里继续横穿不同生活世界。",
        metrics: {
          body: 74,
          calm: 85,
          bond: 86,
          meaning: 89,
          autonomy: 84,
          ecology: 82,
        },
        system: {
          trust: 91,
          mobility: 88,
          exploitation: 10,
        },
        transactions: [
          {
            name: "社区驻留交换",
            detail:
              "不同社区以技能、故事和服务时数互换驻留机会。",
            immediateOutcome:
              "她在老年仍不断遇见新的人与新的需要。",
            lifeOutcome:
              "人生不再是一条封闭履历，而是一张不断延展的地图。",
          },
          {
            name: "终身服务假期",
            detail:
              "任何年龄都可获得参与公共服务与学习的制度支持。",
            immediateOutcome:
              "老年不再只有被照护，也有持续贡献和被邀请。",
            lifeOutcome:
              "周岚最终拥有的是多维而完整的人生幸福光谱。",
          },
        ],
      },
    ],
  },
  {
    id: "upper",
    name: "顾承",
    tier: "上层",
    role: "从习惯控制与资本抽取的继承者，转向以公共创造和信誉为荣的幸福工程师。",
    color: "#f6a3ff",
    summary: "新市场没有简单剥夺他，而是给出一条从占有退场、向共建转身的路径。",
    ending:
      "顾承晚年不再以私人财富规模被记住，而以他参与建立的教育工坊、生态修复带和社会遗产信托被记住。他的家庭在遭遇人生风险时也由共同体接住，于是控制欲终于被安全感所替代。",
    stages: [
      {
        label: "青年继承",
        title: "第一次怀疑占有是否真能带来安稳",
        scene: "混合生活与共情训练",
        image: "happiness-market-assets/upper_youth.jpg",
        oldMarketNarrative:
          "在旧市场里，顾承会被训练成一个更高效的继承者：更早学会区分谁该被管理、谁该被雇佣、谁的生活只需要出现在报表边缘。",
        oldOutcomeTitle: "优越感被当成天赋",
        oldOutcome:
          "他会拥有更多资源，却更难真正理解别人，也更难摆脱对失控的深层恐惧。",
        narrative:
          "顾承出生在资源丰厚的家族，原本会沿着旧市场逻辑继承财富、企业和优越感。但新市场要求高阶层后代在成年前进入混合生活计划，与不同背景的人长期共同学习、劳动和居住。那些过去被隐藏在报表后的劳动与照护成本，第一次成为他每天都能感受到的现实。",
        metrics: {
          body: 60,
          calm: 47,
          bond: 58,
          meaning: 56,
          autonomy: 63,
          ecology: 54,
        },
        system: {
          trust: 49,
          mobility: 60,
          exploitation: 41,
        },
        transactions: [
          {
            name: "混合生活计划",
            detail:
              "不同阶层的青年共同居住与劳动，打断幸福资本的世袭复制。",
            immediateOutcome:
              "顾承第一次无法只把他人的艰难理解成抽象统计。",
            lifeOutcome:
              "这段经历成为他后来放弃控制型管理的起点。",
          },
          {
            name: "共情训练",
            detail:
              "领导资格不再来自家世，而来自能否稳定承担公共关系与责任。",
            immediateOutcome:
              "他意识到被尊敬和被畏惧是两种完全不同的力量。",
            lifeOutcome:
              "他后来的权威更多建立在信任，而非命令。",
          },
        ],
      },
      {
        label: "壮年转身",
        title: "把利润出口改造成共同体入口",
        scene: "企业转制与公共信托",
        image: "happiness-market-assets/upper_turn.jpg",
        oldMarketNarrative:
          "若沿用旧规则，顾承接手企业后的目标只会是扩大控制和利润抽取。公司越大，人与劳动现场之间的距离越远，安全感却始终建立在更强的围栏上。",
        oldOutcomeTitle: "越富有，越需要防守",
        oldOutcome:
          "他会拥有更大的商业版图，但也会更害怕信任别人、更害怕失去高位。",
        narrative:
          "接手家族企业后，顾承面对的不是如何继续抽取更多利润，而是如何让企业完成合作化转制。他与工人委员会、社区代表共同设立公共信托，将部分资产收益稳定注入教育、照护和生态修复。旧时代的权力出口，开始变成共同体的基础设施入口。",
        metrics: {
          body: 67,
          calm: 63,
          bond: 76,
          meaning: 82,
          autonomy: 70,
          ecology: 72,
        },
        system: {
          trust: 79,
          mobility: 76,
          exploitation: 22,
        },
        transactions: [
          {
            name: "企业转制",
            detail:
              "股权与治理结构被重写，企业目标从利润最大化转向幸福指标最大化。",
            immediateOutcome:
              "顾承失去了一部分单边控制，却获得了更稳定真实的合作关系。",
            lifeOutcome:
              "他不再需要靠压迫来证明能力，而靠共建来赢得位置。",
          },
          {
            name: "公共信托",
            detail:
              "资本收益被制度化导入共同体，而不是变成下一代的封闭护城河。",
            immediateOutcome:
              "他开始把财富理解为需要被安排流动的责任。",
            lifeOutcome:
              "这为他的家族换来了更持久、更少焦虑的安全感。",
          },
        ],
      },
      {
        label: "成熟阶段",
        title: "从掌控者变成幸福工程师",
        scene: "生态修复与公共创作",
        image: "happiness-market-assets/upper_midlife.jpg",
        oldMarketNarrative:
          "旧市场中的顾承大概会继续把资源投向更快的回报和更高的壁垒。公共事务只在有利于形象或资本回流时才值得投入。",
        oldOutcomeTitle: "创造力被困在自我增殖里",
        oldOutcome:
          "他会不断赢得更多，却始终难以从中获得真正稳定的意义感。",
        narrative:
          "中年的顾承不再执着于身份高度，而是把大量精力投入到长期回报缓慢却能改变公共生活的项目：河岸修复、青年工坊、社区艺术实验。人们对他的评价，不再是'他有多少钱'，而是'他让多少人的生活变得更有呼吸感'。",
        metrics: {
          body: 73,
          calm: 79,
          bond: 84,
          meaning: 91,
          autonomy: 76,
          ecology: 88,
        },
        system: {
          trust: 89,
          mobility: 84,
          exploitation: 13,
        },
        transactions: [
          {
            name: "生态修复投资",
            detail:
              "把可支配资源投入自然与社区长期恢复，而非短期套利。",
            immediateOutcome:
              "顾承开始从时间尺度更长的回报中获得平静。",
            lifeOutcome:
              "他的名字与修复而非掠夺绑定在一起。",
          },
          {
            name: "公共创作工坊",
            detail:
              "资源不再只服务少数人的消费，而变成多数人进入创作与学习的门票。",
            immediateOutcome:
              "他发现最深的满足来自看见别人也被点亮。",
            lifeOutcome:
              "这让他晚年拥有真正不依赖阶层壁垒的尊荣。",
          },
        ],
      },
      {
        label: "晚年退出",
        title: "把后代焦虑换成共同体的长期承诺",
        scene: "社会遗产信托与公共尊荣",
        image: "happiness-market-assets/upper_elder.jpg",
        oldMarketNarrative:
          "如果停留在旧市场，顾承晚年最重要的工作会是确保财富继续封闭流向后代，并用更多工具防守这种封闭。安全感会越来越昂贵，心也越来越难放松。",
        oldOutcomeTitle: "守住高位变成终身任务",
        oldOutcome:
          "他会把一生耗在防止跌落上，即便拥有一切，也很难真正感觉到安定。",
        narrative:
          "晚年的顾承完成社会遗产信托，把本可以世袭固化的财富转换为教育、医疗与紧急援助基金。作为交换，他和家人在遭遇疾病、失败或失去时，都能无条件获得共同体支持。他终于明白，真正的安全并不来自把资源围起来，而来自知道自己早已嵌入他人的善意之中。",
        metrics: {
          body: 76,
          calm: 90,
          bond: 90,
          meaning: 94,
          autonomy: 81,
          ecology: 90,
        },
        system: {
          trust: 95,
          mobility: 89,
          exploitation: 8,
        },
        transactions: [
          {
            name: "社会遗产信托",
            detail:
              "私人继承焦虑被转化为公共连续性与家庭的普遍保障。",
            immediateOutcome:
              "顾承不再把后代安全与他人剥夺绑定在一起。",
            lifeOutcome:
              "他的离场不是失去，而是一种更大的被记住方式。",
          },
          {
            name: "公共尊荣机制",
            detail:
              "真正的荣誉来自持续公共贡献，而不是排他式财富展示。",
            immediateOutcome:
              "他感受到一种比优越感更稳定的宁静。",
            lifeOutcome:
              "他的晚年终于摆脱了旧市场那种必须不断守住高位的恐惧。",
          },
        ],
      },
    ],
  },
]

const metricLabels = {
  body: "身体活力",
  calm: "精神宁静",
  bond: "社会联结",
  meaning: "生命意义",
  autonomy: "自主性",
  ecology: "生态安全感",
}

const systemLabels = {
  trust: "社区信任",
  mobility: "社会流动",
  exploitation: "剥削残留",
}

const state = {
  characterIndex: 0,
}

const heroChooserEl = document.getElementById("heroChooser")
const storyLaneEl = document.getElementById("storyLane")

function createMetricMarkup(metricMap, labels, inverse) {
  return Object.entries(metricMap)
    .map(([key, value]) => {
      const normalized = inverse ? 100 - value : value
      return `
        <div class="metric-item">
          <div class="metric-item__header">
            <span>${labels[key]}</span>
            <strong>${value}</strong>
          </div>
          <div class="metric-bar">
            <div class="metric-bar__fill" style="width:${normalized}%;"></div>
          </div>
        </div>
      `
    })
    .join("")
}

function renderHeroChooser() {
  heroChooserEl.innerHTML = ""

  characterStories.forEach((character, index) => {
    const isActive = index === state.characterIndex
    const button = document.createElement("button")
    button.type = "button"
    button.className = `hero-chooser__card${isActive ? " is-active" : ""}`
    button.setAttribute("aria-pressed", String(isActive))
    button.style.setProperty("--accent", character.color)
    button.innerHTML = `
      <span class="hero-chooser__tier">${character.tier}</span>
      <span class="hero-chooser__name">${character.name}${isActive ? " · 当前人物" : ""}</span>
      <span class="hero-chooser__role">${character.role}</span>
    `
    button.addEventListener("click", () => {
      if (state.characterIndex === index) return
      state.characterIndex = index
      renderHeroChooser()
      renderStoryLane()
    })
    heroChooserEl.appendChild(button)
  })
}

function buildChapter(stage, index, character) {
  const chapter = document.createElement("section")
  chapter.className = "chapter"
  chapter.style.setProperty("--accent", character.color)
  chapter.style.animationDelay = `${index * 0.08}s`

  const stageNumber = String(index + 1).padStart(2, "0")
  const safeImage = stage.image.replace(/'/g, "%27")

  chapter.innerHTML = `
    <div class="chapter__header">
      <span class="chapter__number">${stageNumber}</span>
      <div class="chapter__title-block">
        <span class="chapter__label">${stage.label}</span>
        <h2 class="chapter__title">${stage.title}</h2>
      </div>
      <span class="chapter__scene-tag">${stage.scene}</span>
    </div>

    <div class="chapter__image">
      <img class="chapter__image-img" src="${safeImage}" alt="${character.name} · ${stage.scene}" loading="lazy" />
      <div class="chapter__image-overlay">
        <span>${character.name}</span>
        <strong>${stage.scene}</strong>
      </div>
    </div>

    <div class="chapter__narrative">${stage.narrative}</div>

    <details class="chapter__contrast">
      <summary>在旧市场里，这会是另一番景象…</summary>
      <div class="chapter__contrast-body">
        <p>${stage.oldMarketNarrative}</p>
        <div class="chapter__contrast-callout">
          <strong>${stage.oldOutcomeTitle}</strong>
          ${stage.oldOutcome}
        </div>
      </div>
    </details>

    <div class="chapter__transactions">
      ${stage.transactions.map((t) => `
        <div class="chapter__transaction" tabindex="0" role="button" aria-expanded="false">
          <h3 class="chapter__transaction-name">${t.name}</h3>
          <p class="chapter__transaction-detail">${t.detail}</p>
          <span class="chapter__transaction-toggle">查看结局</span>
          <div class="chapter__outcomes">
            <div class="chapter__outcome-item">
              <span class="chapter__outcome-label">即时结果</span>
              ${t.immediateOutcome}
            </div>
            <div class="chapter__outcome-item">
              <span class="chapter__outcome-label">一生结局</span>
              ${t.lifeOutcome} ${character.ending}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <details class="chapter__metrics">
      <summary>幸福指标变化</summary>
      <div class="chapter__metrics-body">
        <div class="chapter__metrics-group">
          <h4>个人幸福指标</h4>
          ${createMetricMarkup(stage.metrics, metricLabels, false)}
        </div>
        <div class="chapter__metrics-group">
          <h4>共同体反馈</h4>
          ${createMetricMarkup(stage.system, systemLabels, true)}
        </div>
      </div>
    </details>
  `

  return chapter
}

function renderStoryLane() {
  storyLaneEl.innerHTML = ""

  const character = characterStories[state.characterIndex]

  character.stages.forEach((stage, index) => {
    const chapter = buildChapter(stage, index, character)
    storyLaneEl.appendChild(chapter)

    if (index < character.stages.length - 1) {
      const divider = document.createElement("div")
      divider.className = "chapter-divider"
      storyLaneEl.appendChild(divider)
    }
  })
}

storyLaneEl.addEventListener("click", (event) => {
  const card = event.target.closest(".chapter__transaction")
  if (!card) return

  const isExpanded = card.classList.toggle("is-expanded")
  card.setAttribute("aria-expanded", String(isExpanded))

  const toggle = card.querySelector(".chapter__transaction-toggle")
  if (toggle) {
    toggle.textContent = isExpanded ? "收起结局" : "查看结局"
  }
})

storyLaneEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest(".chapter__transaction")
    if (!card) return

    event.preventDefault()
    const isExpanded = card.classList.toggle("is-expanded")
    card.setAttribute("aria-expanded", String(isExpanded))

    const toggle = card.querySelector(".chapter__transaction-toggle")
    if (toggle) {
      toggle.textContent = isExpanded ? "收起结局" : "查看结局"
    }
  }
})

function render() {
  renderHeroChooser()
  renderStoryLane()
}

render()
