

# Libraries
- mongoose

- express

- bcrypt

- jsonwebtoken

- cookie-parser

- cors

- multer

- cloudinary

- dotenv

- nodemon

- typescript

- tsx

- @types/mongoose

- @types/bcrypt

- @types/express

- @types/cors

- @types/cookie-parser

- @types/jsonwebtoken

- @types/node

- @types/multer

- @types/dotenv





# Yapılacaklar
- api klasoru oluştur
-sonra cd api -npm init yaz
- sonra kütüphaneleri ve ts kütüphaneleri indir
- npx tsc --init bunu indir
- nodemon.json dosyanın içine ({
  "watch": "[src]",
  "ext": "ts",
  "exec": "tsx ./src/server.ts"
}) bunları yaz
- package.json ("type":module,
                 "dev":nodemon) yazdıktan sonra
  - server.ts dosyası olustur ve içine(
    1. const app = express()
    2. const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
}); 
3.env dosyasınına PORT=4000
MONGO_URL=mongodb://localhost:50000/fiverr
4. dockerdan ve mongoose bağlantı oluştur 
5. dotenv.config();
mongoose.connect(process.env.MONGO_URL as string)
.then(()=>{
    console.log("veri tabanına bağlandı")
})
.catch(()=>{
    console.log("veri tabanı bağlanmadı")
})

  )   baglantısı olutur               

  6.  app.use(express.json()) oluştur
  7. controller ,routes, models yap