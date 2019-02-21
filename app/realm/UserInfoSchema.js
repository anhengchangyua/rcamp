import Realm from 'realm'

const UserInfoSchema = {
  name: 'UserData',
  properties: {
    id: 'int',
    icon: 'string',
    email: 'string',
    password: 'string',
    token: 'string',
    type: 'int',
    username: 'string'
    // chapterTops: 'chapterTop[]',
    // collectIds: 'collectId[]'
  }
}

// 初始化realm
let realm = new Realm({ schema: [UserInfoSchema] })

// 增加
export function putUserInfo(schema, data) {
  realm.write(() => {
    realm.create(schema, {
      id: data.id,
      icon: data.icon,
      email: data.email,
      password: data.password,
      token: data.token,
      type: data.type,
      username: data.username
    })
  })
}

// 查询全部数据
export function loadAllInfo(schema) {
  return realm.objects(schema)
}

// 条件查询
export function filterInfo(schema, filtered) {
  // 获取对象
  let objects = realm.objects(schema)
  // 筛选
  let object = objects.filtered(filtered)

  if (object) {
    // 有对象
    return object
  } else {
    return '未找到数据'
  }
}

// 删除所有数据
export function removeAllInfo(schema) {
  realm.write(() => {
    // 获取对象
    let objects = realm.objects(schema)
    // 删除表
    realm.delete(objects)
  })
}
