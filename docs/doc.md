# JSDec_Api
## 服务端
下载文件后，打开目录并启动
~~~
node app.js
~~~
配置文件在config.json中
>log:记录发送来解析的js

>port:api服务监听端口

## 客户端
使用HTTP POST发送至
>http://服务器ip:端口/解析类型

支持的解析类型：
- sojsonp
- eval
- aaencode
- jjencode
- sojsonv4
- /jsobfuscator
- list
- auto (自动模式)

示例

*jsfuck因为安全问题，不支持云解析*

~~~
http://127.0.0.1/sojsonp
~~~
## 官方Api
>官方的，安全无后门注入～

~~~
http://cdn.liulihaocai.tk:1234
~~~

请勿滥用，恶意使用

使用方法与上方相同