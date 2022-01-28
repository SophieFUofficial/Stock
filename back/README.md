#node.js + express + mongodb

### MongoDB学习记录
#### 启动本地mongoDB
```text
在后台启动 mongodb       mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
在控制台上查看运行过程     mongod --config /usr/local/etc/mongod.conf
查看 mongod 服务是否启动  ps aux | grep -v grep | grep mongod
（运行成功后即可进入终端）
进入bin目录             cd /usr/local/mongodb/bin 
运行mongo文件           ./mongo
（本地断开mongodb连接）
关闭                   db.adminCommand({ "shutdown" : 1 })
```


#### 终端命令
```text
查看已有数据库                     show dbs
进入Stock数据库                   use Stock(没有Stock数据库将自行创建)
初次创建数据库需要插入内容           db.Stock.insert({"name":"SophieFU"})

创建集合                         db.createCollection('record')
查看已有集合                      show collections
删除集合                         db.COLLECTION_NAME.drop()

插入文档                         db.COLLECTION_NAME.insert(document)
                                或
                                db.COLLECTION_NAME.save(document)
插入多条                         db.COLLECTION_NAME.insertMany([document1, document2...])
更新文档                         db.COLLECTION_NAME.update(query, update, options)
                                例：db.COLLECTION_NAME.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})
删除文档                         db.COLLECTION_NAME.remove(query, options)
查看文档                         db.COLLECTION_NAME.find()
                               文档地址：https://www.runoob.com/mongodb/mongodb-query.html
插入字段                         db.getCollection('record').update({},{$set:{price:0}})
```

#### node代码
```text

```

### 数据库结构
#### Stock表
  |   字段   |   类型   |   描述   |  是否必须  |  备注  |
  | ------- | -------- | ------- | -------- | ------ |
  |  name   |  String  | 股票名称  |   true   |
  |  code   |  String  | 股票代码  |   true   |
  |description| String |  描述    |  false   |
  |  type   |  String  |  类型    |  false   | 港股、A股 |
  | priority |  Number |  优先级  |  false   |        |
  
#### Record表
  |   字段   |   类型   |   描述   |  是否必须  |  备注  |
  | ------- | -------- | ------- | -------- | ------ |
  |  code   |  String  | 股票代码  |   true   |        |
  |recordDate|   Date  | 创建日期  |  true    | 默认当前时间 |
  |recordUser|  String  |  创建人  |  false   |       |
  |  price  |  number  |   价格   |  true   |       |
