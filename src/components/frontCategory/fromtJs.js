var config =[
  {
    label:'类目名称',
    level:[1,2,3],
    key:'name',
    type:'input',
    req:true
  },
  {
    label:'提示性子类目',
    type:'input',
    level:[1]
  },
  {
    label:'排序值',
    level:[1,2,3],
    key:'sortOrder',
    type:'input',
    req:true
  },
  {
    label:'类目图标',
    level:[2,3],
    key:'image',
    type:'image'
  },
  {
    label:'展示渠道',
    level:[1,2,3],
    type: 'checkBox',
    items:[
      {
        label:'格格家',
        key:'isGgj'
      },
      {
        label:'环球捕手',
        key:'isHqbs'
      },
      {
        label:'美食买手',
        key:'isMsms'
      }
    ]
  },
  {
    label:'商品排序规则',
    level:[2],
    key:'sortMethod',
    type:'radio',
    items:[
      {
        label:'按销量排序',
        value:0
      },
      {
        label:'按所包含三级类目的顺序排序',
        value:1
      }
    ]
  },
  {
    label:'是否HOT',
    level:[3],
    type:'radio',
    key:'isHot',
    items:[
      {
        label:'否',
        value:0
      },
      {
        label:'是',
        value:1
      }
    ]
  },
  {
    label:'是否高亮',
    level:[3],
    key:'isHighlight',
    items:[
      {
        label:'否',
        value:0
      },
      {
        label:'是',
        value:1
      }
    ]
  },
  {
    label:'是否展示品牌',
    level:[1,3],
    key:'isShowBrand',
    items:[
      {
        label:'否',
        value:0
      },
      {
        label:'是',
        value:1
      }
    ]
  },
  {
    label:'状态',
    level:[1,2,3],
    key:'isAvailable',
    items:[
      {
        label:'停用',
        value:0
      },
      {
        label:'启用',
        value:1
      }
    ]
  }
]
