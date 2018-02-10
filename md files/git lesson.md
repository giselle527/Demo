[TOC]

Git基础知识
=

## git的用途

**版本控制**  
A => B => C

* 回退：回退到以前的版本
* 历史：查看历史版本
* 差异：查看版本和版本之间的差异
  
**常用的一些版本控制工具**  
  
* git
* svn
* cvs

## git 的用法  
详见文档  git和github的使用.md  

### 初始化，git init  

### 查看状态，git status  

### 查看历史，git log  

### 查看差异，git diff  

1. 无参数的情况: working tree 与 last commit 的差异
2. git diff a b: a版本与b版本的差异，a和b是两个版本号  

### 前进，git commit  
  
        git commit 只会将 staged 状态的修改添加到 commit 中
        在本地修改代码之后:
        git add
        git commit  

### 后退1，git revert  

**用法**  
git revert a  

1. a 是 1 个版本号
2. 会创建一个新的commit(暂称为 b )
3. a 和 b 互为相反的 diff
4. 仅相反 a ，和 a 到 last commit 中间的版本无关  

### 后退2，git reset

**用法**  
git reset a

1. a 是 1 个版本号，假设其是上上个版本
2. git log 会发现少了上个版本
3. a 版本还在且文件内容没有变化

## 远程操作
  
已有仓库，同步到远程仓库  
  
* git push origin master
  
本地没有仓库，从远程同步到本地
  
* git clone https://xxx/xx
  
已有仓库，远程有更新，从远程同步到本地

* git pull origin master

## 多人合作

       A
     /
    X
     \
       B
  
X is remote.
  
A and B is 2 coders.
  
    版本c1 => B: c2-1 => X
    版本c1 => A: c2-2 =/> X
       
## git status
  
一共有9种，后4种不常见，这里只介绍前5种：  

1. untracked files
2. modified
3. staged
4. deleted：deleted状态在git add之后会变成staged状态
5. both modified: 一般指操作有了冲突，conflict: merge, pull, rebase, revert

  
  
