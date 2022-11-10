# 記帳本
一個可以記錄個人開支的網站
## 功能
+ 使用者可以在首頁一次瀏覽所有支出的清單
+ 使用者可以在首頁看到所有支出清單的總金額
+ 使用者可以新增一筆支出
+ 使用者可以修改一筆支出的資訊
+ 使用者可以刪除任何一筆支出
+ 使用者可以根據「類別」篩選支出
+ 登入驗證：
  - Email註冊
  - Facebook帳號登入
## 畫面示意
![](https://upload.cc/i1/2022/11/10/T6pKFD.png)

## 安裝
1. 複製專案，在終端機輸入：
```
git clone https://github.com/seanlin1125/expense-tracker.git
```
2. 進入專案資料夾，在終端機輸入：
```
cd expense-tracker
```
3. 安裝`npm`套件。在終端機輸入：
```
npm install
```
4. 執行專案。在終端機輸入：
```
npm run dev
```
5. 於瀏覽器網址列輸入：
```
localhost:3000
```
6. 停止專案。在終端機輸入：
```
ctrl + c
```
6. 使用種子資料。在終端機輸入：
```
npm run seed
--------------
輸入後可使用下方帳號進行功能測試：
email: 'root@example.com'
password: '12345678'
```
## 開發工具
+ Node.js
+ Express
+ MongoDB
+ mongoose
+ **See`package.json`for more details**
## 開發者
[Sean Lin](https://github.com/seanlin1125)
