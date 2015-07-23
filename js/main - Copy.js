var GodObject = {
	
}

function init()
{
	parentIdStack = [];
	parentNameStack = [];
	getMenuItems(0);
}

var parentIdStack;
var parentNameStack;

var fromBack = false;

function addClickListener()
{
	$('.skel-panels-ignoreHref').click(function(){
		if($(this).attr('id') == "back")
		{
			fromBack = true;
			parentIdStack.pop();
			parentNameStack.pop();
			getMenuItems(parentIdStack[parentIdStack.length-1]);
			return;
		}
		$('.skel-panels-ignoreHref').removeClass('active');
		$(this).addClass('active');
		parentNameStack.push($(this).children().html());
		//console.log($(this).children().html());
		getMenuItems($(this).data('id'));
	});
}

function getMenuItems(parentid)
{
	$.getJSON("php/getMenuItems.php?parentid=" + parentid).done(function(json){
		
		if(json.length == 0)
		{
			//console.log("no child");
			parentNameStack.pop();
			getMenuDesc(parentid);
			return;
		}
		var i = 0;
		var menuhtml = "<ul>";

		if(fromBack)
			fromBack = false;
		else
		{
			parentIdStack.push(parentid);
		}

		if(parentid != 0)
		{
			menuhtml += "<li><a href=\"#>\"<span>" + parentNameStack[parentNameStack.length-1] + "</span></a></li>";
			menuhtml += "<li><a href=\"#\" id=\"back\" class=\"skel-panels-ignoreHref\"><span>Back</span></a></li>";
		}
		for(i=0;i<json.length;i++)
		{
			menuhtml += "<li>";
			menuhtml += "<a href=\"#" + json[i].menu_alias + "\" id=\"" + json[i].menu_alias + "-link\" data-id=\"" + json[i].id + "\" class=\"skel-panels-ignoreHref\"><span class=\"" + json[i].menu_icon + "\">" + json[i].menu_name + "</span></a>";
			menuhtml += "</li>";
		}
		menuhtml += "</ul>";
		document.getElementById('nav').innerHTML = menuhtml;
		addClickListener();

		getMenuDesc(parentid);
		//$("#" + json[0].menu_alias + "-link").addClass("active");
	});
}

function getMenuDesc(menuid)
{
	$.getJSON("php/getMenuDesc.php?menuid=" + menuid).done(function(json){
		
		if(json.length == 0)
		{
			//no child
			return;
		}
		var i = 0;
		var desc = "<section id=\"" + json[0].menu_alias + "\" class=\"two\">";
		desc += "<div class=\"container\">";
		desc += json[0].menu_desc;
		desc += "</div>";
		desc += "</section>";

		document.getElementById('main').innerHTML = desc;
	});
}
