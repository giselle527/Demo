[TOC]

git和github的使用
=

---

## github  
  
**简介**  

一个网站/社交平台，可以存放代码，有很多开源项目。
  
**详介**   

github是程序猿的代码托管平台，也是基于git的开源分布式版本控制系统，因此github官网上并没有为用户准备一个很好的代码上传系统。若想快速高效地将本地代码上传到github，需要做到以下几点：  
1. 在本地安装git，这样才能在本地环境中使用git命令行（例如：$ git add index.html）；
2. 要将本地git连接到自己的github账户上，这样才能把代码文件上传上去。每一次更改都会形成一个版本记录，便于团队协作管理。

## git  
  
一个工具，主要作用是版本控制，需要安装到本地。安装文件夹下会有`git-bash.exe`和`git-cmd.exe`两个应用程序，bash在cmd的基础上增添了一些新的命令与功能，建议直接使用bash。

### git的主要作用  
  
1. 回退，即退回到之前版本；
2. 历史，即查看历史版本；
3. 差异，即查看版本和版本之间有哪些不同，做了哪些变化等。

### 常用的版本控制工作

除了git这个当前最主流的版本控制工具外，还有svn、cvs等。

## 使用git工具

### 将git连接到github网站
  
**Step1 设置贡献者**  
  
        打开git-bash，逐条输入并回车：
        git config --global  user.email "你的邮箱"
        git config --global  user.name "你的用户名"
        
> git config  --global参数表示这台机器上所有的Git仓库都会使用这个配置(即相同的邮箱和用户名)，也可以对某个仓库指定不同的用户名和邮箱。
  
**Step2 生成ssh**  
  
> ssh是一种传输代码的方法，专为远程登录会话和其他网络服务提供安全性的协议，安全且快速。
  
        1. 继续输入：  
        ssh-keygen -t rsa -C "注册邮箱"
        2. 一路回车，直到出现randomart image；
        3. 回车中途会出现：
        路径选择→提示选择ssh-key生成路径，直接点回车将其生成在默认路径中即可；
        密码确认→不用使用密码进行登录，直接回车即可。
  
**Step3 在github网站添加ssh**
  
        1. 找到文件夹`.ssh`（路径为：C:\Users\用户名\\.ssh），该文件夹下有2个文件：`id_rsa`私钥和`id_rsa.pub`公钥；
        2. 用代码编辑器打开`id-rsa.pub`，复制所有内容；
        3. 登录github网站，头像(网页右上角)→settings→SSH and GPG keys(网页左边侧栏)→New SSH key(网页右边，头像下边)→title(随便填)→Key(粘贴id-rsa.pub里的所有内容)→Add SSH key
  
**Step4 测试是否连接成功**
  
        在git-bash中输入并回车：
        ssh -T git@github.com
        出现`Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.`说明已通过身份验证，连接成功。

### 通过git提交代码

#### 在github上建立仓库

<center>
    <img src="http://images2015.cnblogs.com/blog/1003749/201703/1003749-20170315190638213-1118998872.jpg" width="500"/>
</center>

#### 在github上删除仓库

<center>
    <img src="http://images2015.cnblogs.com/blog/1003749/201703/1003749-20170316181357245-1845014348.jpg" width="500" />
</center>

        点开settings后，将页面拉到最底部

<center>
    <img src="http://images2015.cnblogs.com/blog/1003749/201703/1003749-20170316181410791-1259268044.jpg" width="500" />
</center>

#### 把本地的文件上传到仓库中

``` 
1. 在git-bash中创建一个版本库(就是要上传文件的文件夹);
2. 在命令行中敲git init，初始化，目的是让这个目录归git管理;
3. 命令行中会输出Initialized empty Git repository in "文件夹路径"/.git/，.git目录是Git用来跟踪管理版本库的，默认隐藏;
4. 继续敲git add <file>，<file>处敲文件名，或者敲git add .，.代表所有的文件；
5. 继续敲git commit -m "提交日志"，日志是对此次上传操作的简介；
6. 连接远程地址，继续敲git remote add origin 自己的github地址；
7. 本地文件推送到远程仓库，继续敲git push -u origin master，-u里的u是union，把本地工作区与远程仓库对应起来。

```

#### 新建/修改/删除本地文件并同步到远程仓库

```  
1. 在本地版本库添加/修改/删除文件;
2. git add 文件名 或 git add -u 或 git add -A 或 git add . →提交到暂存区;
3. git commit -m "提交日志" → 写提交日志;
4. git push→ 同步到远程仓库。

```
        ps：如果直接删除本地工作区的文件，对暂存区和远程仓库是没影响的；git rm不仅会删除工作区文件，还会删除暂存区文件，前提是要rm的文件曾经add过，git知道该文件的存在。
        
#### 删除本地文件夹/文件并同步到远程仓库
  
```
1. git rm 文件名 或 git rm -r 文件夹名→ ps:r是recursiveness，递归，递归删除的意思，即会删掉该文件夹及所包含的子内容；
2. git commit -m "提交日志"
3. git push

```

> 注意：`git rm <file>`和`rm <file>`是有区别的！本地文件夹叫工作区；工作区里有一个.git文件夹叫版本库；版本库里有一个暂存区（stage），add是提交到暂存区的方法之一，commit是生成新版本，每次提交后用`git log`输出历史，会发现有新版本。rm只删除了工作区的文件，跟git没关系；git rm删除了工作区和暂存区对应的文件，git rm & git commit & git push会删除工作区、暂存区、远程库对应的文件，同时在历史里会新增一个删除文件的版本。

### 常用命令

