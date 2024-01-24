export default {
    "candlelightType": {
        "普通蜡烛": 1,
        "普通黑暗植物": 2,
        "大蜡烛": 3,
        "多人合作黑暗植物": 4,
        "贝壳": 5,
        "多人合作贝壳": 6,
        "聚合点位": 7,
        "烛火收集点": 8,
        "移动烛火": 9,
        "任务烛火": 10,
        "特殊烛火": 99
    },
    "whileCandleRule": [
        80,
        80,
        80,
        80,
        80,
        120,
        120,
        120,
        120,
        120,
        180,
        180,
        180,
        180,
        180,
        190,
        210,
        230,
        260,
        280,
        400,
        500,
        650,
        800,
        5000,
        25000
    ],
    "skyMap": {
        "家园": [
            {
                "name": "遇境",
                "candlelightPoints": [
                    {
                        "name": "遇境裤子衣橱烛火",
                        "code": "000102",
                        "candlelight": 4
                    },
                    {
                        "name": "遇境面部衣橱烛火",
                        "code": "000103",
                        "candlelight": 3,
                        "appearIn": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7
                        ]
                    },
                    {
                        "name": "遇境头部衣橱烛火",
                        "code": "000104",
                        "candlelight": 3
                    },
                    {
                        "name": "遇境斗篷衣橱烛火",
                        "code": "000105",
                        "candlelight": 3
                    },
                    {
                        "name": "遇境背饰衣橱烛火",
                        "code": "000106",
                        "candlelight": 4
                    }
                ]
            },
            {
                "name": "云巢",
                "candlelightPoints": [
                    {"code": "000201", "candlelight": 3},
                    {"code": "000202", "candlelight": 4},
                    {"code": "000203", "candlelight": 4},
                    {"code": "000204", "candlelight": 4},
                    {"code": "000205", "candlelight": 4},
                    {"code": "000206", "candlelight": 4}]
            }
        ],
        "晨岛": [
            {
                "name": "晨岛",
                "candlelightPoints": [
                    {
                        "name": "晨岛大蜡烛1",
                        "code": "010101",
                        "type": 3,
                        "candlelight": 50,
                        "desc": ""
                    },
                    {
                        "name": "晨岛烛火2",
                        "code": "010102",
                        "candlelight": 10
                    },
                    {
                        "name": "晨岛大蜡烛3",
                        "code": "010103",
                        "type": 3,
                        "candlelight": 50
                    },
                    {
                        "name": "晨岛烛火4",
                        "code": "010104",
                        "candlelight": 10
                    },
                    {
                        "name": "晨岛烛火5",
                        "code": "010105",
                        "candlelight": 21
                    },
                    {
                        "name": "晨岛烛火6",
                        "code": "010106",
                        "candlelight": 8
                    },
                    {
                        "name": "晨岛烛火7",
                        "code": "010107",
                        "candlelight": 20,
                        "type": 7,
                        "desc": "神殿洞口的烛火"
                    },
                    {
                        "name": "晨岛烛火8",
                        "code": "010108",
                        "candlelight": 15,
                        "desc": "预言山谷洞口的烛火"
                    },
                    {"code": "010109", "candlelight": "17"}
                ]
            },
            {
                "name": "预言山谷",
                "candlelightPoints": [
                    {
                        "name": "预言山谷大蜡烛1",
                        "code": "010201",
                        "type": 3,
                        "candlelight": 50,
                        "desc": ""
                    },
                    {
                        "name": "预言山谷烛火2",
                        "code": "010202",
                        "candlelight": 8
                    }
                ]
            },
            {
                "name": "水之试炼",
                "candlelightPoints": [
                    {
                        "name": "水之试炼大蜡烛1",
                        "code": "010301",
                        "type": 3,
                        "candlelight": 50,
                        "desc": ""
                    },
                    {
                        "name": "水之试炼大蜡烛2",
                        "code": "010302",
                        "type": 3,
                        "candlelight": 50
                    },
                    {
                        "name": "水之试炼烛火3",
                        "code": "010303",
                        "candlelight": 6
                    }
                ]
            },
            {
                "name": "土之试炼",
                "candlelightPoints": [
                    {
                        "name": "土之试炼烛火1",
                        "code": "010401",
                        "candlelight": 2
                    },
                    {
                        "name": "土之试炼烛火2",
                        "code": "010402",
                        "candlelight": 2
                    },
                    {
                        "name": "土之试炼烛火3",
                        "code": "010403",
                        "candlelight": 2
                    },
                    {
                        "name": "土之试炼烛火4",
                        "code": "010404",
                        "candlelight": 4,
                        "desc": "1x4在一个浮动的石头上;"
                    },
                    {
                        "name": "土之试炼烛火5",
                        "code": "010405",
                        "candlelight": 2
                    },
                    {
                        "name": "土之试炼烛火6",
                        "code": "010406",
                        "candlelight": 3
                    },
                    {
                        "name": "土之试炼终点大蜡烛7",
                        "code": "010407",
                        "type": 3,
                        "candlelight": 100
                    }
                ]
            },
            {
                "name": "风之试炼",
                "candlelightPoints": [
                    {
                        "name": "风之试炼终点大蜡烛1",
                        "code": "010501",
                        "type": 3,
                        "candlelight": 200
                    }
                ]
            },
            {
                "name": "火之试炼",
                "candlelightPoints": [
                    {
                        "name": "火之试炼终点大蜡烛1",
                        "code": "010601",
                        "type": 3,
                        "candlelight": 200
                    }
                ]
            }
        ],
        "云野": [
            {
                "name": "云野小广场",
                "candlelightPoints": [
                    {
                        "code": "020101",
                        "candlelight": 4
                    },
                    {
                        "code": "020102",
                        "candlelight": 3
                    },
                    {
                        "code": "020103",
                        "candlelight": 3
                    }
                ]
            },
            {
                "name": "蝴蝶平原",
                "candlelightPoints": [
                    {
                        "code": "020201",
                        "candlelight": 5
                    },
                    {
                        "code": "020202",
                        "candlelight": 20
                    },
                    {
                        "code": "020203",
                        "candlelight": 5
                    },
                    {
                        "code": "020204",
                        "candlelight": 5
                    },
                    {
                        "code": "020205",
                        "candlelight": 5
                    },
                    {
                        "code": "020206",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "幽光山洞",
                "candlelightPoints": [
                    {
                        "code": "020301",
                        "candlelight": 5
                    },
                    {
                        "code": "020302",
                        "candlelight": 5
                    },
                    {
                        "code": "020303",
                        "candlelight": 5
                    },
                    {
                        "code": "020304",
                        "candlelight": 5
                    },
                    {
                        "code": "020305",
                        "candlelight": 5
                    },
                    {
                        "code": "020306",
                        "candlelight": 5
                    },
                    {
                        "code": "020307",
                        "candlelight": 5
                    },
                    {
                        "code": "020308",
                        "candlelight": 5
                    },
                    {
                        "code": "020309",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "云顶浮石",
                "candlelightPoints": [
                    {
                        "code": "020401",
                        "candlelight": 5
                    },
                    {
                        "code": "020402",
                        "candlelight": 5
                    },
                    {
                        "code": "020403",
                        "candlelight": 5
                    },
                    {
                        "code": "020404",
                        "candlelight": 5
                    },
                    {
                        "code": "020405",
                        "candlelight": 5
                    },
                    {
                        "code": "020406",
                        "candlelight": 5
                    },
                    {
                        "code": "020407",
                        "candlelight": 5
                    },
                    {
                        "code": "020408",
                        "candlelight": 5
                    },
                    {
                        "code": "020409",
                        "candlelight": 5
                    },
                    {
                        "code": "020410",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "圣岛",
                "candlelightPoints": [
                    {
                        "code": "020501",
                        "candlelight": 50
                    },
                    {
                        "code": "020502",
                        "candlelight": 6
                    },
                    {
                        "code": "020503",
                        "candlelight": 6
                    },
                    {
                        "code": "020504",
                        "candlelight": 66
                    },
                    {
                        "code": "020505",
                        "candlelight": 50
                    },
                    {
                        "code": "020506",
                        "candlelight": 6
                    },
                    {
                        "code": "020507",
                        "candlelight": 12
                    },
                    {
                        "code": "020508",
                        "candlelight": 6
                    },
                    {
                        "code": "020509",
                        "candlelight": 6
                    },
                    {
                        "code": "020510",
                        "candlelight": 50
                    },
                    {
                        "code": "020511",
                        "candlelight": 41
                    },
                    {
                        "code": "020512",
                        "type": 6,
                        "candlelight": 100
                    },
                    {
                        "code": "020513",
                        "type": 9,
                        "candlelight": 51
                    },
                    {
                        "code": "020514",
                        "type": 5,
                        "floatCandlelight": [
                            185,
                            35
                        ]
                    }
                ]
            },
            {
                "name": "仙乡",
                "candlelightPoints": [
                    {
                        "code": "020601",
                        "candlelight": 5
                    },
                    {
                        "code": "020602",
                        "candlelight": 5
                    },
                    {
                        "code": "020603",
                        "candlelight": 20
                    },
                    {
                        "code": "020604",
                        "candlelight": 5
                    },
                    {
                        "code": "020605",
                        "candlelight": 23
                    },
                    {
                        "code": "020606",
                        "candlelight": 10
                    },
                    {
                        "code": "020607",
                        "candlelight": 5
                    },
                    {
                        "code": "020608",
                        "candlelight": 5
                    },
                    {
                        "code": "020609",
                        "candlelight": 5
                    },
                    {
                        "code": "020610",
                        "candlelight": 15
                    },
                    {
                        "code": "020611",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "中央神坛",
                "candlelightPoints": [
                    {
                        "code": "020701",
                        "candlelight": 12,
                        "type": 7
                    },
                    {
                        "code": "020702",
                        "candlelight": 7
                    },
                    {
                        "code": "020703",
                        "candlelight": 80
                    }
                ]
            },
            {
                "name": "云野神殿",
                "candlelightPoints": [
                    {
                        "code": "020801",
                        "candlelight": 5
                    },
                    {
                        "code": "020802",
                        "candlelight": 5
                    },
                    {
                        "code": "020803",
                        "candlelight": 5
                    },
                    {
                        "code": "020804",
                        "candlelight": 9
                    },
                    {
                        "code": "020805",
                        "candlelight": 5
                    },
                    {
                        "code": "020806",
                        "candlelight": 5
                    }
                ]
            }
        ],
        "雨林": [
            {
                "name": "雨林小广场"
            },
            {
                "name": "风行网道",
                "candlelightPoints": [
                    {
                        "code": "030201",
                        "candlelight": 23,
                        "desc": "23风洞"
                    },
                    {
                        "code": "030202",
                        "candlelight": 5
                    },
                    {
                        "code": "030203",
                        "candlelight": 4
                    },
                    {
                        "code": "030204",
                        "candlelight": 3
                    },
                    {
                        "code": "030205",
                        "candlelight": 3
                    },
                    {
                        "code": "030206",
                        "candlelight": 5
                    },
                    {
                        "code": "030207",
                        "candlelight": 5
                    },
                    {
                        "code": "030208",
                        "candlelight": 5
                    },
                    {
                        "code": "030209",
                        "candlelight": 5
                    },
                    {
                        "code": "030210",
                        "candlelight": 5
                    },
                    {
                        "code": "030211",
                        "candlelight": 5
                    },
                    {
                        "code": "030212",
                        "candlelight": 5
                    },
                    {
                        "code": "030213",
                        "candlelight": 5
                    },
                    {
                        "code": "030214",
                        "candlelight": 5
                    },
                    {
                        "code": "030215",
                        "candlelight": 5
                    },
                    {
                        "code": "030216",
                        "candlelight": 5
                    },
                    {
                        "code": "030217",
                        "candlelight": 5
                    },
                    {
                        "code": "030218",
                        "candlelight": 5
                    },
                    {
                        "code": "030219",
                        "candlelight": 5
                    },
                    {
                        "code": "030220",
                        "candlelight": 5
                    },
                    {
                        "code": "030221",
                        "candlelight": 10
                    },
                    {
                        "code": "030222",
                        "candlelight": 5
                    },
                    {
                        "code": "030223",
                        "candlelight": 50
                    },
                    {
                        "code": "030224",
                        "candlelight": 5
                    },
                    {
                        "code": "030225",
                        "candlelight": 5
                    },
                    {
                        "code": "030226",
                        "candlelight": 5
                    },
                    {
                        "code": "030227",
                        "candlelight": 5
                    },
                    {
                        "code": "030228",
                        "candlelight": 5
                    },
                    {
                        "code": "030229",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "静谧庭院",
                "candlelightPoints": [
                    {
                        "code": "030301",
                        "candlelight": 6,
                        "appearIn": [
                            2,
                            4,
                            6,
                            7
                        ]
                    },
                    {
                        "code": "030302",
                        "candlelight": 10
                    },
                    {
                        "code": "030303",
                        "candlelight": 7,
                        "appearIn": [
                            1,
                            3,
                            5,
                            7
                        ]
                    },
                    {
                        "code": "030304",
                        "candlelight": 6
                    },
                    {
                        "code": "030305",
                        "candlelight": 6,
                        "appearIn": [
                            2,
                            4,
                            6,
                            7
                        ]
                    },
                    {
                        "code": "030306",
                        "candlelight": 6,
                        "appearIn": [
                            1,
                            3,
                            5,
                            7
                        ]
                    },
                    {
                        "code": "030307",
                        "candlelight": 6,
                        "appearIn": [
                            2,
                            4,
                            6,
                            7
                        ]
                    },
                    {
                        "code": "030308",
                        "candlelight": 5,
                        "appearIn": [
                            2,
                            4,
                            6,
                            7
                        ]
                    },
                    {
                        "code": "030309",
                        "candlelight": 6,
                        "appearIn": [
                            1,
                            3,
                            5,
                            7
                        ]
                    },
                    {
                        "code": "030310",
                        "candlelight": 6
                    },
                    {
                        "code": "030311",
                        "candlelight": 5,
                        "appearIn": [
                            1,
                            3,
                            5,
                            7
                        ]
                    }
                ]
            },
            {
                "name": "大树屋",
                "candlelightPoints": [
                    {
                        "code": "030401",
                        "candlelight": 5
                    },
                    {
                        "code": "030402",
                        "candlelight": 5
                    },
                    {
                        "code": "030403",
                        "candlelight": 5
                    },
                    {
                        "code": "030404",
                        "candlelight": 5
                    },
                    {
                        "code": "030405",
                        "candlelight": 5
                    },
                    {
                        "code": "030406",
                        "candlelight": 5
                    },
                    {
                        "code": "030407",
                        "candlelight": 5
                    },
                    {
                        "code": "030408",
                        "candlelight": 5
                    },
                    {
                        "code": "030409",
                        "candlelight": 5
                    },
                    {
                        "code": "030410",
                        "candlelight": 5
                    },
                    {
                        "code": "030411",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "荧光森林",
                "candlelightPoints": [
                    {
                        "code": "030501",
                        "candlelight": 7
                    },
                    {
                        "code": "030502",
                        "candlelight": 9
                    },
                    {
                        "code": "030503",
                        "candlelight": 9
                    },
                    {
                        "code": "030504",
                        "candlelight": 7
                    },
                    {
                        "code": "030505",
                        "candlelight": 7
                    },
                    {
                        "code": "030506",
                        "candlelight": 8
                    },
                    {
                        "code": "030507",
                        "candlelight": 8
                    },
                    {
                        "code": "030508",
                        "candlelight": 10
                    },
                    {
                        "code": "030509",
                        "candlelight": 29
                    },
                    {
                        "code": "030510",
                        "candlelight": 8
                    },
                    {
                        "code": "030511",
                        "candlelight": 50
                    },
                    {
                        "code": "030512",
                        "candlelight": 8
                    },
                    {
                        "code": "030513",
                        "candlelight": 4
                    },
                    {
                        "code": "030514",
                        "candlelight": 5
                    },
                    {
                        "code": "030515",
                        "candlelight": 3
                    },
                    {
                        "code": "030516",
                        "candlelight": 9
                    },
                    {
                        "code": "030517",
                        "candlelight": 3
                    },
                    {
                        "code": "030518",
                        "candlelight": 4
                    },
                    {
                        "code": "030519",
                        "candlelight": 8
                    },
                    {
                        "code": "030520",
                        "candlelight": 9
                    },
                    {
                        "code": "030521",
                        "candlelight": 9
                    },
                    {
                        "code": "030522",
                        "candlelight": 6
                    },
                    {
                        "code": "030523",
                        "candlelight": 1
                    },
                    {
                        "code": "030524",
                        "candlelight": 7
                    }
                ]
            },
            {
                "name": "秘密花园",
                "candlelightPoints": [
                    {
                        "code": "030601",
                        "candlelight": 7,
                        "appearIn": "135"
                    },
                    {
                        "code": "030602",
                        "candlelight": 7,
                        "appearIn": "246"
                    },
                    {
                        "code": "030603",
                        "candlelight": 7,
                        "appearIn": "135"
                    },
                    {
                        "code": "030604",
                        "candlelight": 7,
                        "appearIn": "246"
                    },
                    {
                        "code": "030605",
                        "candlelight": 7,
                        "appearIn": "246"
                    },
                    {
                        "code": "030606",
                        "candlelight": 7,
                        "appearIn": "135"
                    },
                    {
                        "code": "030607",
                        "candlelight": 7
                    },
                    {
                        "code": "030608",
                        "candlelight": 7
                    },
                    {
                        "code": "030609",
                        "candlelight": 7
                    }
                ]
            },
            {
                "name": "地下溶洞",
                "candlelightPoints": [
                    {
                        "code": "030701",
                        "candlelight": 19
                    },
                    {
                        "code": "030702",
                        "candlelight": 14
                    },
                    {
                        "code": "030703",
                        "candlelight": 16
                    },
                    {
                        "code": "030704",
                        "candlelight": 8
                    }
                ]
            },
            {
                "name": "密林遗迹",
                "candlelightPoints": [
                    {
                        "code": "030801",
                        "candlelight": 9
                    },
                    {
                        "code": "030802",
                        "candlelight": 9,
                        "appearIn": 135
                    },
                    {
                        "code": "030803",
                        "candlelight": 8
                    },
                    {
                        "code": "030804",
                        "candlelight": 8
                    },
                    {
                        "code": "030805",
                        "candlelight": 8,
                        "appearIn": 135
                    },
                    {
                        "code": "030806",
                        "candlelight": 9
                    },
                    {
                        "code": "030807",
                        "candlelight": 6
                    },
                    {
                        "code": "030808",
                        "candlelight": 9
                    },
                    {
                        "code": "030809",
                        "candlelight": 9
                    },
                    {
                        "code": "030810",
                        "candlelight": 8,
                        "appearIn": 246
                    },
                    {
                        "code": "030811",
                        "candlelight": 9,
                        "appearIn": 135
                    },
                    {
                        "code": "030812",
                        "candlelight": 9,
                        "appearIn": 246
                    },
                    {
                        "code": "030813",
                        "candlelight": 9,
                        "appearIn": 135
                    },
                    {
                        "code": "030814",
                        "candlelight": 9,
                        "appearIn": 246
                    },
                    {
                        "code": "030815",
                        "candlelight": 8,
                        "appearIn": 135
                    },
                    {
                        "code": "030816",
                        "candlelight": 9,
                        "appearIn": 246
                    },
                    {
                        "code": "030817",
                        "candlelight": 5
                    },
                    {
                        "code": "030818",
                        "candlelight": 5
                    },
                    {
                        "code": "030819",
                        "candlelight": 8,
                        "appearIn": 246
                    },
                    {
                        "code": "030820",
                        "candlelight": 10
                    },
                    {
                        "code": "030821",
                        "candlelight": 4
                    },
                    {
                        "code": "030822",
                        "candlelight": 9
                    },
                    {
                        "code": "030823",
                        "candlelight": 4
                    },
                    {
                        "code": "030824",
                        "candlelight": 26
                    },
                    {
                        "code": "030825",
                        "candlelight": 9
                    }
                ]
            },
            {
                "name": "雨林神殿",
                "candlelightPoints": [
                    {
                        "code": "030901",
                        "candlelight": 12,
                        "appearIn": 135
                    },
                    {
                        "code": "030902",
                        "candlelight": 12,
                        "appearIn": 246
                    },
                    {
                        "code": "030903",
                        "candlelight": 12,
                        "appearIn": 135
                    },
                    {
                        "code": "030904",
                        "candlelight": 12,
                        "appearIn": 246
                    },
                    {
                        "code": "030905",
                        "candlelight": 34
                    },
                    {
                        "code": "030906",
                        "candlelight": 8
                    },
                    {
                        "code": "030907",
                        "candlelight": 9
                    },
                    {
                        "code": "030908",
                        "candlelight": 8
                    }
                ]
            }
        ],
        "霞谷": [
            {
                "name": "霞谷小广场"
            },
            {
                "name": "圆梦村",
                "candlelightPoints": [
                    {
                        "code": "040201",
                        "type": 3,
                        "candlelight": 50
                    },
                    {
                        "code": "040202",
                        "candlelight": 1
                    },
                    {
                        "code": "040203",
                        "type": 3,
                        "candlelight": 50
                    }
                ]
            },
            {
                "name": "圆梦村剧场",
                "candlelightPoints": [
                    {
                        "code": "040301",
                        "candlelight": 0,
                        "floatCandlelight": [
                            30,
                            15
                        ]
                    }
                ]
            },
            {
                "name": "音乐大厅",
                "candlelightPoints": [
                    {
                        "code": "040401",
                        "candlelight": 3
                    }
                ]
            },
            {
                "name": "雪隐峰",
                "candlelightPoints": [
                    {
                        "code": "040501",
                        "candlelight": 50
                    }
                ]
            },
            {
                "name": "冰道",
                "candlelightPoints": [
                    {
                        "code": "040601",
                        "candlelight": 5
                    },
                    {
                        "code": "040602",
                        "candlelight": 5
                    },
                    {
                        "code": "040603",
                        "candlelight": 6,
                        "type": 7
                    },
                    {
                        "code": "040604",
                        "candlelight": 4
                    },
                    {
                        "code": "040605",
                        "candlelight": 10
                    },
                    {
                        "code": "040606",
                        "candlelight": 5
                    },
                    {
                        "code": "040607",
                        "candlelight": 5
                    },
                    {
                        "code": "040608",
                        "candlelight": 15
                    }
                ]
            },
            {
                "name": "滑冰场",
                "candlelightPoints": [
                    {
                        "code": "040701",
                        "candlelight": 10
                    },
                    {
                        "code": "040702",
                        "candlelight": 8
                    },
                    {
                        "code": "040703",
                        "candlelight": 8
                    },
                    {
                        "code": "040704",
                        "candlelight": 8
                    },
                    {
                        "code": "040705",
                        "candlelight": 15
                    },
                    {
                        "code": "040706",
                        "candlelight": 15
                    }
                ]
            },
            {
                "name": "霞光城",
                "candlelightPoints": [
                    {
                        "code": "040801",
                        "candlelight": 6
                    },
                    {
                        "code": "040802",
                        "candlelight": 6
                    },
                    {
                        "code": "040803",
                        "candlelight": 5
                    },
                    {
                        "code": "040804",
                        "candlelight": 6
                    },
                    {
                        "code": "040805",
                        "candlelight": 6
                    },
                    {
                        "code": "040806",
                        "candlelight": 9
                    },
                    {
                        "code": "040807",
                        "candlelight": 6
                    },
                    {
                        "code": "040808",
                        "candlelight": 5
                    },
                    {
                        "code": "040809",
                        "candlelight": 6
                    },
                    {
                        "code": "040810",
                        "candlelight": 12,
                        "type": 7
                    },
                    {
                        "code": "040811",
                        "candlelight": 12,
                        "type": 7
                    }
                ]
            },
            {
                "name": "飞行赛道神殿",
                "candlelightPoints": [
                    {
                        "code": "040901",
                        "candlelight": 1
                    },
                    {
                        "code": "040902",
                        "candlelight": 1
                    },
                    {
                        "code": "040903",
                        "candlelight": 1
                    },
                    {
                        "code": "040904",
                        "candlelight": 1
                    },
                    {
                        "code": "040905",
                        "candlelight": 1
                    },
                    {
                        "code": "040906",
                        "candlelight": 1
                    },
                    {
                        "code": "040907",
                        "candlelight": 1
                    },
                    {
                        "code": "040908",
                        "candlelight": 1
                    },
                    {
                        "code": "040909",
                        "candlelight": 1
                    },
                    {
                        "code": "040910",
                        "candlelight": 1
                    }
                ]
            },
            {
                "name": "飞行赛道",
                "fixedCandle": 1
            },
            {
                "name": "滑雪赛道",
                "fixedCandle": 1
            },
            {
                "name": "落日竞技场",
                "candlelightPoints": [
                    {
                        "code": "041201",
                        "candlelight": 5
                    },
                    {
                        "code": "041202",
                        "candlelight": 5
                    },
                    {
                        "code": "041203",
                        "candlelight": 3
                    },
                    {
                        "code": "041204",
                        "candlelight": 5
                    },
                    {
                        "code": "041205",
                        "candlelight": 3
                    },
                    {
                        "code": "041206",
                        "candlelight": 3
                    },
                    {
                        "code": "041207",
                        "candlelight": 3
                    }
                ]
            },
            {
                "name": "霞谷神殿",
                "candlelightPoints": [
                    {
                        "code": "041301",
                        "candlelight": 75
                    },
                    {
                        "code": "041302",
                        "candlelight": 5
                    },
                    {
                        "code": "041303",
                        "candlelight": 4
                    },
                    {
                        "code": "041304",
                        "candlelight": 4
                    },
                    {
                        "code": "041305",
                        "candlelight": 5
                    }
                ]
            }
        ],
        "墓土": [
            {
                "name": "墓土小广场"
            },
            {
                "name": "藏宝岛礁",
                "candlelightPoints": [
                    {
                        "code": "050201",
                        "candlelight": 11
                    },
                    {
                        "code": "050202",
                        "candlelight": 4
                    },
                    {
                        "code": "050203",
                        "candlelight": 4
                    },
                    {
                        "code": "050204",
                        "candlelight": 4
                    },
                    {
                        "code": "050205",
                        "type": 5,
                        "desc": "藏宝岛礁随机贝壳随机烛火",
                        "candlelight": 0,
                        "floatCandlelight": [
                            270,
                            35
                        ]
                    },
                    {
                        "code": "050206",
                        "type": 99,
                        "desc": "藏宝岛礁海底烛火",
                        "candlelight": 105
                    }
                ]
            },
            {
                "name": "边陲荒漠",
                "candlelightPoints": [
                    {
                        "code": "050301",
                        "candlelight": 3,
                        "appearIn": 135
                    },
                    {
                        "code": "050302",
                        "candlelight": 3,
                        "appearIn": 246
                    },
                    {
                        "code": "050303",
                        "candlelight": 3
                    },
                    {
                        "code": "050304",
                        "candlelight": 3
                    },
                    {
                        "code": "050305",
                        "candlelight": 10
                    },
                    {
                        "code": "050306",
                        "candlelight": 3,
                        "appearIn": 246
                    },
                    {
                        "code": "050307",
                        "candlelight": 3
                    },
                    {
                        "code": "050308",
                        "candlelight": 3,
                        "appearIn": 246
                    },
                    {
                        "code": "050309",
                        "candlelight": 9,
                        "appearIn": 135
                    },
                    {
                        "code": "050310",
                        "candlelight": 21
                    },
                    {
                        "code": "050311",
                        "candlelight": 3,
                        "appearIn": 135
                    },
                    {
                        "code": "050312",
                        "candlelight": 3,
                        "appearIn": 135
                    },
                    {
                        "code": "050313",
                        "candlelight": 10,
                        "appearIn": 246
                    },
                    {
                        "code": "050314",
                        "candlelight": 3,
                        "appearIn": 135
                    },
                    {
                        "code": "050315",
                        "candlelight": 3
                    },
                    {
                        "code": "050316",
                        "candlelight": 3,
                        "appearIn": 246
                    }
                ]
            },
            {
                "name": "失落方舟",
                "candlelightPoints": [
                    {
                        "code": "050401",
                        "candlelight": 5
                    },
                    {
                        "code": "050402",
                        "candlelight": 5
                    },
                    {
                        "code": "050403",
                        "candlelight": 5
                    },
                    {
                        "code": "050404",
                        "candlelight": 5
                    },
                    {
                        "code": "050405",
                        "candlelight": 27,
                        "type": 7
                    },
                    {
                        "code": "050406",
                        "candlelight": 6
                    },
                    {
                        "code": "050407",
                        "candlelight": 6
                    },
                    {
                        "code": "050408",
                        "candlelight": 6
                    },
                    {
                        "code": "050409",
                        "candlelight": 5
                    },
                    {
                        "code": "050410",
                        "candlelight": 6
                    },
                    {
                        "code": "050411",
                        "candlelight": 6
                    },
                    {
                        "code": "050412",
                        "candlelight": 5
                    },
                    {
                        "code": "050413",
                        "candlelight": 6
                    },
                    {
                        "code": "050414",
                        "candlelight": 6
                    },
                    {
                        "code": "050415",
                        "candlelight": 5
                    },
                    {
                        "code": "050416",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "巨兽荒原",
                "candlelightPoints": [
                    {
                        "code": "050501",
                        "candlelight": 12
                    },
                    {
                        "code": "050502",
                        "candlelight": 12,
                        "appearIn": 135
                    },
                    {
                        "code": "050503",
                        "candlelight": 12
                    },
                    {
                        "code": "050504",
                        "candlelight": 3
                    },
                    {
                        "code": "050505",
                        "candlelight": 3,
                        "appearIn": 246
                    },
                    {
                        "code": "050506",
                        "candlelight": 3,
                        "appearIn": 135
                    },
                    {
                        "code": "050507",
                        "candlelight": 12
                    },
                    {
                        "code": "050508",
                        "candlelight": 1
                    },
                    {
                        "code": "050509",
                        "candlelight": 12,
                        "appearIn": 135
                    },
                    {
                        "code": "050510",
                        "candlelight": 10
                    },
                    {
                        "code": "050511",
                        "candlelight": 4,
                        "type": 7,
                        "desc": "四朵花组成的楼梯"
                    },
                    {
                        "code": "050512",
                        "candlelight": 12
                    },
                    {
                        "code": "050513",
                        "candlelight": 12,
                        "appearIn": 246
                    },
                    {
                        "code": "050514",
                        "candlelight": 12,
                        "appearIn": 246
                    },
                    {
                        "code": "050515",
                        "candlelight": 38
                    },
                    {
                        "code": "050516",
                        "candlelight": 1
                    }
                ]
            },
            {
                "name": "黑水港湾",
                "candlelightPoints": [
                    {
                        "code": "050601",
                        "candlelight": 12,
                        "appearIn": 135
                    },
                    {
                        "code": "050602",
                        "candlelight": 12,
                        "appearIn": 246
                    },
                    {
                        "code": "050603",
                        "candlelight": 7,
                        "appearIn": 135
                    },
                    {
                        "code": "050604",
                        "candlelight": 7,
                        "appearIn": 135
                    },
                    {
                        "code": "050605",
                        "candlelight": 12,
                        "appearIn": 246
                    },
                    {
                        "code": "050606",
                        "candlelight": 7,
                        "appearIn": 246
                    },
                    {
                        "code": "050607",
                        "candlelight": 12,
                        "appearIn": 135
                    },
                    {
                        "code": "050608",
                        "candlelight": 7,
                        "appearIn": 246
                    },
                    {
                        "code": "050609",
                        "candlelight": 2
                    },
                    {
                        "code": "050610",
                        "candlelight": 2
                    },
                    {
                        "code": "050611",
                        "candlelight": 4
                    },
                    {
                        "code": "050612",
                        "candlelight": 4
                    },
                    {
                        "code": "050613",
                        "candlelight": 13
                    }
                ]
            },
            {
                "name": "远古战场",
                "candlelightPoints": [
                    {
                        "code": "050701",
                        "candlelight": 7
                    },
                    {
                        "code": "050702",
                        "candlelight": 7,
                        "appearIn": 135
                    },
                    {
                        "code": "050703",
                        "candlelight": 12
                    },
                    {
                        "code": "050704",
                        "candlelight": 7,
                        "appearIn": 246
                    },
                    {
                        "code": "050705",
                        "candlelight": 7,
                        "appearIn": 135
                    },
                    {
                        "code": "050706",
                        "candlelight": 12
                    },
                    {
                        "code": "050707",
                        "candlelight": 40
                    },
                    {
                        "code": "050708",
                        "candlelight": 7,
                        "appearIn": 246
                    },
                    {
                        "code": "050709",
                        "candlelight": 7,
                        "appearIn": 135
                    },
                    {
                        "code": "050710",
                        "candlelight": 7,
                        "appearIn": 246
                    },
                    {
                        "code": "050711",
                        "candlelight": 7,
                        "appearIn": 135
                    },
                    {
                        "code": "050712",
                        "candlelight": 7,
                        "appearIn": 246
                    },
                    {
                        "code": "050713",
                        "candlelight": 12
                    }
                ]
            },
            {
                "name": "墓土神殿",
                "candlelightPoints": [
                    {
                        "code": "050801",
                        "candlelight": 3
                    },
                    {
                        "code": "050802",
                        "candlelight": 11
                    },
                    {
                        "code": "050803",
                        "candlelight": 18
                    },
                    {
                        "code": "050804",
                        "candlelight": 11
                    }
                ]
            }
        ],
        "禁阁": [
            {
                "name": "底层",
                "candlelightPoints": [
                    {
                        "code": "060101",
                        "candlelight": 5
                    },
                    {
                        "code": "060102",
                        "candlelight": 49
                    },
                    {
                        "code": "060103",
                        "candlelight": 3
                    },
                    {
                        "code": "060104",
                        "candlelight": 11
                    }
                ]
            },
            {
                "name": "星光沙漠",
                "candlelightPoints": [
                    {
                        "code": "060201",
                        "candlelight": 15
                    },
                    {
                        "code": "060202",
                        "candlelight": 50
                    },
                    {
                        "code": "060203",
                        "candlelight": 5
                    },
                    {
                        "code": "060204",
                        "candlelight": 5
                    },
                    {
                        "code": "060205",
                        "candlelight": 5
                    },
                    {
                        "code": "060206",
                        "candlelight": 5
                    },
                    {
                        "code": "060207",
                        "candlelight": 5
                    },
                    {
                        "code": "060208",
                        "candlelight": 5
                    },
                    {
                        "code": "060209",
                        "candlelight": 5
                    },
                    {
                        "code": "060210",
                        "candlelight": 5
                    },
                    {
                        "code": "060211",
                        "candlelight": 5
                    },
                    {
                        "code": "060212",
                        "candlelight": 5
                    },
                    {
                        "code": "060213",
                        "candlelight": 5
                    },
                    {
                        "code": "060214",
                        "candlelight": 5
                    },
                    {
                        "code": "060215",
                        "candlelight": 5
                    },
                    {
                        "code": "060216",
                        "candlelight": 5
                    },
                    {
                        "code": "060217",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "月牙绿洲",
                "candlelightPoints": [
                    {"code": "061101", "candlelight": 200},
                    {"code": "061102", "candlelight": 39},
                    {"code": "061103", "candlelight": 30},
                    {"code": "061104", "candlelight": 24},
                    {"code": "061105", "candlelight": 54},
                    {"code": "061106", "candlelight": 45},
                    {"code": "061107", "candlelight": 42},
                    {"code": "061108", "candlelight": 5},
                    {"code": "061109", "candlelight": 18},
                    {"code": "061110", "candlelight": 18}
                ]
            },
            {
                "name": "秘密基地",
                "desc": "别称TGC办公室",
                "candlelightPoints": [
                    {
                        "code": "060301",
                        "candlelight": 3
                    },
                    {
                        "code": "060302",
                        "candlelight": 1
                    },
                    {
                        "code": "060303",
                        "candlelight": 2
                    },
                    {
                        "code": "060304",
                        "candlelight": 2
                    },
                    {
                        "code": "060305",
                        "candlelight": 5
                    },
                    {
                        "code": "060306",
                        "candlelight": 3
                    },
                    {
                        "code": "060307",
                        "candlelight": 37
                    },
                    {
                        "code": "060308",
                        "candlelight": 5
                    }
                ]
            },
            {
                "name": "档案阁",
                "candlelightPoints": [
                    {
                        "code": "060401",
                        "candlelight": 5
                    },
                    {
                        "code": "060402",
                        "candlelight": 5
                    },
                    {
                        "code": "060403",
                        "candlelight": 5
                    },
                    {
                        "code": "060404",
                        "candlelight": 5
                    },
                    {
                        "code": "060405",
                        "candlelight": 5
                    },
                    {
                        "code": "060406",
                        "candlelight": 5
                    },
                    {
                        "code": "060407",
                        "candlelight": 10
                    },
                    {
                        "code": "060408",
                        "candlelight": 10
                    }
                ]
            },
            {
                "name": "二层",
                "candlelightPoints": [
                    {
                        "code": "060501",
                        "candlelight": 48
                    },
                    {
                        "code": "060502",
                        "candlelight": 10
                    },
                    {
                        "code": "060503",
                        "candlelight": 48
                    }
                ]
            },
            {
                "name": "三层",
                "candlelightPoints": [
                    {
                        "code": "060601",
                        "candlelight": 3
                    },
                    {
                        "code": "060602",
                        "candlelight": 3
                    },
                    {
                        "code": "060603",
                        "candlelight": 9
                    }
                ]
            },
            {
                "name": "四层",
                "candlelightPoints": [
                    {
                        "code": "060701",
                        "candlelight": 5
                    },
                    {
                        "code": "060702",
                        "candlelight": 12
                    },
                    {
                        "code": "060703",
                        "candlelight": 47
                    },
                    {
                        "code": "060704",
                        "candlelight": 8
                    },
                    {
                        "code": "060705",
                        "candlelight": 47
                    },
                    {
                        "code": "060706",
                        "candlelight": 53
                    },
                    {
                        "code": "060707",
                        "type": 3,
                        "candlelight": 50
                    }
                ]
            },
            {
                "name": "五层"
            },
            {
                "name": "顶层",
                "candlelightPoints": [
                    {
                        "code": "060901",
                        "candlelight": 3
                    },
                    {
                        "code": "060902",
                        "candlelight": 3
                    },
                    {
                        "code": "060903",
                        "candlelight": 3
                    },
                    {
                        "code": "060904",
                        "candlelight": 3
                    },
                    {
                        "code": "060905",
                        "candlelight": 3
                    },
                    {
                        "code": "060906",
                        "candlelight": 3
                    },
                    {
                        "code": "060907",
                        "candlelight": 6
                    },
                    {
                        "code": "060908",
                        "candlelight": 46
                    }
                ]
            },
            {
                "name": "庇护所",
                "candlelightPoints": [
                    {
                        "code": "061001",
                        "candlelight": 5
                    },
                    {
                        "code": "061002",
                        "candlelight": 5
                    },
                    {
                        "code": "061003",
                        "candlelight": 3
                    },
                    {
                        "code": "061004",
                        "candlelight": 3
                    },
                    {
                        "code": "061005",
                        "candlelight": 5
                    },
                    {
                        "code": "061006",
                        "candlelight": 5
                    },
                    {
                        "code": "061007",
                        "candlelight": 5
                    }
                ]
            }
        ],
        "伊甸": [
            {
                "name": "伊甸"
            },
            {
                "name": "伊甸之眼"
            },
            {
                "name": "重生之路",
                "groupCandlelight": [
                    {
                        "namePrefix": "重生之路先祖-070301-",
                        "codePrefix": "Heaven-ancestor-",
                        "candlelight": 5,
                        "count": 32
                    },
                    {
                        "namePrefix": "重生之路朋友-070302-",
                        "codePrefix": "Heaven-friend-",
                        "candlelight": 5,
                        "count": 15
                    }
                ]
            }
        ]
    },
    "specialCandlelight": [
        {
            "name": "每日大蜡烛",
            "candlelight": 50,
            "maxSize": 52,
            "desc": "4个为一组；工作日一组，周五至周日共三组，特殊节日全图大蜡烛",
            "option": {
                "selectItem": [
                    {
                        "name": "1组",
                        "size": 4
                    },
                    {
                        "name": "2组",
                        "size": 8
                    },
                    {
                        "name": "3组",
                        "size": 12
                    },
                    {
                        "name": "全图大蜡烛",
                        "size": 52
                    }
                ],
                "selectPlaceholder": "每组4堆",
                "input": true,
                "inputPlaceholder": "手动选择数量（堆）"
            }
        },
        {
            "name": "乐谱挑战",
            "candlelight": 50,
            "maxSize": 2,
            "desc": "50%+获得50烛火，80%+(出现金蝴蝶)获得100烛火，每档仅可获取一次",
            "option": {
                "selectItem": [
                    {
                        "name": "成功率50%+",
                        "size": 1
                    },
                    {
                        "name": "成功率80%+",
                        "size": 2
                    }
                ],
                "selectPlaceholder": "完成进度"
            }
        },
        {
            "name": "黑暗降临",
            "candlelight": 200,
            "maxSize": 1,
            "desc": "不定时出现，一天只能完成一次；一天出现三次，一次停留1小时",
            "option": {
                "selectItem": [
                    {
                        "name": "冷却碎片",
                        "size": 1
                    }
                ]
            }
        },
        {
            "name": "雪人竞速",
            "lowestCandlelight": 150,
            "candlelight": 1.5,
            "maxSize": 100,
            "desc": "",
            "option": {
                "group": {
                    "name": "圆梦村趣味项目",
                    "type": "button"
                },
                "input": true,
                "inputStep": {
                    "step": 10,
                    "strictly": true
                },
                "inputPlaceholder": "完成进度"
            }
        },
        {
            "name": "冰上垂钓",
            "candlelight": 5,
            "maxSize": 40,
            "desc": "优质水母，一只5块",
            "option": {
                "group": {
                    "name": "圆梦村趣味项目",
                    "type": "button"
                },
                "input": true,
                "inputPlaceholder": "烛火水母(只)"
            }
        },
        {
            "name": "信任历练",
            "candlelight": 2,
            "maxSize": 40,
            "desc": "",
            "option": {
                "group": {
                    "name": "夜行历练",
                    "type": "button"
                },
                "input": true,
                "inputPlaceholder": "完成进度"
            }
        },
        {
            "name": "互助历练",
            "lowestCandlelight": 96,
            "candlelight": 8,
            "maxSize": 12,
            "desc": "",
            "option": {
                "group": {
                    "name": "夜行历练",
                    "type": "button"
                },
                "input": true,
                "inputPlaceholder": "完成进度"
            }
        },
        {
            "name": "合作历练",
            "candlelight": 8,
            "maxSize": 15,
            "desc": "",
            "option": {
                "group": {
                    "name": "夜行历练",
                    "type": "button"
                },
                "input": true,
                "inputPlaceholder": "完成进度"
            }
        },
        {
            "name": "列队历练",
            "candlelight": 30,
            "maxSize": 9,
            "desc": "",
            "option": {
                "group": {
                    "name": "夜行历练",
                    "type": "button"
                },
                "input": true,
                "inputPlaceholder": "完成进度"
            }
        }
    ],
    "candlelightHarvestPoint": [
        {
            "name": "雨林宴会长桌",
            "mapNames": [
                "秘密花园"
            ],
            "candlelight": 1000,
            "desc": "又称老奶奶干饭; 8,10,12,16,18,20整点开饭；馒头数量为每次2个，每个馒头20滴烛火，25分钟即可挂满"
        },
        {
            "name": "幽光山洞营地",
            "mapNames": [
                "幽光山洞"
            ],
            "candlelight": 375,
            "desc": "单独挂机点约15-20分钟收满"
        },
        {
            "name": "霞谷神殿迷宫",
            "mapNames": [
                "霞谷神殿"
            ],
            "candlelight": 375,
            "desc": "单独挂机点约15-20分钟收满"
        },
        {
            "name": "巨兽荒原营地",
            "mapNames": [
                "巨兽荒原"
            ],
            "candlelight": 375,
            "desc": "单独挂机点约15-20分钟收满"
        },
        {
            "name": "圣岛海龟、音乐大厅",
            "mapNames": [
                "圣岛",
                "音乐大厅"
            ],
            "candlelight": 375,
            "desc": "圣岛海龟3s/滴需12分30秒挂满\n音乐大厅30s/2滴需62分30秒挂满;烛火范围较大，需移动收火"
        },
        {
            "name": "圆梦村溜冰落雪",
            "mapNames": [
                "圆梦村"
            ],
            "candlelight": 400,
            "limit": {
                "type": "date_same_after",
                "date": "2023-01-14",
                "rule": {
                    "appearIn": [
                        5,
                        6,
                        7
                    ]
                }
            },
            "desc": "2022.1.14开始，仅于周五至周日奇数小时前15分钟存在"
        }
    ],
    "activities": [
        {
            "name": "宴会节篝火",
            "mapName": "遇境",
            "candlelight": 1000,
            "type": "candlelightHarvestPoint",
            "desc": "4秒/滴，需要66分40秒挂满",
            "minute": 67,
            "dateBetween": [
                "2022-12-24",
                "2023-01-13"
            ]
        }
    ]
}
