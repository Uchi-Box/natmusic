#指定容器镜像
FROM node:12.10.0-alpine as client
#在容器中创建文件夹
RUN mkdir /opt/natmusic
#切换工作文件夹
WORKDIR /opt/natmusic
#拷贝npm包信息至容器
COPY ./package.json /opt/natmusic
#指定代理地址并安装依赖
RUN npm install --production --registry=https://registry.npm.taobao.org
# 拷贝其他所有文件到容器（除了 .dockerignore 中的目录和文件）
COPY . /opt/natmusic
#构建app
RUN npm run build
#暴露端口3000
EXPOSE 3000
# 运行容器时执行命令，每个 Dokcerfile 只能有一个 CMD 命令，多个的话只有最后一个会执行
CMD [ "npm", "start" ]