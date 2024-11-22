# Запуск проекта с использованием Docker
```bash
git clone https://github.com/capybaracplusplus/Govno-React-School-website.git

cd Govno-React-School-website

docker build -t school-website .

docker run -d -p 3000:3000 school-website
```