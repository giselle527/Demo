var home_cont=document.getElementsByClassName("home_cont")[0];
var home_add=document.getElementsByClassName("home_add")[0];

var home_data=get_goal_datas();

for(var i=0;i<home_data.length;i++){
	home_cont.insertBefore(newData(home_data[i]),home_add);
}

var trees=home_cont.getElementsByClassName("tree");
var treeZoom;
for(var i=0;i<trees.length;i++){
	treeZoom=trees[i].style.zoom;
	if(treeZoom<=0.2){
		treeZoom=0.2;
		trees[i].style.zoom=0.2;
	}
}

function newData(obj){//生成首页的目标列表
	var myGoal=document.createElement("section");
	myGoal.className="home_goal";
	myGoal.style.background="url(images/pure"+(Math.floor(Math.random()*13)+1)+".png) 0 0";
	myGoal.innerHTML=`<span class="home_goal_title"><a href="http://www.douban.com" target="_blank" title="~点我打卡~">${obj.title}</a></span>
			<div class="home_tree"><span class="tree" style="background:url(images/tree${obj.tree}.png) center no-repeat; zoom:${(obj.punch_days/obj.plan_days)};"></span></div>		
			<em class="home_goal_last">连续打卡<i>${obj.last_days}</i>天</em>
			<em class="home_goal_punch">成功<i>${obj.punch_days}</i>天</em>
			<em class="home_goal_plan">目标<i>${obj.plan_days}</i>天</em>`;

	return myGoal;
	// myGoal是一个包含了html的DOM节点

};