* mkdir 新建
* cd 打开
* cd .. 返回上级目录，ps:cd和..之间有一个空格
* cd /d 打开d盘，ps:cd和/之间有一个空格
* pwd 显示当前目录
* 右键菜单→paste 粘贴，ps:ctrl+v无法实现粘贴
* tab键自动补全
* ls=list→查看文档列表（不是git命令）
    * 小提示： git ls-files可以查看暂存区的文件
* 输入i开始编辑
* 输入ESC退出编辑状态
* 输入:wq保存退出
* cat filename→catalogue输出文件内容
* rm -v filename→因为有-v，会多输出一行删除记录

### 常用的git命令

* git init 初始化
* git --version 查看git版本
* git status 查看git状态，总共有9种状态，常见到的有以下5种：
    * untracked files 未被git管理的文档
    * modified 被修改了的文档，显示红色表示是对工作区文件进行了修改，显示绿色表示对暂存区文档进行了修改
    * staged 代码在暂存区
    * deleted 代码被删除
    * both modified 多在merge/pull/rebase/revert时发生了conflict时显示
* git log 查看历史
    * git log --pretty=oneline 查看简写版历史（包括版本号和提交日志...）
    * git log --graph --pretty=oneline --abbrev-commit 查看图像版历史
    * git reflog 查看所有的版本号及相关信息
* git diff 查看差异
    * 无参数的情况下，查看的是working tree和last commit之间的差异
    * 有参数的情况下，如 `git diff a b`，a和b为版本号，查看的是a版本和b版本之间的差异
    * git diff→diff的是工作区代码的差异
    * git diff --cached→diff的是暂存区代码的差异
* git commit 提交/前进功能
* git revert 转换/后退功能
    * 用法是 `git revert a` ，a是一个版本号
    * 会创建一个新的commit（暂称为b）
    * a和b互为相反的diff
    * b仅完全diff版本a，与a和last commit（即b）之间的版本不相关
* git reset 重置/后退功能
    * 用法是 `git reset a` ，a是一个版本号，这里假设a是上上个版本
    * 执行git reset之后，git log会发现少了上个版本（即当前版本到a的下一个版本全没有了），但是a版本还在，且文件内容是最新内容，没有做修改
* git reset --hard HEAD^回退到上个版本
    * git reset  --hard HEAD^^回退到上上个版本
    * git reset  --hard HEAD~100 回退到前100个版本
* git branch 查看分支，会列出所有的分支，当前分支前面会添加一个星号
    * git branch name 创建分支name
    * git branch -d name 删除分支name
* git checkout -- file 撤销，丢弃工作区的修改，file是文件名
    * git checkout name 切换到name分支上
* git checkout -b name 创建并切换到分支name上，等于`git branch <分支名>`+`git checkout <分支名>`
* git merge name 将指定分支name合并到当前分支上 
* git remote show origin 查看远程仓库的详细信息


### 常用远程操作命令

* 已有本地仓库，同步到远程仓库
    * git push origin master
* 本地没有仓库，从远程同步到本地
    * git clone 远程仓库地址
* 本地已有仓库，远程仓库有更新，从远程仓库同步到本地仓库
    * git pull origin master

### 解决冲突conflict

            av1
         /      \
        a         av3
         \      /
           av2



> av1和av2都是a文档的fast-forward，av3是av1和av2的fast-forward，所以在av3处可能会发生conflict。假设是av1处的操作使得发生conflict，那么av1文档的内容会发生变化：  
1. <<<<<<<到========之间是av1中与av2相冲突的内容；
2. =======到>>>>>>>>之间是av2中与av1相冲突的内容；
3. 修改av1文档，删掉符号，保留想保留的文档内容；
4. 修改好后，add + commit ;
5. 冲突已解决；
6. 发生冲突的原因不同，但解决办法大同小异。



### 常见问题

**Git提示fatal: remote origin already exists**

解决办法：
1. 先删除远程git仓库 ，输入`$ git remote rm origin`
2. 再添加远程git仓库 ，输入`$ git remote add origin 自己的github地址`
3. 如果执行 git remote rm origin 报错的话，可以手动修改gitconfig文件的内容，输入`$ vi .git/config`，删掉` [remote "origin"]` 这一行

**[rejected] master -> master (fetch first)**

[解决办法：](http://www.cnblogs.com/righere/p/5810205.html)

使用强制推送，即`git push -f origin master`→ 一旦强制推送，无法撤销，建议不要轻易使用

**Please enter a commit message to explain why this merge is necessary.**

[解决办法：](http://www.cnblogs.com/wei325/p/5278922.html)

git在pull或者合并分支的时候有时会遇到这个界面。可以不管(直接下面3,4步)，如果要输入解释的话就需要:

1. 按键盘字母 i 进入insert模式
2. 修改最上面那行黄色合并信息（可以不修改）
3. 按键盘左上角"Esc"
4. 输入":wq"（注意是冒号+wq），按回车键即可

### Git资料

* [Git使用详细教程](http://blog.csdn.net/free_wind22/article/details/50967723)
* [git使用小结一: git本地基本操作](https://my.oschina.net/lrhehe/blog/385082)
* [图解git](https://my.oschina.net/xdev/blog/114383)
* [git入门](http://blog.csdn.net/aoo_wangxu/article/details/55669866)
* [git初始化操作以及一些问题的解决](https://segmentfault.com/a/1190000006863525)
* [git - 查看远程仓库信息](http://blog.csdn.net/leedaning/article/details/44979831)
* [git怎么添加多个远程仓库？](https://segmentfault.com/q/1010000008366409?_ea=1627673)
* [动画教程](http://learngitbranching.js.org/?demo)




